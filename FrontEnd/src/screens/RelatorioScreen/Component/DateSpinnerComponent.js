import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

class DateSpinnerComponent extends Component {  
  constructor(props) {
    super(props);    
    ano = new Date().getFullYear();    
    this.state = {
       ano: ano,     
    };
  }

  setNext = () => {
    ano = this.state.ano + 1;
    this.setState({
      ano: ano, 
    });
    return ano;
  }

  setPrevious = () => {
    ano = this.state.ano -1;
    this.setState({
      ano: ano,
    });
    return ano;
  }

  render() {
    var handleGetCurrentAno = this.props.handleGetCurrentAno;

    return (
      <View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
        <View style={{ flex: 1, alignItems: 'center', width: 30 }} >
          <TouchableOpacity onPress={() =>  handleGetCurrentAno(this.setPrevious())  } >
            <Image source={require('../../../../assets/ArrowLeft.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 4, alignItems: 'center' }} >
          <Text style={{ fontSize: 28, fontWeight:'bold', padding: 4 }} >{this.state.ano}</Text>
        </View>        
        <View style={{ flex: 1, alignItems: 'center', width: 30 }} >
          <TouchableOpacity onPress={() => { handleGetCurrentAno(this.setNext());  }} >
            <Image source={require('../../../../assets/ArrowRight.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );

  }
}

export default DateSpinnerComponent;