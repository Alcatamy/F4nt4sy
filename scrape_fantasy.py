"""
LaLiga Fantasy Movements Scraper
Scrapes market movements from LaLiga Fantasy MARCA using Selenium WebDriver
"""

import time
import re
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException, NoSuchElementException

# Configuration
LEAGUE_URL = "https://fantasy.laliga.com/"  # Update with actual league URL
OUTPUT_FILE = "Movimientos mercado"
SCROLL_PAUSE_TIME = 2
MAX_SCROLL_ATTEMPTS = 50

def setup_driver(headless=False):
    """Setup Chrome WebDriver with options"""
    chrome_options = Options()
    if headless:
        chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.add_argument("--disable-gpu")
    
    driver = webdriver.Chrome(options=chrome_options)
    return driver

def scroll_to_load_all(driver, container_selector=None):
    """Scroll through the page or container to load all dynamic content"""
    last_height = driver.execute_script("return document.body.scrollHeight")
    scroll_count = 0
    
    while scroll_count < MAX_SCROLL_ATTEMPTS:
        # Scroll down
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(SCROLL_PAUSE_TIME)
        
        # Try clicking "Ver más" button if exists
        try:
            ver_mas_buttons = driver.find_elements(By.XPATH, "//button[contains(text(), 'Ver más')] | //a[contains(text(), 'Ver más')] | //span[contains(text(), 'Ver más')]")
            for btn in ver_mas_buttons:
                try:
                    btn.click()
                    time.sleep(SCROLL_PAUSE_TIME)
                    print(f"Clicked 'Ver más' button")
                except:
                    pass
        except:
            pass
        
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            scroll_count += 1
            if scroll_count >= 3:  # No new content after 3 attempts
                break
        else:
            scroll_count = 0
        last_height = new_height
        print(f"Scrolling... Height: {new_height}")
    
    print("Finished scrolling")

def extract_movements(driver):
    """Extract movement data from page elements"""
    movements = []
    
    # Common selectors for fantasy movement feeds
    selectors = [
        ".movement-item",
        ".feed-item", 
        ".activity-item",
        "[class*='movement']",
        "[class*='activity']",
        "[class*='transaction']",
        ".timeline-item"
    ]
    
    for selector in selectors:
        try:
            items = driver.find_elements(By.CSS_SELECTOR, selector)
            if items:
                print(f"Found {len(items)} items with selector: {selector}")
                for item in items:
                    try:
                        text = item.text.strip()
                        if text:
                            movements.append(text)
                    except:
                        continue
                if movements:
                    break
        except:
            continue
    
    return movements

def parse_movement_text(text):
    """Parse raw movement text into structured data"""
    # Pattern: DD/MM/YYYY | Team ha comprado/vendido/blindado...
    date_pattern = r'(\d{2}/\d{2}/\d{4})'
    
    lines = text.split('\n')
    parsed = []
    current_date = datetime.now().strftime("%d/%m/%Y")
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check for date
        date_match = re.search(date_pattern, line)
        if date_match:
            current_date = date_match.group(1)
            # Remove date from line for content extraction
            content = re.sub(date_pattern + r'\s*\|\s*', '', line)
        else:
            content = line
        
        if content and ('comprado' in content.lower() or 
                       'vendido' in content.lower() or 
                       'blindado' in content.lower() or
                       'jornada' in content.lower() or
                       '11 ideal' in content.lower()):
            parsed.append(f"{current_date} | {content}")
    
    return parsed

def save_movements(movements, filename):
    """Save movements to file"""
    with open(filename, 'w', encoding='utf-8') as f:
        for mov in movements:
            f.write(mov + '\n')
    print(f"Saved {len(movements)} movements to {filename}")

def main():
    print("=" * 60)
    print("LaLiga Fantasy Movements Scraper")
    print("=" * 60)
    
    # Get league URL from user or use default
    url = input(f"Enter league URL (or press Enter for default): ").strip()
    if not url:
        print("\nPlease provide the URL to your league's movements page.")
        print("Example: https://fantasy.laliga.com/liga/XXXXXXX/mercado")
        url = input("URL: ").strip()
    
    if not url:
        print("No URL provided. Exiting.")
        return
    
    print(f"\nStarting scraper for: {url}")
    
    # Setup driver
    headless = input("Run in headless mode? (y/n, default n): ").strip().lower() == 'y'
    driver = setup_driver(headless=headless)
    
    try:
        # Navigate to page
        print("Loading page...")
        driver.get(url)
        
        # Wait for page to load
        time.sleep(5)
        
        # Check if login is required
        print("\n" + "=" * 60)
        print("If login is required, please log in manually in the browser window.")
        print("Press Enter when you're ready to continue scraping...")
        print("=" * 60)
        input()
        
        # Scroll to load all content
        print("\nScrolling to load all movements...")
        scroll_to_load_all(driver)
        
        # Extract movements
        print("\nExtracting movements...")
        raw_movements = extract_movements(driver)
        
        if not raw_movements:
            # Try to get all text content as fallback
            print("No structured elements found. Getting raw page text...")
            body = driver.find_element(By.TAG_NAME, "body")
            page_text = body.text
            movements = parse_movement_text(page_text)
        else:
            # Parse the movements
            movements = []
            for mov in raw_movements:
                parsed = parse_movement_text(mov)
                movements.extend(parsed)
        
        # Remove duplicates while preserving order
        seen = set()
        unique_movements = []
        for m in movements:
            if m not in seen:
                seen.add(m)
                unique_movements.append(m)
        
        print(f"\nFound {len(unique_movements)} unique movements")
        
        # Save to file
        if unique_movements:
            save_movements(unique_movements, OUTPUT_FILE)
            print(f"\nMovements saved to: {OUTPUT_FILE}")
            
            # Show preview
            print("\nPreview (first 10 movements):")
            for i, mov in enumerate(unique_movements[:10]):
                print(f"  {i+1}. {mov}")
        else:
            print("\nNo movements found. The page structure may have changed.")
            print("Please check the page manually and update the selectors.")
            
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
    finally:
        print("\nClosing browser...")
        driver.quit()
        print("Done!")

if __name__ == "__main__":
    main()
