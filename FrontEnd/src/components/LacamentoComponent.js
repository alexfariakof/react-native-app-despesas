import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default LacamentoComponent = props => {
    renderItem =  itemLancamento => {
        return (            
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderBottomWidth: 2,
                borderColor: '#C4C4C4'
            }}>
                <View  >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 4 }} >{itemLancamento.item.data}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
                >
                    <View>
                        <Text style={{ fontSize: 14, marginLeft: 18 }} >{itemLancamento.item.categoria}</Text>
                        <Text style={{ fontSize: 10, marginLeft: 20, color: 'white' }}  >{itemLancamento.item.descricao}</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 8 }} >R$ {itemLancamento.item.valor}</Text>
                </View>
            </View>
        );

    }

    return (
        <View>
            <View style={{ backgroundColor: 'green' }}>
                <Text >{}</Text>
            </View>
            <FlatList
                data={props.DataSource}
                renderItem={this.renderItem}
                pagingEnabled
                keyExtractor={item => item.id}
            />
        </View>
    );
}

