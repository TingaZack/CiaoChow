import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 50,
        margin: 16,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
        height: 54,
        color: 'white',
        backgroundColor: '#4CAD73',
        width: '100%'
    },
    innerText: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    inputText: {

    }, 
    input: {
        backgroundColor: '#F2F2F2',
        width: 335,
        height: 46,
        borderRadius: 10,
        padding: 10,
    },
    forgotPswrdText: {
        color: '#4CAD73',
        fontSize: 12,
        marginLeft: 'auto',
    },
    forgotPswrdBtn: {
        marginTop: 10,        
    }
});
export default styles;