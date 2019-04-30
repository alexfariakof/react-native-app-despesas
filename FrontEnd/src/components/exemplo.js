import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

const exemplo = () => {
    const hoje = new Date();
    const meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    const [mes, ano, mesAnoExtenso, currentDate] = 
    React.useState(hoje.getMonth() ||
                   hoje.getFullYear() || 
                   meses[hoje.getMonth()] + ' de ' + hoje.getFullYear() || 
                   hoje.getFullYear() + '-' + hoje.getMonth() + '-01')

    getCurrentDate = () => {
        return currentDate;
    }

    setNext = () => {
        
        if (mes > 11) {
            mes: 0
            ano: ano + 1
        }
        alert(mes, mesAnoExtenso)
        mesAnoExtenso: meses[mes] + " de " + ano;
        currentDate: ano + '-' + mes + '-01';
    }

    setPrevious = () => {
        if (mes < 0) {
            mes: 11
            ano: ano - 1
        }
        alert(ano)
        mesAnoExtenso: meses[mes] + " de " + ano;
        currentDate: ano + '-' + mes + '-01';

    }

    return (

        <View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
            <View style={{ flex: 1, alignItems: 'center', width: 30 }} >
                <TouchableOpacity onPress={setPrevious} >
                    <Image source={assets.arrowLeft} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 4, alignItems: 'center' }} >
                <Text style={{ fontSize: 24, padding: 4 }} >{this.mesAnoExtenso}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', width: 30 }} >
                <TouchableOpacity onPress={setNext} >
                    <Image source={assets.arrowRight} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default exemplo;