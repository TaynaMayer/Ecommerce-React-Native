import React from 'react';
import { View, Image, Text } from 'react-native';
import { Container } from "./style"


import { MenuBurguer, BoxIcon } from './style';

import Ionicons from "@expo/vector-icons/Ionicons"

const HeaderProdutos = () => {
  return (
    <Container>
            <MenuBurguer>
            <Ionicons name="menu-outline" size={28} color="#690A0A"/>
            </MenuBurguer>

        
            
            <Image style={{width: 50, height: 50}} source={require("../../../assets/logo.png")}/>
        


           <BoxIcon>
           <Ionicons   name="cart-outline" size={28} color="#0C1A30"/>
           <Ionicons style={{position: 'absolute', left: 18}}  name="ellipse" size={13} color="#570909"/>
           <Text style={{position: 'absolute', color: 'white', left: 21, fontSize: 10}}>1</Text>
           </BoxIcon>
    </Container>
  );
}

export default HeaderProdutos;