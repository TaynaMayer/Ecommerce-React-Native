import { Text, Image, Platform, TouchableOpacity } from "react-native";
import { Container, InputForm, Button } from "../../components/Global";
import Header from '../../components/header/header';
import { Api } from "../../service/api"
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold} from "@expo-google-fonts/dm-sans";

export default function Cadastro() {

    const navigation = useNavigation();

    const [ativo, setAtivo] = useState(true)
    const [cpf, setCpf] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [login, setLogin] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [image, setImage] = useState("")
    const [erro, setErro] = useState("")

   /* async () => {
        if(Platform.OS !== "web") {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status != 'granted') {
                alert("Sem permissão")
            }
        }
    }*/

    /*const PickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result)
        if(!result.canceled) {
            setImage(result.assets.find((foto) => {
                return foto.uri
            }))
        }
    }*/

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
            if(nome === "", login === "", cpf === "", senha === "", nascimento === "", image === "")  {
                setErro("Preencha os campos corretamente")
            }
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
            <InputForm value={senha} secureTextEntry onChangeText={(data) => setSenha(data) } placeholder= "Senha" placeholderTextColor= "#616161" />
            <InputForm value={nascimento} onChangeText={(data) => setNascimento(data) } placeholder= "Data de nascimento" placeholderTextColor= "#616161" />
            <InputForm value={image} onChangeText={(data) => setImage(data) } placeholder= "Insira a url da sua imagem" placeholderTextColor= "#616161" />

            {erro.length > 0 && (<Text style={{color: "red", marginBottom: 20}}>{erro}</Text>)}
            
            <Button onPress={() => addPost()}>
             <Text style= {{color: "white"}}>Cadastrar</Text>
             </Button> 
        </Container>
        </>
    )
}