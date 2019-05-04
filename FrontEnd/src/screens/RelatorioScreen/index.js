import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import DateSpinnerComponent from './Component/DateSpinnerComponent'
import GraphicsBarsComponent from './Component/GraphicsBarsComponent'
import styles from './styles'

/*
const styles = StyleSheet.create({
 
});  
*/
class RelatorioScreen extends Component {
    static navigationOptions = { header: null }

    state = {
        selectedAno: new Date().getFullYear(),
    }

    handlerGetSpinnerSelectedDate = async (value) => {
        await this.setState({ selectedAno: value });
    }

    render() {
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}>
                <View>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('goBackScreen'))} >
                        <Text>Voltar</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        height: 52,
                        flexDirection: 'column',
                        flex: 2,
                        padding: 2,
                    }} >
                        <View style={{
                            alignContent: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            padding: 8,
                        }} >
                            <Text style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: '#FFF'
                            }}  >Despesas x Receitas</Text>
                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            justifyContent: 'space-between',
                            flex: 3
                        }} >
                            <View style={{
                                justifyContent: 'space-around',
                                flexDirection: 'row',
                                flex: 2
                            }}>
                                <View>
                                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#F39D9D' }}>- R$ 560.00 </Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#B3F39D' }} >R$ 5800.00</Text>
                                </View>
                            </View>
                            <View style={styles.containerGraphics} >
                             <View style={styles.containerGraphicsBar} >
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={400} ReceitaValue={50} />
                                        <Text style={styles.textMes} >JAN</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={120} ReceitaValue={50} />
                                        <Text style={styles.textMes} >FEV</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={44} ReceitaValue={50} />
                                        <Text style={styles.textMes} >MAR</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={20} ReceitaValue={90} />
                                        <Text style={styles.textMes} > ABR </Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText}>
                                        <GraphicsBarsComponent DespesaValue={30} ReceitaValue={70} />
                                        <Text style={styles.textMes} > MAI</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={10} ReceitaValue={50} />
                                        <Text style={styles.textMes} >JUN</Text>
                                    </View>
                                </View>
                                <View style={styles.containerGraphicsBar} >
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={10} ReceitaValue={50} />
                                        <Text style={styles.textMes} >JUL</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={20} ReceitaValue={50} />
                                        <Text style={styles.textMes} >AGO</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={90} ReceitaValue={60} />
                                        <Text style={styles.textMes} >SET</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={80} ReceitaValue={50} />
                                        <Text style={styles.textMes} >OUT</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={20} ReceitaValue={40} />
                                        <Text style={styles.textMes} >NOV</Text>
                                    </View>
                                    <View style={styles.containerGraphicsBarText} >
                                        <GraphicsBarsComponent DespesaValue={20} ReceitaValue={50} />
                                        <Text style={styles.textMes} >DEZ</Text>
                                    </View>
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