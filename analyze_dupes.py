import re

def parse_amount(amount_str):
    clean_str = amount_str.replace('.', '').replace('€', '').strip()
    return int(clean_str)

def analyze():
    with open('Movimientos mercado', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    transactions = []
    
    # Track Alcatamy specifically
    alcatamy_income = 0
    alcatamy_expense = 0
    
    total_clausulas_alcatamy = 168850000

    current_date = ""

    compra_set = set()
    venta_set = set()
    
    duplicates_found = 0
    duplicate_amount = 0

    for line in lines:
        line = line.strip()
        if not line: continue
        
        date_match = re.match(r'^(\d{2}/\d{2}/\d{4})\s*\|\s*(.+)$', line)
        no_date_match = re.match(r'^\s*\|\s*(.+)$', line)
        
        content = ""
        if date_match:
            current_date = date_match.group(1)
            content = date_match.group(2)
        elif no_date_match:
            content = no_date_match.group(1)
        else:
            continue

        # Compra
        compra_match = re.match(r'^(.+?)\s+ha comprado al jugador\s+(.+?)\s+de\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
        if compra_match:
            team = compra_match.group(1).strip()
            player = compra_match.group(2).strip()
            origin = compra_match.group(3).strip()
            amount = parse_amount(compra_match.group(4))
            
            # Key for duplicate check: Date|Player|Amount
            key = f"{current_date}|{player}|{amount}"
            compra_set.add(key)

            if team == 'Alcatamy eSports By':
                alcatamy_expense += amount
            if origin == 'Alcatamy eSports By':
                alcatamy_income += amount # Income from Compra logic
            
            continue

        # Venta
        venta_match = re.match(r'^(.+?)\s+ha vendido al jugador\s+(.+?)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
        if venta_match:
            team = venta_match.group(1).strip()
            player = venta_match.group(2).strip()
            dest = venta_match.group(3).strip()
            amount = parse_amount(venta_match.group(4))
            
            key = f"{current_date}|{player}|{amount}"
            
            if key in compra_set:
                duplicates_found += 1
                duplicate_amount += amount
                # print(f"DUPLICATE FOUND: {key}")
            
            if team == 'Alcatamy eSports By':
                alcatamy_income += amount # Income from Venta logic

            continue
            
        # Jornada
        jornada_match = re.match(r'^En la jornada\s+(\d+),\s+(.+?)\s+ha ganado\s+([\d.]+)€?$', content, re.IGNORECASE)
        if jornada_match:
            team = jornada_match.group(2).strip()
            amount = parse_amount(jornada_match.group(3))
            if team == 'Alcatamy eSports By':
                alcatamy_income += amount
        
        # Once Ideal
        once_match = re.match(r'^(.+?)\s+ha ganado\s+([\d.]+)€?\s+por tener jugadores en el 11 ideal', content, re.IGNORECASE)
        if once_match:
            team = once_match.group(1).strip()
            amount = parse_amount(once_match.group(2))
            if team == 'Alcatamy eSports By':
                alcatamy_income += amount

    print(f"Duplicates (Compra matches Venta): {duplicates_found}")
    print(f"Total Duplicate Amount: {duplicate_amount:,} €")
    
    print("\n--- Alcatamy Analysis ---")
    print(f"Initial: 100,000,000")
    print(f"Income: {alcatamy_income:,}")
    print(f"Expense: -{alcatamy_expense:,}")
    print(f"Clausulas: -{total_clausulas_alcatamy:,}")
    
    final = 100000000 + alcatamy_income - alcatamy_expense - total_clausulas_alcatamy
    print(f"Calculated Final: {final:,}")
    
    print("\n--- Scenarios ---")
    print(f"Without Clausulas: {final + total_clausulas_alcatamy:,}")
    # If duplicates were double counting income for Alcatamy specifically, we need to know how much overlap involved Alcatamy as seller.
    
if __name__ == "__main__":
    analyze()
