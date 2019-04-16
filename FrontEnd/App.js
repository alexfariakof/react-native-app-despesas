import {createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import CadastroScreen from './src/screens/CadastroScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Cadastro: CadastroScreen
}, { initialRouteName:'Home' })

export default createAppContainer(AppNavigator)
