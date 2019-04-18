import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

class TecladoNumericoComponent extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <View style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <View style={{
                  flexDirection: 'row'
                }}>
                  <View><Text>1</Text></View>
                  <View><Text>2</Text></View>
                  <View><Text>3</Text></View>
                </View>
                <View style={{
                  flexDirection: 'row'
                }}>
                  <View><Text>4</Text></View>
                  <View><Text>5</Text></View>
                  <View><Text>6</Text></View>
                </View>
                <View style={{
                  flexDirection: 'row'
                }}>
                  <View><Text>7</Text></View>
                  <View><Text>8</Text></View>
                  <View><Text>9</Text></View>
                </View>
                <View style={{
                  flexDirection: 'row'
                }}>
                  <View></View>
                  <View><Text>0</Text></View>
                  <View><Text>X</Text></View>
                </View>
                <View ><Text>Botao</Text></View>
              </View>
              <View style={{  height: 60, flexDirection: 'row' }}>
                <View style={{ flex: 6, backgroundColor:'red' }}>
                  <Text style={{ textAlign: 'right', fontSize: 32, fontWeight: 'bold', color: 'white' }} >R$ 2000,00</Text>
                </View>
              </View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default TecladoNumericoComponent;