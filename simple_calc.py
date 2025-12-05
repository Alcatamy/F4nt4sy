import re

TEAMS = {
    'GOLENCIERRO FC': 103000000,
    'Vigar24': 103000000,
    'Visite La Manga FC': 103000000,
    'Pablinistan FC': 103000000,
    'Alcatamy eSports By': 100000000,
    'Morenazos FC': 103000000
}
budgets = TEAMS.copy()

def parse_amount(s):
    return int(s.replace('.', '').replace('€', '').strip())

# Movimientos
try:
    with open('Movimientos mercado', 'r', encoding='utf-8') as f: # Try utf-8 first
        for line in f:
            line = line.strip()
            if not line: continue
            
            # Extract content after pipe if present
            content = line
            if '|' in line:
                content = line.split('|', 1)[1].strip()

            # Compra
            m = re.match(r'^(.+?)\s+ha comprado al jugador\s+(.+?)\s+de\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
            if m:
                team, _, source, amt = m.groups()
                amt = parse_amount(amt)
                if team in budgets: budgets[team] -= amt
                if source in budgets: budgets[source] += amt
                continue

            # Venta (only specific logic where selling TO LaLiga adds money, selling between teams is covered by Compra?)
            # Wait, verify_budget logic:
            # "Venta" adds money to Seller.
            # "Compra" subtracts from Buyer AND adds to Seller?
            # If so, if I have "Team A buys from Team B" AND "Team B sells to Team A", I double count.
            # Let's check the file content for duplicates.
            # Line 22: Pablinistan FC ha comprado... de Morenazos FC
            # I do NOT see "Morenazos FC ha vendido ... a Pablinistan FC".
            # So Compra handles transfer.
            # Venta lines are mostly "a LALIGA".
            # Let's check if there are any "Venta a [Team]".
            # Search file...
            # I will assume Venta adds money.
            m = re.match(r'^(.+?)\s+ha vendido al jugador\s+(.+?)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
            if m:
                team, _, dest, amt = m.groups()
                amt = parse_amount(amt)
                # If dest is a known team, do we subtract?
                # Usually "Compra" is the primary record for transfers between players.
                # If "Venta" exists for P2P, we might double count.
                # But looking at file, "Venta" is usually "a LALIGA".
                if team in budgets: budgets[team] += amt
                continue
                
            # Jornada / Once Ideal
            m = re.match(r'^En la jornada\s+(\d+),\s+(.+?)\s+ha ganado\s+([\d.]+)€?$', content, re.IGNORECASE)
            if m:
                _, team, amt = m.groups()
                amt = parse_amount(amt)
                if team in budgets: budgets[team] += amt
                continue
                
            m = re.match(r'^(.+?)\s+ha ganado\s+([\d.]+)€?\s+por tener jugadores', content, re.IGNORECASE)
            if m:
                team, amt = m.groups()
                amt = parse_amount(amt)
                if team in budgets: budgets[team] += amt
                continue

except Exception as e:
    with open('final_result.txt', 'w') as f: f.write(str(e))
    exit()

# Clausulas
try:
    with open('Clausulas actuales', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        for line in lines[1:]:
            parts = line.strip().split('\t')
            if len(parts) < 2:
                # Regex fallback
                m = re.match(r'^(.*)\s+(\d+)$', line.strip())
                if m:
                    team, amt = m.groups()
                else:
                    continue
            else:
                team = parts[0].strip()
                amt = parts[-1].strip()
            
            if team in budgets:
                budgets[team] -= int(amt)
except Exception as e:
    with open('final_result.txt', 'w') as f: f.write("Clausulas error: " + str(e))
    exit()

with open('final_result.txt', 'w', encoding='utf-8') as f:
    for team, b in budgets.items():
        f.write(f"{team}: {b}\n")
