import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useEffect } from 'react';
import { Api } from "../../service/api";
import { BoxCards } from '../../components/CardsProdutos/styles';
import CardsProdutos from '../../components/CardsProdutos';
import { Container } from '../../components/Global';


const Home = () => {

  const [produto, setProduto] = useState([])



  useEffect(() => {
    Api
    .get("/produto")
    .then((response) => setProduto(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  return (

   

      <View style={{flexDirection: "row", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "center"}}>

      {produto?.map((item) => <CardsProdutos key={item.id} title= {item.nome} price= {item.preco} foto= {item.foto}/>)}
      </View>
    
      
    
    
  )
}

export default Home;