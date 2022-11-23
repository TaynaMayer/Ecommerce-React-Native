import React from 'react';
import { ContainerProdutos } from '../../components/Global';
import HeaderProdutos from '../../components/HeaderProdutos/headerProduto';
import { useEffect, useState } from 'react';
import { Api } from '../../service/api';
import { Text } from 'react-native';
import { IdContext } from '../../context/IdContext';
import { useContext } from 'react';

const DescricaoProduto = () => {

  const [produtos, setProdutos] = useState([]);
  const {id} = useContext(IdContext);

    useEffect(() => {
      Api
      .get(`/produto/${id}`)
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, [id]);

  return (
    <ContainerProdutos>
      <HeaderProdutos />
      <Text>{produtos.id}</Text>
    </ContainerProdutos>
  );
};

export default DescricaoProduto;