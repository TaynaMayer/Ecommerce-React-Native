import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ContainerHeader } from "./style"
import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';


const HeaderProdutos = (props) => {
  const navigation = useNavigation();
  const { produtos } = useContext(CartContext)

  
  return (
    <ContainerHeader>
      {props.foto ? ( <Image style={{width: 30, height: 30}} source={{uri: props.foto}}></Image>) : (<Ionicons name="person-circle-outline" size={28} color="#690A0A" onPress={() => navigation.navigate("Login")} />)}
       
        
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>

      <Image  style={{ width: 50, height: 50 }} source={require("../../../assets/logo.png")} />
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
        

          <Ionicons name="cart-outline" size={28} color="#0C1A30" />
          <Ionicons style={{ position: 'absolute', left: 18 }} name="ellipse" size={13} color="#570909" />

          <Text style={{ position: 'absolute', color: 'white', left: 21, fontSize: 10 }}>{produtos.length}</Text>


       
      </TouchableOpacity>
    </ContainerHeader>
  );
}

export default HeaderProdutos;