import React from "react";
import { Text, View, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import FriendsRowController from "./FriendsRowController";
import Base64 from "../../../../Base64";
import styles from './FriendsRowStyle'
import socket from "../../../socket/Socket";


class FriendsRow extends React.Component {
    renderItem = ({ item }) => {
        var img = Base64.btoa(String.fromCharCode(...new Uint8Array(item.avartar.data)))
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn}>
                    <Image source={{ uri: `data:image/png;base64,${img}` }} style={styles.img} resizeMode='contain' />
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
