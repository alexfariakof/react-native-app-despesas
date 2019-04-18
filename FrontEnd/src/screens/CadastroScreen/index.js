import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import assets from './assets'
import styles from './styles'


class CadastroScreen extends Component {
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
                    <TextInput style={styles.text} placeholder='Digite um nome' keyboardType='email-address' ></TextInput>

                    <TextInput style={styles.text} placeholder='Digite um email' keyboardType='email-address' ></TextInput>

                    <TextInput style={styles.text} placeholder='Digite uma senha' secureTextEntry  ></TextInput>
                </View>
                <View style={styles.Footer} >
                    <TouchableOpacity style={styles.btnCadastro} onPress = {() => this.props.navigation.navigate('Lancamento') } >
                        <Image source={assets.btnCadastro} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default CadastroScreen;