import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '70%',
        width: '100%',
        backgroundColor: 'white',
        bottom: 0,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    viewTextLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogin: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    viewSection: {
        flex: 3,
        width: '100%',
        alignItems: 'center'
    },
    viewChildSection: {
        width: '80%',
        height: '100%'
    },
    textUser: {
        marginLeft: 10,
        fontSize: 20
    },
    textInputUser: {
        fontSize: 20,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        width: '100%',
        height: 60
    },
    textPass: {
        marginLeft: 10,
        fontSize: 20
    },
    btnUpdatePass: {
        position: 'absolute',
        top: '100%',
        left: '55%'
    },
    textUpdatePass: {
        position: 'absolute',
        top: '96%',
        left: '55%',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    viewSection2: {
        flex: 3.5,
        width: '100%',
        alignItems: 'center',
        marginTop: 5
    },
    viewChildSection2: {
        width: '80%',
        height: '100%'
    },
    viewTextBtnLogin: {
        flex: 1,
        justifyContent: 'center'
    },
    btnLogin: {
        backgroundColor: 'blue',
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtnLogin: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    viewBtnLoginOther: {
        flex: 1,
        justifyContent: 'center'
    },
    viewChildBtnLoginOther: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnLoginOther: {
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#c4c4c4',
        borderWidth: 1
    },
    imgLoginOther: {
        width: 20, height: 20
    },
    viewNewUser: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textNewUser: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default styles