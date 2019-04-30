import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

class DateSpinnerComponent extends Component {
  state = {
    mes: null,
    ano:null,
    mesAnoExtenso: null,
    currentDate: null
  }

  componentDidMount() {
    const meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    hoje = new Date();
    mes = hoje.getMonth();
    ano = hoje.getFullYear();

    this.setState({
       mes:hoje.getMonth(),
       ano: hoje.getFullYear(), 
       mesAnoExtenso: meses[mes] + " de " + ano,
       currentDate: ano + '-' + mes + '-01'
    });
  }

  render() {
    const meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    setNext = () => {      
      mes = this.state.mes + 1;
      ano = this.state.ano;
      
      if (mes >11){
        mes = 0
        ano = ano + 1
      }      
      
      this.setState({ 
        mes: mes,
        ano: ano,
        mesAnoExtenso: meses[mes] + " de " + ano,        
        currentDate: ano + '-' + mes + '-01'
      });
    }

    setPrevious = () => {
      mes = this.state.mes - 1;
      ano = this.state.ano;
      
      if (mes <0){
        mes = 11
        ano = ano - 1
      }

      this.setState({ 
        mes: mes,
        ano: ano,
        mesAnoExtenso: meses[mes] + " de " + ano,
        currentDate: ano + '-' + mes + '-01'
      });

    }

    return (

      <View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
        <View style={{ flex: 1, alignItems: 'center', width: 30 }} >
          <TouchableOpacity onPress={() => { setPrevious() }} >
            <Image source={assets.arrowLeft} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 4, alignItems: 'center' }} >
          <Text style={{ fontSize: 24, padding: 4 }} >{this.state.mesAnoExtenso}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', width: 30 }} >
          <TouchableOpacity onPress={() => { setNext() }} >
            <Image source={assets.arrowRight} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DateSpinnerComponent;