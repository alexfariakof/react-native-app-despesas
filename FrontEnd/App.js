import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, NavigationActions } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import CadastroScreen from './src/screens/CadastroScreen'
import DespesaScreen from './src/screens/DespesaScreen'
import ReceitaScreen from './src/screens/ReceitaScreen'
import RecuperarSenhaScreen from './src/screens/RecuperarSenhaScreen'
import LancamentoScreen from './src/screens/LancamentoScreen'
import RelatorioScreen from './src/screens/RelatorioScreen'

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  Cadastro: {
    screen: CadastroScreen,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  Despesa: {
    screen: DespesaScreen,
    initialRouteName: 'LancamentoScreen'
  },
  Receita: { screen: ReceitaScreen },
  RecuperarSenha: {
    screen: RecuperarSenhaScreen,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  Lancamento: { screen: LancamentoScreen },
  Relatorio:{ screen : RelatorioScreen },
  Sair: logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)
