import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';

import assets from './assets'
import styles from './styles'


class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={styles.body}>
                    <Text style={styles.textBenVindo} >Seja Bem Vindo</Text>
                    <TouchableOpacity>
                        <Text style={styles.btnCadastrar}>Cadastre-se</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.textLogin} placeholder='Digite seu email' keyboardType='email-address' ></TextInput>

                    <TextInput style={styles.textSenha} placeholder='Digite sua senha' secureTextEntry  ></TextInput>
                    <TouchableOpacity>
                        <Text style={styles.btnEsqueciSenha}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <Image source={assets.btnIniciar} style={styles.btnIniciar} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default HomeScreen;