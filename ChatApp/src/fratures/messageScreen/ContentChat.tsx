import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import Color from "../../constants/Color/MainColor";
import { AsyncStorage } from "react-native";
import socket from "../../socket/Socket";
class ContentChat extends React.Component {
    state = {
        isShowBottom: true,
        textInputSend: '',
        username: '',
        messages: [
        ],
        message: '',
        userStore: []
    }

    async componentDidMount() {

        await AsyncStorage.getItem('user', (err, result) => {
            this.setState({ userStore: result })
        })

        const { username } = this.props.route.params
        this.setState({ username: username })

        const userJoin = []
        socket.on('message', (data) => {

            userJoin.push({
                id: new Date,
                username: data.username,
                userId: data.usreId,
                text: data.text
            })
            this.setState({ messages: [...userJoin] })
        })

    }
    inputMessage = (textMessge) => {


        if (textMessge.length === 0) {
            this.setState({ isShowBottom: true })
        } else {
            this.setState({ isShowBottom: false })
        }
    }

    sendMessage = () => {
        if (this.state.message !== '') {
            socket.emit('chat', this.state.message)
            this.setState({ message: '' })
            this.setState({ isShowBottom: true })
        }
    }

    renderMessage = ({ item }) => {
        if (this.state.username) {
            return (
                <View style={{ alignItems: 'flex-end', marginTop: 8 }}>
                    <Text style={{ fontSize: 20, backgroundColor: '#45aeff', padding: 8, borderRadius: 10, overflow: 'hidden' }}>{item.text}</Text>
                    <Text>{item.username}</Text>
                </View>
            )
        } else {
            return (
                <View style={{ alignItems: 'flex-start', marginTop: 8 }}>
                    <Text style={{ fontSize: 20, backgroundColor: '#ffffff', padding: 8, borderRadius: 10, overflow: 'hidden' }} >{item.text}</Text>
                    <Text>{item.username}</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, flexDirection: 'row', backgroundColor: '#7fc6f5' }}>
                    <TouchableOpacity style={{ flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}
                        onPress={() => {
                            socket.emit('outroom')
                            socket.disconnect(), this.props.navigation.goBack()
                        }}
                    >
                        <Image source={require('../../assets/chatContent/iconBackHeader.png')} style={{ height: 25, width: 25, tintColor: 'white' }} />
                    </TouchableOpacity>
                    <View style={{ flex: 5, justifyContent: 'center', marginTop: 30 }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>{this.state.username}</Text>
                    </View>
                    <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../assets/chatContent/iconCallHeader.png')} style={{ height: 25, width: 25, tintColor: 'white' }} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../assets/chatContent/iconFaceTimeHeader.png')} style={{ height: 25, width: 25, tintColor: 'white' }} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../assets/chatContent/iconMenuHeader.png')} style={{ height: 25, width: 25, tintColor: 'white' }} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 16, backgroundColor: Color.mainColor, flexDirection: 'column', padding: 8 }}>
                    <FlatList
                        data={this.state.messages}
                        renderItem={this.renderMessage}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={{ flex: 1.2, flexDirection: 'row', backgroundColor: 'white' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity><Image source={require('../../assets/chatContent/iconFaceButtom.png')} style={{ width: 25, height: 25, tintColor: '#999999' }} /></TouchableOpacity>
                    </View>
                    {this.state.isShowBottom ?
                        <View style={{ flex: 6, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <TextInput style={{ flex: 1, justifyContent: 'center', fontSize: 17 }} placeholder='Tin nhắn'
                                    onChangeText={(text) => {
                                        this.setState({ message: text })
                                        this.inputMessage(text)
                                    }} value={this.state.message} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                                    <Image source={require('../../assets/chatContent/iconMenuButtom.png')} style={{ height: 30, width: 25, tintColor: '#999999' }} resizeMode='contain' />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                                    <Image source={require('../../assets/chatContent/iconMicButtom.png')} style={{ height: 30, width: 25, tintColor: '#999999' }} resizeMode='contain' />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                                    <Image source={require('../../assets/chatContent/iconImageButtom.png')} style={{ height: 30, width: 25, tintColor: '#999999' }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        : <View style={{ flex: 6, flexDirection: 'row' }}>
                            <View style={{ flex: 6 }}>
                                <TextInput style={{ flex: 1, justifyContent: 'center', fontSize: 17 }} placeholder='Tin nhắn' maxLength={100} onChangeText={(text) => {
                                    this.setState({ message: text })
                                    this.inputMessage(text)
                                }}
                                    value={this.state.message}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />
                            </View>
                            <View style={{ flex: 1.5, flexDirection: 'row', }}>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={this.sendMessage}>
                                    <Image source={require('../../assets/chatContent/iconSendButtom.png')} style={{ height: 30, width: 25 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>}
                </View>
            </View >
        )
    }
}

export default ContentChat