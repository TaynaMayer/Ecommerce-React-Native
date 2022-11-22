import React from 'react';
import { View, Image } from 'react-native';

import { Container } from "../Global";

import { MenuBurguer, Logo, BoxIcon } from './style';

import Ionicons from "@expo/vector-icons/Ionicons"

const headerProdutos = () => {
  return (
        <Container>
            <MenuBurguer>
            <Ionicons name="menu-outline" size={24} color="#690A0A"/>
            </MenuBurguer>

            <Logo source={require("../../../assets/logo.png")}/>


           <BoxIcon>
           <Ionicons   name="cart-outline" size={24} color="#690A0A"/>
           </BoxIcon>
        </Container>
  );
}

export default headerProdutos;