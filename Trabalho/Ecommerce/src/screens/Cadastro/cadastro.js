import { Text, Image, } from "react-native";
import { Container, InputForm, Button } from "../../components/Global";
import Header from '../../components/header/header';
import { Api } from "../../service/api"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {

    const navigation = useNavigation();

    const [ativo, setAtivo] = useState(true)
    const [cpf, setCpf] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [foto, setFoto] = useState("")
    const [login, setLogin] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")

    const addPost = () => {
        const data = {
            ativo: ativo,
            cpf: cpf,
            dtNascimento: nascimento,
            foto: foto,
            login: login,
            nome: nome,
            senha: senha
          }
          
        Api.post("/usuario", data)
           .then((res) => {
                navigation.goBack();
           });
    };

    return (
        <>
        <Header name="Cadastro de usuários"/>
        <Container>
            <Image source={require("../../../assets/logo.png")}
                style={{
                    width: 50, height: 50
                }} />
            <Text style={{ marginBottom: 70, marginTop: 24 }}>MULTI TECH  </Text>
            <InputForm value={nome} onChangeText={(data) => setNome(data) } placeholder= "Nome" placeholderTextColor= "#616161" />
            <InputForm value={login} onChangeText={(data) => setLogin(data) } placeholder= "Login" placeholderTextColor= "#616161" />
            <InputForm value={cpf} onChangeText={(data) => setCpf(data) } placeholder= "CPF" placeholderTextColor= "#616161" />
            <InputForm value={senha} onChangeText={(data) => setSenha(data) } placeholder= "Senha" placeholderTextColor= "#616161" />
            <InputForm value={nascimento} onChangeText={(data) => setNascimento(data) } placeholder= "Data de nascimento" placeholderTextColor= "#616161" />
            <Button onPress={() => addPost()}>
             <Text style= {{color: "white"}}>Cadastrar</Text>
             </Button> 
        </Container>
        </>
    )
}