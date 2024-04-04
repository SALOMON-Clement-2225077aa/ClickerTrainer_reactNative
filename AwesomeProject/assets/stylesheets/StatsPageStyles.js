import { StyleSheet } from 'react-native';

const StatsPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: 'white',
        marginBottom: 10,
        paddingTop: 25,
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
    },
});

export default StatsPageStyles;
