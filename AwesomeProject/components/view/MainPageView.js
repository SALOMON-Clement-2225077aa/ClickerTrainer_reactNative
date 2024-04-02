import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import styles from '../../assets/MainPageStyles';

const MainPageView = ({ onPageChange }) => {
    const [nbOfClicks, setNbOfClicks] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(10000);
    const [timerStarted, setTimerStarted] = useState(false); // State to track if timer is started

    // Gestion des clicks :
    const handleButtonClick = () => {
        setNbOfClicks(nbOfClicks + 1);
        if (!timerStarted) {
            setTimerStarted(true);
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
                setTimeRemaining(prevTime => (prevTime > 0 ? prevTime - 10 : 0));
            }, 10);
        }
        return () => clearInterval(timer);
    }, [timerStarted]);

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
