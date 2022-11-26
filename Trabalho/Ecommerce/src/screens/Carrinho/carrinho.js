import React, { useContext } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from '../../context/Cart';
import Header from "../../components/header/header";
import { Button, Container } from '../../components/Global';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Card, CardView } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';

// import { Container } from './styles';





const Carrinho = () => {
  const { produtos, adcionarItemAoCarrinho, removerItem, deleteItem, limparCarrinho } = useContext(CartContext);
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Header name="Carrinho" />
      <Container>
        {produtos.length === 0 && (
          <>
          <MaterialCommunityIcons name="cart-plus" size={200} style={{ marginRight: 8, color: '#570909' }} />

          
          <Text style={{ marginRight: 8, color: 'black', fontSize: 20, alignItems: 'center' }}>Seu carrinho está vazio</Text>
  
          <Text style={{ marginTop: 30, marginRight: 8, color: 'black', fontSize: 20, alignItems: 'center' }}>Adicione produtos clicando no botão "Adicionar ao carrinho" na página de produto. </Text>
          <Button onPress={() => navigation.navigate("Home")} style={{ marginTop: 50, }}>
            <Text style={{color: "white", fontSize: 8, textAlign: "center", width:"100%"}}>VOLTAR PARA A PÁGINA PRINCIPAL</Text> 
          </Button>
           </>
        )}

       

        {produtos.map((prod) => {
          const produtopreco = prod.valor * prod.quantidade


          return (
            <Card key={prod.key} style={{flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 40}}>
              <Image style={{width: 150, height: 100, alignSelf: 'center'}} source={{uri: prod.foto}}></Image>
              <View style={{alignItems: "center"}}>

              <Text style={{fontSize: 15, width: 120, textAlign: "center"}}>{prod.nome}</Text>
              <Text style={{marginTop: 10, backgroundColor:"#f5f5f5", padding: 5}}>{prod.quantidade}</Text>
              <View style={{flexDirection: "row"}}>
              <TouchableOpacity onPress={()=>adcionarItemAoCarrinho(prod.id, prod.foto, prod.nome, prod.valor)}>

              <Ionicons name="add-outline" style={{marginRight: 20}} size={28} color="#690A0A" />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>removerItem(prod.id)}>
              <Ionicons name="remove-outline" size={28} color="#690A0A" />
              </TouchableOpacity>

              </View>
              <Text onPress={() => deleteItem(prod.id)} style={{color: "#690A0A", fontSize: 20, position: 'absolute', bottom: 100, right: -22}}>X</Text>
              </View>
            </Card>
          )
        })}

{produtos?.length !== 0 && (
        <TouchableOpacity style={{marginTop: 50}} onPress={()=>limparCarrinho()}>
            <Ionicons name="trash" style={{marginRight: 20}} size={28} color="#690A0A" />
        </TouchableOpacity>
        )}
        </Container>




    </ScrollView>


  );
}

export default Carrinho;