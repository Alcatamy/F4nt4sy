// Script to process movements and generate localStorage data
const fs = require('fs');

const CONFIG = {
    TEAMS: {
        'GOLENCIERRO FC': { initialBudget: 103000000 },
        'Vigar24': { initialBudget: 103000000 },
        'Visite La Manga FC': { initialBudget: 103000000 },
        'Pablinistan FC': { initialBudget: 103000000 },
        'Alcatamy eSports By': { initialBudget: 100000000 },
        'Morenazos FC': { initialBudget: 103000000 }
    }
};

function parseAmount(amountStr) {
    return parseInt(amountStr.replace(/\./g, '').replace('€', ''), 10) || 0;
}

function generateHash(movement) {
    const str = `${movement.date}|${movement.team}|${movement.type}|${movement.player}|${movement.amount}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
}

function getTransactionKey(m) {
    return `${m.type}|${m.team}|${m.player}|${m.amount}`;
}

function parseContent(content, date) {
    // Compra
    const compraMatch = content.match(/^(.+?)\s+ha comprado al jugador\s+(.+?)\s+de\s+(.+?)\s+por\s+([\d.]+)€?$/i);
    if (compraMatch) {
        return {
            date,
            team: compraMatch[1].trim(),
            type: 'compra',
            player: compraMatch[2].trim(),
            fromTo: compraMatch[3].trim(),
            amount: parseAmount(compraMatch[4])
        };
    }

    // Venta
    const ventaMatch = content.match(/^(.+?)\s+ha vendido al jugador\s+(.+?)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$/i);
    if (ventaMatch) {
        return {
            date,
            team: ventaMatch[1].trim(),
            type: 'venta',
            player: ventaMatch[2].trim(),
            fromTo: ventaMatch[3].trim(),
            amount: parseAmount(ventaMatch[4])
        };
    }

    // Blindaje
    const blindajeMatch = content.match(/^(.+?)\s+ha blindado a\s+(.+)$/i);
    if (blindajeMatch) {
        return {
            date,
            team: blindajeMatch[1].trim(),
            type: 'blindaje',
            player: blindajeMatch[2].trim(),
            fromTo: '-',
            amount: 0
        };
    }

    // Jornada
    const jornadaMatch = content.match(/^En la jornada\s+(\d+),\s+(.+?)\s+ha ganado\s+([\d.]+)€?$/i);
    if (jornadaMatch) {
        return {
            date,
            team: jornadaMatch[2].trim(),
            type: 'jornada',
            player: `Jornada ${jornadaMatch[1]}`,
            fromTo: 'Premio',
            amount: parseAmount(jornadaMatch[3])
        };
    }

    // Once ideal
    const onceMatch = content.match(/^(.+?)\s+ha ganado\s+([\d.]+)€?\s+por tener jugadores en el 11 ideal/i);
    if (onceMatch) {
        return {
            date,
            team: onceMatch[1].trim(),
            type: 'once_ideal',
            player: `11 Ideal`,
            fromTo: 'Premio',
            amount: parseAmount(onceMatch[2])
        };
    }

    return null;
}

function parseLine(line) {
    let date = null;
    let content = line;

    const dateMatch = line.match(/^(\d{2}\/\d{2}\/\d{4})\s*\|\s*(.+)$/);
    const noDateMatch = line.match(/^\s*\|\s*(.+)$/);

    if (dateMatch) {
        date = dateMatch[1];
        content = dateMatch[2];
    } else if (noDateMatch) {
        content = noDateMatch[1];
    } else {
        return null; // unrecognized line format
    }

    return parseContent(content, date);
}

// Read the file
const text = fs.readFileSync('Movimientos mercado', 'utf8');
const lines = text.split('\n').filter(l => l.trim());

console.log(`Processing ${lines.length} lines...`);

const parsedMovements = [];
let failed = 0;

lines.forEach(line => {
    const movement = parseLine(line.trim());
    if (movement) {
        movement.uniqueKey = getTransactionKey(movement);
        movement.raw = line.trim();
        parsedMovements.push(movement);
    } else {
        // Only count as failure if it looks like a transaction
        if (/compra|vende|gana|blind/i.test(line)) {
            failed++;
            if (failed <= 5) console.log(`Failed to parse: ${line.substring(0, 80)}...`);
        }
    }
});

// Deduplication Logic
const grouped = {};
parsedMovements.forEach(m => {
    if (!grouped[m.uniqueKey]) grouped[m.uniqueKey] = [];
    grouped[m.uniqueKey].push(m);
});

const finalMovements = [];
let duplicatesRemoved = 0;

Object.values(grouped).forEach(group => {
    if (group.length === 1) {
        finalMovements.push(group[0]);
    } else {
        const dated = group.filter(m => m.date !== null);
        const undated = group.filter(m => m.date === null);

        if (dated.length > 0 && undated.length > 0) {
            // Keep dated ones, discard undated
            dated.forEach(m => finalMovements.push(m));
            duplicatesRemoved += undated.length;
        } else {
            // All dated or all undated -> Keep all (assume valid repeats)
            group.forEach(m => finalMovements.push(m));
        }
    }
});

console.log(`\nParsed: ${parsedMovements.length}`);
console.log(`Duplicates Removed: ${duplicatesRemoved}`);
console.log(`Final Count: ${finalMovements.length}`);
console.log(`Failed: ${failed} lines`);

// Process Clausulas
console.log('\nProcessing Clausulas...');
let clausulasAdded = 0;
try {
    const clausulasText = fs.readFileSync('Clausulas actuales', 'utf8');
    const clausulasLines = clausulasText.split('\n').filter(l => l.trim());

    // Skip likely header
    clausulasLines.slice(1).forEach(line => {
        const parts = line.trim().split(/\t|\s{2,}/);
        let team, amountStr;

        if (parts.length >= 2) {
            team = parts[0].trim();
            amountStr = parts[parts.length - 1].trim();
        } else {
            const match = line.match(/^(.*)\s+(\d+)$/);
            if (match) {
                team = match[1].trim();
                amountStr = match[2];
            }
        }

        if (team && CONFIG.TEAMS[team]) {
            const amount = parseInt(amountStr.replace(/\./g, ''), 10);

            // Add as a movement
            finalMovements.push({
                date: '05/12/2025', // Use current date for clausulas
                team: team,
                type: 'clausula',
                player: 'Gasto Clausulas',
                fromTo: 'LALIGA',
                amount: amount,
                raw: `Clausula: ${team} ha pagado ${amount}€`
            });
            clausulasAdded++;
            console.log(`  ${team}: -${amount} (Clausula)`);
        }
    });
} catch (e) {
    console.log("Clausulas actuales file not found or empty.");
}

// Assign IDs
finalMovements.forEach(m => {
    // Fill date if missing for display purposes (though deduplication should have removed most)
    if (!m.date) m.date = "Sin Fecha";
    m.id = generateHash(m);
});

// Generate localStorage data
const data = JSON.stringify(finalMovements);

// Write to a file
fs.writeFileSync('movements_data.json', data);
console.log(`\nSaved to movements_data.json (${(data.length / 1024).toFixed(1)} KB)`);

// Generate stats
const stats = {};
finalMovements.forEach(m => {
    stats[m.type] = (stats[m.type] || 0) + 1;
});
console.log('\nMovements by type:');
Object.entries(stats).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`);
});
