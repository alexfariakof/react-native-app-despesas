import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, Picker, TouchableOpacity, ActivityIndicator, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { TextInputMask } from 'react-native-masked-text';

import assets from './assets'
import styles from './styles'
import apiServices from '../../services/ApiServices.js'
import isIphoneX from '../../services/IsIphoneX.js'

class ReceitaScreen extends Component {
    static navigationOptions = { header: null }
    
    state =  {
        isLoading: true,
        dsCategoriaReceita: [],
        user: null,
        categoria: null,
        data: null,
        idReceita: null,
        descricao: null,
        valor: 'R$ 0,00',
        errors: {
            data: null,
            descricao: null,
            valor: null,
            categoria: null
        }
    } 

    async componentDidMount() {
        const access = await AsyncStorage.getItem('@dpApiAccess');

        if (access) {
            this.setState({ user: JSON.parse(access).usuario });
            this.getListCategoria();
        }

        if (this.props.navigation.state.params.operation === 'PUT')
            this.getReceitaById();

        this.props.navigation.addListener(
            'didFocus',
            payload => {

                if (this.props.navigation.state.params.operation === 'PUT') {
                    this.getReceitaById();
                }
                else
                   this.clearReceita();
            }
        );
    }

    clearReceita = () => {
        this.setState({
            isLoading: true,
            data: null,
            idReceita: null,
            descricao: null,
            valor: 'R$ 0,00',
            errors: {
                data: null,
                descricao: null,
                valor: null,
                categoria: null
            }
        });
    }

    getReceitaById = () => {
        const idReceita = this.props.navigation.state.params.idReceita;
        api.get('/api/Receita/' + idReceita, (json) => {
            
            var formattedDate = new Date(json.receita.data);
            var newDate = ('0' + formattedDate.getDate()).slice(-2) + '-' + ('0' + (formattedDate.getMonth() + 1)).slice(-2) + '-' + formattedDate.getFullYear().toString();
            
            if (json.message) {
                this.setState({
                    categoria: json.receita.idCategoria,
                    data: newDate,
                    idReceita: json.receita.id,
                    descricao: json.receita.descricao,
                    valor: 'R$' + json.receita.valor.toFixed(2),
                });
            }
            this.setState({ isLoading: false });
        });
    }

    getListCategoria = async () => {
        try {
            api = new apiServices();
            const json = await api.get('/api/Categoria/byTipoCategoria/' + this.state.user.id + '/2');
            this.setState({ dsCategoriaReceita: json, isLoading: false });
        }
        catch (err) {
            console.error(err);
        }
    };

    saveReceita = async () => {
        if (!this.isValid(this.state))
            return;

        const refresh = this.props.navigation.state.params.refresh;
        const body = {
            idUsuario: this.state.user.id,
            id: this.state.idReceita,
            idCategoria: this.state.categoria,
            data: this.state.data !== null ? this.state.data.split('-')[2] + '-' + this.state.data.split('-')[1] + '-' + this.state.data.split('-')[0] : null,
            descricao: this.state.descricao,
            valor: parseFloat(this.state.valor.replace('R$', '').replace('.', '').replace(',', '.'), (2))
        }

        try {
            api = new apiServices();
            this.setState({ isLoading: true });
            if (this.state.idReceita === null) {
                await api.post('/api/Receita', body, (json) => {
                    //alert(JSON.stringify(json));
                    if (json.message === true) {
                        refresh();
                        alert('Receita incluída com sucesso.');
                        this.clearReceita();
                        this.props.navigation.goBack();

                    }
                    else
                        alert(json.message);
                    this.setState({ isLoading: false });
                });
            }
            else {
                await api.put('/api/Receita', body, (json) => {
                    //alert(JSON.stringify(json));
                    if (json.message === true) {
                        refresh();
                        alert('Receita atualizada com sucesso.');
                        this.clearReceita();
                        this.props.navigation.goBack();
                    }
                    else
                        alert(json.message);
                    this.setState({ isLoading: false });
                });

            }
        }
        catch (err) {
            alert('Erro ao realiza operação. Tente mais tarde.');
            //console.error(err);
        }
    }

    isValid = (body) => {
        var isTrue = true;

        if ((body.categoria === null) || (body.categoria === undefined) || (body.categoria === 0)) {
            body.errors.categoria = 'Uma categoria deve ser selecionada!';
            isTrue = false;
        }
        else
            body.errors.data = null;

        if ((body.data === null) || (body.data === undefined) || (body.data.trim() === '')) {
            body.errors.data = 'Uma data deve ser selecionada!';
            isTrue = false;
        }
        else
            body.errors.data = null;

        if ((body.descricao === null) || (body.descricao === undefined) || (body.descricao.trim() === '')) {
            body.errors.descricao = 'A descrição deve ser preenchida!';
            isTrue = false;
        }
        else
            body.errors.descricao = null;
        if (parseFloat(body.valor.replace('R$', '').replace('.', '').replace(',', '.'), 2) <= 0) {
            body.errors.valor = 'O valor deve ser > 0!';
            isTrue = false;
        }
        else
            body.errors.valor = null

        this.setState({ errors: body.errors });
        return isTrue;
    }

    render() {
        const dim = Dimensions.get('window');
        const { isLoading } = this.state.isLoading;
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background} >
                <View style={[isIphoneX() ?
                    {
                        marginTop: 32,
                        marginBottom: 8,
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    } : null,
                    {
                       flex: 1,
                       flexDirection: 'column',
                       justifyContent: 'space-between'
                    }]}
                >
                    <View><TouchableOpacity onPress={() => { this.clearReceita(); this.props.navigation.goBack(); }}  ><Text>Voltar</Text></TouchableOpacity></View>
                    <View style={{ backgroundColor: '#B3F39D' }} >
                        <Text style={{
                            fontSize: 48,
                            color: 'white',
                            textAlign: 'right',
                            padding: 8

                        }} >{this.state.valor}</Text>
                    </View>
                    <ScrollView>
                        <View style={{ paddingLeft: 4, paddingRight: 4 }} >
                            <View style={{ borderBottomWidth: 2, borderColor: '#C4C4C4' }} >
                                <Button title="Add Categoria" color="#841584" accessibilityLabel="Adicione uma categoria nova"
                                    onPress={() => this.props.navigation.navigate('Categoria', { goBackScreen: 'Receita', refresh: () => { this.getListCategoria(); } })} />
                                <Picker style={{ paddingTop: 0 }}
                                    selectedValue={this.state.categoria}
                                    style={styles.text}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ categoria: itemValue })
                                    }>
                                    {this.state.dsCategoriaReceita.map((item, key) => (
                                        <Picker.Item label={item.descricao} value={item.id} key={key} />)
                                    )}
                                </Picker>
                            </View>
                            <View style={styles.ViewCentralizar} >
                                <Text style={{ color: 'red' }}> {this.state.errors.categoria} </Text>
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
                                            height: 28,
                                            fontSize: 24,
                                            color: 'white',
                                            marginTop: 4,
                                            marginBottom: 4,
                                            borderWidth: 0,
                                            border: 0
                                        }
                                    }
                                    }
                                    onDateChange={(date) => { this.setState({ data: date }) }}
                                />
                            </View>
                            <View style={styles.ViewCentralizar} >
                                <Text style={{ color: 'red' }}> {this.state.errors.data} </Text>
                            </View>
                            <TextInput style={styles.text} maxLength={100} clearButtonMode="always" placeholder='Digite a descrição'
                                onChangeText={(descricao) => this.setState({ descricao })} value={this.state.descricao} >
                            </TextInput>
                            <View style={styles.ViewCentralizar} >
                                <Text style={{ color: 'red' }}> {this.state.errors.descricao} </Text>
                            </View>
                            <TextInputMask style={styles.text} maxLength={10} clearButtonMode="always" placeholder='Entre com o valor da Despesa'
                                keyboardType='decimal-pad' onChangeText={(valor) => this.setState({ valor })} value={this.state.valor}
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                }}>
                            </TextInputMask>
                            <View style={styles.ViewCentralizar} >
                                <Text style={{ color: 'red' }}> {this.state.errors.valor} </Text>
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
                                    <TouchableOpacity style={styles.btnOkReceita} onPress={() => { this.saveReceita() }}>
                                        <Image source={assets.btnOkReceita} />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}
export default ReceitaScreen;