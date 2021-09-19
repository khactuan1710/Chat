import { StyleSheet } from "react-native";
import Color from "../../constants/Color/MainColor";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.mainColor
    },
    viewHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    viewTextHeader: {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: 15,
        marginTop: 15
    },
    textHeader: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'blue'
    },
    viewBtnHeader: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15
    },
    btnHeader: {
        height: 36,
        width: 36,
        backgroundColor: '#c4c4c4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18
    },
    imgHeader: {
        height: 20,
        width: 20
    },
    viewRowListFriend: {
        flex: 1,
        flexDirection: 'row'
    },
    viewBtnRowAdd: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btnRowAdd: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#c4c4c4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgRowAdd: {
        height: 20,
        width: 20
    },

})

export default styles