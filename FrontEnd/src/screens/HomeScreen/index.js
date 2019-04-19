import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';

import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
        DrawerLable: 'MainScreen'
    }

    render() {
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={styles.body}>
                    <View style={styles.ViewCentralizar} >
                        <Text style={styles.textBenVindo} >Seja Bem Vindo</Text>                       

                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Cadastro')} >
                            <Text style={styles.btnCadastrar}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.text} placeholder='Digite seu email' keyboardType='email-address' ></TextInput>

                    <TextInput style={styles.text} placeholder='Digite sua senha' secureTextEntry  ></TextInput>

                    <View style={styles.ViewCentralizar} >
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('RecuperarSenha') } >
                            <Text style={styles.btnEsqueciSenha}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.ViewCentralizar} >
                        <TouchableOpacity style={styles.btnIniciar} onPress = {() => this.props.navigation.navigate('Lancamento') } >
                            <Image source={assets.btnIniciar}  />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default HomeScreen;