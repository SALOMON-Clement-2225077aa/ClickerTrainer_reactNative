import { StyleSheet } from 'react-native';

const MainPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#686868',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
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
    timeSelectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    timeSelectionButton: {
        backgroundColor: '#DDDDDD',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    timeSelectionButtonText: {
        fontSize: 16,
    },
    pickerSelectStyles: {
        color: 'white',
        fontSize: 500,
    }
});

export default MainPageStyles;
