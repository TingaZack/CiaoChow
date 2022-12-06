import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4CAD73',
        height: '100%',
        width: '100%',
        display: 'flex',
    },
    ovalShape: {
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
        height: 54,
        backgroundColor: 'white',
        width: '100%'
      },
      innerText: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#4CAD73',
      },
})
export default styles;