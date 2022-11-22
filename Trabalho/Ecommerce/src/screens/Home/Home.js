import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useEffect } from 'react';
import { Api } from "../../service/api";
import { Container } from '../../components/Global';
import CardsProdutos from '../../components/CardsProdutos';
import { useLinkProps } from '@react-navigation/native';


const Home = () => {

  const [produto, setProduto] = useState([])

  const renderItem = ({ item }) => {
      return (
        <CardsProdutos title= {item.nome} price= {item.preco} foto= {item.foto}/>
        
      )
  }

  useEffect(() => {
    Api
    .get("/produto")
    .then((response) => setProduto(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  return (
    
      <FlatList data={produto} keyExtractor={(p) => p.id}
        renderItem={renderItem}
      />
    
  )
}

export default Home;