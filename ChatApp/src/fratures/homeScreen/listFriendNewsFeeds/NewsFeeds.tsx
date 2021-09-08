import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Base64 from "../../../../Base64";
class NewsFeeds extends React.Component {
    state = {

    }
    componentDidMount() {

    }
    renderItem = ({ item }) => {



        var photo = Base64.btoa(String.fromCharCode(...new Uint8Array(item.photo.data)))
        var avartar = Base64.btoa(String.fromCharCode(...new Uint8Array(item.avartar.data)))


        return (
            <View style={{ flex: 1, marginTop: 15, alignItems: 'center' }} key={item.idNewsfeed}>
                <View style={{ flex: 1, width: '90%', marginTop: 10 }} >
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 15, flexDirection: 'row' }}>
                            <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 2, borderColor: '#598DFA', alignItems: 'center', justifyContent: 'center' }}

                            >
                                <Image source={{ uri: `data:image/png;base64,${avartar}` }} style={{ height: 46, width: 46, borderRadius: 23 }} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', marginLeft: 10, fontSize: 15 }}>{item.username}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableOpacity >
                                <Image source={require('../../../assets/home/menu.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text style={{ fontSize: 15, marginTop: 10 }}>{item.title}</Text>
                    <View style={{ flex: 4, marginTop: 20 }}>

                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                            <Image key={item.idNewsfeed} source={{ uri: `data:image/png;base64,${photo}` }} style={{ width: '100%', height: 200, borderRadius: 30, borderWidth: 1, borderColor: '#ccc' }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 5, height: 50, flexDirection: 'row' }}>
                            {
                                item.isLiked ? <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}   >
                                    <Image source={require('../../../assets/home/likeDo.png')} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity  > : <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                                    <Image source={require('../../../assets/home/likeDen.png')} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity  >
                            }
                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
                                <Image source={require('../../../assets/home/iconBinhLuan.png')} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                                <Image source={require('../../../assets/home/iconChiaSe.png')} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3, height: 50 }}>

                        </View>

                    </View>
                </View>
                <View style={{ backgroundColor: '#ebebeb', height: 10, width: '100%' }}>

                </View>

            </View >
        )
    }

    render() {
        const { listNewsFeeds } = this.props

        return (
            <FlatList
                data={listNewsFeeds}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.idNewsfeed}
            />
        )
    }
}

export default NewsFeeds