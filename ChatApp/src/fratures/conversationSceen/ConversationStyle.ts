import { StyleSheet } from "react-native";
import Color from "../../constants/Color/MainColor";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.mainColor
    },
    viewHeader: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewChildHeader: {
        height: '40%',
        width: '90%',
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 20
    },
    viewBtnSearch: {
        flex: 1,
    },
    btnSearch: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    imgSearch: {
        height: 25,
        width: 25,
        tintColor: '#c4c4c4'
    },
    viewInputSearch: {
        flex: 8
    },
    textInputSearch: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    viewBtnAdd: {
        flex: 0.4,
        alignItems: 'center'
    },
    viewChildBtnAdd: {
        height: '100%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textMsg: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imgAdd: {
        height: 20,
        width: 20,
        tintColor: 'red',
    },
    viewListConversation: {
        flex: 10,
        alignItems: 'center'
    },
    viewChildListConversation: {
        height: '100%',
        width: '90%',
    }
})
export default styles