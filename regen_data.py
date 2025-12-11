"""Regenerate initial_data.js from source files"""

# Read movements
with open('Movimientos mercado', 'r', encoding='utf-8') as f:
    movements = [line.strip() for line in f if line.strip()]

# Read clausulas
clausulas = []
with open('Clausulas actuales', 'r', encoding='utf-8') as f:
    lines = f.read().strip().split('\n')
    for line in lines[1:]:  # Skip header
        parts = line.split('\t')
        if len(parts) >= 2:
            team = parts[0].strip()
            amount = int(parts[1].replace('.', '').replace(',', ''))
            clausulas.append({'team': team, 'amount': amount})

# Generate JS file
with open('initial_data.js', 'w', encoding='utf-8') as f:
    f.write('const OFFICIAL_DATA = {\n')
    f.write('  movementsRaw: [\n')
    for m in movements:
        escaped = m.replace('\\', '\\\\').replace('"', '\\"')
        f.write(f'    "{escaped}",\n')
    f.write('  ],\n')
    f.write('  clausulas: [\n')
    for c in clausulas:
        f.write(f'    {{ team: "{c["team"]}", amount: {c["amount"]} }},\n')
    f.write('  ]\n')
    f.write('};\n')

print(f'Generated initial_data.js with {len(movements)} movements and {len(clausulas)} clausulas.')
