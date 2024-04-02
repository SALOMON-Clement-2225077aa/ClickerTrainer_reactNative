import { StyleSheet } from 'react-native';

const MainPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#696969',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'Roboto',
        color: 'white',
        paddingTop: 50,
        paddingBottom: 50,
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#00bf63',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clickText: {
        fontSize: 20,
        color: 'white',
    },
});

export default MainPageStyles;
