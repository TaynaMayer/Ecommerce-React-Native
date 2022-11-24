import React from 'react';
import { ContainerProdutos } from '../../components/Global';
import HeaderProdutos from '../../components/HeaderProdutos/headerProduto';
import { useEffect, useState } from 'react';
import { Api } from '../../service/api';
import { Text, TouchableOpacity, View } from 'react-native';
import { CartContext } from '../../context/Cart'; 
import { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold} from "@expo-google-fonts/dm-sans";

const DescricaoProduto = ({ navigation }) => {
    const { adcionarItemAoCarrinho } = useContext(CartContext)
    const [produtos, setProdutos] = useState([]);
    const route = useRoute()

    useEffect(() => {
      Api
      .get(`/produto/${route.params.id}`)
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, [route.params.id]);

  return (
    <ContainerProdutos>
      <HeaderProdutos />

      <View key={produtos.id}>
      <Text>{produtos.nome}</Text>
      <TouchableOpacity onPress={() => {
          adcionarItemAoCarrinho(
            produtos.id, 
            produtos.foto, 
            produtos.nome, 
            produtos.valor, 
            produtos.descricao
          )
      }}><Text>Carrinho</Text></TouchableOpacity>
      

      </View>
    </ContainerProdutos>
  );
};

export default DescricaoProduto;