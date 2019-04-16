import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

import assets from './assets'
import styles from './styles'


class CadastroScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const dim = Dimensions.get('window');
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={styles.Header}>
                    <Text style={styles.textHeader} >Cadastro</Text>
                </View>
                <View style={styles.body}>
                    <TextInput style={styles.text} placeholder='Digite aqui seu nome' keyboardType='email-address' ></TextInput>

                    <TextInput style={styles.text} placeholder='Digite aqui seu email' keyboardType='email-address' ></TextInput>

                    <TextInput style={styles.text} placeholder='Digite aqui sua senha' secureTextEntry  ></TextInput>
                </View>
                <View style={styles.Footer} >
                    <TouchableOpacity style={styles.btnCadastro}>
                        <Image source={assets.btnCadastro} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default CadastroScreen;