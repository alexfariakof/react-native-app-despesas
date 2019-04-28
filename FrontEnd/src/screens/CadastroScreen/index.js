import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import assets from './assets'
import styles from './styles'

import apiServices from '../../services/ApiServices.js'

class CadastroScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        isLoading: false,
        errorMessage: null,
        nome: null,
        email: null,
        senha: null,
    }

    saveCadastro = async () => {
        const body = {
            'nome': this.state.nome,
            'email': this.state.email,         
            'senha': this.state.senha,         
        }
        try {
            this.setState({ isLoading: true });
            api = new apiServices();
            const data = await api.post('/api/ControleAcesso', body);
            this.clearCadastro();
        }
        catch (err) {
            console.error(err);
        }
    }

    clearCadastro = () => {
        this.setState({
            nome: null,
            email: null,
            senha: null,
            isLoading: false,
        });
    }

    render() {
        const { isLoading } = this.state;
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View><TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()} ><Text>Voltar</Text></TouchableWithoutFeedback></View>
                <View style={styles.body}>
                    <TextInput style={styles.text} placeholder='Digite um nome' maxLength={20} keyboardType='email-address'
                        onChangeText={(nome) => this.setState({ nome })} value={this.state.nome} >
                    </TextInput>

                    <TextInput style={styles.text} placeholder='Digite um email' maxLength={30} keyboardType='email-address'
                        onChangeText={(email) => this.setState({ email })} value={this.state.email}>
                    </TextInput>

                    <TextInput style={styles.text} placeholder='Digite uma senha' maxLength={8} secureTextEntry
                        onChangeText={(senha) => this.setState({ senha })} value={this.state.senha}
                    ></TextInput>
                </View>
                <View style={styles.Footer} >
                    {isLoading ? (
                        <ActivityIndicator
                            style={styles.btnIniciar}
                            color="green"
                            size="large"
                        />
                    ) :
                        (
                            <TouchableOpacity style={styles.btnCadastro} onPress={ () => { this.saveCadastro() }} >
                                <Image source={assets.btnCadastro} />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </ImageBackground>
        );
    }
}

export default CadastroScreen;