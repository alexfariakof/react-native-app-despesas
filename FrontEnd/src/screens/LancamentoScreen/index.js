import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import assets from './assets'

import apiServices from '../../services/ApiServices.js'
import LacamentoComponent from './Component/LacamentoComponent.js'
import DateSpinnerComponent from './Component/DateSpinnerComponent.js'

class LancamentoScreen extends Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
    }

    state = {
        isLoading: true,
        errorMessage: null,
        dataSource: null,
        user: null,
        saldo: '0,00',
        selectedDate: null,
        isLoaded: false
    }

    handlerGetSpinnerSelectedDate = async (value) => {
        await this.setState({ selectedDate: value });
        this.getLancamentoById();
    }

    getSaldoById = async () => {
        try {
            api = new apiServices();
            let json = await api.get('/api/Lancamento/saldo/' + this.state.user.id);
            this.setState({ saldo: json });
        }
        catch (err) {
            console.error(err);
        }
    };

    getLancamentoById = async () => {
        if (this.state.isLoaded !== true){
            hoje = new Date();
            ano = hoje.getFullYear();
            mes = hoje.getMonth() + 1;
            //this.setState({selectedDate: ano + '-' + mes + '-01', isLoaded: true });            
            this.setState({selectedDate: '2019-04-01', isLoaded: true });            
        }

        try {
            api = new apiServices();
            const json = await api.get('/api/Lancamento/' + this.state.selectedDate + '/' + this.state.user.id);
            this.setState({ dataSource: json });

        }
        catch (err) {
            console.error(err);
        }
    };

    async componentDidMount() {
        const access = await AsyncStorage.getItem('@dpApiAccess');

        if (access) {
            this.setState({ user: JSON.parse(access).usuario });
            this.getSaldoById();
            this.getLancamentoById();
            this.setState({ isLoading: false });
        }           
    }

    render() {
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
                >
                    <View style={{ height: 52, flexDirection: 'row', backgroundColor: '#C4C4C4', padding: 8 }} >
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                                <Image source={assets.menu} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 5 }}>
                            <Text style={{ textAlign: 'right', fontSize: 32, fontWeight: 'bold', color: 'white' }} >{"R$ " + this.state.saldo}</Text>
                        </View>
                    </View>
                    <DateSpinnerComponent handleGetCurrentDate = { this.handlerGetSpinnerSelectedDate } />
                    <View style={{ flex: 3 }}>
                        {this.state.isLoading ?
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <ActivityIndicator
                                    color="red"
                                    size="large"
                                />
                            </View>
                            : <LacamentoComponent DataSource={this.state.dataSource}  />
                        }
                    </View>
                    <View style={{ height: 60, position: 'relative', flexDirection: 'row' }}>
                        <View style={{ flex: 3, alignItems: 'center' }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Despesa')} >
                                <Image source={assets.btnDespesa} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3, alignItems: 'center', }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Receita')} >
                                <Image source={assets.btnReceita} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
export default LancamentoScreen;

