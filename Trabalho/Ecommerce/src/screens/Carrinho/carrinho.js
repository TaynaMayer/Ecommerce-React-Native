
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { CartContext } from '../../context/Cart';
import Header from "../../components/header/header"

// import { Container } from './styles';

const Carrinho = () => {
  const{produtos, adcionarItemAoCarrinho, removerItem,deleteItem,limparCarrinho}=useContext(CartContext);

  return(
    <View>
      
      {produtos.length===0&&(
        <Text>Sem produtos</Text>
      )}

      {produtos?.map((produto) => {
       return <Text key={produto.id}>{produto.nome}</Text>
      })}
      </View>

  );
}

export default Carrinho;