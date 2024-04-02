// StatsPageView.js
import React from 'react';
import { View, Text } from 'react-native';
import Footer from './Footer';
import StatsPageStyles from '../../assets/StatsPageStyles'; // Import StatsPageStyles

const StatsPageView = ({ onPageChange }) => {
    return (
        <View style={StatsPageStyles.container}>
            <Text style={StatsPageStyles.title}>Stats sur la dernière game :</Text>
            <Text style={StatsPageStyles.text}>- Clics par seconde : {0}</Text>
            <Text style={StatsPageStyles.text}>- Plus petit espace entre 2 clics : {0}</Text>
            <Text style={StatsPageStyles.text}>- Plus grand espace entre 2 clics : {0}</Text>
            <Text style={StatsPageStyles.text}>- Temps moyen entre 2 clics : {0}</Text>

            <Text style={StatsPageStyles.title}>Stats globales :</Text>
            <Text style={StatsPageStyles.text}>- Nombre de parties : {0}</Text>
            <Text style={StatsPageStyles.text}>- Nombre de clics : {0}</Text>
            <Text style={StatsPageStyles.text}>- Clics moyen par seconde : {0}</Text>
            <Text style={StatsPageStyles.text}>- Meilleur CPS : {0}</Text>
            <Text style={StatsPageStyles.text}>- Temps moyen entre 2 clics : {0}</Text>
            <Text style={StatsPageStyles.text}>- Plus petit espace entre 2 clics : {0}</Text>

            <Footer onPageChange={onPageChange} activePage="stats" />
        </View>
    );
};

export default StatsPageView;
