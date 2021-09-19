import { AsyncStorage } from "react-native";
import socket from "../../socket/Socket";
class ContenChatController {
    getItem = async () => {
        var data = new Array
        await AsyncStorage.getItem('user', (err, result) => {
            data = JSON.parse(result)
        })

        return data
    }

}

export default ContenChatController