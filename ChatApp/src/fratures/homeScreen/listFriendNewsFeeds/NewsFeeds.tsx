import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Base64 from "../../../../Base64";
import styles from "./NewsFeedsStyle";
class NewsFeeds extends React.Component {
    state = {

    }
    componentDidMount() {

    }
    renderItem = ({ item }) => {



        var photo = Base64.btoa(String.fromCharCode(...new Uint8Array(item.photo.data)))
        var avartar = Base64.btoa(String.fromCharCode(...new Uint8Array(item.avartar.data)))


        return (
            <View style={styles.container} key={item.idNewsfeed}>
                <View style={styles.childContainer} >
                    <View style={styles.viewHeaderNewsfeed}>
                        <View style={styles.viewAvartar}>
                            <TouchableOpacity style={styles.btnAvartar}
                            >
                                <Image source={{ uri: `data:image/png;base64,${avartar}` }} style={styles.avartar} resizeMode='contain' />
                            </TouchableOpacity>
                            <Text style={styles.textNameUser}>{item.username}</Text>
                        </View>
                        <View style={styles.viewMenu}>
                            <TouchableOpacity >
                                <Image source={require('../../../assets/home/menu.png')} style={styles.imgMenu} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text style={styles.titleNewsfeed}>{item.title}</Text>
                    <View style={styles.viewImgNewsfeed}>

                        <TouchableOpacity style={styles.btnImgNewsfeed}>
                            <Image key={item.idNewsfeed} source={{ uri: `data:image/png;base64,${photo}` }} style={styles.imgNewsfeed} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewActionNewsfeed}>
                        <View style={{ flex: 5, height: 50, flexDirection: 'row' }}>
                            {
                                item.isLiked ? <TouchableOpacity style={styles.btnActionNewsfeed}   >
                                    <Image source={require('../../../assets/home/likeDo.png')} style={styles.imgActionNewsfeed} />
                                </TouchableOpacity  > : <TouchableOpacity style={styles.btnActionNewsfeed} >
                                    <Image source={require('../../../assets/home/likeDen.png')} style={styles.imgActionNewsfeed} />
                                </TouchableOpacity  >
                            }
                            <TouchableOpacity style={styles.btnActionNewsfeed}  >
                                <Image source={require('../../../assets/home/iconBinhLuan.png')} style={styles.imgActionNewsfeed} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnActionNewsfeed} >
                                <Image source={require('../../../assets/home/iconChiaSe.png')} style={styles.imgActionNewsfeed} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3, height: 50 }}>

                        </View>

                    </View>
                </View>
                <View style={styles.distanceNewsfeed}>

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