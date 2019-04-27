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

const AppDrawer = createDrawerNavigator({
  Despesa: { screen: DespesaScreen },
  Receita: { screen: ReceitaScreen },
  Lancamento: { screen: LancamentoScreen },
  Relatorio: { screen: RelatorioScreen },
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

const AppStack = createStackNavigator({
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
  }
}, { initialRouteName: 'Home' });


const AppNavigator = createStackNavigator({
  appStack: {
    screen: AppStack,
    navigationOptions: { header: null }
  },
  appDrawer: {
    screen: AppDrawer,
    navigationOptions: { header: null }
  }
}, { initialRouteName: 'appStack' });

export default createAppContainer(AppNavigator)