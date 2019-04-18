import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default LacamentoComponent = props => {
    const listLancamento = [
        { id: '1', categoria: 'Restaurante', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '150' },
        { id: '2', categoria: 'Alimentação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '500' },
        { id: '3', categoria: 'Casa', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '350' },
        { id: '4', categoria: 'Educação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '50' },
        { id: '5', categoria: 'Restaurante', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '150' },
        { id: '6', categoria: 'Alimentação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '500' },
        { id: '7', categoria: 'Casa', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '350' },
        { id: '8', categoria: 'Educação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '50' },
        { id: '9', categoria: 'Restaurante', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '150' },
        { id: '10', categoria: 'Alimentação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '500' },
        { id: '11', categoria: 'Casa', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '350' },
        { id: '12', categoria: 'Educação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '50' },
        { id: '13', categoria: 'Restaurante', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '150' },
        { id: '14', categoria: 'Alimentação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '500' },
        { id: '15', categoria: 'Casa', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '350' },
        { id: '16', categoria: 'Educação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '50' },
        { id: '17', categoria: 'Restaurante', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '150' },
        { id: '18', categoria: 'Alimentação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '500' },
        { id: '19', categoria: 'Casa', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '350' },
        { id: '20', categoria: 'Educação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '50' },
        { id: '21', categoria: 'Restaurante', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '150' },
        { id: '22', categoria: 'Alimentação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '500' },
        { id: '23', categoria: 'Casa', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '350' },
        { id: '24', categoria: 'Educação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '50' },
        { id: '25', categoria: 'Restaurante', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '150' },
        { id: '26', categoria: 'Alimentação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '500' },
        { id: '27', categoria: 'Casa', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '350' },
        { id: '28', categoria: 'Educação', descricao: 'Bla Bla Bla Bla Bla Bla', valor: '50' }

    ]
    renderItem = itemLancamento => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderBottomWidth: 2,
                borderColor: '#C4C4C4'
            }}>
                <View  >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 4 }} >01/04/2019</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
                >
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 18 }} >{itemLancamento.item.categoria}</Text>
                        <Text style={{ fontSize: 10, marginLeft: 20, color: '#C4C4C4' }}  >{itemLancamento.item.descricao}</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 8 }} >{itemLancamento.item.valor}</Text>
                </View>
            </View >
        );

    }

    return (
        <View>
            <View style={{ backgroundColor: 'green' }}>
                <Text >{props.DataLancamento}</Text>
            </View>
            <FlatList
                data={listLancamento}
                renderItem={this.renderItem}
                pagingEnabled
                keyExtractor={item => item.id}
            />
        </View>
    );
}

