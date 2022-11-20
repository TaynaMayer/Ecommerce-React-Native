import React from 'react';
import { Text, } from 'react-native';
import { Container, InputForm, Button} from '../../../components/Global';

// import { Container } from './styles';

const RecuperaçãoT2 = () => {
  return (

    <Container>
      <Text>MULTI TECH</Text>
      <InputForm placeholder= "Senha" placeholderTextColor= "#616161" 
      style= {{textAlign: "center"}} />    
      <Button>Atualizar senha</Button> 
      
    </Container>
  );
}

export default RecuperaçãoT2;