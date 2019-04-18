import React from 'react';

import { View, Text, Image } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { NavigationActions } from 'react-navigation';

class MenuComponent extends React.PureComponent {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View >
                <Menu
                    ref={this.setMenuRef}
                    button={<Text onPress={this.showMenu} style={{ height: 60 }} ><Image source={require('../../assets/Menu.png')} /></Text>}
                >
                    <MenuItem onPress={this.navigateToScreen('CadastroScreen')}>Cadastro</MenuItem>
                    <MenuItem onPress={this.navigateToScreen('DespesaScreen')}>Despesa</MenuItem>
                    <MenuItem onPress={this.navigateToScreen('RelatorioScreen')}>Relatorio</MenuItem >
                    <MenuItem onPress={this.navigateToScreen('HomeScreen')}>Home</MenuItem >
                    <MenuItem onPress={this.navigateToScreen('ReceitaScreen')}>Receita</MenuItem >
                    <MenuDivider />
                    <MenuItem onPress={this.hideMenu}>Sair</MenuItem>
                </Menu >
            </View >
        );
    }
}

export default MenuComponent;