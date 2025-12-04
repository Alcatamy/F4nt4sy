/**
 * Fantasy Money Monitor v3.0
 * Professional Fantasy League Financial Analysis
 */

// ============================
// CONFIGURATION
// ============================
const CONFIG = {
    TEAMS: {
        'GOLENCIERRO FC': { initialBudget: 103000000 },
        'Vigar24': { initialBudget: 103000000 },
        'Visite La Manga FC': { initialBudget: 103000000 },
        'Pablinistan FC': { initialBudget: 103000000 },
        'Alcatamy eSports By': { initialBudget: 100000000 },
        'Morenazos FC': { initialBudget: 103000000 }
    },
    MAX_DEBT_PERCENT: 0.20,
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
    teamValues: {},
    playerValues: {},
    squads: {},

    init() {
        this.loadFromStorage();
        this.calculateSquads();
    },

    loadFromStorage() {
        try {
            const movements = localStorage.getItem(CONFIG.STORAGE_KEYS.MOVEMENTS);
            const teamValues = localStorage.getItem(CONFIG.STORAGE_KEYS.TEAM_VALUES);
            const playerValues = localStorage.getItem(CONFIG.STORAGE_KEYS.PLAYER_VALUES);

            this.movements = movements ? JSON.parse(movements) : [];
            this.teamValues = teamValues ? JSON.parse(teamValues) : {};
            this.playerValues = playerValues ? JSON.parse(playerValues) : {};
        } catch (e) {
            console.error('Error loading from storage:', e);
        }
    },

    saveToStorage() {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEYS.MOVEMENTS, JSON.stringify(this.movements));
            localStorage.setItem(CONFIG.STORAGE_KEYS.TEAM_VALUES, JSON.stringify(this.teamValues));
            localStorage.setItem(CONFIG.STORAGE_KEYS.PLAYER_VALUES, JSON.stringify(this.playerValues));
        } catch (e) {
            console.error('Error saving to storage:', e);
        }
    },

    calculateSquads() {
        this.squads = {};
        Object.keys(CONFIG.TEAMS).forEach(team => {
            this.squads[team] = [];
        });

        // Sort movements by date
        const sortedMovements = [...this.movements].sort((a, b) => {
            const dateA = this.parseDate(a.date);
            const dateB = this.parseDate(b.date);
            return dateA - dateB;
        });

        sortedMovements.forEach(mov => {
            if (mov.type === 'compra') {
                // Remove player from previous team if exists
                Object.keys(this.squads).forEach(team => {
                    this.squads[team] = this.squads[team].filter(p => p.player !== mov.player);
                });
                // Add to new team (only if team exists in our config)
                if (this.squads[mov.team]) {
                    this.squads[mov.team].push({
                        player: mov.player,
                        purchasePrice: mov.amount,
                        purchaseDate: mov.date,
                        shielded: false
                    });
                }
            } else if (mov.type === 'venta') {
                // Remove from team
                if (this.squads[mov.team]) {
                    this.squads[mov.team] = this.squads[mov.team].filter(p => p.player !== mov.player);
                }
            } else if (mov.type === 'blindaje') {
                // Mark as shielded
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
        const parts = dateStr.split('/');
        if (parts.length === 3) {
            return new Date(parts[2], parts[1] - 1, parts[0]);
        }
        return new Date(0);
    }
};

// ============================
// DATA PARSER
// ============================
const DataParser = {
    parseMovements(text) {
        const lines = text.trim().split('\n').filter(line => line.trim());
        const movements = [];

        lines.forEach(line => {
            const parsed = this.parseLine(line.trim());
            if (parsed) {
                parsed.id = this.generateHash(parsed);
                parsed.raw = line.trim();
                movements.push(parsed);
            }
        });

        return movements;
    },

    parseLine(line) {
        // Format: "DD/MM/YYYY | Team ha comprado/vendido/blindado..."
        // Or: "| Team ha comprado..." (no date)

        let date = '';
        let content = line;

        // Check if line has date
        const dateMatch = line.match(/^(\d{2}\/\d{2}\/\d{4})\s*\|\s*(.+)$/);
        const noDateMatch = line.match(/^\s*\|\s*(.+)$/);

        if (dateMatch) {
            date = dateMatch[1];
            content = dateMatch[2];
        } else if (noDateMatch) {
            content = noDateMatch[1];
        } else {
            return null;
        }

        // Parse content
        return this.parseContent(content, date);
    },

    parseContent(content, date) {
        // Compra: "Team ha comprado al jugador Player de FromTeam por Amount€"
        const compraMatch = content.match(/^(.+?)\s+ha comprado al jugador\s+(.+?)\s+de\s+(.+?)\s+por\s+([\d.]+)€?$/i);
        if (compraMatch) {
            return {
                date,
                team: this.normalizeTeamName(compraMatch[1].trim()),
                type: 'compra',
                player: compraMatch[2].trim(),
                fromTo: this.normalizeTeamName(compraMatch[3].trim()),
                amount: this.parseAmount(compraMatch[4])
            };
        }

        // Venta: "Team ha vendido al jugador Player a ToTeam por Amount€"
        const ventaMatch = content.match(/^(.+?)\s+ha vendido al jugador\s+(.+?)\s+a\s+(.+?)\s+por\s+([\d.]+)€?$/i);
        if (ventaMatch) {
            return {
                date,
                team: this.normalizeTeamName(ventaMatch[1].trim()),
                type: 'venta',
                player: ventaMatch[2].trim(),
                fromTo: this.normalizeTeamName(ventaMatch[3].trim()),
                amount: this.parseAmount(ventaMatch[4])
            };
        }

        // Blindaje: "Team ha blindado a Player"
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

        // Jornada: "En la jornada X, Team ha ganado Amount€"
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

        // Once ideal: "Team ha ganado X€ por tener jugadores en el 11 ideal"
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

    // Normalize team names to match CONFIG (handles extra spaces)
    normalizeTeamName(name) {
        // Remove extra spaces and normalize
        const normalized = name.replace(/\s+/g, ' ').trim();
        // Find matching team in CONFIG
        const teams = Object.keys(CONFIG.TEAMS);
        const match = teams.find(t =>
            t.toLowerCase() === normalized.toLowerCase() ||
            normalized.toLowerCase().includes(t.toLowerCase()) ||
            t.toLowerCase().includes(normalized.toLowerCase())
        );
        return match || normalized;
    },

    generateHash(movement) {
        const str = `${movement.date}|${movement.team}|${movement.type}|${movement.player}|${movement.amount}`;
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

            // Check if this is a team name
            const matchedTeam = teamNames.find(t =>
                trimmed.toLowerCase().includes(t.toLowerCase()) ||
                t.toLowerCase().includes(trimmed.toLowerCase())
            );

            if (matchedTeam) {
                currentTeam = matchedTeam;
            } else if (currentTeam) {
                // Try to parse as value
                const valueMatch = trimmed.match(/^([\d.]+)$/);
                if (valueMatch) {
                    values[currentTeam] = this.parseAmount(valueMatch[1]);
                    currentTeam = null;
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

        // Get movements where this team is the primary actor
        const movements = State.movements.filter(m => m.team === teamName);

        // Get movements where OTHER teams bought FROM this team (inter-team sales)
        // These are recorded as "Team X ha comprado al jugador Y de [thisTeam] por Z€"
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

        // Add money received from inter-team sales (when others bought FROM this team)
        interTeamSalesToMe.forEach(m => {
            sales += m.amount;
        });

        const currentBudget = team.initialBudget + sales - purchases + jornadaEarnings + onceIdealEarnings;
        const teamValue = State.teamValues[teamName] || 0;
        const maxBid = currentBudget + (teamValue * CONFIG.MAX_DEBT_PERCENT);
        const balance = sales - purchases;
        const roi = purchases > 0 ? ((sales / purchases) - 1) * 100 : 0;

        return {
            name: teamName,
            initialBudget: team.initialBudget,
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

        // Total market volume
        const totalVolume = allMovements
            .filter(m => m.type === 'compra' || m.type === 'venta')
            .reduce((sum, m) => sum + m.amount, 0);

        // Most expensive signing
        const purchases = allMovements.filter(m => m.type === 'compra');
        const mostExpensive = purchases.reduce((max, m) => m.amount > (max?.amount || 0) ? m : max, null);

        // Most active team
        const teamCounts = {};
        allMovements.forEach(m => {
            teamCounts[m.team] = (teamCounts[m.team] || 0) + 1;
        });
        const mostActive = Object.entries(teamCounts).reduce((max, [team, count]) =>
            count > (max?.count || 0) ? { team, count } : max, null);

        // Most traded player
        const playerTrades = {};
        allMovements.filter(m => m.type === 'compra' || m.type === 'venta').forEach(m => {
            playerTrades[m.player] = (playerTrades[m.player] || 0) + 1;
        });
        const mostTraded = Object.entries(playerTrades)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        // Top signings
        const topSignings = [...purchases]
            .sort((a, b) => b.amount - a.amount)
            .slice(0, 10);

        // Calculate plusvalias and minusvalias
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

        // Top plusvalías (benefits)
        const topPlusvalias = plusvalias
            .filter(p => p.profit > 0)
            .sort((a, b) => b.profit - a.profit)
            .slice(0, 10);

        // Top minusvalías (losses)
        const worstPlusvalias = plusvalias
            .filter(p => p.profit < 0)
            .sort((a, b) => a.profit - b.profit)
            .slice(0, 10);

        // Team rankings - by spending
        const teamSpending = [...teamStats]
            .sort((a, b) => b.purchases - a.purchases);

        // Team rankings - by selling
        const teamSelling = [...teamStats]
            .sort((a, b) => b.sales - a.sales);

        // Team rankings - by ROI
        const teamROI = [...teamStats]
            .sort((a, b) => b.roi - a.roi);

        // Team rankings - by jornada earnings
        const jornadaRanking = [...teamStats]
            .sort((a, b) => (b.jornadaEarnings + b.onceIdealEarnings) - (a.jornadaEarnings + a.onceIdealEarnings));

        // Team rankings - by shields
        const shieldsRanking = [...teamStats]
            .sort((a, b) => b.shields - a.shields);

        // Average purchase price per team
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
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
        });

        // Modals
        document.getElementById('btnAddMovements').addEventListener('click', () => this.openModal('modalAddMovements'));
        document.getElementById('btnUpdateValues').addEventListener('click', () => this.openModal('modalUpdateValues'));

        document.getElementById('closeAddMovements').addEventListener('click', () => this.closeModal('modalAddMovements'));
        document.getElementById('closeUpdateValues').addEventListener('click', () => this.closeModal('modalUpdateValues'));
        document.getElementById('closeTeamDetail').addEventListener('click', () => this.closeModal('modalTeamDetail'));

        document.getElementById('cancelAddMovements').addEventListener('click', () => this.closeModal('modalAddMovements'));
        document.getElementById('cancelUpdateValues').addEventListener('click', () => this.closeModal('modalUpdateValues'));

        // Movement import
        document.getElementById('movementsInput').addEventListener('input', (e) => {
            const lines = e.target.value.trim().split('\n').filter(l => l.trim()).length;
            document.getElementById('linesDetected').textContent = `${lines} líneas detectadas`;
        });

        document.getElementById('btnPreviewMovements').addEventListener('click', () => this.previewMovements());
        document.getElementById('confirmAddMovements').addEventListener('click', () => this.confirmMovements());

        // Values update
        document.getElementById('previewValues').addEventListener('click', () => this.previewValues());
        document.getElementById('confirmUpdateValues').addEventListener('click', () => this.confirmValues());

        // Filters
        document.getElementById('filterTeam').addEventListener('change', () => this.renderMovementsTable());
        document.getElementById('filterType').addEventListener('change', () => this.renderMovementsTable());
        document.getElementById('filterPlayer').addEventListener('input', () => this.renderMovementsTable());

        // Export
        document.getElementById('btnExportCSV').addEventListener('click', () => this.exportCSV());

        // Close modals on outside click
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

        // Refresh content
        if (tabId === 'movements') this.renderMovementsTable();
        if (tabId === 'squads') this.renderSquads();
        if (tabId === 'analytics') this.renderAnalytics();
    },

    openModal(modalId) {
        document.getElementById(modalId).classList.add('active');
    },

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        // Reset form state
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
        this.renderCharts();
    },

    renderDashboard() {
        const stats = Calculator.getGlobalStats();

        // Global stats
        document.getElementById('totalMarketVolume').textContent = this.formatMoney(stats.totalVolume);
        document.getElementById('totalMovements').textContent = stats.totalMovements;
        document.getElementById('mostExpensivePlayer').textContent = stats.mostExpensive
            ? `${stats.mostExpensive.player} (${this.formatMoney(stats.mostExpensive.amount)})`
            : '-';
        document.getElementById('mostActiveTeam').textContent = stats.mostActive
            ? `${stats.mostActive.team} (${stats.mostActive.count})`
            : '-';

        // Team cards
        const grid = document.getElementById('teamsGrid');
        grid.innerHTML = stats.teamStats.map(team => this.renderTeamCard(team)).join('');

        // Bind click events on cards
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

        let movements = [...State.movements].reverse();

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

        // Top signings
        document.getElementById('topSignings').innerHTML = stats.topSignings.map((s, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${s.player} → ${s.team}</span>
                <span class="analytics-value">${this.formatMoney(s.amount)}</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Top plusvalias (beneficios)
        document.getElementById('topSales').innerHTML = stats.topPlusvalias.map((s, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${s.player} (${s.team})</span>
                <span class="analytics-value" style="color: var(--accent-emerald)">
                    +${this.formatMoney(s.profit)} (+${s.profitPercent?.toFixed(0) || 0}%)
                </span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Worst plusvalias (minusvalias / pérdidas)
        document.getElementById('worstSales').innerHTML = stats.worstPlusvalias.map((s, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${s.player} (${s.team})</span>
                <span class="analytics-value" style="color: var(--accent-rose)">
                    ${this.formatMoney(s.profit)} (${s.profitPercent?.toFixed(0) || 0}%)
                </span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Most traded
        document.getElementById('mostTraded').innerHTML = stats.mostTraded.map(([player, count], i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${player}</span>
                <span class="analytics-value">${count} traspasos</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Team spending
        document.getElementById('teamSpending').innerHTML = stats.teamSpending.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value">${this.formatMoney(t.purchases)}</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Team selling
        document.getElementById('teamSelling').innerHTML = stats.teamSelling.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value">${this.formatMoney(t.sales)}</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Team ROI
        document.getElementById('teamROI').innerHTML = stats.teamROI.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value" style="color: ${t.roi >= 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)'}">
                    ${t.roi >= 0 ? '+' : ''}${t.roi.toFixed(1)}%
                </span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Jornada earnings ranking
        document.getElementById('jornadaRanking').innerHTML = stats.jornadaRanking.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value" style="color: var(--accent-emerald)">
                    ${this.formatMoney(t.jornadaEarnings + t.onceIdealEarnings)}
                </span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Shields ranking
        document.getElementById('shieldsRanking').innerHTML = stats.shieldsRanking.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name}</span>
                <span class="analytics-value">${t.shields} blindajes</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Average purchase prices
        document.getElementById('avgPrices').innerHTML = stats.avgPrices.map((t, i) => `
            <div class="analytics-item">
                <span class="analytics-rank">${i + 1}</span>
                <span class="analytics-name">${t.name} (${t.purchaseCount})</span>
                <span class="analytics-value">${this.formatMoney(t.avgPurchase)}</span>
            </div>
        `).join('') || '<p>Sin datos</p>';

        // Radar chart
        this.renderRadarChart(stats.teamStats);
    },

    renderCharts() {
        const stats = Calculator.getAllTeamStats();

        // Budget chart
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
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        ticks: {
                            callback: (value) => this.formatMoney(value),
                            color: '#888'
                        },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    },
                    y: {
                        ticks: { color: '#fff' },
                        grid: { display: false }
                    }
                }
            }
        });

        // Balance chart
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
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        ticks: { color: '#fff' },
                        grid: { display: false }
                    },
                    y: {
                        ticks: {
                            callback: (value) => this.formatMoney(value),
                            color: '#888'
                        },
                        grid: { color: 'rgba(255,255,255,0.05)' }
                    }
                }
            }
        });
    },

    renderRadarChart(teamStats) {
        const ctx = document.getElementById('radarChart').getContext('2d');
        if (window.radarChart && typeof window.radarChart.destroy === 'function') {
            window.radarChart.destroy();
        }

        const maxValues = {
            budget: Math.max(...teamStats.map(t => Math.abs(t.currentBudget))),
            value: Math.max(...teamStats.map(t => t.teamValue)) || 1,
            movements: Math.max(...teamStats.map(t => t.totalMovements)) || 1,
            shields: Math.max(...teamStats.map(t => t.shields)) || 1,
            jornadas: Math.max(...teamStats.map(t => t.jornadaEarnings + t.onceIdealEarnings)) || 1
        };

        const colors = [
            'rgba(139, 92, 246, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(244, 63, 94, 0.7)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(6, 182, 212, 0.7)'
        ];

        window.radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Presupuesto', 'Valor Equipo', 'Actividad', 'Blindajes', 'Jornadas'],
                datasets: teamStats.map((team, i) => ({
                    label: team.name,
                    data: [
                        (team.currentBudget / maxValues.budget) * 100,
                        (team.teamValue / maxValues.value) * 100,
                        (team.totalMovements / maxValues.movements) * 100,
                        (team.shields / maxValues.shields) * 100,
                        ((team.jornadaEarnings + team.onceIdealEarnings) / maxValues.jornadas) * 100
                    ],
                    backgroundColor: colors[i].replace('0.7', '0.2'),
                    borderColor: colors[i],
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
                        labels: { color: '#fff' }
                    }
                }
            }
        });
    },

    previewMovements() {
        const text = document.getElementById('movementsInput').value;
        const movements = DataParser.parseMovements(text);

        let newCount = 0;
        let duplicateCount = 0;

        const previewRows = movements.map(m => {
            const isDuplicate = DataParser.isDuplicate(m);
            if (isDuplicate) duplicateCount++; else newCount++;

            return `
                <tr class="${isDuplicate ? 'preview-row-duplicate' : 'preview-row-new'}">
                    <td>${isDuplicate ? '⚠️' : '✅'}</td>
                    <td>${m.date || '-'}</td>
                    <td>${m.team}</td>
                    <td>${this.getTypeLabel(m.type)}</td>
                    <td>${m.player}</td>
                    <td>${m.amount > 0 ? this.formatMoney(m.amount) : '-'}</td>
                </tr>
            `;
        }).join('');

        document.getElementById('newCount').textContent = newCount;
        document.getElementById('duplicateCount').textContent = duplicateCount;
        document.getElementById('previewBody').innerHTML = previewRows;
        document.getElementById('previewSection').style.display = 'block';
        document.getElementById('confirmAddMovements').disabled = newCount === 0;

        // Store for confirmation
        this._pendingMovements = movements.filter(m => !DataParser.isDuplicate(m));
    },

    confirmMovements() {
        if (!this._pendingMovements || this._pendingMovements.length === 0) return;

        State.movements.push(...this._pendingMovements);
        State.calculateSquads();
        State.saveToStorage();

        this.showToast(`✅ ${this._pendingMovements.length} movimientos añadidos`, 'success');
        this.closeModal('modalAddMovements');
        this.render();

        this._pendingMovements = null;
    },

    previewValues() {
        const text = document.getElementById('valuesInput').value;
        const values = DataParser.parseTeamValues(text);

        const previewItems = Object.entries(values).map(([team, value]) => `
            <div class="value-preview-item">
                <span>${team}</span>
                <span style="font-weight: 700; color: var(--accent-emerald)">${this.formatMoney(value)}</span>
            </div>
        `).join('');

        document.getElementById('valuesPreviewList').innerHTML = previewItems || '<p>No se detectaron valores</p>';
        document.getElementById('valuesPreview').style.display = 'block';
        document.getElementById('confirmUpdateValues').disabled = Object.keys(values).length === 0;

        this._pendingValues = values;
    },

    confirmValues() {
        if (!this._pendingValues) return;

        Object.assign(State.teamValues, this._pendingValues);
        State.saveToStorage();

        this.showToast(`✅ Valores actualizados para ${Object.keys(this._pendingValues).length} equipos`, 'success');
        this.closeModal('modalUpdateValues');
        this.render();

        this._pendingValues = null;
    },

    showTeamDetail(teamName) {
        const team = Calculator.getTeamStats(teamName);
        if (!team) return;

        document.getElementById('teamDetailTitle').textContent = `📋 ${teamName}`;

        const shieldedPlayers = team.squad.filter(p => p.shielded);
        const movements = State.movements.filter(m => m.team === teamName).slice(-20).reverse();

        document.getElementById('teamDetailBody').innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div class="stat-card">
                    <div class="stat-info">
                        <span class="stat-value">${this.formatMoney(team.currentBudget)}</span>
                        <span class="stat-label">Presupuesto Actual</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-info">
                        <span class="stat-value">${this.formatMoney(team.teamValue)}</span>
                        <span class="stat-label">Valor del Equipo</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-info">
                        <span class="stat-value">${this.formatMoney(team.maxBid)}</span>
                        <span class="stat-label">Puja Máxima</span>
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: var(--bg-glass); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="margin-bottom: 0.5rem;">💰 Compras Totales</h4>
                    <span style="font-size: 1.25rem; font-weight: 700; color: var(--accent-rose);">${this.formatMoney(team.purchases)}</span>
                </div>
                <div style="background: var(--bg-glass); padding: 1rem; border-radius: var(--radius-md);">
                    <h4 style="margin-bottom: 0.5rem;">💵 Ventas Totales</h4>
                    <span style="font-size: 1.25rem; font-weight: 700; color: var(--accent-emerald);">${this.formatMoney(team.sales)}</span>
                </div>
            </div>
            
            ${shieldedPlayers.length > 0 ? `
                <h4 style="margin-bottom: 0.5rem;">🛡️ Jugadores Blindados (${shieldedPlayers.length})</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                    ${shieldedPlayers.map(p => `<span class="type-badge type-blindaje">${p.player}</span>`).join('')}
                </div>
            ` : ''}
            
            <h4 style="margin-bottom: 0.5rem;">📜 Últimos Movimientos</h4>
            <div style="max-height: 300px; overflow-y: auto;">
                ${movements.map(m => `
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem; border-bottom: 1px solid var(--border-color);">
                        <span>${m.date || '-'} | <span class="type-badge type-${m.type}">${this.getTypeLabel(m.type)}</span> ${m.player}</span>
                        <span style="font-weight: 600;">${m.amount > 0 ? this.formatMoney(m.amount) : '-'}</span>
                    </div>
                `).join('')}
            </div>
        `;

        this.openModal('modalTeamDetail');
    },

    exportCSV() {
        const headers = ['Fecha', 'Equipo', 'Tipo', 'Jugador', 'De/A', 'Monto'];
        const rows = State.movements.map(m => [
            m.date || '',
            m.team,
            m.type,
            m.player,
            m.fromTo,
            m.amount
        ]);

        const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `fantasy_movements_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();

        this.showToast('📤 CSV exportado correctamente', 'success');
    },

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = message;
        container.appendChild(toast);

        setTimeout(() => toast.remove(), 4000);
    },

    formatMoney(amount) {
        if (amount >= 1000000) {
            return (amount / 1000000).toFixed(1) + 'M€';
        } else if (amount >= 1000) {
            return (amount / 1000).toFixed(0) + 'K€';
        }
        return amount.toLocaleString('es-ES') + '€';
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
    }
};

// ============================
// INITIALIZATION
// ============================
document.addEventListener('DOMContentLoaded', () => {
    State.init();
    UI.init();
});
