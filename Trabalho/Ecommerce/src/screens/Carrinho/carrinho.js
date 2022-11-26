import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { CartContext } from '../../context/Cart';
import Header from "../../components/header/header";
import { Button, Container } from '../../components/Global';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';





const Carrinho = () => {
  const { produtos, adcionarItemAoCarrinho, removerItem, deleteItem, limparCarrinho } = useContext(CartContext);
  const navigation = useNavigation();
  return (
    <>
      <Header name="Carrinho" />
      <Container>
        {produtos.length === 0 && (
          <MaterialCommunityIcons name="cart-plus" size={200} style={{ marginRight: 8, color: '#570909' }} />


        )}
        <Text style={{ marginRight: 8, color: 'black', fontSize: 20, alignItems: 'center' }}>Seu carrinho está vazio</Text>

        <Text style={{ marginTop: 30, marginRight: 8, color: 'black', fontSize: 20, alignItems: 'center' }}>Adicione produtos clicando no botão "Comprar" na página de produto. </Text>
        <Button onPress={() => navigation.navigate("Login")} style={{ marginTop: 50, }}> <Text style={{ color: "white", fontSize: 9 }}>VOLTAR PARA A PÁGINA PRINCIPAL</Text></Button>
      </Container>





    </>


  );
}

export default Carrinho;