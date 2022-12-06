import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        display: 'flex',
    },
    ovalShape: {
        height: 150,
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 10,
    },
    manWomanView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: -150
    },
    topContainer: {
        flex: 3,
        justifyContent: "space-evenly",
        alignItems: 'center',
        flexDirection: 'column',

    },
    bottomContainer: {
        flex: 3,
        marginTop: 120,
        justifyContent: "center",
        alignItems: 'center',
        margin: 20,
    },
    promoText: {
        color: 'white',
    },
})
export default styles;