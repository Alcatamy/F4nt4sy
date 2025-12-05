import re

def parse_amount(amount_str):
    clean_str = amount_str.replace('.', '').replace('€', '').strip()
    return int(clean_str)

def process_logs():
    filename = 'Movimientos mercado'
    target = 'Alcatamy eSports By'
    
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    output = []
    
    balance = 100000000 # Initial
    output.append(f"INITIAL BALANCE: {balance:,}")
    
    # Process chronologically (reverse file)
    processed_lines = []
    
    current_date = ""
    for line in lines:
        line = line.strip()
        if not line: continue
        
        # Date handling
        match_date = re.match(r'^(\d{2}/\d{2}/\d{4})', line)
        if match_date:
            current_date = match_date.group(1)
        
        processed_lines.append((current_date, line))
        
    # Reverse to start from oldest
    processed_lines.reverse()
    
    for date, line in processed_lines:
        amount_change = 0
        desc = ""
        
        # Compra
        # A ha comprado a P de B por X
        compra_match = re.match(r'^(.+?)\s+ha comprado al jugador\s+(.+?)\s+de\s+(.+?)\s+por\s+([\d.]+)€?$', line.split('|')[-1].strip(), re.IGNORECASE)
        if compra_match:
            team = compra_match.group(1).strip()
            player = compra_match.group(2).strip()
            origin = compra_match.group(3).strip()
            amount = parse_amount(compra_match.group(4))
            
            if team == target:
                amount_change = -amount
                desc = f"BUY {player} FROM {origin}"
            elif origin == target:
                amount_change = amount
                desc = f"SELL {player} TO {team} (via Compra)"

        # Venta
        # A ha vendido a P a B por X
        if not amount_change:
            venta_match = re.match(r'^(.+?)\s+ha vendido al jugador\s+(.+?)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$', line.split('|')[-1].strip(), re.IGNORECASE)
            if venta_match:
                team = venta_match.group(1).strip()
                player = venta_match.group(2).strip()
                dest = venta_match.group(3).strip()
                amount = parse_amount(venta_match.group(4))
                
                if team == target:
                    amount_change = amount
                    desc = f"SELL {player} TO {dest}"

        # Jornada
        if not amount_change:
            if f"{target} ha ganado" in line and "Jornada" in line:
                match = re.search(r'ha ganado\s+([\d.]+)€', line)
                if match:
                    amount_change = parse_amount(match.group(1))
                    desc = "JORNADA PRIZE"

        # Once Ideal
        if not amount_change:
            if f"{target} ha ganado" in line and "11 ideal" in line:
                match = re.search(r'ha ganado\s+([\d.]+)€', line)
                if match:
                    amount_change = parse_amount(match.group(1))
                    desc = "11 IDEAL PRIZE"
                    
        if amount_change != 0:
            balance += amount_change
            output.append(f"[{date}] {desc:<40} | Change: {amount_change:+15,d} | Balance: {balance:15,d} | Line: {line}")
            
    # Clausulas
    clausula = 168850000
    balance -= clausula
    output.append(f"\nDEDUCT CLAUSULAS: -{clausula:,}")
    output.append(f"FINAL BALANCE: {balance:,}")
    
    with open('alcatamy_details.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(output))
        
    print("Log generated.")

if __name__ == "__main__":
    process_logs()
