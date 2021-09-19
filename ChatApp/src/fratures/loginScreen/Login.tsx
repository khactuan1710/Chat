import React from "react";
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native'
import LoginController from "./LoginController";
import { AsyncStorage } from 'react-native';
import styles from "./LoginStyle";
import socket from "../../socket/Socket";

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
                <View style={styles.container}>
                    <View style={styles.viewTextLogin}>
                        <Text style={styles.textLogin}>Đăng Nhập</Text>
                    </View>

                    <View style={styles.viewSection}>
                        <View style={styles.viewChildSection}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.textUser}>Tài khoản</Text>
                                <TextInput style={styles.textInputUser} placeholder='Nhập email hoặc số điện thoai'
                                    onChangeText={text => {
                                        this.setState({ username: text })
                                    }}
                                    value={this.state.username}
                                    autoCapitalize='none'
                                />
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={styles.textPass}>Mật khẩu</Text>
                                <TextInput style={styles.textInputUser} placeholder='Nhập mật khẩu'
                                    onChangeText={text => {
                                        this.setState({ password: text })
                                    }}
                                    value={this.state.password}
                                    secureTextEntry={true}
                                    autoCapitalize='none'
                                />
                                {this.state.checkLogin && <Text style={{ marginTop: 5, color: 'red' }}>{this.state.loginNotification}</Text>}
                            </View>

                            <TouchableOpacity style={styles.btnUpdatePass} onPress={() => this.props.navigation.navigate('ChangePassword')}>
                                <Text style={styles.textUpdatePass}>
                                    Cập nhật mật khẩu mới
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewSection2}>
                        <View style={styles.viewChildSection2}>
                            <View style={styles.viewTextBtnLogin}>
                                <TouchableOpacity style={styles.btnLogin} onPress={this.login}>
                                    <Text style={styles.textBtnLogin}>
                                        Đăng Nhập
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'center' }}>
                                <Text>Hoặc đăng nhập với</Text>
                            </View>
                            <View style={styles.viewBtnLoginOther}>
                                <View style={styles.viewChildBtnLoginOther}>
                                    <TouchableOpacity style={styles.btnLoginOther}>
                                        <Image source={require('../../assets/login/iconGoogle.png')} style={styles.imgLoginOther} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.btnLoginOther}>
                                        <Image source={require('../../assets/login/iconFacebook.png')} style={styles.imgLoginOther} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.btnLoginOther}>
                                        <Image source={require('../../assets/login/iconApple.png')} style={styles.imgLoginOther} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>


                    <View style={styles.viewNewUser}>
                        <Text style={{ fontSize: 18, }}>Người mới?</Text>
                        <TouchableOpacity>
                            <Text style={styles.textNewUser}>Tạo tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login
