import React, { useState } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import { useEffect } from 'react';
import { Api } from "../../service/api";
import CardsProdutos from '../../components/CardsProdutos';
import {ContainerProdutos } from '../../components/Global';
import HeaderProdutos from '../../components/headerProdutos/headerProduto';
import { BoxCards } from './styles';
import { IdContext } from '../../context/IdContext';
import { useContext } from 'react';


const Home = () => {

  const [produtos, setProdutos] = useState([])
  const [filtrado, setFiltrado] = useState("")

  useEffect(() => {
    Api
    .get("/produto")
    .then((response) => setProdutos(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  const produtosFiltrados = produtos?.filter((produto) =>
  produto.nome.toUpperCase().includes(filtrado.toUpperCase())
);

  return (

   <ContainerProdutos>
      <HeaderProdutos/>

        <TextInput value={filtrado} onChangeText={(f) => setFiltrado(f)}/>
      <BoxCards>
          {produtosFiltrados?.map((item) => {

            return <CardsProdutos key={item.id} item={item}  />
             })}
      </BoxCards>
   </ContainerProdutos>





  )
}

export default Home;