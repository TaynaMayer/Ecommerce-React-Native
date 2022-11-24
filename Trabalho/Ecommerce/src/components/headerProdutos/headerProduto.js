import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ContainerHeader } from "./style"
import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold} from "@expo-google-fonts/dm-sans";

import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';


const HeaderProdutos = () => {
  const navigation = useNavigation();
  const { produtos } = useContext(CartContext)


  return (
    <ContainerHeader>
      
        <Ionicons name="menu-outline" size={28} color="#690A0A" />
     



      <Image style={{ width: 50, height: 50 }} source={require("../../../assets/logo.png")} />


      <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
        

          <Ionicons name="cart-outline" size={28} color="#0C1A30" />
          <Ionicons style={{ position: 'absolute', left: 18 }} name="ellipse" size={13} color="#570909" />

          <Text style={{ position: 'absolute', color: 'white', left: 21, fontSize: 10 }}>{produtos.length}</Text>


       
      </TouchableOpacity>
    </ContainerHeader>
  );
}

export default HeaderProdutos;