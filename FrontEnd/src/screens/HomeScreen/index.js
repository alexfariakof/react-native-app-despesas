import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
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
        isLoading: true,
        errors: {
            login: null,
            senha: null
        }
    }

    async componentDidMount() {
        await AsyncStorage.clear();
        this.setState({ isLoading: false })
    }

    signIn = async () => {
        //if (!this.isValid(this.state))
          //  return;

        const body = {
            login: 'admin@admin',
            senha: 'admin'
            //login: this.state.login,
            //senha: this.state.senha
        };

        api = new apiServices();
        try {
            this.setState({ isLoading: true });
            await api.post('/api/controleacesso/signin', body, async (json) => {
                if (json.autenticated === true) {
                    await AsyncStorage.setItem('@dpApiAccess', JSON.stringify(json));
                    this.props.navigation.navigate('Lancamento');
                }
                else
                    this.setState({ erroMessage: json.message });
                this.setState({ isLoading: false });
            });
        }
        catch (error) {
            this.setState({ isLoading: false });
            this.setState({ erroMessage: 'Erro de conexão, tente novamente mais tarde.' });
            //console.error(error);
        }
    };

    isValid = (body) => {
        var result = true;

        if ((body.login === null) || (body.login === undefined) || (body.login === 0)) {
            body.errors.login = 'O email de acesso não pode ser nulo!';
            result = false;
        }
        else
            body.errors.login = null;

        if ((body.senha === null) || (body.senha === undefined) || (body.senha.trim() === '')) {
            body.errors.senha = 'Senha não pode ser nula!';
            result = false;
        }
        else
            body.errors.senha = null;

        this.setState({ errors: body.errors });
        return result;
    }

    render() {
        const { isLoading } = this.state;

        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.ViewCentralizar} >
                            <Text style={styles.textBenVindo} >Seja Bem Vindo</Text>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')} >
                                <Text style={styles.btnCadastrar}>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput style={styles.text} placeholder='Digite seu email' maxLength={20} keyboardType='email-address' onChangeText={txt => this.setState({ login: txt })} />
                            <View style={styles.ViewCentralizar} >
                                <Text style={{ color: 'red' }}> {this.state.errors.login} </Text>
                            </View>

                            <TextInput style={styles.text} placeholder='Digite sua senha' maxLength={8} secureTextEntry onChangeText={txt => this.setState({ senha: txt })} />
                            <View style={styles.ViewCentralizar} >
                                <Text style={{ color: 'red' }}> {this.state.errors.senha} </Text>
                            </View>
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
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default HomeScreen;