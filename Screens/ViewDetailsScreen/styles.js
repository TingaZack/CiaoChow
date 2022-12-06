import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    imgSliderContainer: {
        flex: 3,
        backgroundColor: 'whitesmoke',
    },
    contentContainer: {
        backgroundColor: 'white',
        flex: 3,
        marginTop: -50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    segments: {

    },
    tabsContainerStyle: {
        //custom styles
        // elevation: 0,
        // shadowColor: 'rgba(0,0,0, .2)',
        // shadowOffset: { height: 0, width: 0 },
        // shadowOpacity: 0, //default is 1
        // borderWidth: 0,
        // shadowRadius: 0,//default is 1
        backgroundColor: 'transparent',
        borderBottomColor: '#4CAD73',
        borderBottomWidth: 2,
    },
    tabStyle: {
        //custom styles
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0, //default is 1
        backgroundColor: 'transparent',
        shadowRadius: 0//default is 1
    },
    firstTabStyle: {
        //custom styles
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        borderWidth: 0,
        shadowOpacity: 0, //default is 1
        shadowRadius: 0//default is 1
    },
    btnContainer: {

        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,

        shadowRadius: 2,
        shadowOffset: {
            width: -10,
            height: -3,
        },
        shadowColor: '#b1b1b1',
        elevation: 4,
        marginLeft: -5,
        marginRight: -5,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingBottom: 16,
        paddingTop: 26,
        // backgroundColor: 'white',
    },
    nahBtn: {
        backgroundColor: '#4CAD73',
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 49,
        borderRadius: 10,
    },
    nahBtnText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
    }
});
export default styles;