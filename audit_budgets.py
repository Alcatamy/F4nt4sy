"""Full Budget Audit Script"""
import re

# Read movements
with open('Movimientos mercado', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Config
TEAMS = {
    'GOLENCIERRO FC': {'initial': 103000000, 'clausulas': 180500000},
    'Vigar24': {'initial': 103000000, 'clausulas': 107000000},
    'Visite La Manga FC': {'initial': 103000000, 'clausulas': 54000000},
    'Pablinistan FC': {'initial': 103000000, 'clausulas': 152200000},
    'Alcatamy eSports By': {'initial': 100000000, 'clausulas': 168850000},
    'Morenazos FC': {'initial': 103000000, 'clausulas': 36000000}
}

ALIASES = {
    'Vigar FC': 'Vigar24',
    'Alcatamy': 'Alcatamy eSports By',
}

def normalize(name):
    name = name.strip()
    if name in ALIASES:
        return ALIASES[name]
    for t in TEAMS.keys():
        if name.lower() in t.lower() or t.lower() in name.lower():
            return t
    return name

stats = {t: {'purchases': 0, 'sales': 0, 'jornada': 0, 'once': 0, 'blindajes': 0, 'inferred_sales': 0} for t in TEAMS}

for line in lines:
    line = line.strip()
    if not line:
        continue
    
    amount_match = re.search(r'por\s+([\d.]+)', line)
    amount = int(amount_match.group(1).replace('.', '')) if amount_match else 0
    
    # Jornada
    jornada_match = re.search(r'En la jornada \d+, (.+?) ha ganado ([\d.]+)', line)
    if jornada_match:
        team = normalize(jornada_match.group(1))
        if team in stats:
            stats[team]['jornada'] += int(jornada_match.group(2).replace('.', ''))
        continue
    
    # 11 ideal
    if '11 ideal' in line.lower():
        ideal_match = re.search(r'(.+?) ha ganado ([\d.]+)', line.split('|')[-1])
        if ideal_match:
            team = normalize(ideal_match.group(1))
            if team in stats:
                stats[team]['once'] += int(ideal_match.group(2).replace('.', ''))
        continue
    
    # Blindaje
    if 'ha blindado' in line.lower():
        parts = line.split('|')[-1].strip()
        team_match = re.match(r'^(.+?) ha blindado', parts)
        if team_match:
            team = normalize(team_match.group(1))
            if team in stats:
                stats[team]['blindajes'] += 1
        continue
    
    # Compra
    compra_match = re.search(r'(.+?) ha comprado al jugador .+ de (.+?) por', line.split('|')[-1])
    if compra_match:
        buyer = normalize(compra_match.group(1).strip())
        seller = normalize(compra_match.group(2).strip())
        if buyer in stats:
            stats[buyer]['purchases'] += amount
        if seller in stats:
            stats[seller]['inferred_sales'] += amount
        continue
    
    # Venta
    venta_match = re.search(r'(.+?) ha vendido al jugador .+ a (.+?) por', line.split('|')[-1])
    if venta_match:
        seller = normalize(venta_match.group(1).strip())
        if seller in stats:
            stats[seller]['sales'] += amount

results = []
results.append('PRESUPUESTOS ACTUALES')
results.append('-' * 50)

for team, cfg in TEAMS.items():
    s = stats[team]
    total_sales = s['sales'] + s['inferred_sales']
    budget = cfg['initial'] + total_sales - s['purchases'] - cfg['clausulas'] + s['jornada'] + s['once']
    
    results.append(f"{team}: {budget/1e6:.1f}M")
    results.append(f"  Compras:{s['purchases']/1e6:.1f}M Ventas:{total_sales/1e6:.1f}M Claus:{cfg['clausulas']/1e6:.1f}M Jorn:{(s['jornada']+s['once'])/1e6:.1f}M")

# Write to file
with open('budget_results.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(results))

print('Results saved to budget_results.md')

