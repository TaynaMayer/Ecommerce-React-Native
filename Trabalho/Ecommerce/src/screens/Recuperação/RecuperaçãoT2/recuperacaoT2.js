import React from 'react';
import { Image, Text, } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Container, InputForm, Button } from '../../../components/Global';
import Header from '../../../components/header/header';

const RecuperaçãoT2 = () => {
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
        <InputForm placeholder="Senha" placeholderTextColor="#616161"
          style={{ textAlign: "center" }} />
        <InputForm placeholder="Confirme sua senha" placeholderTextColor="#616161"
          style={{ textAlign: "center" }} />
        <Button onPress={() =>
          navigation.navigate("Login")
        }>
          <Text style={{ color: "white" }}>Atualizar senha</Text>
        </Button>
      </Container>
    </>
  );
}

export default RecuperaçãoT2;