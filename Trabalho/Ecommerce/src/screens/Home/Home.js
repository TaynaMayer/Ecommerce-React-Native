import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useEffect } from 'react';
import { Api } from "../../service/api";
import CardsProdutos from '../../components/CardsProdutos';
import {ContainerProdutos } from '../../components/Global';
import HeaderProdutos from '../../components/headerProdutos/headerProduto';
import { BoxCards } from './styles';
import { IdContext } from '../../context/IdContext';
import { useContext } from 'react';

const Home = () => {

  const [produto, setProduto] = useState([])
  const {setId} = useContext(IdContext);


  useEffect(() => {
    Api
    .get("/produto")
    .then((response) => setProduto(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  return (

   <ContainerProdutos>
      <HeaderProdutos/>

      <BoxCards>
          {produto?.map((item) => {
    
            return <CardsProdutos key={item.id} title= {item.nome} price= {item.preco} foto= {item.foto} />
             })}
      </BoxCards>
   </ContainerProdutos>
      
    
      
    
    
  )
}

export default Home;