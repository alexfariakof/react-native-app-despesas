import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

class DatePickerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date().getDate() }
  }

  render() {
    return (
      <DatePicker
        style={{ width: 200 }}
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
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            height: 48,
            fontSize: 24,
            color: 'white',
            marginTop: 16,
            marginBottom: 16,
            padding: 4,
            borderWidth:0,
            borderBottomWidth: 2,
            borderColor: '#C4C4C4',
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { this.setState({ date: date }) }}
      />
    )
  }
}

export default DatePickerComponent;