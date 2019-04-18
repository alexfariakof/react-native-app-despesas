import React, { Component } from 'react'
import { Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker'

class DatePickerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date().getYear() + "-" + new Date().getMonth() + "-" + new Date().getDate() }
  }

  render() {
    const dim = Dimensions.get('window');
    return (
      <DatePicker 
        date={this.state.date}
        mode="date"
        placeholder="Selecione uma data"
        format="DD-MM-YYYY"
        minDate="2016-05-01"
        maxDate="2080-12-30"
        confirmBtnText="Confirma"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: dim.width - 60,
            top: 4,
            marginLeft: 0
          },
          dateInput: {            
            height: 48,
            fontSize: 24,
            color: 'white',
            marginTop: 16,
            marginBottom: 16,
            borderWidth: 0,
            border: 0,
            

          }
        }}
        onDateChange={(date) => { this.setState({ date: date }) }}
      />
    )
  }
}

export default DatePickerComponent;