import React from 'react';
import { View, Text } from 'react-native';
import Footer from './Footer';
import styles from '../../assets/styles';

const StatsPageView = ({ onPageChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Stats Page Content</Text>
            <Footer onPageChange={onPageChange} activePage="stats" />
        </View>
    );
};

export default StatsPageView;
