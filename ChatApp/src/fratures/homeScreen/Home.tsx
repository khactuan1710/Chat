import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import HomeController from "./HomeController";
import FriendsRow from "./listFriendRow/FriendsRow";
import NewsFeeds from "./listFriendNewsFeeds/NewsFeeds";
import Color from "../../constants/Color/MainColor";
import styles from "./HomeStyle";
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
            <View style={styles.container}>
                <View style={styles.viewHeader}>
                    <View style={styles.viewTextHeader}>
                        <Text style={styles.textHeader}>Chat App</Text>
                    </View>
                    <View style={styles.viewBtnHeader}>
                        <TouchableOpacity style={styles.btnHeader}>
                            <Image source={require('../../assets/home/search.png')} style={styles.imgHeader} resizeMode='contain' />
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.btnHeader} onPress={() => this.props.navigation.navigate('Conversation')}>
                            <Image source={require('../../assets/home/chat.png')} style={styles.imgHeader} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewRowListFriend}>
                    <View style={styles.viewBtnRowAdd}>
                        <TouchableOpacity style={styles.btnRowAdd}>
                            <Image source={require('../../assets/home/iconThem.png')} style={styles.imgRowAdd} />
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
