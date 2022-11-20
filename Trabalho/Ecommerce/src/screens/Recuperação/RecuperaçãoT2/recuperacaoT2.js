import React from 'react';
import { Image, Text, } from 'react-native';
import { Container, InputForm, Button} from '../../../components/Global';

const RecuperaçãoT2 = () => {
  return (

    <Container>
            
      <Image source={require("../../../../assets/logo.png") } 
      style= {{width: 50, height: 50
      }}   />
      <Text style= {{ marginBottom: 40}}>MULTI TECH  </Text>
      <InputForm placeholder= "Senha" placeholderTextColor= "#616161" 
      style= {{textAlign: "center"}} />
      <InputForm placeholder= "Confirme sua senha" placeholderTextColor= "#616161" 
      style= {{textAlign: "center"}} />     
      <Button>
        <Text style= {{color: "white"}}>Atualizar senha</Text>
        </Button> 
      
    </Container>
  );
}

export default RecuperaçãoT2;