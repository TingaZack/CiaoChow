import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    activeTabStyle: {
        //custom styles
        // backgroundColor: 'green',
        // backgroundColor: 'white',
        color: 'black',
        borderWidth: 0,
        // position: 'absolute',
        paddingTop: 20,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    headerText: {
        padding: 8,
        fontSize: 14,
        color: '#444444',
        textAlign: 'center',
    },
    tabContent: {
        color: '#444444',
        fontSize: 18,
        margin: 24,
    },
    seperator: {
        marginHorizontal: -10,
        alignSelf: 'stretch',
        borderTopWidth: 1,
        borderTopColor: '#888888',
        marginTop: 24,
    },
    tabStyle: {
        borderColor: '#D52C43',
    },
    activeTabStyle: {
        backgroundColor: '#D52C43',
    },
    activeTabStyle: {
        //custom styles
        // backgroundColor: 'green',
        // backgroundColor: 'white',
        color: 'black',
        borderWidth: 0,
        // position: 'absolute',
        paddingTop: 20,
        backgroundColor: 'transparent',
    },
});
export default styles;