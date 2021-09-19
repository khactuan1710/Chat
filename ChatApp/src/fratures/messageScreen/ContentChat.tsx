import React, { memo } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import Color from "../../constants/Color/MainColor";
import { AsyncStorage } from "react-native";
import socket from "../../socket/Socket";
import { AutoScrollFlatList } from "react-native-autoscroll-flatlist";
import styles from "./ContentChatStyle";
import ContenChatController from "./ContentChatController";

class ContentChat extends React.Component {
    state = {
        isShowBottom: true,
        textInputSend: '',
        username: '',
        messages: [
        ],
        message: '',
        userStore: null,
        userChat: null
    }
    contenChatController = new ContenChatController()
    async componentDidMount() {
        const dataUser = await this.contenChatController.getItem()
        this.setState({ userStore: dataUser })

        const { friendChat } = this.props.route.params
        this.setState({ username: friendChat.username })
        this.setState({ userChat: friendChat })

        var userJoin = new Array()
        const idUser = this.state.userStore.idAccount
        const idFriendChat = this.state.userChat.idAccount
        const room = parseInt(idUser) < parseInt(idFriendChat) ? `${idUser}-${idFriendChat}` : `${idFriendChat}-${idUser}`
        new Promise((resolve, reject) => {
            fetch(`http://127.0.0.1:3000/message/${room}`)
                .then(response => response.json())
                .then(json => {
                    this.setState({ messages: json.data })
                    console.log(json.data);

                    userJoin = userJoin.concat(json.data)
                })
        })
        socket.on('message1', (data) => {
            userJoin.push({
                thoiGian: new Date,
                idUser: data.idUser,
                username: data.username,
                message: data.message
            })
            this.setState({ messages: [...userJoin] })
        })
        socket.emit('connect chat', { room: room })
    }

    inputMessage = (textMessge) => {
        if (textMessge.length === 0) {
            this.setState({ isShowBottom: true })
        } else {
            this.setState({ isShowBottom: false })
        }
    }
    sendMessage = () => {
        const idUser = this.state.userStore.idAccount
        const idFriendChat = this.state.userChat.idAccount
        const room = parseInt(idUser) < parseInt(idFriendChat) ? `${idUser}-${idFriendChat}` : `${idFriendChat}-${idUser}`

        fetch('http://127.0.0.1:3000/message', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idUser: this.state.userStore.idAccount,
                message: this.state.message,
                thoiGian: new Date,
                idConversation: room
            })
        })
        const data = { idAccount: this.state.userStore.idAccount, username: this.state.userStore.username, message: this.state.message, room: room }
        if (this.state.message !== '') {
            socket.emit('chat1', data)
            this.setState({ message: '' })
            this.setState({ isShowBottom: true })
        }
    }

    renderMessage = ({ item }) => {
        var dateMessage = new Date(item.thoiGian)
        var hours = dateMessage.getHours()
        var minute = dateMessage.getMinutes()

        if (item.idUser === this.state.userStore.idAccount) {
            return (
                <View style={styles.viewMessageSend} >
                    <View style={styles.messageSend}>
                        <Text style={styles.textMessage}>{item.message}</Text>
                        <Text style={styles.textTimeMessage}>{hours}:{minute}</Text>
                    </View>
                    <Text>{item.username}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.viewMessageReceive}>
                    <View style={styles.messageReceive}>
                        <Text style={styles.textMessage}>{item.message}</Text>
                        <Text style={styles.textTimeMessage}>{hours}:{minute}</Text>
                    </View>
                    <Text>{item.username}</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewHeader}>
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    >
                        <Image source={require('../../assets/chatContent/iconBackHeader.png')} style={styles.imgBack} />
                    </TouchableOpacity>
                    <View style={styles.viewNameFriendChat}>
                        <Text style={styles.textNameFriendChat}>{this.state.username}</Text>
                    </View>
                    <View style={styles.viewOption}>
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
                <View style={styles.viewContentMessages}>
                    <AutoScrollFlatList
                        data={this.state.messages}
                        renderItem={this.renderMessage}
                        keyExtractor={(item) => item.thoiGian}
                    />
                </View>
                <View style={styles.viewBottom}>
                    <View style={styles.viewBtnIcon}>
                        <TouchableOpacity><Image source={require('../../assets/chatContent/iconFaceButtom.png')} style={styles.imgIcon} /></TouchableOpacity>
                    </View>
                    {this.state.isShowBottom ?
                        <View style={styles.inputMessage}>
                            <View style={{ flex: 2 }}>
                                <TextInput style={styles.textInput} placeholder='Tin nhắn'
                                    onChangeText={(text) => {
                                        this.setState({ message: text })
                                        this.inputMessage(text)
                                    }} value={this.state.message} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                                    <Image source={require('../../assets/chatContent/iconMenuButtom.png')} style={styles.iconTextInput} resizeMode='contain' />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                                    <Image source={require('../../assets/chatContent/iconMicButtom.png')} style={styles.iconTextInput} resizeMode='contain' />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                                    <Image source={require('../../assets/chatContent/iconImageButtom.png')} style={styles.iconTextInput} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        : <View style={styles.inputMessage}>
                            <View style={{ flex: 6 }}>
                                <TextInput style={styles.textInput} placeholder='Tin nhắn' maxLength={100} onChangeText={(text) => {
                                    this.setState({ message: text })
                                    this.inputMessage(text)
                                }}
                                    value={this.state.message}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />
                            </View>
                            <View style={{ flex: 1.5, flexDirection: 'row', }}>
                                <TouchableOpacity style={styles.iconSendMessage} onPress={this.sendMessage}>
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