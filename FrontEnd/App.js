import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'

import HomeScreen from './src/screens/HomeScreen'
import CadastroScreen from './src/screens/CadastroScreen'
import DespesaScreen from './src/screens/DespesaScreen'
import ReceitaScreen from './src/screens/ReceitaScreen'
import RecuperarSenhaScreen from './src/screens/RecuperarSenhaScreen'
import LancamentoScreen from './src/screens/LancamentoScreen'
import RelatorioScreen from './src/screens/RelatorioScreen'
import CategoriaScreen from './src/screens/CategoriaScreen'

const AppDrawer = createDrawerNavigator({
  Despesa: { screen: DespesaScreen },
  Receita: { screen: ReceitaScreen },
  Lancamento: { screen: LancamentoScreen },
  Relatorio: { screen: RelatorioScreen },
  Categoria: {
    screen: CategoriaScreen,
    navigationOptions: { drawerLabel: () => null }
  },
  Sair: {
    screen: () => (      
       async () => {
        await AsyncStorage.removeItem('@dpApiAccess');

        return this.props.navigation.navigate('Home')
      }
    )
  }
}
, { initialRouteName: 'Lancamento' });

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { drawerLabel: () => null }
  },
  Cadastro: {
    screen: CadastroScreen,
    navigationOptions: { drawerLabel: () => null }
  },
  RecuperarSenha: {
    screen: RecuperarSenhaScreen,
    navigationOptions: { drawerLabel: () => null }
  },
  appDrawer: {
    screen: AppDrawer,
    navigationOptions: { header: null }
  }
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator)