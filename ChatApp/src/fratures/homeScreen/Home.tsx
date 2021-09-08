import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import HomeController from "./HomeController";
import FriendsRow from "./listFriendRow/FriendsRow";
import NewsFeeds from "./listFriendNewsFeeds/NewsFeeds";
import Color from "../../constants/Color/MainColor";
import { AsyncStorage } from 'react-native';
class Home extends React.Component {
    state = {
        friendsRow: [],
        newsFeeds: []
    }
    componentDidMount() {

        const homeController = new HomeController();
        homeController.getNewsFriendsRow()
            .then(listFriend => {
                this.setState({ friendsRow: listFriend.data })
            }).catch((err) => {
                console.log('goi api friend bi loi');

            })

        homeController.getNewsFeeds()
            .then(listNewsFeeds => {
                this.setState({ newsFeeds: listNewsFeeds.data })

            }).catch((err) => {
                console.log('goi api newfeeds bi loi');

            })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Color.mainColor }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 4, justifyContent: 'center', paddingLeft: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'blue' }}>Chat App</Text>
                    </View>
                    <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 15 }}>
                        <TouchableOpacity style={{ height: 36, width: 36, backgroundColor: '#c4c4c4', alignItems: 'center', justifyContent: 'center', borderRadius: 18 }}>
                            <Image source={require('../../assets/home/search.png')} style={{ height: 20, width: 20 }} resizeMode='contain' />
                        </TouchableOpacity >
                        <TouchableOpacity style={{ height: 36, width: 36, backgroundColor: '#c4c4c4', alignItems: 'center', justifyContent: 'center', borderRadius: 18 }} onPress={() => this.props.navigation.navigate('Conversation')}>
                            <Image source={require('../../assets/home/chat.png')} style={{ height: 20, width: 20 }} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#c4c4c4', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/home/iconThem.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <Text>Thêm</Text>
                    </View>
                    <View style={{ flex: 4 }}>
                        <FriendsRow listFriend={this.state.friendsRow} />
                    </View>
                </View>
                <View style={{ flex: 8 }}>
                    <NewsFeeds listNewsFeeds={this.state.newsFeeds} />
                </View>
            </View>
        )
    }
}
export default Home;
