import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Cadastro from '../screens/Cadastro/cadastro';
import Carrinho from '../screens/Carrinho/carrinho';
import Categoria from '../screens/Categoria/Categoria';
import DescricaoProduto from '../screens/DescricaoProduto/Produto';
import Home from '../screens/Home/Home';
import Login from "../screens/Login";
import RecuperaçãoT1 from '../screens/Recuperação/RecuperaçãoT1/recuperacaoT1';
import RecuperaçãoT2 from '../screens/Recuperação/RecuperaçãoT2/recuperacaoT2';


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }} initialRouteName="Login">
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Screen
                name="RecuperaçãoT1"
                component={RecuperaçãoT1}
            />
            <Screen
                name="RecuperaçãoT2"
                component={RecuperaçãoT2}
            />
            <Screen
                name="Carrinho"
                component={Carrinho}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Categoria"
                component={Categoria}
            />
            <Screen
                name="DescricaoProduto"
                component={DescricaoProduto}
            />
            
        </Navigator>
    )

}