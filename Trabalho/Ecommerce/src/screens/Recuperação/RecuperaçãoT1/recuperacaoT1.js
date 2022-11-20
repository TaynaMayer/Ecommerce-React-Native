import React from 'react';
import { Image, Text, } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Container, InputForm, Button } from '../../../components/Global';
import Header from '../../../components/header/header';

const RecuperaçãoT1 = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header name="Recuperação de Senha" />
      <Container>
      <Image source={require("../../../../assets/logo.png")}
          style={{
            width: 50, height: 50
          }} />
        <Text style={{ marginBottom: 70, marginTop: 24 }}>MULTI TECH</Text>
        <InputForm placeholder="Digite seu e-mail" placeholderTextColor="#616161" />       
        <Button onPress={() =>
          navigation.navigate("RecuperaçãoT2")
        }>
          <Text style={{ color: "white" }}>Próximo</Text>
        </Button>

      </Container>
    </>
  );
}

export default RecuperaçãoT1;