import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import assets from './assets'
import styles from './styles'

import apiServices from '../../services/ApiServices.js'

class CadastroScreen extends Component {
    static navigationOptions = { header: null }

    state = {
        isLoading: false,
        errorMessage: null,
        nome: null,
        sobreNome: null,
        telefone: null,
        email: null,
        senha: null,
        errors: {
            nome: null,
            telefone: null,
            email: null,
            senha: null
        }
    }

    componentDidMount() {
        this.clearCadastro();
    }

    saveCadastro = async () => {
        if (!this.isValid(this.state))
            return;
         
        const body = {
            'nome': this.state.nome,
            'sobreNome': this.state.sobreNome,
            'telefone': this.state.telefone !== null ? this.state.telefone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '') : null,
            'email': this.state.email,
            'senha': this.state.senha,
        }
        try {
            this.setState({ isLoading: true });
            api = new apiServices();

            await api.post('/api/controleacesso', body, (json) => {
                if(json.message === true){                   
                    alert('Cadastro realizado com sucesso. \nUm email de confirmação foi enviado para a conta cadastrada.');
                    this.setState({ isLoading: false });
                    this.props.navigation.goBack();    
                }
                else
                    alert(json.message);
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    clearCadastro = () => {
        this.setState({
            isLoading: false,
            nome: null,
            sobreNome: null,
            telefone: null,
            email: null,
            senha: null,
            errors: {
                nome: null,
                telefone: null,
                email: null,
                senha: null
            }
        });
    }

    isValid = (body) => {
        var result = true;

        if ((body.nome === null) || (body.nome === undefined) || (body.nome === 0)) {
            body.errors.nome = 'Nome não pode ser nulo!';
            result = false;
        }
        else
            body.errors.nome = null;

        if ((body.telefone === null) || (body.telefone === undefined) || (body.telefone === 0)) {
            body.errors.telefone = 'Telefone não pode ser nulo!';
            result = false;
        }
        else
            body.errors.telefone = null;

        if ((body.email === null) || (body.email === undefined) || (body.email.trim() === '')) {
            body.errors.email = 'Senha não pode ser nula!';
            result = false;
        }
        else
            body.errors.email = null;

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
                <View><TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()} ><Text>Voltar</Text></TouchableWithoutFeedback></View>
                <View style={styles.body}>
                    <TextInput style={styles.text} placeholder='Digite um nome' maxLength={20}
                        onChangeText={(nome) => this.setState({ nome })} value={this.state.nome} >
                    </TextInput>
                    <View style={styles.ViewCentralizar} >
                        <Text style={{ color: 'red' }}> {this.state.errors.nome} </Text>
                    </View>

                    <TextInput style={styles.text} placeholder='Digite um sobre nome' maxLength={20}
                        onChangeText={(sobreNome) => this.setState({ sobreNome })} value={this.state.sobreNome}>
                    </TextInput>

                    <TextInputMask style={styles.text} placeholder='Digite um telefone' maxLength={30} keyboardType='number-pad'
                        mask={"([00]) [0][0000]-[0000]"} onChangeText={(telefone) => this.setState({ telefone })} value={this.state.telefone}>
                    </TextInputMask>
                    <View style={styles.ViewCentralizar} >
                        <Text style={{ color: 'red' }}> {this.state.errors.telefone} </Text>
                    </View>

                    <TextInput style={styles.text} placeholder='Digite um email' maxLength={30} keyboardType='email-address'
                        onChangeText={(email) => this.setState({ email })} value={this.state.email}>
                    </TextInput>
                    <View style={styles.ViewCentralizar} >
                        <Text style={{ color: 'red' }}> {this.state.errors.email} </Text>
                    </View>

                    <TextInput style={styles.text} placeholder='Digite uma senha' maxLength={8} secureTextEntry
                        onChangeText={(senha) => this.setState({ senha })} value={this.state.senha}
                    ></TextInput>
                    <View style={styles.ViewCentralizar} >
                        <Text style={{ color: 'red' }}> {this.state.errors.senha} </Text>
                    </View>
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
                            <TouchableOpacity style={styles.btnCadastro} onPress={() => { this.saveCadastro() }} >
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