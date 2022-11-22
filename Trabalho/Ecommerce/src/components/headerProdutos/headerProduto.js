import React from 'react';
import { View, Image } from 'react-native';

import { Container } from "../Global";

import { MenuBurguer, Logo, BoxIcon } from './style';

const headerProdutos = () => {
  return (
        <Container>
            <MenuBurguer>
                <Image source={require("../../../assets/menuBurguer")}/>
            </MenuBurguer>

            <Logo source={require("../../../assets/logo.png")}/>


           <BoxIcon>
            <Image/>
            <Image/>
           </BoxIcon>
        </Container>
  );
}

export default headerProdutos;