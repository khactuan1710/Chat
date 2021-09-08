import React from "react";
import { Text, View, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import FriendsRowController from "./FriendsRowController";
import Base64 from "../../../../Base64";

class FriendsRow extends React.Component {
    renderItem = ({ item }) => {
        var img = Base64.btoa(String.fromCharCode(...new Uint8Array(item.avartar.data)))
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', marginLeft: 10 }}>
                <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 2, borderColor: '#598DFA', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: `data:image/png;base64,${img}` }} style={{ height: 46, width: 46, borderRadius: 23 }} resizeMode='contain' />
                </TouchableOpacity>
                <Text >{item.username}</Text>
            </View>
        )
    }
    render() {
        const { listFriend } = this.props

        return (
            <FlatList
                horizontal={true}
                data={listFriend}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.idAccount}
            />
        )
    }
}

export default FriendsRow
