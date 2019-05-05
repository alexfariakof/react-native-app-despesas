import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import apiServices from '../../services/ApiServices'
import DateSpinnerComponent from './Component/DateSpinnerComponent'
import GraphicsBarsComponent from './Component/GraphicsBarsComponent'
import formatMoney from '../../services/ConvertMoney'
import styles from './styles'

class RelatorioScreen extends Component {
    static navigationOptions = { header: null }

    state = {
        selectedAno: new Date().getFullYear(),
        user: null,
        saldoDespesa: 0,
        saldoReceita: 0,
        datasource: []
    }

    handlerGetSpinnerSelectedDate = async (value) => {
        await this.setState({ selectedAno: value });
        this.getRelatorio();
    }

    async componentDidMount() {
        const access = await AsyncStorage.getItem('@dpApiAccess');

        if (access) {
            this.setState({ user: JSON.parse(access).usuario });
            this.handlerGetSpinnerSelectedDate(new Date().getFullYear());
            this.setState({ isLoading: false });
        }
    }

    getRelatorio = async () => {
        try {
            api = new apiServices();
            //const json = await api.get('/api/Relatorio/' + this.state.user.id + "/" + this.state.selectedAno);
            await api.get('/api/Relatorio/' + this.state.user.id + "/" + this.state.selectedAno, (json) => {
                this.setState({
                    saldoDespesa: json.saldoDespesa,
                    saldoReceita: json.saldoReceita,
                    datasource: json.relatorio
                });
            });
        }
        catch (err) {
            console.error(err);
        }
    };

    render() {
        const dim = Dimensions.get('window').height/2;
        
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}>
                <View>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate.goBack()} >
                        <Text>Voltar</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.container}>
                    <View style={styles.containerColumn} >
                        <View style={styles.containerHeader} >
                            <Text style={styles.textHeaderContainer}  >Despesas x Receitas</Text>
                        </View>
                        <View style={styles.containerBodyGraphics} >
                            <View style={styles.containerHeaderGraphics}>
                                <View>
                                    <Text style={styles.textSaldoDespesa}>-R$ {formatMoney(this.state.saldoDespesa)} </Text>
                                </View>
                                <View>
                                    <Text style={styles.textSaldoReceita} >R$ {formatMoney(this.state.saldoReceita)}</Text>
                                </View>
                            </View>
                            <View style={styles.containerGraphics} >
                                <View style={styles.containerGraphicsBar} >
                                    {                                        
                                        this.state.datasource.map((data) => {
                                            return (
                                                <View style={styles.containerGraphicsBarText} >
                                                    <GraphicsBarsComponent
                                                        DespesaValue={data.despesaValor === null ? 0 : (data.despesaValor > dim ? dim : data.despesaValor) }
                                                        ReceitaValue={data.receitaValor === null ? 0 : (data.receitaValor >dim ? dim : data.receitaValor) } />
                                                    <Text style={styles.textMes} >{data.mes}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        </View>
                        <DateSpinnerComponent handleGetCurrentAno={this.handlerGetSpinnerSelectedDate} showOnlyYear={true} />
                    </View>
                </View>
            </ImageBackground>
        );
    };
}
export default RelatorioScreen;