import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';
import styles from '../../assets/styles';

const MainPageView = ({ onPageChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Main Page Content</Text>
            <Footer onPageChange={onPageChange} activePage="main" />
        </View>
    );
};

export default MainPageView;
