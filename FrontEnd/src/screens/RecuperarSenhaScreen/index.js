import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import assets from './assets'
import styles from './styles'

import apiServices from '../../services/ApiServices.js'

class RecuperarSenhaScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        isLoading: false,
        errorMessage: null,
        email: 'alexfariakof@gmail.com',
    }

    componentDidMount() {
        this.clearRecuperarSenha();
    }

    clearRecuperarSenha = () => {
        this.setState({
            email: null,
            errorMessage: null,
            isLoading: false,
        });
    }

    recuperarSenha = async () => {
        const body = {
            'email': this.state.email
        }
        try {
            this.setState({ isLoading: true });
            api = new apiServices();
            const data = await api.post('/api/controleacesso/recoverypassword', body);
            this.setState({ isLoading: false });
            this.props.navigation.goBack();           
        }
        catch (err) {
            console.error(err);
        }
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
                    <TextInput style={styles.text} maxLength={30} placeholder='Digite o email cadastrado.' keyboardType='email-address'
                        onChangeText={(email) => this.setState({ email })} value={this.state.email}
                    ></TextInput>
                </View>
                <View style={styles.ViewCentralizar} >
                    {isLoading ? (
                        <ActivityIndicator
                            style={styles.btnIniciar}
                            color="green"
                            size="large"
                        />
                    ) :
                        (
                            <TouchableOpacity style={styles.btnCadastro} onPress={() => { this.recuperarSenha() }} >
                                <Image source={assets.btnCadastro} />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </ImageBackground>
        );
    }
}

export default RecuperarSenhaScreen;