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
    updateUser = (categoria) => {
        this.setState({ categoria: categoria })
    }

    render() {
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View><TouchableWithoutFeedback onPress={() => this.props.navigation.goBack() } ><Text>Voltar</Text></TouchableWithoutFeedback></View>
                <View style={styles.Header}>
                    <Text style={styles.textHeader} >Despesas</Text>
                </View>
                <View style={styles.body}>
                    <DatePickerComponent />
                    <Picker
                        selectedValue={this.state.categoria}
                        style={styles.text}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Alimentação" value="1" />
                        <Picker.Item label="Casa" value="2" />
                        <Picker.Item label="Bar e Restaurante" value="3" />
                        <Picker.Item label="Mercado" value="4" />
                        <Picker.Item label="Transporte" value="5" />
                        <Picker.Item label="Viagem" value="6" />
                    </Picker>
                    <TextInput style={styles.text} placeholder='Digite a descrição'   ></TextInput>
                    <View style={styles.ViewCentralizar} >
                        <TouchableOpacity style={styles.btnOkDespesa}>
                            <Image source={assets.btnOkDespesa} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Footer} >
                        <Text style={styles.textValor} >R$ 18,00</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default DespesaScreen;