import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, Picker, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker'
import TextInputMask from 'react-native-text-input-mask';

import assets from './assets'
import styles from './styles'
import apiServices from '../../services/ApiServices.js'

class ReceitaScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        isLoading: true,
        errorMessage: null,
        dsReceita: [],
        user: null,
        categoria: null,
        data: null,
        textDescricao: null,
        textValor: '0.00',
    }

    async componentDidMount() {
        const access = await AsyncStorage.getItem('@dpApiAccess');

        if (access) {
            this.setState({ user: JSON.parse(access).usuario });
            this.getListCategoria();
        }
        this.clearReceita();
    }

    clearReceita = () => {
        this.setState({
            data: null,
            textDescricao: null,
            textValor: 0.00,
            isLoading: false,
        });
    }

    getListCategoria = async () => {
        try {
            api = new apiServices();
            const json = await api.get('/api/Categoria/byTipoCategoria/' + this.state.user.id + '/2');
            this.setState({ dsReceita: json, isLoading: false });
        }
        catch (err) {
            console.error(err);
        }
    };

    saveReceita = async () => {
        const body = {
            idUsuario: this.state.user.id,
            idCategoria: this.state.categoria,
            data: this.state.data.split('-')[2] + '-' + this.state.data.split('-')[1] + '-' + this.state.data.split('-')[0],
            descricao: this.state.textDescricao,
            valor: parseFloat(this.state.textValor,(2))
        }

        try {
            this.setState({ isLoading: true });
            api = new apiServices();
            const data = await api.post('/api/receita', body);
            this.setState({ isLoading: false });
            //this.props.navigation.goBack();
        }
        catch (err) {
            console.error(err);
        }
    }

    render() {
        const dim = Dimensions.get('window');
        const { isLoading } = this.state;
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View><TouchableOpacity onPress={() => {this.clearReceita();this.props.navigation.goBack();}}  ><Text>Voltar</Text></TouchableOpacity></View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
                >
                    <View style={{ backgroundColor: '#B3F39D' }} >
                        <Text style={{
                            fontSize: 48,
                            color: 'white',
                            textAlign: 'right',
                            padding: 8

                        }} >{"R$ " + this.state.textValor}</Text>
                    </View>
                    <View>
                        <View style={styles.text}>
                            <Picker style={{ paddingTop: 0 }}
                                selectedValue={this.state.categoria}
                                style={styles.text}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ categoria: itemValue })
                                }>
                                {this.state.dsReceita.map((item, key) => (
                                    <Picker.Item label={item.descricao} value={item.id} key={key} />)
                                )}
                            </Picker>
                            <Button title="Add Categoria" color="#841584" accessibilityLabel="Adicione uma categoria nova"
                                onPress={() => this.props.navigation.navigate('Categoria', { goBackScreen: 'Receita', refresh: () => { this.getListCategoria(); }})} />
                        </View>
                        <View style={styles.text}>
                            <DatePicker
                                date={this.state.data}
                                mode="date"
                                placeholder="Selecione uma data"
                                format="DD-MM-YYYY"
                                minDate="2016-05-01"
                                maxDate="2080-12-30"
                                confirmBtnText="Confirma"
                                cancelBtnText="Cancelar"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: dim.width - 60,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        height: 48,
                                        fontSize: 24,
                                        color: 'white',
                                        marginTop: 16,
                                        marginBottom: 16,
                                        borderWidth: 0,
                                        border: 0
                                    }
                                }
                                }
                                onDateChange={(date) => { this.setState({ data: date }) }}
                            />
                        </View>
                        <TextInput style={styles.text} maxLength={100} clearButtonMode="always" placeholder='Digite a descrição'
                            onChangeText={(textDescricao) => this.setState({ textDescricao })} value={this.state.textDescricao} >
                        </TextInput>
                        <TextInputMask style={styles.text} maxLength={10} clearButtonMode="always" placeholder='Entre com o valor da Despesa'
                        mask={"[999999].[00]"} keyboardType='decimal-pad' onChangeText={(textValor) => this.setState({ textValor })} value={this.state.textValor}  >
                        </TextInputMask>
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
                                <TouchableOpacity style={styles.btnOkReceita} onPress={() => { this.saveReceita() }}>
                                    <Image source={assets.btnOkReceita} />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
export default ReceitaScreen;