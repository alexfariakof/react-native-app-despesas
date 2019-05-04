import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

class DateSpinnerComponent extends Component {  
  constructor(props) {
    super(props);

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];    
    hoje = new Date();
    mes = hoje.getMonth()+1;
    ano = hoje.getFullYear();
    this.state = {
      mes: mes,
      ano: ano,
      mesAnoExtenso: meses[mes-1] + " de " + ano,
      
    };
  }
  
  meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];    

  setNext = () => {
    
    mes = this.state.mes + 1;
    ano = this.state.ano;
    //alert(ano + '-' + mes + '-01' + 'state'  + this.state.mes);
    if (mes > 12) {
      mes = 1
      ano = ano + 1
    }

    this.setState({
      mes: mes,
      ano: ano, 
      mesAnoExtenso: this.meses[mes-1] + " de " + ano,
      currentDate: ano + '-' + mes + '-01'
    });
    return ano + '-' + mes + '-01';
  }

  setPrevious = () => {
    mes = this.state.mes - 1;
    ano = this.state.ano;
    //alert(ano + '-' + mes + '-01' + 'state'  + this.state.mes);
    if (mes < 1) {
      mes = 12
      ano = ano - 1
    }

    this.setState({
      mes: mes,
      ano: ano,
      mesAnoExtenso: this.meses[mes-1] + " de " + ano,
      currentDate: ano + '-' + mes + '-01'
    });
    return ano + '-' + mes + '-01'
  }

  render() {
    var handleGetCurrentDate = this.props.handleGetCurrentDate;

    return (
      <View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
        <View style={{ flex: 1, alignItems: 'center', width: 30 }} >
          <TouchableOpacity onPress={() =>  handleGetCurrentDate(this.setPrevious())  } >
            <Image source={require('../../../../assets/ArrowLeft.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 4, alignItems: 'center' }} >
          <Text style={{ fontSize: 24, fontWeight:'bold', padding: 4 }} >{this.state.mesAnoExtenso}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', width: 30 }} >
          <TouchableOpacity onPress={() => { handleGetCurrentDate(this.setNext());  }} >
            <Image source={require('../../../../assets/ArrowRight.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );

  }
}

export default DateSpinnerComponent;