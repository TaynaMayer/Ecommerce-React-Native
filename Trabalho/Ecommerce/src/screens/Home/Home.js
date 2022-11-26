import React, { useState } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import { useEffect } from 'react';
import { Api } from "../../service/api";
import CardsProdutos from '../../components/CardsProdutos';
import {ContainerProdutos } from '../../components/Global';
import HeaderProdutos from '../../components/headerProdutos/headerProduto';
import { BoxCards, SearchBox, SearchInput } from './styles';
import { IdContext } from '../../context/IdContext';
import { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons"


const Home = ({navigation}) => {

  const [produtos, setProdutos] = useState([])
  const [filtrado, setFiltrado] = useState("")
  const [usuario, setUsuario] = useState([])
  const route = useRoute()

  useEffect(() => {
    Api
    .get("/produto")
    .then((response) => setProdutos(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

    Api
    .get(`/usuario/informacoes?login=${route.params?.login}&senha=${route.params?.senha}`)
    .then((response) => setUsuario(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });



   

  

  const produtosFiltrados = produtos?.filter((produto) =>
  produto.nome.toUpperCase().includes(filtrado.toUpperCase())
);

  return (

   <ContainerProdutos>
      <HeaderProdutos foto={usuario.foto}/>

      {route.params ? (<Text style={{alignSelf: "center", textAlign: "center",  width: 200}}>Olá {usuario.nome}</Text>) : (<Text style={{alignSelf: "center", textAlign: "center", width: 200}}  >Por favor, cadastre-se para poder ter melhor navegação em nosso site</Text>) }
  
      <View style={{flexDirection: 'row', width: "80%", alignSelf: "center"}}>

        <SearchInput placeholder="Pesquise aqui..." placeholderTextColor="gray" value={filtrado} onChangeText={(f) => setFiltrado(f)}/>
        <Ionicons name="search-outline" size={20} color="#0C1A30" style={{position: "absolute", right: 20, bottom: 45}} />     
      </View>
      <BoxCards>

        {produtosFiltrados.length == 0 && (<Text>Produto não encontrado</Text>)}
          {produtosFiltrados?.map((item) => {

            return <CardsProdutos key={item.id} item={item}  />
             })}
      </BoxCards>
   </ContainerProdutos>





  )
}

export default Home;