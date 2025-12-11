/**
 * Fantasy Money Monitor v3.0
 * Professional Fantasy League Financial Analysis
 */

// ============================
// CONFIGURATION
// ============================
const CONFIG = {
    TEAMS: {
        'GOLENCIERRO FC': { initialBudget: 103000000, aliases: [] },
        'Vigar24': { initialBudget: 103000000, aliases: ['Vigar FC'] },
        'Visite La Manga FC': { initialBudget: 103000000, aliases: [] },
        'Pablinistan FC': { initialBudget: 103000000, aliases: [] },
        'Alcatamy eSports By': { initialBudget: 100000000, aliases: ['Alcatamy'] },
        'Morenazos FC': { initialBudget: 103000000, aliases: [] }
    },
    MAX_DEBT_PERCENT: 0.20,
    AUTH: {
        PASSWORD: 'qqqq',
        SESSION_KEY: 'fantasy_auth_session'
    },
    STORAGE_KEYS: {
        MOVEMENTS: 'fantasy_movements',
        TEAM_VALUES: 'fantasy_team_values',
        PLAYER_VALUES: 'fantasy_player_values'
    }
};

// ============================
// STATE MANAGEMENT
// ============================
const State = {
    movements: [],
    clausulasHistory: [],
    teamValues: {},
    playerValues: {},
    squads: {},

    init() {
        this.loadFromStorage();
        this.calculateSquads();
    },

    loadFromStorage() {
        const safeLoad = (key, defaultVal) => {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultVal;
            } catch (e) {
                console.warn(`Error loading key ${key}:`, e);
                return defaultVal;
            }
        };

        try {
            // Check if we have data in storage
            const savedMovements = localStorage.getItem(CONFIG.STORAGE_KEYS.MOVEMENTS);

            // If no data and OFFICIAL_DATA exists, initialize with it
            if (!savedMovements && typeof OFFICIAL_DATA !== 'undefined') {
                console.log('Initializing with OFFICIAL_DATA...');

                // 1. Initial Movements
                if (OFFICIAL_DATA.movementsRaw) {
                    this.movements = DataParser.parseMovements(OFFICIAL_DATA.movementsRaw.join('\n'));
                }

                // 2. Initial Clausulas
                if (OFFICIAL_DATA.clausulas) {
                    const today = new Date();
                    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

                    this.clausulasHistory = OFFICIAL_DATA.clausulas.map(c => ({
                        id: 'init_' + Math.random().toString(36).substr(2, 9),
                        date: formattedDate,
                        team: DataParser.normalizeTeamName(c.team),
                        player: 'Ajuste Clausulas (Oficial)',
                        amount: c.amount
                    }));
                }

                // CRITICAL: Re-normalize ALL team names BEFORE saving
                // This ensures aliases like 'Vigar FC' -> 'Vigar24' are applied
                this.movements = this.movements.map(m => ({
                    ...m,
                    team: DataParser.normalizeTeamName(m.team || ''),
                    fromTo: DataParser.normalizeTeamName(m.fromTo || '')
                }));

                this.saveToStorage();
            } else {
                this.movements = safeLoad(CONFIG.STORAGE_KEYS.MOVEMENTS, []);
                this.clausulasHistory = safeLoad('fantasy_clausulas_history', []);

                // Re-normalize loaded data to handle alias updates
                this.movements = this.movements.map(m => ({
                    ...m,
                    team: DataParser.normalizeTeamName(m.team || ''),
                    fromTo: DataParser.normalizeTeamName(m.fromTo || '')
                }));

                this.clausulasHistory = this.clausulasHistory.map(c => ({
                    ...c,
                    team: DataParser.normalizeTeamName(c.team || '')
                }));
            }

            this.teamValues = safeLoad(CONFIG.STORAGE_KEYS.TEAM_VALUES, {});
            this.playerValues = safeLoad(CONFIG.STORAGE_KEYS.PLAYER_VALUES, {});

        } catch (e) {
            console.error('Critical - Error loading from storage:', e);
        }
    },

    saveToStorage() {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEYS.MOVEMENTS, JSON.stringify(this.movements));
            localStorage.setItem(CONFIG.STORAGE_KEYS.TEAM_VALUES, JSON.stringify(this.teamValues));
            localStorage.setItem(CONFIG.STORAGE_KEYS.PLAYER_VALUES, JSON.stringify(this.playerValues));
            localStorage.setItem('fantasy_clausulas_history', JSON.stringify(this.clausulasHistory));
        } catch (e) {
            console.error('Error saving to storage:', e);
        }
    },

    calculateSquads() {
        this.squads = {};
        Object.keys(CONFIG.TEAMS).forEach(team => {
            this.squads[team] = [];
        });

        const sortedMovements = [...this.movements].sort((a, b) => {
            const dateA = this.parseDate(a.date);
            const dateB = this.parseDate(b.date);
            return dateA - dateB;
        });

        sortedMovements.forEach(mov => {
            if (mov.type === 'compra') {
                Object.keys(this.squads).forEach(team => {
                    this.squads[team] = this.squads[team].filter(p => p.player !== mov.player);
                });
                if (this.squads[mov.team]) {
                    this.squads[mov.team].push({
                        player: mov.player,
                        purchasePrice: mov.amount,
                        purchaseDate: mov.date,
                        shielded: false
                    });
                }
            } else if (mov.type === 'venta') {
                if (this.squads[mov.team]) {
                    this.squads[mov.team] = this.squads[mov.team].filter(p => p.player !== mov.player);
                }
            } else if (mov.type === 'blindaje') {
                const player = this.squads[mov.team]?.find(p => p.player === mov.player);
                if (player) {
                    player.shielded = true;
                    player.shieldDate = mov.date;
                }
            }
        });
    },

    parseDate(dateStr) {
        if (!dateStr) return new Date(0);

        // 1. Try DD/MM/YYYY (Standard format for this app)
        if (dateStr.includes('/')) {
            const parts = dateStr.split('/');
            if (parts.length === 3) {
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1;
                const year = parseInt(parts[2], 10);
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                    return new Date(year, month, day);
                }
            }
        }

        // 2. Try native parsing (ISO, etc.)
        const d = new Date(dateStr);
        return isNaN(d.getTime()) ? new Date(0) : d;
    }
};

// ============================
// DATA PARSER
// ============================
const DataParser = {
    parseMovements(text) {
        const lines = text.trim().split('\n').filter(line => line.trim());
        const movements = [];

        // Multi-line format detection:
        // Format 1: "DD/MM/YYYY | content" (single line, legacy)
        // Format 2: Multi-line from app paste:
        //   [Operación de mercado | Blindaje | 11 ideal | ...]
        //   Team ha comprado/vendido/blindado...
        //   [HH:MM | DD/MM/YYYY]

        let i = 0;
        while (i < lines.length) {
            const line = lines[i].trim();

            // Try legacy format first (DD/MM/YYYY | content)
            const legacyMatch = line.match(/^(\d{2}\/\d{2}\/\d{4})\s*\|\s*(.+)$/);
            if (legacyMatch) {
                const parsed = this.parseContent(legacyMatch[2], legacyMatch[1]);
                if (parsed) {
                    parsed.id = this.generateHash(parsed);
                    parsed.raw = line;
                    movements.push(parsed);
                }
                i++;
                continue;
            }

            // Skip header lines (Operación de mercado, Blindaje, 11 ideal, etc.)
            if (/^(Operación de mercado|Blindaje|11 ideal|Compra|Venta|Mercado)$/i.test(line)) {
                i++;
                continue;
            }

            // Check if this line contains a movement action
            const isMovementLine = /ha (comprado|vendido|blindado|ganado)/i.test(line);

            if (isMovementLine) {
                // Look for date/time in next line
                let date = '';
                const nextLine = lines[i + 1]?.trim() || '';

                // Check if next line is a date (DD/MM/YYYY)
                if (/^\d{2}\/\d{2}\/\d{4}$/.test(nextLine)) {
                    date = nextLine;
                    i++; // Consume the date line
                }
                // Check if next line is a time (HH:MM) - use today's date
                else if (/^\d{2}:\d{2}$/.test(nextLine)) {
                    const today = new Date();
                    date = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
                    i++; // Consume the time line
                }
                // No date found, use today
                else {
                    const today = new Date();
                    date = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
                }

                const parsed = this.parseContent(line, date);
                if (parsed) {
                    parsed.id = this.generateHash(parsed);
                    parsed.raw = line;
                    movements.push(parsed);
                }
            }

            i++;
        }

        return movements;
    },

    parseLine(line) {
        // Legacy single-line format support
        let date = '';
        let content = line;

        const dateMatch = line.match(/^(\d{2}\/\d{2}\/\d{4})\s*\|\s*(.+)$/);
        const noDateMatch = line.match(/^\s*\|\s*(.+)$/);

        if (dateMatch) {
            date = dateMatch[1];
            content = dateMatch[2];
        } else if (noDateMatch) {
            const today = new Date();
            date = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
            content = noDateMatch[1];
        } else {
            return null;
        }

        return this.parseContent(content, date);
    },

    parseContent(content, date) {
        // Known team patterns to detect where player name ends
        const teamPatterns = Object.keys(CONFIG.TEAMS).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        teamPatterns.push('LALIGA'); // Add system team

        // Add aliases
        Object.values(CONFIG.TEAMS).forEach(t => {
            if (t.aliases) {
                t.aliases.forEach(a => teamPatterns.push(a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
            }
        });

        const teamRegex = new RegExp(`(${teamPatterns.join('|')})`, 'i');

        // COMPRA: Team ha comprado al jugador Player de OtroTeam por Amount€
        // Use greedy match for player name to handle "F. de Jong"
        const compraMatch = content.match(/^(.+?)\s+ha comprado al jugador\s+(.+)\s+de\s+(.+?)\s+por\s+([\d.]+)[€]?.*$/i);
        if (compraMatch) {
            let player = compraMatch[2].trim();
            let fromTeam = compraMatch[3].trim();

            // Check if fromTeam looks like a team (if not, the split was wrong)
            if (!teamRegex.test(fromTeam)) {
                // Try to find the last occurrence of " de TeamName" in the full match
                const fullMatch = compraMatch[2] + ' de ' + compraMatch[3];
                for (const pattern of teamPatterns) {
                    const teamIdx = fullMatch.toLowerCase().lastIndexOf(' de ' + pattern.toLowerCase());
                    if (teamIdx > 0) {
                        player = fullMatch.substring(0, teamIdx).trim();
                        fromTeam = fullMatch.substring(teamIdx + 4).trim(); // +4 for " de "
                        break;
                    }
                }
            }

            return {
                date,
                team: this.normalizeTeamName(compraMatch[1].trim()),
                type: 'compra',
                player: player,
                fromTo: this.normalizeTeamName(fromTeam),
                amount: this.parseAmount(compraMatch[4])
            };
        }

        // VENTA: Team ha vendido al jugador Player a OtroTeam por Amount€
        const ventaMatch = content.match(/^(.+?)\s+ha vendido al jugador\s+(.+)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$/i);
        if (ventaMatch) {
            let player = ventaMatch[2].trim();
            let toTeam = ventaMatch[3].trim();

            // Check if toTeam looks like a team
            if (!teamRegex.test(toTeam)) {
                const fullMatch = ventaMatch[2] + ' a ' + ventaMatch[3];
                for (const pattern of teamPatterns) {
                    const teamIdx = fullMatch.toLowerCase().lastIndexOf(' a ' + pattern.toLowerCase());
                    if (teamIdx > 0) {
                        player = fullMatch.substring(0, teamIdx).trim();
                        toTeam = fullMatch.substring(teamIdx + 3).trim(); // +3 for " a "
                        break;
                    }
                }
            }

            return {
                date,
                team: this.normalizeTeamName(ventaMatch[1].trim()),
                type: 'venta',
                player: player,
                fromTo: this.normalizeTeamName(toTeam),
                amount: this.parseAmount(ventaMatch[4])
            };
        }

        const blindajeMatch = content.match(/^(.+?)\s+ha blindado a\s+(.+)$/i);
        if (blindajeMatch) {
            return {
                date,
                team: this.normalizeTeamName(blindajeMatch[1].trim()),
                type: 'blindaje',
                player: blindajeMatch[2].trim(),
                fromTo: '-',
                amount: 0
            };
        }

        const jornadaMatch = content.match(/^En la jornada\s+(\d+),\s+(.+?)\s+ha ganado\s+([\d.]+)€?$/i);
        if (jornadaMatch) {
            return {
                date,
                team: this.normalizeTeamName(jornadaMatch[2].trim()),
                type: 'jornada',
                player: `Jornada ${jornadaMatch[1]}`,
                fromTo: 'Premio',
                amount: this.parseAmount(jornadaMatch[3])
            };
        }

        const onceMatch = content.match(/^(.+?)\s+ha ganado\s+([\d.]+)€?\s+por tener jugadores en el 11 ideal de la jornada\s+(\d+)/i);
        if (onceMatch) {
            return {
                date,
                team: this.normalizeTeamName(onceMatch[1].trim()),
                type: 'once_ideal',
                player: `11 Ideal J${onceMatch[3]}`,
                fromTo: 'Premio',
                amount: this.parseAmount(onceMatch[2])
            };
        }

        return null;
    },

    parseAmount(amountStr) {
        return parseInt(amountStr.replace(/\./g, ''), 10) || 0;
    },

    normalizeTeamName(name) {
        const normalized = name.replace(/\s+/g, ' ').trim();
        const teams = Object.keys(CONFIG.TEAMS);

        // 1. Exact match
        const exactMatch = teams.find(t => t.toLowerCase() === normalized.toLowerCase());
        if (exactMatch) return exactMatch;

        // 2. Alias match
        for (const team of teams) {
            const aliases = CONFIG.TEAMS[team].aliases || [];
            if (aliases.some(alias => alias.toLowerCase() === normalized.toLowerCase())) {
                return team;
            }
        }

        // 3. StartsWith match (fallback)
        const startsWithMatch = teams.find(t =>
            normalized.toLowerCase().startsWith(t.toLowerCase()) ||
            t.toLowerCase().startsWith(normalized.toLowerCase())
        );
        if (startsWithMatch) return startsWithMatch;

        return normalized;
    },

    generateHash(movement) {
        const str = `${movement.type}|${movement.team}|${movement.player}|${movement.amount}`;
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16);
    },

    parseTeamValues(text) {
        const lines = text.trim().split('\n').filter(line => line.trim());
        const values = {};
        let currentTeam = null;
        const teamNames = Object.keys(CONFIG.TEAMS);

        lines.forEach(line => {
            const trimmed = line.trim();
            // Check if line is a team name
            const matchedTeam = teamNames.find(t =>
                trimmed.toLowerCase().includes(t.toLowerCase()) ||
                t.toLowerCase().includes(trimmed.toLowerCase())
            );

            if (matchedTeam) {
                currentTeam = matchedTeam;
            } else if (currentTeam) {
                // Try to find a numeric value (min 1 million to avoid ranking numbers like "1", "2")
                // Remove currency symbols, chars, keep only digits and dots
                const clean = trimmed.replace(/[^\d.]/g, '');
                if (clean && clean.includes('.')) {
                    // Check if it looks like a money value
                    const val = this.parseAmount(clean);
                    if (val > 1000000) { // arbitrary threshold to ignore "1.020 PFSY" points if mixed
                        values[currentTeam] = val;
                        // Don't null currentTeam, keep it until next team found? 
                        // Usually value comes once. But let's verify.
                        // Actually, looking at file: "1.102 PFSY" (points) vs "702.151.510".
                        // Money matches "large number". Points usually small thousand.
                    }
                }
            }
        });
        return values;
    },

    isDuplicate(movement) {
        return State.movements.some(m => m.id === movement.id);
    }
};

// ============================
// CALCULATOR
// ============================
const Calculator = {
    getTeamStats(teamName) {
        const team = CONFIG.TEAMS[teamName];
        if (!team) return null;

        const movements = State.movements.filter(m => m.team === teamName);

        // Find purchases FROM me by others (Potential income)
        const interTeamSalesToMe = State.movements.filter(m =>
            m.type === 'compra' &&
            m.fromTo === teamName &&
            m.team !== teamName
        );

        let purchases = 0;
        let sales = 0;
        let jornadaEarnings = 0;
        let onceIdealEarnings = 0;
        let shields = 0;

        movements.forEach(m => {
            switch (m.type) {
                case 'compra': purchases += m.amount; break;
                case 'venta': sales += m.amount; break;
                case 'jornada': jornadaEarnings += m.amount; break;
                case 'once_ideal': onceIdealEarnings += m.amount; break;
                case 'blindaje': shields++; break;
            }
        });

        // Smart Logic: Only add inferred income if there isn't an explicit 'venta' movement
        // matching this transaction. This handles both Single-Entry (TXT) and Double-Entry (CSV) data.
        interTeamSalesToMe.forEach(buyMov => {
            // Check if I (teamName) have an explicit 'venta' of this player to the buyer
            const hasExplicitSale = movements.some(m =>
                m.type === 'venta' &&
                m.player === buyMov.player &&
                m.amount === buyMov.amount &&
                // Fuzzy date check (within 1 day) or ignore date? 
                // Given the CSV has identical dates, strict date or exact match is fine.
                // Let's rely on Price + Player + Buyer(fromTo/team)
                m.fromTo === buyMov.team
            );

            if (!hasExplicitSale) {
                sales += buyMov.amount;
            }
        });

        // Clausulas from history
        const teamClausulas = State.clausulasHistory.filter(c => c.team === teamName);
        const clausulasTotal = teamClausulas.reduce((sum, c) => sum + c.amount, 0);

        const currentBudget = team.initialBudget + sales - purchases - clausulasTotal + jornadaEarnings + onceIdealEarnings;
        const teamValue = State.teamValues[teamName] || 0;
        const maxBid = currentBudget + (teamValue * CONFIG.MAX_DEBT_PERCENT);
        const balance = sales - purchases - clausulasTotal;
        const roi = purchases > 0 ? ((sales / purchases) - 1) * 100 : 0;

        return {
            name: teamName,
            initialBudget: team.initialBudget,
            clausulas: clausulasTotal,
            currentBudget,
            teamValue,
            maxBid,
            balance,
            purchases,
            sales,
            jornadaEarnings,
            onceIdealEarnings,
            shields,
            roi,
            totalMovements: movements.length,
            squad: State.squads[teamName] || []
        };
    },

    getAllTeamStats() {
        return Object.keys(CONFIG.TEAMS).map(team => this.getTeamStats(team));
    },

    getGlobalStats() {
        const allMovements = State.movements;
        const teamStats = this.getAllTeamStats();

        const totalVolume = allMovements
            .filter(m => m.type === 'compra' || m.type === 'venta')
            .reduce((sum, m) => sum + m.amount, 0);

        const purchases = allMovements.filter(m => m.type === 'compra');
        const mostExpensive = purchases.reduce((max, m) => m.amount > (max?.amount || 0) ? m : max, null);

        const teamCounts = {};
        allMovements.forEach(m => {
            teamCounts[m.team] = (teamCounts[m.team] || 0) + 1;
        });
        const mostActive = Object.entries(teamCounts).reduce((max, [team, count]) =>
            count > (max?.count || 0) ? { team, count } : max, null);

        const playerTrades = {};
        allMovements.filter(m => m.type === 'compra' || m.type === 'venta').forEach(m => {
            playerTrades[m.player] = (playerTrades[m.player] || 0) + 1;
        });
        const mostTraded = Object.entries(playerTrades)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        const topSignings = [...purchases]
            .sort((a, b) => b.amount - a.amount)
            .slice(0, 10);

        const playerPurchases = {};
        const playerSales = {};

        allMovements.forEach(m => {
            if (m.type === 'compra') {
                if (!playerPurchases[m.player]) playerPurchases[m.player] = [];
                playerPurchases[m.player].push(m);
            } else if (m.type === 'venta') {
                if (!playerSales[m.player]) playerSales[m.player] = [];
                playerSales[m.player].push(m);
            }
        });

        const plusvalias = [];
        Object.keys(playerSales).forEach(player => {
            const sales = playerSales[player] || [];
            const purchasesForPlayer = playerPurchases[player] || [];

            sales.forEach((sale, i) => {
                const purchase = purchasesForPlayer[i];
                if (purchase) {
                    plusvalias.push({
                        player,
                        purchasePrice: purchase.amount,
                        salePrice: sale.amount,
                        profit: sale.amount - purchase.amount,
                        profitPercent: purchase.amount > 0 ? ((sale.amount - purchase.amount) / purchase.amount * 100) : 0,
                        team: sale.team
                    });
                }
            });
        });

        const topPlusvalias = plusvalias.filter(p => p.profit > 0).sort((a, b) => b.profit - a.profit).slice(0, 10);
        const worstPlusvalias = plusvalias.filter(p => p.profit < 0).sort((a, b) => a.profit - b.profit).slice(0, 10);
        const teamSpending = [...teamStats].sort((a, b) => b.purchases - a.purchases);
        const teamSelling = [...teamStats].sort((a, b) => b.sales - a.sales);
        const teamROI = [...teamStats].sort((a, b) => b.roi - a.roi);
        const jornadaRanking = [...teamStats].sort((a, b) => (b.jornadaEarnings + b.onceIdealEarnings) - (a.jornadaEarnings + a.onceIdealEarnings));
        const shieldsRanking = [...teamStats].sort((a, b) => b.shields - a.shields);

        const avgPrices = teamStats.map(team => {
            const teamPurchases = purchases.filter(p => p.team === team.name);
            const avg = teamPurchases.length > 0
                ? teamPurchases.reduce((s, p) => s + p.amount, 0) / teamPurchases.length
                : 0;
            return { ...team, avgPurchase: avg, purchaseCount: teamPurchases.length };
        }).sort((a, b) => b.avgPurchase - a.avgPurchase);

        return {
            totalVolume,
            totalMovements: allMovements.length,
            mostExpensive,
            mostActive,
            mostTraded,
            topSignings,
            topPlusvalias,
            worstPlusvalias,
            teamSpending,
            teamSelling,
            teamROI,
            jornadaRanking,
            shieldsRanking,
            avgPrices,
            teamStats
        };
    },

    /**
     * FINANCIAL AUDIT: Validates money conservation across all teams
     * The sum of all team budgets should equal:
     * - Sum of initial budgets
     * - Plus: All earnings from system (jornada, 11 ideal, sales to LALIGA)
     * - Minus: All costs to system (purchases from LALIGA, clausulas)
     */
    validateMoneyConservation() {
        const teamStats = this.getAllTeamStats();
        const teams = Object.keys(CONFIG.TEAMS);

        // Calculate total current money in the league
        const totalCurrentMoney = teamStats.reduce((sum, t) => sum + t.currentBudget, 0);

        // Calculate expected initial money
        const totalInitialMoney = Object.values(CONFIG.TEAMS).reduce((sum, t) => sum + t.initialBudget, 0);

        // Calculate system flows (money entering/leaving the league)
        let systemIncome = 0;  // Money entering from outside (jornada, 11 ideal, sales to LALIGA)
        let systemCosts = 0;   // Money leaving (purchases from LALIGA, clausulas)

        State.movements.forEach(m => {
            if (m.type === 'jornada' || m.type === 'once_ideal') {
                systemIncome += m.amount;
            }
            if (m.type === 'venta' && m.fromTo === 'LALIGA') {
                systemIncome += m.amount;
            }
            if (m.type === 'compra' && m.fromTo === 'LALIGA') {
                systemCosts += m.amount;
            }
        });

        // Clausulas are costs to system
        const totalClausulas = State.clausulasHistory.reduce((sum, c) => sum + c.amount, 0);
        systemCosts += totalClausulas;

        const expectedTotal = totalInitialMoney + systemIncome - systemCosts;
        const difference = totalCurrentMoney - expectedTotal;
        const isBalanced = Math.abs(difference) < 1; // Allow 1€ rounding error

        return {
            isBalanced,
            totalCurrentMoney,
            expectedTotal,
            difference,
            breakdown: {
                initialMoney: totalInitialMoney,
                systemIncome,
                systemCosts,
                totalClausulas
            },
            perTeam: teamStats.map(t => ({
                team: t.name,
                budget: t.currentBudget,
                purchases: t.purchases,
                sales: t.sales,
                clausulas: t.clausulas,
                earnings: t.jornadaEarnings + t.onceIdealEarnings
            }))
        };
    },

    /**
     * FINANCIAL AUDIT: Tests that inter-team transfers conserve money
     * If TeamA buys from TeamB, the sum of their budgets should remain constant
     */
    testTransferConservation(buyerName, sellerName) {
        const buyerStats = this.getTeamStats(buyerName);
        const sellerStats = this.getTeamStats(sellerName);

        if (!buyerStats || !sellerStats) {
            return { error: 'One or both teams not found' };
        }

        // Find all transfers between these two teams
        const transfers = State.movements.filter(m =>
            m.type === 'compra' &&
            m.team === buyerName &&
            m.fromTo === sellerName
        );

        const reverseTransfers = State.movements.filter(m =>
            m.type === 'compra' &&
            m.team === sellerName &&
            m.fromTo === buyerName
        );

        const totalBuyerPaidToSeller = transfers.reduce((s, m) => s + m.amount, 0);
        const totalSellerPaidToBuyer = reverseTransfers.reduce((s, m) => s + m.amount, 0);
        const netFlow = totalBuyerPaidToSeller - totalSellerPaidToBuyer;

        return {
            buyer: buyerName,
            seller: sellerName,
            buyerBudget: buyerStats.currentBudget,
            sellerBudget: sellerStats.currentBudget,
            combinedBudget: buyerStats.currentBudget + sellerStats.currentBudget,
            transfersFromBuyerToSeller: transfers.length,
            transfersFromSellerToBuyer: reverseTransfers.length,
            totalBuyerPaidToSeller,
            totalSellerPaidToBuyer,
            netFlow
        };
    },

    /**
     * FINANCIAL AUDIT: Full audit report
     */
    runFullAudit() {
        const conservation = this.validateMoneyConservation();
        const teamPairs = [];
        const teams = Object.keys(CONFIG.TEAMS);

        // Test conservation between all team pairs
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                teamPairs.push(this.testTransferConservation(teams[i], teams[j]));
            }
        }

        console.log('='.repeat(60));
        console.log('💰 FINANCIAL AUDIT REPORT');
        console.log('='.repeat(60));
        console.log(`Money Conservation: ${conservation.isBalanced ? '✅ BALANCED' : '❌ IMBALANCED'}`);
        console.log(`Total in League: ${(conservation.totalCurrentMoney / 1e6).toFixed(1)}M`);
        console.log(`Expected Total: ${(conservation.expectedTotal / 1e6).toFixed(1)}M`);
        console.log(`Difference: ${(conservation.difference / 1e6).toFixed(1)}M`);
        console.log('-'.repeat(60));
        console.log('Breakdown:');
        console.log(`  Initial: ${(conservation.breakdown.initialMoney / 1e6).toFixed(1)}M`);
        console.log(`  +System Income: ${(conservation.breakdown.systemIncome / 1e6).toFixed(1)}M`);
        console.log(`  -System Costs: ${(conservation.breakdown.systemCosts / 1e6).toFixed(1)}M`);
        console.log('='.repeat(60));

        return { conservation, teamPairs };
    }
};

// ============================
// UI CONTROLLER
// ============================
const UI = {
    init() {
        this.bindEvents();
        this.render();
    },

    bindEvents() {
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
        });

        document.getElementById('btnAddMovements').addEventListener('click', () => this.openModal('modalAddMovements'));
        document.getElementById('btnUpdateValues').addEventListener('click', () => this.openModal('modalUpdateValues'));

        const btnReset = document.getElementById('btnResetData');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                if (confirm('⚠️ ¿Estás seguro? Se borrarán todos los cambios locales y se recargarán los datos oficiales.')) {
                    try {
                        localStorage.clear();
                        sessionStorage.removeItem(CONFIG.AUTH.SESSION_KEY); // Also reset auth
                        location.reload();
                    } catch (e) { console.error(e); }
                }
            });
        }

        document.getElementById('closeAddMovements').addEventListener('click', () => this.closeModal('modalAddMovements'));
        document.getElementById('closeUpdateValues').addEventListener('click', () => this.closeModal('modalUpdateValues'));
        document.getElementById('closeTeamDetail').addEventListener('click', () => this.closeModal('modalTeamDetail'));

        document.getElementById('cancelAddMovements').addEventListener('click', () => this.closeModal('modalAddMovements'));
        document.getElementById('cancelUpdateValues').addEventListener('click', () => this.closeModal('modalUpdateValues'));

        document.getElementById('movementsInput').addEventListener('input', (e) => {
            const lines = e.target.value.trim().split('\n').filter(l => l.trim()).length;
            document.getElementById('linesDetected').textContent = `${lines} líneas detectadas`;
        });

        document.getElementById('btnPreviewMovements').addEventListener('click', () => this.previewMovements());
        document.getElementById('confirmAddMovements').addEventListener('click', () => this.confirmMovements());

        document.getElementById('previewValues').addEventListener('click', () => this.previewValues());
        document.getElementById('confirmUpdateValues').addEventListener('click', () => this.confirmValues());

        document.getElementById('filterTeam').addEventListener('change', () => this.renderMovementsTable());
        document.getElementById('filterType').addEventListener('change', () => this.renderMovementsTable());
        document.getElementById('filterPlayer').addEventListener('input', () => this.renderMovementsTable());

        document.getElementById('btnExportCSV').addEventListener('click', () => this.exportCSV());

        // Clausulas UI
        const btnAddClausula = document.getElementById('btnAddClausula');
        if (btnAddClausula) {
            btnAddClausula.addEventListener('click', () => this.addClausula());
        }

        const teamSelect = document.getElementById('clausulaTeam');
        if (teamSelect) {
            Object.keys(CONFIG.TEAMS).forEach(team => {
                const option = document.createElement('option');
                option.value = team;
                option.textContent = team;
                teamSelect.appendChild(option);
            });
        }

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal(modal.id);
            });
        });
    },

    switchTab(tabId) {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');

        if (tabId === 'movements') this.renderMovementsTable();
        if (tabId === 'squads') this.renderSquads();
        if (tabId === 'analytics') this.renderAnalytics();
        if (tabId === 'clausulas') this.renderClausulas();
    },

    openModal(modalId) {
        document.getElementById(modalId).classList.add('active');
    },

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        if (modalId === 'modalAddMovements') {
            document.getElementById('movementsInput').value = '';
            document.getElementById('previewSection').style.display = 'none';
            document.getElementById('confirmAddMovements').disabled = true;
            document.getElementById('linesDetected').textContent = '0 líneas detectadas';
        }
        if (modalId === 'modalUpdateValues') {
            document.getElementById('valuesInput').value = '';
            document.getElementById('valuesPreview').style.display = 'none';
            document.getElementById('confirmUpdateValues').disabled = true;
        }
    },

    render() {
        this.renderDashboard();
        this.renderFilters();
        this.renderMovementsTable();
        this.renderClausulas();
        this.renderCharts();
    },

    renderDashboard() {
        const stats = Calculator.getGlobalStats();

        document.getElementById('totalMarketVolume').textContent = this.formatMoney(stats.totalVolume);
        document.getElementById('totalMovements').textContent = stats.totalMovements;
        document.getElementById('mostExpensivePlayer').textContent = stats.mostExpensive
            ? `${stats.mostExpensive.player} (${this.formatMoney(stats.mostExpensive.amount)})`
            : '-';
        document.getElementById('mostActiveTeam').textContent = stats.mostActive
            ? `${stats.mostActive.team} (${stats.mostActive.count})`
            : '-';

        const grid = document.getElementById('teamsGrid');
        grid.innerHTML = stats.teamStats.map(team => this.renderTeamCard(team)).join('');

        grid.querySelectorAll('.team-card').forEach(card => {
            card.addEventListener('click', () => this.showTeamDetail(card.dataset.team));
        });
    },

    renderTeamCard(team) {
        const balanceClass = team.balance >= 0 ? 'positive' : 'negative';
        const badgeClass = team.balance >= 0 ? 'badge-positive' : 'badge-negative';
        const maxBidPercent = team.teamValue > 0
            ? Math.min(100, (team.currentBudget / team.maxBid) * 100 + 50)
            : 50;

        return `
            <div class="team-card" data-team="${team.name}">
                <div class="team-header">
                    <h3 class="team-name">${team.name}</h3>
                    <span class="team-badge ${badgeClass}">
                        ${team.balance >= 0 ? '+' : ''}${this.formatMoney(team.balance)}
                    </span>
                </div>
                <div class="team-stats">
                    <div class="team-stat">
                        <span class="team-stat-label">💰 Presupuesto</span>
                        <span class="team-stat-value">${this.formatMoney(team.currentBudget)}</span>
                    </div>
                    <div class="team-stat">
                        <span class="team-stat-label">📈 Valor Equipo</span>
                        <span class="team-stat-value">${this.formatMoney(team.teamValue)}</span>
                    </div>
                    <div class="team-stat">
                        <span class="team-stat-label">🎯 Puja Máxima</span>
                        <span class="team-stat-value">${this.formatMoney(team.maxBid)}</span>
                    </div>
                    <div class="team-stat">
                        <span class="team-stat-label">🏆 Jornadas</span>
                        <span class="team-stat-value positive">${this.formatMoney(team.jornadaEarnings + team.onceIdealEarnings)}</span>
                    </div>
                    <div class="team-stat">
                        <span class="team-stat-label">📋 Cláusulas</span>
                        <span class="team-stat-value negative">${this.formatMoney(team.clausulas)}</span>
                    </div>
                    <div class="team-stat">
                        <span class="team-stat-label">🛡️ Blindajes</span>
                        <span class="team-stat-value">${team.shields}</span>
                    </div>
                    <div class="team-stat">
                        <span class="team-stat-label">📊 ROI</span>
                        <span class="team-stat-value ${team.roi >= 0 ? 'positive' : 'negative'}">${team.roi.toFixed(1)}%</span>
                    </div>
                </div>
                <div class="max-bid-bar">
                    <div class="max-bid-fill" style="width: ${maxBidPercent}%"></div>
                </div>
            </div>
        `;
    },

    renderFilters() {
        const filterTeam = document.getElementById('filterTeam');
        filterTeam.innerHTML = '<option value="">Todos los equipos</option>' +
            Object.keys(CONFIG.TEAMS).map(t => `<option value="${t}">${t}</option>`).join('');
    },

    renderMovementsTable() {
        const filterTeam = document.getElementById('filterTeam').value;
        const filterType = document.getElementById('filterType').value;
        const filterPlayer = document.getElementById('filterPlayer').value.toLowerCase();

        let movements = [...State.movements].sort((a, b) => {
            const dateA = State.parseDate(a.date);
            const dateB = State.parseDate(b.date);
            return dateB - dateA;
        });

        if (filterTeam) movements = movements.filter(m => m.team === filterTeam);
        if (filterType) movements = movements.filter(m => m.type === filterType);
        if (filterPlayer) movements = movements.filter(m => m.player.toLowerCase().includes(filterPlayer));

        const tbody = document.getElementById('movementsBody');
        tbody.innerHTML = movements.slice(0, 200).map(m => `
            <tr>
                <td>${m.date || '-'}</td>
                <td>${m.team}</td>
                <td><span class="type-badge type-${m.type}">${this.getTypeLabel(m.type)}</span></td>
                <td>${m.player}</td>
                <td>${m.fromTo}</td>
                <td>${m.amount > 0 ? this.formatMoney(m.amount) : '-'}</td>
            </tr>
        `).join('');
    },

    renderClausulas() {
        const list = State.clausulasHistory || [];
        const total = list.reduce((sum, item) => sum + item.amount, 0);

        const totalEl = document.getElementById('totalClausulasAmount');
        if (totalEl) totalEl.textContent = this.formatMoney(total);

        const tbody = document.getElementById('clausulasBody');
        if (tbody) {
            tbody.innerHTML = list
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map(item => `
                <tr>
                    <td>${item.date || '-'}</td>
                    <td>${item.team}</td>
                    <td>${item.player}</td>
                    <td class="negative">${this.formatMoney(item.amount)}</td>
                    <td><button class="btn-xs btn-danger" onclick="UI.deleteClausula('${item.id}')">Eliminar</button></td>
                </tr>
            `).join('');
        }

        window.UI = this;
    },

    addClausula() {
        const team = document.getElementById('clausulaTeam').value;
        const player = document.getElementById('clausulaPlayer').value;
        const amountStr = document.getElementById('clausulaAmount').value;
        const date = document.getElementById('clausulaDate').value;

        if (!team || !player || !amountStr) {
            this.showToast('⚠️ Rellena todos los campos', 'error');
            return;
        }

        const amount = DataParser.parseAmount(amountStr);
        let formattedDate = new Date().toLocaleDateString();
        if (date) {
            const parts = date.split('-');
            formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }

        const newClausula = {
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            date: formattedDate,
            team,
            player,
            amount
        };

        State.clausulasHistory.push(newClausula);
        State.saveToStorage();
        this.render();
        this.showToast('✅ Cláusula añadida', 'success');

        document.getElementById('clausulaPlayer').value = '';
        document.getElementById('clausulaAmount').value = '';
    },

    deleteClausula(id) {
        if (confirm('¿Seguro que quieres borrar este registro?')) {
            State.clausulasHistory = State.clausulasHistory.filter(c => String(c.id) !== String(id));
            State.saveToStorage();
            this.render();
            this.showToast('🗑️ Registro borrado', 'info');
        }
    },

    renderSquads() {
        const stats = Calculator.getAllTeamStats();
        const grid = document.getElementById('squadsGrid');

        grid.innerHTML = stats.map(team => {
            const players = team.squad.map(p => {
                const currentValue = State.playerValues[p.player] || 0;
                const diff = currentValue - p.purchasePrice;
                const diffPercent = p.purchasePrice > 0 ? (diff / p.purchasePrice * 100) : 0;
                const diffClass = diff >= 0 ? 'positive' : 'negative';

                return `
                    <div class="squad-player">
                        <div class="player-info">
                            <span class="player-name">${p.shielded ? '🛡️ ' : ''}${p.player}</span>
                            <span class="player-purchase">Compra: ${this.formatMoney(p.purchasePrice)}</span>
                        </div>
                        <div class="player-value-change">
                            <span class="current-value">${currentValue > 0 ? this.formatMoney(currentValue) : '-'}</span>
                            ${currentValue > 0 ? `<span class="value-diff ${diffClass}">${diff >= 0 ? '+' : ''}${diffPercent.toFixed(1)}%</span>` : ''}
                        </div>
                    </div>
                `;
            }).join('');

            const totalPurchase = team.squad.reduce((sum, p) => sum + p.purchasePrice, 0);

            return `
                <div class="squad-card">
                    <div class="squad-header">
                        <span class="squad-name">${team.name}</span>
                        <span class="squad-value">${team.squad.length} jugadores | ${this.formatMoney(totalPurchase)}</span>
                    </div>
                    <div class="squad-players">
                        ${players || '<p style="padding: 1rem; color: var(--text-secondary);">Sin jugadores</p>'}
                    </div>
                </div>
            `;
        }).join('');
    },

    renderAnalytics() {
        const stats = Calculator.getGlobalStats();

        document.getElementById('topSignings').innerHTML = stats.topSignings.map((s, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${s.player} → ${s.team}</span>
                <span class="analytics-value">${this.formatMoney(s.amount)}</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('topSales').innerHTML = stats.topPlusvalias.map((s, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${s.player} (${s.team})</span>
                <span class="analytics-value" style="color: var(--accent-emerald)">
                    +${this.formatMoney(s.profit)} (+${s.profitPercent?.toFixed(0) || 0}%)
                </span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('worstSales').innerHTML = stats.worstPlusvalias.map((s, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${s.player} (${s.team})</span>
                <span class="analytics-value" style="color: var(--accent-rose)">
                    ${this.formatMoney(s.profit)} (${s.profitPercent?.toFixed(0) || 0}%)
                </span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('mostTraded').innerHTML = stats.mostTraded.map(([player, count], i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${player}</span>
                <span class="analytics-value">${count} traspasos</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('teamSpending').innerHTML = stats.teamSpending.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value">${this.formatMoney(t.purchases)}</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('teamSelling').innerHTML = stats.teamSelling.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value">${this.formatMoney(t.sales)}</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('teamROI').innerHTML = stats.teamROI.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value" style="color: ${t.roi >= 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)'}">
                    ${t.roi >= 0 ? '+' : ''}${t.roi.toFixed(1)}%
                </span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('jornadaRanking').innerHTML = stats.jornadaRanking.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value" style="color: var(--accent-emerald)">
                    ${this.formatMoney(t.jornadaEarnings + t.onceIdealEarnings)}
                </span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('shieldsRanking').innerHTML = stats.shieldsRanking.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value">${t.shields} blindajes</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        document.getElementById('avgPrices').innerHTML = stats.avgPrices.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name} (${t.purchaseCount})</span>
                <span class="analytics-value">${this.formatMoney(t.avgPurchase)}</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        this.renderRadarChart(stats.teamStats);
    },

    renderCharts() {
        const stats = Calculator.getAllTeamStats();

        const budgetCtx = document.getElementById('budgetChart').getContext('2d');
        if (window.budgetChart && typeof window.budgetChart.destroy === 'function') {
            window.budgetChart.destroy();
        }

        window.budgetChart = new Chart(budgetCtx, {
            type: 'bar',
            data: {
                labels: stats.map(t => t.name),
                datasets: [{
                    label: 'Presupuesto Actual',
                    data: stats.map(t => t.currentBudget),
                    backgroundColor: 'rgba(139, 92, 246, 0.7)',
                    borderColor: 'rgb(139, 92, 246)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: { callback: (value) => this.formatMoney(value), color: '#888' },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    },
                    y: { ticks: { color: '#fff' }, grid: { display: false } }
                }
            }
        });

        const balanceCtx = document.getElementById('balanceChart').getContext('2d');
        if (window.balanceChart && typeof window.balanceChart.destroy === 'function') {
            window.balanceChart.destroy();
        }

        window.balanceChart = new Chart(balanceCtx, {
            type: 'bar',
            data: {
                labels: stats.map(t => t.name),
                datasets: [{
                    label: 'Balance',
                    data: stats.map(t => t.balance),
                    backgroundColor: stats.map(t => t.balance >= 0 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(244, 63, 94, 0.7)'),
                    borderColor: stats.map(t => t.balance >= 0 ? 'rgb(16, 185, 129)' : 'rgb(244, 63, 94)'),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: { callback: (value) => this.formatMoney(value), color: '#888' },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    },
                    y: { ticks: { color: '#fff' }, grid: { display: false } }
                }
            }
        });
    },

    renderRadarChart(teamStats) {
        const ctx = document.getElementById('radarChart');
        if (!ctx) return;

        if (window.radarChart && typeof window.radarChart.destroy === 'function') {
            window.radarChart.destroy();
        }

        const maxValues = {
            purchases: Math.max(...teamStats.map(t => t.purchases)),
            sales: Math.max(...teamStats.map(t => t.sales)),
            jornada: Math.max(...teamStats.map(t => t.jornadaEarnings + t.onceIdealEarnings)),
            shields: Math.max(...teamStats.map(t => t.shields)),
            movements: Math.max(...teamStats.map(t => t.totalMovements))
        };

        const colors = [
            'rgba(139, 92, 246, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(244, 63, 94, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(236, 72, 153, 0.7)'
        ];

        window.radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Compras', 'Ventas', 'Jornadas', 'Blindajes', 'Movimientos'],
                datasets: teamStats.map((team, i) => ({
                    label: team.name,
                    data: [
                        (team.purchases / maxValues.purchases) * 100 || 0,
                        (team.sales / maxValues.sales) * 100 || 0,
                        ((team.jornadaEarnings + team.onceIdealEarnings) / maxValues.jornada) * 100 || 0,
                        (team.shields / maxValues.shields) * 100 || 0,
                        (team.totalMovements / maxValues.movements) * 100 || 0
                    ],
                    backgroundColor: colors[i % colors.length].replace('0.7', '0.2'),
                    borderColor: colors[i % colors.length],
                    borderWidth: 2
                }))
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { display: false },
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        angleLines: { color: 'rgba(255,255,255,0.1)' },
                        pointLabels: { color: '#fff' }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#fff', boxWidth: 12 }
                    }
                }
            }
        });
    },

    showTeamDetail(teamName) {
        const stats = Calculator.getTeamStats(teamName);
        if (!stats) return;

        document.getElementById('detailTeamName').textContent = teamName;
        document.getElementById('detailInitialBudget').textContent = this.formatMoney(stats.initialBudget);
        document.getElementById('detailCurrentBudget').textContent = this.formatMoney(stats.currentBudget);
        document.getElementById('detailTeamValue').textContent = this.formatMoney(stats.teamValue);
        document.getElementById('detailMaxBid').textContent = this.formatMoney(stats.maxBid);
        document.getElementById('detailPurchases').textContent = this.formatMoney(stats.purchases);
        document.getElementById('detailSales').textContent = this.formatMoney(stats.sales);
        document.getElementById('detailClausulas').textContent = this.formatMoney(stats.clausulas);
        document.getElementById('detailJornada').textContent = this.formatMoney(stats.jornadaEarnings + stats.onceIdealEarnings);
        document.getElementById('detailShields').textContent = stats.shields;
        document.getElementById('detailROI').textContent = `${stats.roi.toFixed(1)}%`;

        this.openModal('modalTeamDetail');
    },

    previewMovements() {
        const text = document.getElementById('movementsInput').value;
        const movements = DataParser.parseMovements(text);

        const newMovements = movements.filter(m => !DataParser.isDuplicate(m));
        const duplicates = movements.length - newMovements.length;

        document.getElementById('previewSection').style.display = 'block';
        document.getElementById('previewStats').innerHTML = `
            <p><strong>${movements.length}</strong> movimientos detectados</p>
            <p class="${newMovements.length > 0 ? 'positive-text' : 'warning-text'}">
                <strong>${newMovements.length}</strong> nuevos | <strong>${duplicates}</strong> duplicados
            </p>
        `;

        this.pendingMovements = newMovements;
        // Don't strongly disable, just let them click and get a toast if 0
        const btn = document.getElementById('confirmAddMovements');
        btn.disabled = movements.length === 0;
        if (movements.length > 0 && newMovements.length === 0) {
            btn.textContent = "⚠️ Todos son duplicados";
        } else {
            btn.textContent = "Confirmar Importación";
        }
    },

    confirmMovements() {
        if (this.pendingMovements && this.pendingMovements.length > 0) {
            State.movements = [...State.movements, ...this.pendingMovements];
            State.saveToStorage();
            State.calculateSquads();
            this.render();
            this.closeModal('modalAddMovements');
            this.showToast(`✅ ${this.pendingMovements.length} movimientos añadidos`, 'success');
            this.pendingMovements = null;
        } else {
            this.showToast('⚠️ No hay movimientos nuevos para añadir', 'warning');
        }
    },

    previewValues() {
        const text = document.getElementById('valuesInput').value;
        const values = DataParser.parseTeamValues(text);

        if (Object.keys(values).length > 0) {
            document.getElementById('valuesPreview').style.display = 'block';
            document.getElementById('valuesPreview').innerHTML = Object.entries(values)
                .map(([team, value]) => `<p>${team}: ${this.formatMoney(value)}</p>`)
                .join('');

            this.pendingValues = values;
            document.getElementById('confirmUpdateValues').disabled = false;
        } else {
            document.getElementById('valuesPreview').innerHTML = '<p style="color: var(--accent-rose)">No se detectaron valores válidos</p>';
            document.getElementById('valuesPreview').style.display = 'block';
        }
    },

    confirmValues() {
        if (this.pendingValues) {
            State.teamValues = { ...State.teamValues, ...this.pendingValues };
            State.saveToStorage();
            this.render();
            this.closeModal('modalUpdateValues');
            this.showToast('✅ Valores actualizados', 'success');
            this.pendingValues = null;
        }
    },

    exportCSV() {
        const headers = ['Fecha', 'Equipo', 'Tipo', 'Jugador', 'De/A', 'Importe'];
        const rows = State.movements.map(m => [
            m.date, m.team, m.type, m.player, m.fromTo, m.amount
        ]);

        const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'movimientos_fantasy.csv';
        a.click();
        URL.revokeObjectURL(url);
    },

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed; bottom: 20px; right: 20px; padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#f43f5e' : '#3b82f6'};
            color: white; border-radius: 0.5rem; z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    formatMoney(amount) {
        if (amount >= 1000000000) return `${(amount / 1000000000).toFixed(1)}B€`;
        if (amount >= 1000000) return `${(amount / 1000000).toFixed(1)}M€`;
        if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K€`;
        return `${amount}€`;
    },

    getTypeLabel(type) {
        const labels = {
            compra: 'Compra',
            venta: 'Venta',
            blindaje: 'Blindaje',
            jornada: 'Jornada',
            once_ideal: '11 Ideal'
        };
        return labels[type] || type;
    },

    initAuth() {
        const overlay = document.getElementById('loginOverlay');
        if (!overlay) return;

        const input = document.getElementById('loginPassword');
        const btn = document.getElementById('btnLogin');
        const error = document.getElementById('loginError');

        if (sessionStorage.getItem(CONFIG.AUTH.SESSION_KEY) === 'true') {
            overlay.style.display = 'none';
            document.body.querySelectorAll('body > *:not(#loginOverlay)').forEach(el => el.style.filter = 'none');
            return;
        }

        const checkLogin = () => {
            if (input.value === CONFIG.AUTH.PASSWORD) {
                sessionStorage.setItem(CONFIG.AUTH.SESSION_KEY, 'true');
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    document.body.querySelectorAll('body > *:not(#loginOverlay)').forEach(el => el.style.filter = 'none');
                }, 300);
            } else {
                error.style.display = 'block';
                input.style.borderColor = '#f43f5e';
                input.value = '';
                input.focus();
            }
        };

        btn.addEventListener('click', checkLogin);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkLogin();
        });
    }
};

// ============================
// INITIALIZATION
// ============================
document.addEventListener('DOMContentLoaded', () => {
    UI.initAuth();
    State.init();
    UI.init();
});
