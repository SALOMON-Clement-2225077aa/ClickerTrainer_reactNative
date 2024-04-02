import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Footer from './Footer';
import styles from '../../assets/MainPageStyles';

const MainPageView = ({ onPageChange }) => {
    const [nbOfClicks, setNbOfClicks] = useState(0);
    const handleButtonClick = () => {
        setNbOfClicks(nbOfClicks + 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Main Page Content</Text>
            <TouchableOpacity style={styles.circle} onPress={handleButtonClick}>
                <Text style={styles.clickText}>Click</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Nombre de clics : {nbOfClicks}</Text>
            <Footer onPageChange={onPageChange} activePage="main" />
        </View>
    );
};

export default MainPageView;
