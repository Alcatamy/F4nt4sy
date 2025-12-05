import re
import locale

# Set initial budgets
TEAMS = {
    'GOLENCIERRO FC': 103000000,
    'Vigar24': 103000000,
    'Visite La Manga FC': 103000000,
    'Pablinistan FC': 103000000,
    'Alcatamy eSports By': 100000000,
    'Morenazos FC': 103000000
}

# Structure to track detailed stats
team_stats = {team: {'initial': budget, 'income': 0, 'expense': 0, 'clausulas': 0, 'final': 0} for team, budget in TEAMS.items()}

def parse_amount(amount_str):
    clean_str = amount_str.replace('.', '').replace('€', '').strip()
    return int(clean_str)

def get_transaction_key(t):
    # Unique key for deduplication: Type|Team|Player|Amount
    # Note: Date is excluded so we can match dated vs undated
    return f"{t['type']}|{t['team']}|{t['player']}|{t['amount']}"

def process_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    current_date = ""
    parsed_transactions = []
    unparsed_lines = []
    
    # 1. Parse all lines into structured objects
    for i, line in enumerate(lines):
        original_line = line.strip()
        if not original_line:
            continue
            
        # Extract date
        date_match = re.match(r'^(\d{2}/\d{2}/\d{4})\s*\|\s*(.+)$', original_line)
        no_date_match = re.match(r'^\s*\|\s*(.+)$', original_line)
        
        content = ""
        line_date = None
        
        if date_match:
            current_date = date_match.group(1)
            content = date_match.group(2)
            line_date = current_date
        elif no_date_match:
            content = no_date_match.group(1)
            # Line has no date
        else:
            # Fallback
            if re.search(r'compra|vende|gana|blind', original_line, re.IGNORECASE):
                unparsed_lines.append(f"Line {i+1}: {original_line}")
            continue 

        # Parse Content
        t_obj = None
        
        # Compra
        compra_match = re.match(r'^(.+?)\s+ha comprado al jugador\s+(.+?)\s+de\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
        if compra_match:
            t_obj = {
                'type': 'compra',
                'team': compra_match.group(1).strip(),
                'player': compra_match.group(2).strip(),
                'origin': compra_match.group(3).strip(),
                'amount': parse_amount(compra_match.group(4)),
                'date': line_date,
                'raw': original_line,
                'line_num': i+1
            }

        # Venta
        if not t_obj:
            venta_match = re.match(r'^(.+?)\s+ha vendido al jugador\s+(.+?)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$', content, re.IGNORECASE)
            if venta_match:
                t_obj = {
                    'type': 'venta',
                    'team': venta_match.group(1).strip(),
                    'player': venta_match.group(2).strip(),
                    'dest': venta_match.group(3).strip(),
                    'amount': parse_amount(venta_match.group(4)),
                    'date': line_date,
                    'raw': original_line,
                    'line_num': i+1
                }

        # Blindaje
        if not t_obj:
            blindaje_match = re.match(r'^(.+?)\s+ha blindado a\s+(.+)$', content, re.IGNORECASE)
            if blindaje_match:
                t_obj = {
                    'type': 'blindaje',
                    'team': blindaje_match.group(1).strip(),
                    'player': blindaje_match.group(2).strip(),
                    'amount': 0,
                    'date': line_date,
                    'raw': original_line,
                    'line_num': i+1
                }

        # Jornada
        if not t_obj:
            jornada_match = re.match(r'^En la jornada\s+(\d+),\s+(.+?)\s+ha ganado\s+([\d.]+)€?$', content, re.IGNORECASE)
            if jornada_match:
                t_obj = {
                    'type': 'jornada',
                    'team': jornada_match.group(2).strip(),
                    'player': f"Jornada {jornada_match.group(1)}",
                    'amount': parse_amount(jornada_match.group(3)),
                    'date': line_date,
                    'raw': original_line,
                    'line_num': i+1
                }

        # Once ideal
        if not t_obj:
            once_match = re.match(r'^(.+?)\s+ha ganado\s+([\d.]+)€?\s+por tener jugadores en el 11 ideal', content, re.IGNORECASE)
            if once_match:
                t_obj = {
                    'type': 'once_ideal',
                    'team': once_match.group(1).strip(),
                    'player': "11 Ideal",
                    'amount': parse_amount(once_match.group(2)),
                    'date': line_date,
                    'raw': original_line,
                    'line_num': i+1
                }
        
        if t_obj:
            parsed_transactions.append(t_obj)
        else:
            unparsed_lines.append(f"Line {i+1} (Date: {current_date}): {content}")

    # 2. Deduplicate
    # Strategy: Group by Key. If group has > 1 item:
    # - If some have date and some don't: Keep ONLY those with date.
    # - If all have date: Keep all (assume valid repeat).
    # - If none have date: Keep one? (Unlikely scenario here).
    
    grouped = {}
    for t in parsed_transactions:
        k = get_transaction_key(t)
        if k not in grouped: grouped[k] = []
        grouped[k].append(t)
        
    final_transactions = []
    output_lines = []
    
    duplicates_removed = 0
    
    for k, group in grouped.items():
        if len(group) == 1:
            final_transactions.append(group[0])
            continue
            
        # Check for date presence
        dated = [x for x in group if x['date'] is not None]
        undated = [x for x in group if x['date'] is None]
        
        if dated and undated:
            # We have a mix. Assume undated are duplicates of the dated ones.
            # Keep ONLY the dated ones.
            # Warning: If there are 2 dated and 1 undated, we keep 2 dated.
            # If there is 1 dated and 1 undated, we keep 1 dated.
            final_transactions.extend(dated)
            duplicates_removed += len(undated)
            # output_lines.append(f"Removed {len(undated)} undated duplicates for {k}")
        else:
            # All dated or all undated -> Keep all (assume valid repetition in history)
            # Unless they are EXACT duplicates (same line raw)? No, we iterate lines.
            final_transactions.extend(group)

    output_lines.append(f"Total parsed: {len(parsed_transactions)}")
    output_lines.append(f"Duplicates removed (undated): {duplicates_removed}")
    output_lines.append(f"Final Count: {len(final_transactions)}")

    # 3. Calculate Budget
    counts = {"compra": 0, "venta": 0, "blindaje": 0, "jornada": 0, "once_ideal": 0}
    
    for t in final_transactions:
        amount = t['amount']
        team = t['team']
        type_ = t['type']
        
        if type_ == 'compra':
            if team in team_stats:
                team_stats[team]['expense'] += amount
            # Seller logic: in 'compra', origin is seller
            origin = t['origin']
            if origin in team_stats:
                team_stats[origin]['income'] += amount
            counts['compra'] += 1
            
        elif type_ == 'venta':
            if team in team_stats:
                team_stats[team]['income'] += amount
            # Note: We do NOT deduct from 'dest' here because usually there is a corresponding 'compra' line.
            # If 'dest' is LALIGA, no impact. If 'dest' is a team, they should have a 'compra' line.
            # checking for double counting if we have both 'A buys P from B' and 'B sells P to A'.
            # Based on file inspection, primarily 'Compra' handles team-to-team, 'Venta' handles team-to-LALIGA.
            counts['venta'] += 1
            
        elif type_ == 'jornada':
            if team in team_stats:
                team_stats[team]['income'] += amount
            counts['jornada'] += 1
            
        elif type_ == 'once_ideal':
            if team in team_stats:
                team_stats[team]['income'] += amount
            counts['once_ideal'] += 1
            
        elif type_ == 'blindaje':
            counts['blindaje'] += 1

    output_lines.append(f"Movement Counts: {counts}")
    
    # Process Clausulas
    output_lines.append("\nProcessing Clausulas...")
    try:
        with open('Clausulas actuales', 'r', encoding='utf-8') as f:
            clausulas_lines = f.readlines()
        
        for line in clausulas_lines[1:]: 
            line = line.strip()
            if not line: continue
            
            parts = line.split('\t')
            if len(parts) >= 2:
                team = parts[0].strip()
                amount_str = parts[-1].strip()
            else:
                match = re.search(r'^(.*)\s+(\d+)$', line)
                if match:
                    team = match.group(1).strip()
                    amount_str = match.group(2)
                else:
                    output_lines.append(f"Skipping malformed clause line: {line}")
                    continue
            
            if team in team_stats:
                amount = int(amount_str)
                team_stats[team]['clausulas'] = amount
            else:
                output_lines.append(f"  Unknown team in Clausulas: {team}")

    except FileNotFoundError:
        output_lines.append("Clausulas actuales file not found!")

    output_lines.append("\nDetailed Budget Breakdown:")
    output_lines.append(f"{'Team':<25} | {'Initial':>15} | {'Income':>15} | {'Expense':>15} | {'Clausulas':>15} | {'Final Budget':>15}")
    output_lines.append("-" * 110)
    
    for team, stats in team_stats.items():
        stats['final'] = stats['initial'] + stats['income'] - stats['expense'] - stats['clausulas']
        output_lines.append(f"{team:<25} | {stats['initial']:15,d} | {stats['income']:15,d} | {stats['expense']:15,d} | {stats['clausulas']:15,d} | {stats['final']:15,d}")

    output_lines.append("-" * 110)

    # Write report
    with open('verification_report.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(output_lines))
    
    print("Verification complete. Check verification_report.txt")

if __name__ == "__main__":
    process_file('Movimientos mercado')
