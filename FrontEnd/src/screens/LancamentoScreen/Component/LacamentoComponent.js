import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const LacamentoComponent = props => {
    return (
        <TouchableOpacity onPress={() => props.onPress()} >
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', borderBottomWidth: 2, borderColor: '#C4C4C4' }}>
            <View  >
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 4 }} >{props.data}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 14, marginLeft: 18 }} >{props.categoria}</Text>
                    <Text style={{ fontSize: 10, marginLeft: 20, color: 'white' }}  >{props.descricao}</Text>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 8 }} >R$ {props.valor}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}
export default LacamentoComponent;