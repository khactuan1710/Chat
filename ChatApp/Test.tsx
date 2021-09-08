import React from "react";
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native'

import Base64 from "./Base64";


class Test extends React.Component {

    state = {
        newsfeed: [],
        photo: [],
        img: null
    }

    componentDidMount() {
        return fetch('http://127.0.0.1:3000/newsfeed')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ newsfeed: json.data })
                var arr = []
                this.state.newsfeed.forEach(data => {
                    arr.push(data.photo)
                })
                this.setState({ photo: [...arr] })
                var img = Base64.btoa(String.fromCharCode(...new Uint8Array(arr[0].data)))
                console.log(img);
                this.setState({ img: img })


            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {



        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{ height: 100, width: 300, backgroundColor: 'red' }}>

                </TouchableOpacity>
                <Image style={{ width: 100, height: 100 }} source={{ uri: `data:image/png;base64,${this.state.img}` }} />
            </View>
        )
    }
}

export default Test
