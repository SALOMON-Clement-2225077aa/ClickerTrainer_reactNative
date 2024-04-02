import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { gameEndedEvent } from '../controller/MainPageController';
import Footer from './Footer';

import styles from '../../assets/stylesheets/MainPageStyles';
import ImgCaouete from '../../assets/caouete.png';

const MainPageView = ({ onPageChange }) => {
    const [nbOfClicks, setNbOfClicks] = useState(0);
    const [chosenTime, setChosenTime] = useState(10);
    const [timeRemaining, setTimeRemaining] = useState(10000);
    const [timerStarted, setTimerStarted] = useState(false);
    const [remainingTimes, setRemainingTimes] = useState([]);

    // Gestion des clicks :
    const handleButtonClick = () => {
        if (!timerStarted) {
            setTimerStarted(true);
        }
        if (timeRemaining > 0) {
            setNbOfClicks(nbOfClicks + 1);
            setRemainingTimes([...remainingTimes, timeRemaining]);
        }
        if(timeRemaining <= 0) {
            gameEndedEvent(chosenTime, nbOfClicks, remainingTimes);
            onPageChange('stats');
            setTimeRemaining(chosenTime * 1000);
            setTimerStarted(false);
            setNbOfClicks(0);
            setRemainingTimes([]);
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
        setChosenTime(value);
        setTimeRemaining(value * 1000);
        setTimerStarted(false);
        setNbOfClicks(0);
        setRemainingTimes([]);
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
            <TouchableOpacity onPress={handleButtonClick}>
                <Image
                    source={ImgCaouete}
                    style={{ width: 200, height: 200 }} // taille de la caouete :3
                />
            </TouchableOpacity>
            <Text style={styles.text}>Nombre de clics : {nbOfClicks}</Text>
            <Footer onPageChange={onPageChange} activePage="main" />
        </View>
    );
};

export default MainPageView;
