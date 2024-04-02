import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ onPageChange, activePage }) => { // Pass onPageChange as prop
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => onPageChange('main')} style={styles.icon}>
                <Ionicons name="home" size={30} color={activePage === 'main' ? '#00bf63' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPageChange('stats')} style={styles.icon}>
                <Ionicons name="stats-chart-outline" size={30} color={activePage === 'stats' ? '#00bf63' : 'gray'}  />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 75,
        paddingHorizontal: 20,
    },
    icon: {
        padding: 10,
    },
});

export default Footer;