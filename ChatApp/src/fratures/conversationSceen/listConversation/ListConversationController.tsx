import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import socket from '../../../socket/Socket';
import Base64 from '../../../../Base64';
import { AsyncStorage } from 'react-native';
import styles from './ListConversations';

class ListConversations extends React.Component {

    state = {
        userStore: null
    }

    async componentDidMount() {
        await AsyncStorage.getItem('user', (err, result) => {
            const objUser = JSON.parse(result)
            this.setState({ userStore: objUser })
        })
    }

    message(username) {
    }
    navigate(friendChat) {
        this.props.navigation.navigate('ContentChat', {
            friendChat: friendChat
        })
    }




    renderItem = ({ item }) => {
        const { searchTextRegex, searchText, navigation } = this.props

        var avartar = Base64.btoa(String.fromCharCode(...new Uint8Array(item.avartar.data)))

        const partialText = item.username.split(searchTextRegex)
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.viewUser}
                    onPress={() => (
                        this.message(this.state.userStore.username),
                        this.navigate(item)
                    )}
                >
                    <View style={styles.viewAvatarFlex}>
                        <View style={styles.viewAvatar}>
                            <Image source={{ uri: `data:image/png;base64,${avartar}` }} style={styles.avatar} />
                        </View>
                    </View>
                    <View style={styles.viewNameFlex}>
                        <View style={styles.viewNameMsg}>
                            <Text style={styles.textName}>
                                {partialText.map((part, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {part}
                                            {index !== partialText.length - 1 && <Text style={{ color: 'blue' }}>{searchText}</Text>}
                                        </React.Fragment>
                                    )
                                })}
                            </Text>
                            <Text style={{ marginLeft: 10 }}>{item.username}</Text>
                        </View>

                    </View>

                </TouchableOpacity>
            </View>
        )
    }
    render() {
        const { listConversations, searchText } = this.props

        return (
            <FlatList
                data={listConversations.filter(item => item.username.includes(searchText))}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.idAccount}
            />
        )
    }
}

export default ListConversations