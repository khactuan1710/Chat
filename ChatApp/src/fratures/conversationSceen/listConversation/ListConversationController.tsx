import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import socket from '../../../socket/Socket';
import Base64 from '../../../../Base64';
import { AsyncStorage } from 'react-native';

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
        socket.connect()

        socket.emit('joinChat', { username })

    }
    navigate(params) {
        this.props.navigation.navigate('ContentChat', {
            username: params
        })
    }




    renderItem = ({ item }) => {
        const { searchTextRegex, searchText, navigation } = this.props

        var avartar = Base64.btoa(String.fromCharCode(...new Uint8Array(item.avartar.data)))

        const partialText = item.username.split(searchTextRegex)
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TouchableOpacity style={{ height: 70, width: '100%', flexDirection: 'row', marginTop: 15 }}
                    onPress={() => (
                        this.message(this.state.userStore.username),
                        this.navigate(item.username)
                    )}
                >
                    <View style={{ flex: 1.2 }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={{ uri: `data:image/png;base64,${avartar}` }} style={{ height: '90%', width: '90%', borderRadius: 15, borderWidth: 1, borderColor: '#ccc' }} />
                        </View>
                    </View>
                    <View style={{ flex: 5, }}>
                        <View style={{ flex: 1, justifyContent: 'space-around' }}>
                            {/* <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>  */}
                            <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>
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