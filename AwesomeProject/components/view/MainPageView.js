import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import styles from '../../assets/MainPageStyles';

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

    // Gestion du chrono :
    const formatTime = (milliseconds) => {
        const totalSeconds = milliseconds / 1000;
        const seconds = Math.floor(totalSeconds);
        const millisecondsRemaining = milliseconds % 1000;
        return `${seconds.toString().padStart(2, '0')}.${millisecondsRemaining.toString().padStart(3, '0')}`;
    };
    useEffect(() => {
        let timer;
        if (timerStarted) {
            timer = setInterval(() => {
                setTimeRemaining(prevTime => (prevTime > 0 ? prevTime - 17 : 0));
            }, 10);
        }
        return () => clearInterval(timer);
    }, [timerStarted]);

    // Affichage :
    return (
        <View style={styles.container}>
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
