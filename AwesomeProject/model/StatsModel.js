const StatsModel = {
    // Statistiques sur la dernière partie
    lastGameStats: {
        chosenTime: 0,
        totalClicks: 0,
        CPS: 0,
        minInterval: 0,
        maxInterval: 0,
        avgInterval: 0,
        intervals: [],
    },

    // Statistiques globales
    globalStats: {
        nbOfGames: 0,
        totalClicks: 0,
        cpsHistory: [],
        avgCps: 0,
        bestCps: 0,
        avgIntervalHistory: [],
        avgInterval: 0,
        minInterval: 0,
    },

    // Subscribe function
    subscribers: [],
    subscribe: function(callback) {
        this.subscribers.push(callback);
    },

    // Unsubscribe function
    unsubscribe: function(callback) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
    },

    // Notify subscribers
    notifySubscribers: function() {
        this.subscribers.forEach(subscriber => subscriber());
    },

    // Met à jour les statistiques de la dernière partie
    updateLastGameStats: function(chosenTime, totalClicks, CPS, minInterval, maxInterval, avgInterval, intervals) {
        this.lastGameStats = {
            chosenTime,
            totalClicks,
            CPS,
            minInterval,
            maxInterval,
            avgInterval,
            intervals,
        };
        this.notifySubscribers();
    },

    // Met à jour les statistiques globales
    updateGlobalStats: function(nbOfGames, totalClicks, cpsHistory, avgCps, bestCps, avgIntervalHistory, avgInterval, minInterval) {
        this.globalStats = {
            nbOfGames,
            totalClicks,
            cpsHistory,
            avgCps,
            bestCps,
            avgIntervalHistory,
            avgInterval,
            minInterval,
        };
        this.notifySubscribers();
    },
};

export default StatsModel;