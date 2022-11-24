import React from 'react';
import { Image, Text, } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Container, InputForm, Button } from '../../../components/Global';
import Header from '../../../components/header/header';
import { useState, useEffect } from 'react';
import { Api } from "../../../service/api";
import { IdContext } from '../../../context/IdContext';
import { useContext } from 'react';
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold} from "@expo-google-fonts/dm-sans";

const RecuperaçãoT1 = () => {

  const navigation = useNavigation();

  const [nome, setNome] = useState("");

  const [usuario, setUsuario] = useState([]);

  const validacao = () => {


    console.log(nome)

    Api.get(`/usuario/nome/${nome}`)
      .then((response) => {

        if(response.data.length > 0) {

          setUsuario(response.data)
          
          navigation.navigate("RecuperaçãoT2",{data: response.data[0]})
        } else {
          console.log("fodase")
        }
      })

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
        <InputForm onChangeText={(data) => setNome(data)}
          value={nome}
          placeholder="Digite seu nome completo" placeholderTextColor="#616161" />
        <Button onPress={validacao}>
          <Text style={{ color: "white" }}>Próximo</Text>
        </Button>

      </Container>
    </>
  );
}

export default RecuperaçãoT1;
