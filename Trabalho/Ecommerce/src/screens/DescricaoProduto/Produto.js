import React from 'react';
import { ContainerProdutos } from '../../components/Global';
import { useEffect, useState } from 'react';
import { Api } from '../../service/api';
import HeaderProdutos from '../../components/headerProdutos/headerProduto.js';
import { Text, Image, View } from 'react-native';
import { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { Button, Price, SubTitle, Title } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CartContext } from '../../context/Cart';

const DescricaoProduto = ({ navigation }) => {

  const [produto, setProduto] = useState([]);
    const route = useRoute();
    const {adcionarItemAoCarrinho} = useContext(CartContext);

    useEffect(() => {
      Api
      .get(`/produto/${route.params.id}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, [route.params.id]);

  return (
  
  <ContainerProdutos>
      <HeaderProdutos/>

      <View style={{alignItems: "center"}}>

          <Title>{produto.nome}</Title>
          <Image style={{width: 260, height: 200}} source={{ uri: produto.foto }} />
              
              <Price>
                  R$ {produto.preco},00
              </Price>
              <SubTitle>
                {produto.descricao}
              </SubTitle>
                  <Button onPress={() => adcionarItemAoCarrinho(
            produto.id, 
            produto.foto, 
            produto.nome, 
            produto.valor, 
            produto.descricao
          )}
  >
                      <Ionicons name="cart-outline" size={16} color= "#0C1A30" />
                      <Text>Adicionar ao Carrinho</Text>

                  </Button>
      </View>
        
                     
     </ContainerProdutos>
  );
};

export default DescricaoProduto;