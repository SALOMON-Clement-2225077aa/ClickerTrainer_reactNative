import React from 'react';
import {Text, View} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GloablGameChartLine = ({ data }) => {
    if (!Array.isArray(data)) {
        return (
            <View>
                <Text>Fait une partie avant de regarder test stats !</Text>
            </View>
        )
    }

    return (
        <View>
            <LineChart
                data={{ labels:["                                                                                " +
                    "Evolution du nombre de CPS"],datasets: [{ data }] }}
                width={350}
                height={170}
                chartConfig={{
                    backgroundColor: '#686868',
                    backgroundGradientFrom: '#707070',
                    backgroundGradientTo: '#707070',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 191, 99, ${opacity})`,
                }}
            />
        </View>
    );
};

export default GloablGameChartLine;
