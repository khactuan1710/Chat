import React from "react";
import { View, TextInput, Text, Image, TouchableOpacity, } from 'react-native'
import ListConversations from "./listConversation/ListConversationController";
import Color from "../../constants/Color/MainColor";
import ConversationsController from "./ConversationController";

class Conversation extends React.Component {
    arrFriends = []
    state = {
        arrConversations: [],
        searchText: '',
        searchTextRegex: null,
    }

    componentDidMount() {
        const conversationsController = new ConversationsController();
        conversationsController.getConversations()
            .then(listConversations => {
                this.arrFriends = listConversations.data


                this.setState({ arrConversations: listConversations.data })
            })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Color.mainColor }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: '40%', width: '90%', flexDirection: 'row', marginTop: 15, borderRadius: 20 }}>
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} onPress={() => { this.props.navigation.navigate('ContentChat') }}>
                                <Image source={require('../../assets/home/search.png')} style={{ height: 25, width: 25, tintColor: '#c4c4c4' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 8 }}>
                            <TextInput style={{ flex: 1, backgroundColor: '#ffffff', paddingLeft: 15, borderTopRightRadius: 20, borderBottomRightRadius: 20 }} placeholder='search'
                                onChangeText={(text) => {
                                    this.setState({
                                        searchText: text,
                                        searchTextRegex: new RegExp(text)
                                    })
                                }}
                                autoCapitalize='none'
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.4, alignItems: 'center' }}>
                    <View style={{ height: '100%', width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Messages</Text>
                        <TouchableOpacity>
                            <Image source={require('../../assets/home/iconThem.png')} style={{ height: 20, width: 20, tintColor: 'red', }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 10, alignItems: 'center' }}>
                    <View style={{ height: '100%', width: '90%', }}>
                        <ListConversations listConversations={this.state.arrConversations} searchText={this.state.searchText} searchTextRegex={this.state.searchTextRegex} navigation={this.props.navigation} />
                    </View>
                </View>

            </View>
        )
    }
}
export default Conversation