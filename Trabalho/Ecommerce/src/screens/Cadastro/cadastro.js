import { Text, Image, Platform, TouchableOpacity } from "react-native";
import { Container, InputForm, Button } from "../../components/Global";
import Header from '../../components/header/header';
import { Api } from "../../service/api"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export default function Cadastro() {

    const navigation = useNavigation();

    const [ativo, setAtivo] = useState(true)
    const [cpf, setCpf] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [login, setLogin] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [image, setImage] = useState("")

    async () => {
        if(Platform.OS !== "web") {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status != 'granted') {
                alert("Sem permissão")
            }
        }
    }

    const PickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        if(!result.canceled) {
            setImage(result.assets.find((foto) => {
                return foto.uri.substring(0, 100)
            }))
        }
    }

    const addPost = () => {
        const data = {
            ativo: ativo,
            cpf: cpf,
            dtNascimento: nascimento,
            foto: image,
            login: login,
            nome: nome,
            senha: senha
          }
          
        Api.post("/usuario", data)
           .then((res) => {
            console.log(res.data)
           }).catch((err) => {
            console.log(err)
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
            <TouchableOpacity onPress={PickImage}>
                <Text>Clique Aqui</Text>
            </TouchableOpacity>

            {image && <Image source={{uri:image}} style={{width: 200, height: 200}}/>}
            
            <Button onPress={() => addPost()}>
             <Text style= {{color: "white"}}>Cadastrar</Text>
             </Button> 
        </Container>
        </>
    )
}