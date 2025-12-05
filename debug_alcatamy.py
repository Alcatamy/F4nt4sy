import re

def parse_amount(amount_str):
    return int(amount_str.replace('.', '').replace('€', '').strip())

def debug_alcatamy():
    filename = 'Movimientos mercado'
    target_team = 'Alcatamy eSports By'
    # initial_budget = 100000000
    # Let's start with 100M but track relative change effectively
    balance = 100000000
    
    # Clausulas "Current" are usually a snapshot. 
    # If we treat them as expense at the END, we can just subtract them at the end.
    clausula_cost = 168850000

    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    # We need to process lines in REVERSE order if the file is newest-first?
    # File samples: 05/12, 04/12... descending.
    # To build a chronological graph, we should verify ordering.
    # Yes, file is Descending Date.
    # So we should reverse lines to calculate running balance from start of season.
    
    entries = []
    
    # Pre-parse to sort/reverse
    current_date = ""
    for line in lines:
        line = line.strip()
        if not line: continue
        
        date_match = re.match(r'^(\d{2}/\d{2}/\d{4})\s*\|\s*(.+)$', line)
        no_date_match = re.match(r'^\s*\|\s*(.+)$', line)
        
        content = ""
        date = ""
        if date_match:
            date = date_match.group(1)
            content = date_match.group(2)
            current_date = date
        elif no_date_match:
            content = no_date_match.group(1)
            date = current_date # Fallback to last seen header date (which is actually FUTURE in descending file)
            # Actually, "current_date" updates as we go down (older dates).
            # Wait. 05/12 is top. 20/08 is bottom.
            # If we read top-down, we read Newest First.
            # If we encounter a line without date, it belongs to the date of the header ABOVE it.
            # So `current_date` logic works for grouping.
        else:
            continue
            
        entries.append({'date': date, 'content': content, 'original': line})

    # Reverse entries to process chronologically (Oldest First)
    entries.reverse()
    
    print(f"DEBUG LOG FOR: {target_team}")
    print(f"Initial Balance: {balance:,}")
    print("-" * 100)
    print(f"{'Date':<12} | {'Amount':>12} | {'Balance':>15} | {'Description'}")
    print("-" * 100)

    for entry in entries:
        content = entry['content']
        date = entry['date']
        
        amount = 0
        desc = ""
        
        # Compra
        compra_match = re.match(r'^(.+?)\s+ha comprado al jugador\s+(.+?)\s+de\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
        if compra_match:
            team = compra_match.group(1).strip()
            origin = compra_match.group(3).strip()
            val = parse_amount(compra_match.group(4))
            
            if team == target_team:
                amount = -val
                desc = f"Compra: {compra_match.group(2)} ({origin})"
            elif origin == target_team:
                amount = val
                desc = f"Venta (via Compra): {compra_match.group(2)} (to {team})"

        # Venta
        venta_match = re.match(r'^(.+?)\s+ha vendido al jugador\s+(.+?)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
        if venta_match:
            team = venta_match.group(1).strip()
            val = parse_amount(venta_match.group(4))
            
            if team == target_team:
                amount = val
                desc = f"Venta: {venta_match.group(2)}"

        # Jornada
        jornada_match = re.match(r'^En la jornada\s+(\d+),\s+(.+?)\s+ha ganado\s+([\d.]+)€?$', content, re.IGNORECASE)
        if jornada_match:
            team = jornada_match.group(2).strip()
            val = parse_amount(jornada_match.group(3))
            if team == target_team:
                amount = val
                desc = f"Jornada {jornada_match.group(1)}"

        # Once ideal
        once_match = re.match(r'^(.+?)\s+ha ganado\s+([\d.]+)€?\s+por tener jugadores en el 11 ideal', content, re.IGNORECASE)
        if once_match:
            team = once_match.group(1).strip()
            val = parse_amount(once_match.group(2))
            if team == target_team:
                amount = val
                desc = "11 Ideal"

        if amount != 0:
            balance += amount
            print(f"{date:<12} | {amount:+12,d} | {balance:15,d} | {desc}")

    print("-" * 100)
    print(f"Balance before Clausulas: {balance:,}")
    print(f"Less Clausulas ({clausula_cost:,}): {balance - clausula_cost:,}")

if __name__ == "__main__":
    debug_alcatamy()
