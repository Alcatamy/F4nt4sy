import re
import csv
import locale

def parse_amount(amount_str):
    clean_str = amount_str.replace('.', '').replace('€', '').strip()
    return int(clean_str)

def get_transaction_key(t):
    # Same key as verify_budget.py
    return f"{t['type']}|{t['team']}|{t['player']}|{t['amount']}"

def generate_csv():
    input_file = 'Movimientos mercado'
    output_file = 'movimientos_completo.csv'

    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    parsed_transactions = []
    
    current_date = ""

    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        date_match = re.match(r'^(\d{2}/\d{2}/\d{4})\s*\|\s*(.+)$', line)
        no_date_match = re.match(r'^\s*\|\s*(.+)$', line)
        
        content = ""
        line_date = None
        
        if date_match:
            current_date = date_match.group(1)
            content = date_match.group(2)
            line_date = current_date
        elif no_date_match:
            content = no_date_match.group(1)
        else:
            continue
            
        t_obj = None

        # Compra
        compra_match = re.match(r'^(.+?)\s+ha comprado al jugador\s+(.+?)\s+de\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
        if compra_match:
            t_obj = {
                'fecha': line_date if line_date else "Sin Fecha",
                'date_obj': line_date,
                'team': compra_match.group(1).strip(),
                'type': 'Compra',
                'player': compra_match.group(2).strip(),
                'other_party': compra_match.group(3).strip(),
                'amount': parse_amount(compra_match.group(4)),
                'desc': f"Compra a {compra_match.group(3).strip()}"
            }

        # Venta
        if not t_obj:
            venta_match = re.match(r'^(.+?)\s+ha vendido al jugador\s+(.+?)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
            if venta_match:
                t_obj = {
                    'fecha': line_date if line_date else "Sin Fecha",
                    'date_obj': line_date,
                    'team': venta_match.group(1).strip(),
                    'type': 'Venta',
                    'player': venta_match.group(2).strip(),
                    'other_party': venta_match.group(3).strip(),
                    'amount': parse_amount(venta_match.group(4)),
                    'desc': f"Venta a {venta_match.group(3).strip()}"
                }

        # Blindaje
        if not t_obj:
            blindaje_match = re.match(r'^(.+?)\s+ha blindado a\s+(.+)$', content, re.IGNORECASE)
            if blindaje_match:
                t_obj = {
                    'fecha': line_date if line_date else "Sin Fecha",
                    'date_obj': line_date,
                    'team': blindaje_match.group(1).strip(),
                    'type': 'Blindaje',
                    'player': blindaje_match.group(2).strip(),
                    'other_party': '-',
                    'amount': 0,
                    'desc': "Blindaje"
                }

        # Jornada
        if not t_obj:
            jornada_match = re.match(r'^En la jornada\s+(\d+),\s+(.+?)\s+ha ganado\s+([\d.]+)€?$', content, re.IGNORECASE)
            if jornada_match:
                t_obj = {
                    'fecha': line_date if line_date else "Sin Fecha",
                    'date_obj': line_date,
                    'team': jornada_match.group(2).strip(),
                    'type': 'Jornada',
                    'player': '-',
                    'other_party': 'Premios',
                    'amount': parse_amount(jornada_match.group(3)),
                    'desc': f"Jornada {jornada_match.group(1)}"
                }

        # Once Ideal
        if not t_obj:
            once_match = re.match(r'^(.+?)\s+ha ganado\s+([\d.]+)€?\s+por tener jugadores en el 11 ideal', content, re.IGNORECASE)
            if once_match:
                t_obj = {
                    'fecha': line_date if line_date else "Sin Fecha",
                    'date_obj': line_date,
                    'team': once_match.group(1).strip(),
                    'type': 'Once Ideal',
                    'player': '-',
                    'other_party': 'Premios',
                    'amount': parse_amount(once_match.group(2)),
                    'desc': "11 Ideal"
                }
        
        if t_obj:
            parsed_transactions.append(t_obj)

    # DEDUPLICATION LOGIC
    grouped = {}
    for t in parsed_transactions:
        k = get_transaction_key(t)
        if k not in grouped: grouped[k] = []
        grouped[k].append(t)
        
    final_transactions = []
    duplicates_count = 0
    
    for k, group in grouped.items():
        if len(group) == 1:
            final_transactions.append(group[0])
            continue
            
        dated = [x for x in group if x['date_obj'] is not None]
        undated = [x for x in group if x['date_obj'] is None]
        
        if dated and undated:
            # We have duplicates. Keep dated.
            final_transactions.extend(dated)
            duplicates_count += len(undated)
        else:
            final_transactions.extend(group)

    print(f"Duplicates removed: {duplicates_count}")
    print(f"Total transactions: {len(final_transactions)}")

    # Write CSV
    with open(output_file, 'w', newline='', encoding='utf-8-sig') as f:
        writer = csv.DictWriter(f, fieldnames=['Fecha', 'Equipo', 'Tipo', 'Jugador', 'Otro', 'Monto', 'Descripcion'])
        writer.writeheader()
        
        for t in final_transactions:
            writer.writerow({
                'Fecha': t['fecha'],
                'Equipo': t['team'],
                'Tipo': t['type'],
                'Jugador': t['player'],
                'Otro': t['other_party'],
                'Monto': t['amount'],
                'Descripcion': t['desc']
            })

    print(f"Generated {output_file}")

if __name__ == "__main__":
    generate_csv()
