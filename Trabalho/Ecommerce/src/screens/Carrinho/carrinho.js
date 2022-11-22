
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { CartContext } from '../../context/Cart';

// import { Container } from './styles';

const Carrinho = () => {
  const{produtos, adcionarItemAoCarrinho, removerItem,deleteItem,limparCarrinho}=useContext(CartContext);

  return(
    <View>
      {produtos.length===0&&(
        <Text>Sem produtos</Text>
      )}
      </View>

  );
}

export default Carrinho;