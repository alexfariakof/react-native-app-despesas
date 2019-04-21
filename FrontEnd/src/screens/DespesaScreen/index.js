import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, Picker, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import assets from './assets'
import styles from './styles'
import DatePickerComponent from '../../components/DatePickerComponent.js'


class DespesaScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = { categoria: '' }

    render() {
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

                        }} > R$ 1200,00</Text>
                    </View>
                    <View  >
                        <View style={styles.text}>
                            <Picker style={{ paddingTop: 0 }}
                                selectedValue={this.state.categoria}
                                style={styles.text}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ categoria: itemValue })
                                }>
                                <Picker.Item label="Alimentação" value="1" />
                                <Picker.Item label="Casa" value="2" />
                                <Picker.Item label="Bar e Restaurante" value="3" />
                                <Picker.Item label="Mercado" value="4" />
                                <Picker.Item label="Transporte" value="5" />
                                <Picker.Item label="Viagem" value="6" />
                            </Picker>
                        </View>
                        <View style={styles.text}>
                            <DatePickerComponent />
                        </View>
                        <TextInput style={styles.text} style={{height:40}} multiline placeholder='Digite a descrição'   ></TextInput>
                        <TextInput style={styles.text} style={{height:40}} multiline placeholder='Entre com o valor da Despesa' keyboardType='decimal-pad'  ></TextInput>
                    </View>
                    <View style={styles.ViewCentralizar} >
                        <TouchableOpacity style={styles.btnOkDespesa}>
                            <Image source={assets.btnOkDespesa} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default DespesaScreen;