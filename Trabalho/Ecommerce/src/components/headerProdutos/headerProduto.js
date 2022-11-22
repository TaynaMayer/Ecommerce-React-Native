import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Container } from "./style"



import { MenuBurguer, BoxIcon } from './style';

import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';


const HeaderProdutos = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <MenuBurguer>
        <Ionicons name="menu-outline" size={28} color="#690A0A" />
      </MenuBurguer>



      <Image style={{ width: 50, height: 50 }} source={require("../../../assets/logo.png")} />


      <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
        <BoxIcon>

          <Ionicons name="cart-outline" size={28} color="#0C1A30" />
          <Ionicons style={{ position: 'absolute', left: 18 }} name="ellipse" size={13} color="#570909" />

          <Text style={{ position: 'absolute', color: 'white', left: 21, fontSize: 10 }}>1</Text>


        </BoxIcon>
      </TouchableOpacity>
    </Container>
  );
}

export default HeaderProdutos;