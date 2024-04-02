import StatsModel from '../../model/StatsModel'; // Import the StatsModel

// A la fin du chrono les données sont envoyé ici :
export const gameEndedEvent = (chosenTime, nbOfClicks, remainingTimes) => {

    // Calcul du CPS
    const cps = nbOfClicks / chosenTime;

    // Transformation de la liste remainingTimes en liste d'intervalles
    let intervals = [];
    for (let i = 0; i < remainingTimes.length - 1; i++) {
        intervals.push(remainingTimes[i] - remainingTimes[i + 1]);
    }
    intervals = intervals.slice(1);

    // Calcul de la plus petite valeur, la plus grande valeur et la moyenne des intervalles
    const minInterval = Math.min(...intervals);
    const maxInterval = Math.max(...intervals);
    const avgInterval = (intervals.reduce((acc, val) => acc + val, 0) / intervals.length).toFixed(2);

    log(chosenTime, nbOfClicks, cps, minInterval, maxInterval, avgInterval, intervals);
    updateStats(chosenTime, nbOfClicks, cps, minInterval, maxInterval, avgInterval, intervals);
};

// Pour afficher les stast dans la console
const log = (chosenTime, nbOfClicks, cps, minInterval, maxInterval, avgInterval, intervals) => {
    console.log('-----GameInfos-----');
    console.log("Chosen time: ", chosenTime);
    console.log("Nb of clicks: ", nbOfClicks);
    console.log("CPS = ", cps);
    console.log('Min Interval:', minInterval);
    console.log('Max Interval:', maxInterval);
    console.log('Average Interval:', avgInterval);
    console.log(intervals);
    console.log('-------------------');
};

// Envoie les données au model
const updateStats = (chosenTime, nbOfClicks, cps, minInterval, maxInterval, avgInterval, intervals) => {

    // Update last game stats
    StatsModel.updateLastGameStats(chosenTime, nbOfClicks, cps, minInterval, maxInterval, avgInterval, intervals);

    // Update global stats
    let globalStats = StatsModel.globalStats;

    const nbOfGames = globalStats.nbOfGames + 1;
    const totalClicks = globalStats.totalClicks + nbOfClicks;
    const cpsHistory = [...globalStats.cpsHistory, cps];
    const avgCps = globalStats.cpsHistory.reduce((total, cps) => total + cps, 0) / cpsHistory.length;
    const bestCps = Math.max(...cpsHistory);
    const avgIntervalHistory = [...globalStats.avgIntervalHistory, avgInterval];
    const avgTotalInterval = avgIntervalHistory.reduce((acc, val) => acc + val, 0) / avgIntervalHistory.length;
    const minTotalInterval = Math.min(...intervals);
    StatsModel.updateGlobalStats(nbOfGames, totalClicks, cpsHistory,
        avgCps, bestCps, avgIntervalHistory, avgTotalInterval, minTotalInterval);
};