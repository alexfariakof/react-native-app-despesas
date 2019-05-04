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
        categoria: null,
        user: null,
        errors: {
            categoria: null,
        }
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
            isLoading: false,
            errors: {
                categoria: null,
            }
        });
    }

    saveCategoria = async () => {
        if (!this.isValid(this.state))
            return;

        const goBackScreen = this.props.navigation.state.params.goBackScreen;
        const refresh = this.props.navigation.state.params.refresh;

        const body = {
            descricao: this.state.categoria,
            idUsuario: this.state.user.id,
            idTipoCategoria: goBackScreen === 'Despesa' ? 1 : 2,
        }
        try {
            api = new apiServices();
            this.setState({ isLoading: true });
            await api.post('/api/categoria', body, (json) => {
                if (json.message === true) {
                    refresh();
                    alert('Categoria incluída com sucesso.');
                    this.clearCategoria();
                    this.props.navigation.navigate(goBackScreen);
                }
                else
                    alert(json.message);
                this.setState({ isLoading: false });
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    isValid = (body) => {
        var result = true;

        if ((body.categoria === null) || (body.categoria === undefined) || (body.categoria === '')) {
            body.errors.categoria = 'A categoria não pode ser nula!';
            result = false;
        }
        else
            body.errors.categoria = null;


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
                <View>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('goBackScreen'))} >
                        <Text>Voltar</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.body}>
                    <TextInput style={styles.text} maxLength={30} placeholder='Digite uma nova categoria.'
                        onChangeText={(categoria) => this.setState({ categoria })} value={this.state.categoria} >
                    </TextInput>
                    <View style={styles.ViewCentralizar} >
                        <Text style={{ color: 'red' }}> {this.state.errors.categoria} </Text>
                    </View>

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