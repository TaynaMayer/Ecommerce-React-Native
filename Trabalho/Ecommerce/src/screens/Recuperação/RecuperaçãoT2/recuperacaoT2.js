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

  const [usuario, setUsuario] = useState([]);


  setUsuario(route.params.data)
  /*useEffect(() => {
    Api
      .get(`/usuario/${route.params.data?.id}`)
      .then((response) => setUsuario(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);*/
  const update = () => {

    const data = {
      id: usuario.id,
      ativo: usuario.ativo,
      cpf: usuario.cpf,
      dtNascimento: usuario.nascimento,
      foto: usuario.image,
      login: usuario.login,
      nome: usuario.nome,
      senha: senha
    }

    Api
      .put(`/usuario/${usuario.id}`, data)
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