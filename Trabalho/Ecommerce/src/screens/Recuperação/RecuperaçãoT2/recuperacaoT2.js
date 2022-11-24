import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, InputForm, Button } from '../../../components/Global';
import Header from '../../../components/header/header';
import { IdContext } from '../../../context/IdContext';
import { Api } from '../../../service/api';

const RecuperaçãoT2 = ({ navigation }) => {

  const route = useRoute();

  const [senha, setSenha] = useState("");



console.log(route.params.data.id)

  const update = () => {

    const data = {
      id: route.params.data.id,
      ativo: route.params.data.ativo,
      cpf: route.params.data.cpf,
      dtNascimento: route.params.data.dtNascimento,
      foto: route.params.data.foto,
      login: route.params.data.login,
      nome: route.params.data.nome,
      senha: senha
    }

    Api
      .put(`/usuario/${route.params.data.id}`, data)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }


  return (
    <>
      <Header name="Recuperação de Senha" />
      <Container>
        <Image source={require("../../../../assets/logo.png")}
          style={{
            width: 50, height: 50
          }} />
        <Text style={{ marginBottom: 70, marginTop: 24 }}>MULTI TECH</Text>
        <InputForm onChangeText={(data) => setSenha(data)} placeholder="Senha" placeholderTextColor="#616161"
          style={{ textAlign: "center" }} />
        <InputForm placeholder="Confirme sua senha" placeholderTextColor="#616161"
          style={{ textAlign: "center" }} />
        <Button onPress={() =>
          update()
        }>
          <Text style={{ color: "white" }}>Atualizar senha</Text>
        </Button>
      </Container>
    </>
  );
}

export default RecuperaçãoT2;