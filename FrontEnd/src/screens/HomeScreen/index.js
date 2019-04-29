import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null,

    }
    state = {
        erroMessage: null,
        login: null,
        senha: null,
        isLoading: true
    }
    async componentDidMount() {
        await AsyncStorage.clear();
        this.setState({ isLoading: false })
    }

    render() {
        const { isLoading } = this.state;

        signIn = async (login, senha) => {
            this.setState({ isLoading: true })
            fetch('http://10.0.2.2:21379/api/signin', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'login': 'admin@admin',
                    'senha': 'admin',
                    //'login': login,
                    //'senha': senha,

                }),
            }).then(response => response.json())
                .then(async responseJson => {
                    if (responseJson.autenticated === true) {
                        await AsyncStorage.setItem('@dpApiAccess', JSON.stringify(responseJson));
                        this.props.navigation.navigate('Lancamento')
                    }
                    else {
                        this.setState({ erroMessage: responseJson.message });
                    }
                })
                .then( () =>{
                    this.setState({ isLoading: false });
                })
                .then(response => {
                    this.setState({ isLoading: false });                    
                    //console.debug(response);
                })
                .catch(error => {
                    this.setState({ isLoading: false });
                    this.setState({ erroMessage: 'Erro de conexão, tente novamente mais tarde.' });
                    //console.error(error);
                });
        };

        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={styles.body}>
                    <View style={styles.ViewCentralizar} >
                        <Text style={styles.textBenVindo} >Seja Bem Vindo</Text>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')} >
                            <Text style={styles.btnCadastrar}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput style={styles.text} placeholder='Digite seu email' maxLength={20} keyboardType='email-address' onChangeText={txt => this.setState({ login: txt })} />
                        <TextInput style={styles.text} placeholder='Digite sua senha' maxLength={8} secureTextEntry onChangeText={txt => this.setState({ senha: txt })} />
                    </View>
                    <View style={styles.ViewCentralizar} >
                        <Text style={{ color: 'red' }}> {this.state.erroMessage} </Text>
                    </View>
                    <View style={styles.ViewCentralizar} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RecuperarSenha')} >
                            <Text style={styles.btnEsqueciSenha}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.ViewCentralizar} >
                        {isLoading ? (
                            <ActivityIndicator
                                style={styles.btnIniciar}
                                color="#C00"
                                size="large"
                            />
                        ) :
                            (
                                <TouchableOpacity style={styles.btnIniciar} onPress={() => { signIn(this.state.login, this.state.senha) }}>
                                    <Image source={assets.btnIniciar} />
                                </TouchableOpacity>
                            )
                        }

                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default HomeScreen;