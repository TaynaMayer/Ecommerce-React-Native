import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Cadastro from '../screens/Cadastro/cadastro';
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
        </Navigator>
    )

}