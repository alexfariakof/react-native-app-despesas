import React from 'react'
import { View } from 'react-native';

GraphicsBarsComponent = props => {
        const despesaValue = props.DespesaValue;
        const receitaValue = props.ReceitaValue;
        return (
            <View style={{
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                alignItems: 'flex-end',
            }}>
                <View style={{
                    backgroundColor: '#F39D9D',
                    width: 6,
                    height: despesaValue,
                    padding: 0
                }} >

                </View>
                <View style={{
                    backgroundColor: '#B3F39D',
                    width: 6,
                    height: receitaValue,
                    padding: 0
                }} >
                </View>
            </View>
        );
}
export default GraphicsBarsComponent;
