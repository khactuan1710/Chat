import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    viewUser: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        marginTop: 15
    },
    viewAvatarFlex: {
        flex: 1.2
    },
    viewAvatar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        height: '90%',
        width: '90%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    viewNameFlex: {
        flex: 5
    },
    viewNameMsg: {
        flex: 1,
        justifyContent: 'space-around'
    },
    textName: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default styles