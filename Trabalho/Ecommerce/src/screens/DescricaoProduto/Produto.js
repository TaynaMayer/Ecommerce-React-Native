import React from 'react';
import { ContainerProdutos } from '../../components/Global';
import HeaderProdutos from '../../components/HeaderProdutos/headerProduto';
import { useEffect, useState } from 'react';
import { Api } from '../../service/api';
import { Text } from 'react-native';
import { IdContext } from '../../context/IdContext';
import { useContext } from 'react';
import { useRoute } from '@react-navigation/native';

const DescricaoProduto = ({ navigation }) => {

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
      <Text>{produtos.nome}</Text>
    </ContainerProdutos>
  );
};

export default DescricaoProduto;