import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Footer from './Footer';
import LastGameChartView from "./chartView/LastGameChartView";
import GloablGameChartLine from "./chartView/GlobalChartView";
import StatsPageStyles from '../../assets/stylesheets/StatsPageStyles';
import StatsModel from '../../model/StatsModel';

const StatsPageView = ({ onPageChange }) => {
        const [lastGameStats, setLastGameStats] = useState(StatsModel.lastGameStats);
        const [globalStats, setGlobalStats] = useState(StatsModel.globalStats);

        useEffect(() => {
                const updateStats = () => {
                        setLastGameStats(StatsModel.lastGameStats);
                        setGlobalStats(StatsModel.globalStats);
                };
                StatsModel.subscribe(updateStats);
                return () => {
                        StatsModel.unsubscribe(updateStats);
                };
        }, []);

        return (
            <View style={StatsPageStyles.container}>
                <Text style={StatsPageStyles.title}>Stats sur la dernière game :</Text>
                <Text style={StatsPageStyles.text}>- Temps choisi : {lastGameStats.chosenTime}s</Text>
                <Text style={StatsPageStyles.text}>- Nombre de clics : {lastGameStats.totalClicks}</Text>
                <Text style={StatsPageStyles.text}>- CPS : {lastGameStats.CPS}</Text>
                <Text style={StatsPageStyles.text}>- Plus petit espace entre 2 clics : {lastGameStats.minInterval}ms</Text>
                <Text style={StatsPageStyles.text}>- Plus grand espace entre 2 clics : {lastGameStats.maxInterval}ms</Text>
                <Text style={StatsPageStyles.text}>- Temps moyen entre 2 clics : {lastGameStats.avgInterval}ms</Text>
                {Array.isArray(lastGameStats.intervals) && lastGameStats.intervals.length > 0 ?
                    (<LastGameChartView data={lastGameStats.intervals}></LastGameChartView>) :
                    (<Text style={StatsPageStyles.title}>No data, no Chart!</Text>)}

                <Text style={StatsPageStyles.title}>Stats globales :</Text>
                    <Text style={StatsPageStyles.text}>- Nombre de parties : {globalStats.nbOfGames}</Text>
                    <Text style={StatsPageStyles.text}>- Nombre de clics : {globalStats.totalClicks}</Text>
                    <Text style={StatsPageStyles.text}>- CPS moyen : {globalStats.avgCps}</Text>
                    <Text style={StatsPageStyles.text}>- Meilleur CPS : {globalStats.bestCps}</Text>
                    <Text style={StatsPageStyles.text}>- Temps moyen entre 2 clics : {globalStats.avgInterval}ms</Text>
                    <Text style={StatsPageStyles.text}>- Plus petit espace entre 2 clics : {globalStats.minInterval}ms</Text>
                {Array.isArray(globalStats.cpsHistory) && globalStats.cpsHistory.length > 0 ?
                    (<GloablGameChartLine data={globalStats.cpsHistory}></GloablGameChartLine>) :
                    (<Text style={StatsPageStyles.title}>No data, no Chart!</Text>)}

                    <Footer onPageChange={onPageChange} activePage="stats" />
            </View>
        );
};

export default StatsPageView;