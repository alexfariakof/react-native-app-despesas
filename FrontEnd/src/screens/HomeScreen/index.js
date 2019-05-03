import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import assets from './assets'
import styles from './styles'

import apiServices from '../../services/ApiServices.js'

class HomeScreen extends Component {
    static navigationOptions = { header: null }

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

    signIn = async () => {
        api = new apiServices();
        const body = {
            login: 'admin@admin',
            senha: 'admin'
            //login: this.state.login,
            //senha: this.state.senha
        };
        try {
            const json = await api.post('/api/controleacesso/signin', body);
            this.setState({ isLoading: true })
            if (json.autenticated === true) {
                await AsyncStorage.setItem('@dpApiAccess', JSON.stringify(json));                
                this.props.navigation.navigate('Lancamento');
            }
            else {
                this.setState({ erroMessage: json.message });
            }
            this.setState({ isLoading: false });
        }
        catch (error) {
            this.setState({ isLoading: false });
            this.setState({ erroMessage: 'Erro de conexão, tente novamente mais tarde.' });
            //console.error(error);
        }
    };

    render() {
        const { isLoading } = this.state;

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
                                <TouchableOpacity style={styles.btnIniciar} onPress={() => { this.signIn() }}>
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