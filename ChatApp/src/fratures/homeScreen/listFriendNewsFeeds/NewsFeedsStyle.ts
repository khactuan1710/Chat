import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center'
    },
    childContainer: {
        flex: 1,
        width: '90%',
        marginTop: 10
    },
    viewHeaderNewsfeed: {
        flex: 1,
        flexDirection: 'row'
    },
    viewAvartar: {
        flex: 15,
        flexDirection: 'row'
    },
    btnAvartar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#598DFA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avartar: {
        height: 46,
        width: 46,
        borderRadius: 23
    },
    textNameUser: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 15
    },
    viewMenu: {
        flex: 1,
        justifyContent: 'center'
    },
    imgMenu: {
        width: 20,
        height: 20
    },
    titleNewsfeed: {
        fontSize: 15,
        marginTop: 10
    },
    viewImgNewsfeed: {
        flex: 4,
        marginTop: 20
    },
    btnImgNewsfeed: {
        flex: 1,
        flexDirection: 'row'
    },
    imgNewsfeed: {
        width: '100%',
        height: 200,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    viewActionNewsfeed: {
        flex: 1,
        flexDirection: 'row'
    },
    btnActionNewsfeed: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgActionNewsfeed: {
        width: 25,
        height: 25
    },
    distanceNewsfeed: {
        backgroundColor: '#ebebeb',
        height: 10,
        width: '100%'
    }
})

export default styles