import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './assets/styles';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Hey! It's working :)</Text>

        <StatusBar style="auto" />
      </View>
  );
}
