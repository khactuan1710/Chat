import React from "react";
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native'
import LoginController from "./LoginController";
import { AsyncStorage } from 'react-native';


class Login extends React.Component {
    state = {
        arrAccount: [],
        username: '',
        password: '',
        checkLogin: null,
        loginNotification: '',
        userStore: []
    }

    componentDidMount() {
        const loginController = new LoginController();
        loginController.getAccount()
            .then(account => {
                this.setState({ arrAccount: account })
            })
    }
    check = async () => {
        const arrAccount = this.state.arrAccount
        let checkLogin = true

        if (this.state.username == '' && this.state.password === '') {
            this.setState({ loginNotification: 'Bạn chưa nhập tài khoản và mật khẩu!' })
        } else {
            this.setState({ loginNotification: 'Tài khoản hoặc mật khẩu không chính xác!' })
        }


        arrAccount.forEach(account => {
            if (account.username === this.state.username && account.password === this.state.password) {
                checkLogin = false
                this.setState({ userStore: account })
                this.props.navigation.navigate('Home')

            }
        })

        this.setState({ checkLogin: checkLogin })
    }

    storeData = () => {
        try {
            AsyncStorage.setItem(
                'user',
                JSON.stringify(this.state.userStore),
            )
        } catch (error) {
            console.log(error, 'error save store data');

        }
    }
    login = async () => {
        await this.check(),
            this.storeData()
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image style={{ flex: 1 }} source={require('../../assets/login/backgroundLogin.jpg')} />
                <View style={{ position: 'absolute', height: '70%', width: '100%', backgroundColor: 'white', bottom: 0, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Đăng Nhập</Text>
                    </View>

                    <View style={{ flex: 3, width: '100%', alignItems: 'center' }}>
                        <View style={{ width: '80%', height: '100%' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ marginLeft: 10, fontSize: 20 }}>Tài khoản</Text>
                                <TextInput style={{ fontSize: 20, paddingLeft: 10, borderBottomWidth: 1, borderColor: '#c4c4c4', width: '100%', height: 60 }} placeholder='Nhập email hoặc số điện thoai'
                                    onChangeText={text => {
                                        this.setState({ username: text })
                                    }}
                                    value={this.state.username}
                                    autoCapitalize='none'
                                />
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={{ marginLeft: 10, fontSize: 20 }}>Mật khẩu</Text>
                                <TextInput style={{ paddingLeft: 10, fontSize: 20, borderBottomWidth: 1, borderColor: '#c4c4c4', width: '100%', height: 60 }} placeholder='Nhập mật khẩu'
                                    onChangeText={text => {
                                        this.setState({ password: text })
                                    }}
                                    value={this.state.password}
                                    secureTextEntry={true}
                                    autoCapitalize='none'
                                />
                                {this.state.checkLogin && <Text style={{ marginTop: 5, color: 'red' }}>{this.state.loginNotification}</Text>}
                            </View>

                            <TouchableOpacity style={{ position: 'absolute', top: '100%', left: '55%' }} onPress={() => this.props.navigation.navigate('ChangePassword')}>
                                <Text style={{ position: 'absolute', top: '96%', left: '55%', fontStyle: 'italic', textDecorationLine: 'underline' }}>
                                    Cập nhật mật khẩu mới
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 3.5, width: '100%', alignItems: 'center', marginTop: 5 }}>
                        <View style={{ width: '80%', height: '100%' }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: 'blue', height: 70, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={this.login}>
                                    <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: 'bold' }}>
                                        Đăng Nhập
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'center' }}>
                                <Text>Hoặc đăng nhập với</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderColor: '#c4c4c4', borderWidth: 1 }}>
                                        <Image source={require('../../assets/login/iconGoogle.png')} style={{ width: 20, height: 20 }} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderColor: '#c4c4c4', borderWidth: 1 }}>
                                        <Image source={require('../../assets/login/iconFacebook.png')} style={{ width: 20, height: 20 }} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderColor: '#c4c4c4', borderWidth: 1 }}>
                                        <Image source={require('../../assets/login/iconApple.png')} style={{ width: 20, height: 20 }} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>


                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, }}>Người mới?</Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 18 }}>Tạo tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login
