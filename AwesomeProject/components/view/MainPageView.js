import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import styles from '../../assets/MainPageStyles';
import RNPickerSelect from 'react-native-picker-select';

const MainPageView = ({ onPageChange }) => {
    const [nbOfClicks, setNbOfClicks] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(10000);
    const [timerStarted, setTimerStarted] = useState(false);

    // Gestion des clicks :
    const handleButtonClick = () => {
        if (!timerStarted) {
            setTimerStarted(true);
        }
        if (timeRemaining !== 0) {
            setNbOfClicks(nbOfClicks + 1);
        }
    };

    // Gestion du Timer :
    const formatTime = (milliseconds) => {
        const totalSeconds = milliseconds / 1000;
        const seconds = Math.floor(totalSeconds);
        const millisecondsRemaining = milliseconds % 1000;
        return `${seconds.toString().padStart(2, '0')}.${millisecondsRemaining.toString().padStart(3, '0')}`;
    };
    useEffect(() => {
        let interval;
        if (timerStarted) {
            interval = setInterval(() => {
                setTimeRemaining(prevTime => (prevTime > 0 ? prevTime - 17 : 0));
            }, 10);
        }
        return () => clearInterval(interval);
    }, [timerStarted]);

    // Gestion de la sélection de temps :
    const handleTimeSelection = (value) => {
        setTimeRemaining(value * 1000);
        setTimerStarted(false);
        setNbOfClicks(0);
    };

    return (
        <View style={styles.container}>
            <RNPickerSelect
                onValueChange={(value) => handleTimeSelection(value)}
                items={[
                    { label: '5 sec', value: 5 },
                    { label: '10 sec', value: 10 },
                    { label: '30 sec', value: 30 },
                    { label: '60 sec', value: 60 },
                ]}
            />
            <Text style={styles.text}>Temps restant : {formatTime(timeRemaining)}s</Text>
            <TouchableOpacity style={styles.circle} onPress={handleButtonClick}>
                <Text style={styles.clickText}>Click</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Nombre de clics : {nbOfClicks}</Text>
            <Footer onPageChange={onPageChange} activePage="main" />
        </View>
    );
};

export default MainPageView;
