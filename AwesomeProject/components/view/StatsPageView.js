import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Footer from './Footer';
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

                    <Text style={StatsPageStyles.title}>Stats globales :</Text>
                    <Text style={StatsPageStyles.text}>- Nombre de parties : {globalStats.nbOfGames}</Text>
                    <Text style={StatsPageStyles.text}>- Nombre de clics : {globalStats.totalClicks}</Text>
                    <Text style={StatsPageStyles.text}>- CPS moyen : {globalStats.avgCps}</Text>
                    <Text style={StatsPageStyles.text}>- Meilleur CPS : {globalStats.bestCps}</Text>
                    <Text style={StatsPageStyles.text}>- Temps moyen entre 2 clics : {globalStats.avgInterval}ms</Text>
                    <Text style={StatsPageStyles.text}>- Plus petit espace entre 2 clics : {globalStats.minInterval}ms</Text>

                    <Footer onPageChange={onPageChange} activePage="stats" />
            </View>
        );
};

export default StatsPageView;