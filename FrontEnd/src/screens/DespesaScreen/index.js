import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, Picker, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker'

import assets from './assets'
import styles from './styles'
import apiServices from '../../services/ApiServices.js'

class DespesaScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        isLoading: true,
        errorMessage: null,
        user: null,
        dataSourceCategoria: [],
        categoria: null,
        data: null,
        textDescricao: null,
        textValor: '0,00',
    }

    async componentDidMount() {
        const access = await AsyncStorage.getItem('@dpApiAccess');

        if (access) {
            this.setState({ user: JSON.parse(access).usuario });
            this.getListCategoria();
        }
        this.clearDespesa();
    }

    getListCategoria = async () => {
        try {
            api = new apiServices();
            const data = await api.get('/api/Categoria/byTipoCategoria/1');
            this.setState({ dataSourceCategoria: data, isLoading: false });
        }
        catch (err) {
            console.error(err);
        }
    };

    saveCategoria = async () => {
        const body = {
            'id': this.state.user.id,
            'idTipoCategoria': '1',
            'descricao': this.state.categoria,
        }
        try {
            this.setState({ isLoading: true });
            api = new apiServices();
            const data = await api.post('/api/Categoria', body);
            this.setState({ isLoading: false });
        }
        catch (err) {
            console.error(err);
        }
    }

    saveDespesa = async () => {
        const body = {
            'idUsuario': this.state.user.id,
            'idCategoria': this.state.categoria,
            'data': this.state.data.split('-')[2] + '-' + this.state.data.split('-')[1] + '-' + this.state.data.split('-')[0],
            'descricao': this.state.textDescricao,
            'valor': this.state.textValor,
            'dataVencimento': '2019-04-27'
        }

        try {
            this.setState({ isLoading: true });
            api = new apiServices();
            const data = await api.post('/api/Despesa', body);
          
            this.props.navigation.goBack();
        }
        catch (err) {
            console.error(err);
        }
    }

    clearDespesa = () => {
        this.setState({
            categoria: null,
            data: null,
            textDescricao: null,
            textValor: '0,00',
            isLoading: false,
        });    
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
                <View><TouchableOpacity onPress={() => this.props.navigation.goBack()}  ><Text>Voltar</Text></TouchableOpacity></View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
                >
                    <View style={{ backgroundColor: '#D45959' }} >
                        <Text style={{
                            fontSize: 48,
                            color: 'white',
                            textAlign: 'right',
                            padding: 8

                        }} >{"R$ " + this.state.textValor}</Text>
                    </View>
                    <View  >
                        <View style={styles.text}>
                            <Picker style={{ paddingTop: 0 }}
                                selectedValue={this.state.categoria}
                                style={styles.text}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ categoria: itemValue })
                                }>
                                {this.state.dataSourceCategoria.map((item, key) => (
                                    <Picker.Item label={item.descricao} value={item.id} key={key} />)
                                )}
                            </Picker>
                            <Button title="Add Categoria" color="#841584" accessibilityLabel="Adicione uma categoria nova" />
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
                                    }}
                                }
                                onDateChange={(date) => { this.setState({ data: date }) }}
                            />
                        </View>
                        <TextInput style={styles.text} maxLength={100} clearButtonMode="always" placeholder='Digite a descrição'
                            onChangeText={(textDescricao) => this.setState({ textDescricao })} value={this.state.textDescricao} >
                        </TextInput>
                        <TextInput style={styles.text} maxLength={10} clearButtonMode="always" placeholder='Entre com o valor da Despesa'
                            keyboardType='decimal-pad' onChangeText={(textValor) => this.setState({ textValor })} value={this.state.textValor}  >
                        </TextInput>
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
                                <TouchableOpacity style={styles.btnOkDespesa} onPress={() => { this.saveDespesa() }}>
                                    <Image source={assets.btnOkDespesa} />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default DespesaScreen;