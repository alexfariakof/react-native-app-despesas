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
                <View><TouchableOpacity onPress={() => this.props.navigation.goBack()}  ><Text>Voltar</Text></TouchableOpacity></View>
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

                        }} > R$ 1200,00</Text>
                    </View>
                    <View  >
                        <View style={styles.text}>
                            <Picker  style={{ paddingTop: 0 }}
                                selectedValue={this.state.categoria}
                                style={styles.text}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })
                                }>
                                <Picker.Item label="Salário" value="1" />
                                <Picker.Item label="Empréstimo" value="2" />
                            </Picker>
                        </View>
                        <View style={styles.text}>
                            <DatePickerComponent />
                        </View>
                        <TextInput style={styles.text} placeholder='Digite a descrição'   ></TextInput>
                        <TextInput style={styles.text} placeholder='Entre com o valor da Despesa' keyboardType='decimal-pad'  ></TextInput>
                    </View>
                    <View style={styles.ViewCentralizar} >
                        <TouchableOpacity style={styles.btnOkReceita}>
                            <Image source={assets.btnOkReceita} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
export default ReceitaScreen;