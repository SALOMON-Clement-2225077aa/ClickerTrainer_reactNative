import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Footer from './Footer';
import styles from '../../assets/MainPageStyles';

const MainPageView = ({ onPageChange }) => {
    const handleButtonClick = () => {
        // Logic to handle the button click
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Main Page Content</Text>
            <TouchableOpacity style={styles.circle} onPress={handleButtonClick}>
                <Text style={styles.clickText}>Click</Text>
            </TouchableOpacity>
            <Footer onPageChange={onPageChange} activePage="main" />
        </View>
    );
};

export default MainPageView;
