"""
LaLiga Fantasy ADB Movements Scraper - WITH DATES
Captures market movements with real dates from the Fantasy app
"""

import subprocess
import time
import re
import xml.etree.ElementTree as ET
from datetime import datetime

# Configuration
ADB_DEVICE = "localhost:5555"
OUTPUT_FILE = "Movimientos mercado"
MAX_SCROLLS = 500

def run_adb(cmd):
    """Run ADB command"""
    result = subprocess.run(f"adb -s {ADB_DEVICE} {cmd}", shell=True, capture_output=True, text=True)
    return result.stdout

def dump_ui():
    """Dump and parse UI"""
    run_adb("shell uiautomator dump /sdcard/ui.xml")
    run_adb("pull /sdcard/ui.xml ui_temp.xml")
    try:
        tree = ET.parse("ui_temp.xml")
        return tree.getroot()
    except:
        return None

def extract_movements_with_dates(root):
    """Extract movement texts WITH their associated dates"""
    movements = []
    
    # Find all rlLeagueActivity containers
    for container in root.iter('node'):
        rid = container.get('resource-id', '')
        if 'rlLeagueActivity' in rid:
            date = None
            message = None
            
            # Look for children with date and message
            for child in container.iter('node'):
                child_rid = child.get('resource-id', '')
                
                if 'tvLeagueActivityItemTimeAgo' in child_rid:
                    date_text = child.get('text', '').strip()
                    # Check if it's a date (DD/MM/YYYY) or time (HH:MM)
                    if re.match(r'\d{2}/\d{2}/\d{4}', date_text):
                        date = date_text
                    elif re.match(r'\d{2}:\d{2}', date_text):
                        # It's just time, use today's date
                        date = datetime.now().strftime("%d/%m/%Y")
                
                if 'tvLeagueActivityItemMessage' in child_rid:
                    message = child.get('text', '').strip()
            
            if message and len(message) > 10:
                if date:
                    movements.append(f"{date} | {message}")
                else:
                    # Fallback to today if no date found
                    today = datetime.now().strftime("%d/%m/%Y")
                    movements.append(f"{today} | {message}")
    
    return movements

def find_ver_mas(root):
    """Find Ver más button and return its center coordinates"""
    for node in root.iter('node'):
        text = node.get('text', '')
        if 'Ver más' in text or 'ver más' in text:
            bounds = node.get('bounds', '')
            match = re.match(r'\[(\d+),(\d+)\]\[(\d+),(\d+)\]', bounds)
            if match:
                x1, y1, x2, y2 = map(int, match.groups())
                return (x1 + x2) // 2, (y1 + y2) // 2
    return None

def scroll_small():
    """Scroll - adjusted to 9/10 length"""
    run_adb("shell input swipe 540 1150 540 430 250")

def scroll_to_top():
    """Scroll to top"""
    for _ in range(20):
        run_adb("shell input swipe 540 300 540 1500 100")
    time.sleep(0.5)

def main():
    print("=" * 50)
    print("Fantasy ADB Scraper - WITH DATES")
    print("=" * 50)
    
    # Check connection
    if 'device' not in run_adb("devices"):
        print("ERROR: Not connected. Run: adb connect localhost:5555")
        return
    
    print("✓ Connected")
    print("\nMake sure Fantasy app is on 'Actividad' tab")
    input("Press Enter to start...")
    
    all_movements = {}  # Use dict to avoid duplicates: message -> date
    ver_mas_clicks = 0
    stale_count = 0
    last_count = 0
    
    print("\nScrolling to top...")
    scroll_to_top()
    
    print("Starting capture...")
    start = time.time()
    
    for i in range(MAX_SCROLLS):
        # Capture
        root = dump_ui()
        if root is None:
            continue
        
        # Extract with dates
        movements = extract_movements_with_dates(root)
        for m in movements:
            # Parse date and message
            parts = m.split(' | ', 1)
            if len(parts) == 2:
                date, msg = parts
                # Only update if we don't have this message or have a newer date
                if msg not in all_movements:
                    all_movements[msg] = date
        
        current = len(all_movements)
        
        # Progress
        if i % 10 == 0:
            print(f"[{i}] Movements: {current} | Ver más clicks: {ver_mas_clicks}")
        
        # Check for Ver más button
        coords = find_ver_mas(root)
        if coords:
            print(f"  → Clicking 'Ver más' at {coords}")
            run_adb(f"shell input tap {coords[0]} {coords[1]}")
            ver_mas_clicks += 1
            time.sleep(2)  # Wait for load
            stale_count = 0
            continue
        
        # Check if stuck
        if current == last_count:
            stale_count += 1
            if stale_count >= 15:
                print(f"Done! No new content after {stale_count} scrolls")
                break
        else:
            stale_count = 0
        
        last_count = current
        
        # Scroll
        scroll_small()
        time.sleep(0.5)
    
    elapsed = time.time() - start
    print(f"\n{'=' * 50}")
    print(f"✓ Captured {len(all_movements)} movements in {elapsed:.1f}s")
    print(f"  Ver más clicked: {ver_mas_clicks} times")
    print("=" * 50)
    
    if all_movements:
        # Convert to list with dates and sort by date (newest first)
        formatted = [f"{date} | {msg}" for msg, date in all_movements.items()]
        
        # Sort by date (DD/MM/YYYY format)
        def parse_date(line):
            try:
                date_str = line.split(' | ')[0]
                return datetime.strptime(date_str, "%d/%m/%Y")
            except:
                return datetime.min
        
        formatted.sort(key=parse_date, reverse=True)
        
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            for m in formatted:
                f.write(m + '\n')
        
        print(f"Saved to: {OUTPUT_FILE}")
        print(f"\nFirst 5 (newest):")
        for m in formatted[:5]:
            print(f"  • {m[:80]}...")
        print(f"\nLast 5 (oldest):")
        for m in formatted[-5:]:
            print(f"  • {m[:80]}...")

if __name__ == "__main__":
    main()
