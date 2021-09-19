import { StyleSheet } from "react-native";
import Color from "../../constants/Color/MainColor";
const styles = StyleSheet.create({
    viewMessageSend: {
        alignItems: 'flex-end',
        marginTop: 8
    },
    viewMessageReceive: {
        alignItems: 'flex-start',
        marginTop: 8
    },
    messageSend: {
        backgroundColor: '#45aeff',
        padding: 8,
        borderRadius: 10,
        overflow: 'hidden'
    },
    messageReceive: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius: 10,
        overflow: 'hidden'
    },
    textMessage: {
        fontSize: 20
    },
    textTimeMessage: {
        fontSize: 10,
        color: '#636363'
    },
    container: {
        flex: 1
    },
    viewHeader: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#7fc6f5'
    },
    btnBack: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    imgBack: {
        height: 25,
        width: 25,
        tintColor: 'white'
    },
    viewNameFriendChat: {
        flex: 5,
        justifyContent: 'center',
        marginTop: 30
    },
    textNameFriendChat: {
        fontSize: 20,
        color: 'white'
    },
    viewOption: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    viewContentMessages: {
        flex: 16,
        backgroundColor: Color.mainColor,
        flexDirection: 'column',
        padding: 8
    },
    viewBottom: {
        flex: 1.2,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    viewBtnIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgIcon: {
        width: 25,
        height: 25,
        tintColor: '#999999'
    },
    inputMessage: {
        flex: 6,
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 17
    },
    iconTextInput: {
        height: 30,
        width: 25,
        tintColor: '#999999'
    },
    iconSendMessage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default styles;