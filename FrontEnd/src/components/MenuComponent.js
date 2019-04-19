import React, { Component } from 'react';

import { DrawerNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen/index.js'
import LancamentoScreen from '../screens/LancamentoScreen/index.js'


const navigation = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: LancamentoScreen,
  }
});


export default navigation;