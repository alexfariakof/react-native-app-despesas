import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image } from 'react-native';

import assets from './assets'
import styles from './styles'


class RelatorioScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const dim = Dimensions.get('window');
        return (
            <ImageBackground
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}
            >
                <View style={styles.Header}>
                    <Text style={styles.textHeader} >Relatório</Text>
                </View>
                <View style={styles.body}>
                </View>
            </ImageBackground>
        );
    }
}

export default RelatorioScreen;