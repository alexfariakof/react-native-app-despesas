import React,  {Component}  from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import CadastroScreen from './src/screens/CadastroScreen'
import DespesaScreen from './src/screens/DespesaScreen'
import ReceitaScreen from  './src/screens/ReceitaScreen'
import RecuperarSenhaScreen from  './src/screens/RecuperarSenhaScreen'
import LancamentoScreen from './src/screens/LancamentoScreen'
import RelatorioScreen from './src/screens/RelatorioScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Cadastro: CadastroScreen,
  Despesa: DespesaScreen,
  Receita: ReceitaScreen,
  RecuperarSenha: RecuperarSenhaScreen,
  Lancamento: LancamentoScreen,
  Relatorio: RelatorioScreen
}, { initialRouteName:'Home' })

export default createAppContainer(AppNavigator)
