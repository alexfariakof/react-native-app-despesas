import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

import assets from './assets'
import styles from './styles'

import apiServices from '../../services/ApiServices.js'


class CategoriaScreen extends Component {
    static navigationOptions = { header: null }

    state = {
        isLoading: false,
        errorMessage: null,
        categoria: null,
        user: null,
    }

    async componentDidMount() {
        const access = await AsyncStorage.getItem('@dpApiAccess');

        if (access) {
            this.setState({ user: JSON.parse(access).usuario });
        }
        
        this.clearCategoria();
    }

    clearCategoria = () => {
        this.setState({
            categoria: null,
            errorMessage: null,
            isLoading: false,
        });
    }

    saveCategoria = async () => {
        const goBackScreen = this.props.navigation.state.params.goBackScreen;
        const refresh =  this.props.navigation.state.params.refresh;   

        const body = {
            descricao: this.state.categoria,
            idUsuario: this.state.user.id,
            idTipoCategoria: goBackScreen === 'Despesa' ? 1 : 2,
        }
        try {
            this.setState({ isLoading: true });
            api = new apiServices();
            const data = await api.post('/api/categoria', body);
            this.setState({ isLoading: false });   

            refresh();
            this.props.navigation.navigate(goBackScreen);
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
                <View>
                    <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate(this.props.navigation.getParam('goBackScreen'))} >
                        <Text>Voltar</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.body}>
                    <TextInput style={styles.text} maxLength={30} placeholder='Digite uma nova categoria.'
                        onChangeText={(categoria) => this.setState({ categoria })} value={this.state.categoria}
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
                            <TouchableOpacity style={styles.btnCadastro} onPress={() => { 
                                this.saveCategoria(); 
                            }} >
                                <Image source={assets.btnCadastro} />
                            </TouchableOpacity>
                        )
                    }
                </View>
            </ImageBackground>
        );
    }
}

export default CategoriaScreen;