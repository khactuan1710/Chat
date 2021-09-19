import React from "react";
import { View, TextInput, Text, Image, TouchableOpacity, } from 'react-native'
import ListConversations from "./listConversation/ListConversationController";
import Color from "../../constants/Color/MainColor";
import ConversationsController from "./ConversationController";
import styles from "./ConversationStyle";
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
            <View style={styles.container}>
                <View style={styles.viewHeader}>
                    <View style={styles.viewChildHeader}>
                        <View style={styles.viewBtnSearch}>
                            <TouchableOpacity style={styles.btnSearch} onPress={() => { this.props.navigation.navigate('ContentChat') }}>
                                <Image source={require('../../assets/home/search.png')} style={styles.imgSearch} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewInputSearch}>
                            <TextInput style={styles.textInputSearch} placeholder='search'
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
                <View style={styles.viewBtnAdd}>
                    <View style={styles.viewChildBtnAdd}>
                        <Text style={styles.textMsg}>Messages</Text>
                        <TouchableOpacity>
                            <Image source={require('../../assets/home/iconThem.png')} style={styles.imgAdd} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewListConversation}>
                    <View style={styles.viewChildListConversation}>
                        <ListConversations listConversations={this.state.arrConversations} searchText={this.state.searchText} searchTextRegex={this.state.searchTextRegex} navigation={this.props.navigation} />
                    </View>
                </View>

            </View>
        )
    }
}
export default Conversation