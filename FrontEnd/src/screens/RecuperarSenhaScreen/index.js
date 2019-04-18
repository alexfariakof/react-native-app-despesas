import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import assets from './assets'
import styles from './styles'

class RecuperarSenhaScreen extends Component {
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
                <View><TouchableWithoutFeedback onPress={() => this.props.navigation.goBack() } ><Text>Voltar</Text></TouchableWithoutFeedback></View>
                <View style={styles.body}>
                    <TextInput style={styles.text} placeholder='Digite o email cadastrado.' keyboardType='email-address' ></TextInput>
                </View>
                <View style={styles.ViewCentralizar} >
                    <TouchableOpacity style={styles.btnCadastro}>
                        <Image source={assets.btnCadastro} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default RecuperarSenhaScreen;