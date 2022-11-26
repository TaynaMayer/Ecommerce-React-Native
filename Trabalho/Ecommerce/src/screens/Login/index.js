import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Gradient } from "../../components/index";
import { Container, InputForm, Button  } from "../../components/Global";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header/header";
import { StatusBar } from "expo-status-bar";
import { Api } from "../../service/api";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold} from "@expo-google-fonts/dm-sans";


export default function Login() {
    const navigation = useNavigation();
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")
    const [validation, setValidation] = useState(true)


    const logar = () => {
        console.log("logando")
       
          
        Api.get(`usuario/login?login=${login}&senha=${senha}`)
           .then((res) => {
            if(res.data !== "Login e/ou senha inválidos.") {
                setValidation(true)
                navigation.navigate("Home", {login: login,senha:senha})  
                console.log("logou")              
            } else if(res.data === "Login e/ou senha inválidos.") {
              setErro(res.data)
            } else {
              setValidation(false)
            }  
           }).catch((err) => {
            console.log(err)
           });
    };
    

    return (
        <>
            <Header name="Entrar"/>
        <Container>        
        <Image source={require("../../../assets/logo.png")}
          style={{
            width: 50, height: 50
          }} />
        <Text style={{ marginBottom: 70, marginTop: 24 }}>MULTI TECH</Text>
        <InputForm value={login} placeholder="Login" placeholderTextColor="#616161"
          style={{ textAlign: "center" }} onChangeText={(data) => setLogin(data)} />
        <InputForm  secureTextEntry value={senha} placeholder="Senha" placeholderTextColor="#616161"
          style={{ textAlign: "center" }} onChangeText={(data) => setSenha(data)}/>

          {erro.length > 0 && (<Text style={{marginBottom: 20, color: "red"}}>{erro}</Text>)}
        <Button onPress={logar}>
          <Text style={{ color: "white" }}>Entrar</Text>
        </Button>

        <Text onPress={() => navigation.navigate("RecuperaçãoT1")} style={{marginBottom: 61, marginTop: 19}}>Esqueci minha senha</Text>
        
        <Text onPress={() => navigation.navigate("Cadastro")}>Ainda não sou cadastrado</Text>
       
        </Container>
        <StatusBar style="" />
        </>
    )
}