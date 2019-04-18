import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Picker, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import assets from './assets'
import styles from './styles'
import DatePickerComponent from '../../components/DatePickerComponent.js'


class ReceitaScreen extends Component {
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
                <View><TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}  ><Text>Voltar</Text></TouchableWithoutFeedback></View>
                <View style={styles.Header}>
                    <Text style={styles.textHeader} >Receitas</Text>
                </View>
                <View style={styles.body}>
                    <DatePickerComponent />
                    <Picker
                        selectedValue={this.state.categoria}
                        style={styles.text}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Salário" value="1" />
                        <Picker.Item label="Empréstimo" value="2" />
                    </Picker>
                    <TextInput style={styles.text} placeholder='Digite a descrição'   ></TextInput>
                    <View style={styles.ViewCentralizar} >
                        <TouchableOpacity style={styles.btnOkReceita}>
                            <Image source={assets.btnOkReceita} />
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

export default ReceitaScreen;