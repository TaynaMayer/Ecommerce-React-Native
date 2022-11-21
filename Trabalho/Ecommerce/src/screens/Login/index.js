import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Gradient } from "../../components/index";
import { Container, InputForm, Button  } from "../../components/Global";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header/header";
import { StatusBar } from "expo-status-bar";
import { Api } from "../../service/api";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login() {
    const navigation = useNavigation();
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [validation, setValidation] = useState(false)


    const logar = () => {
        console.log("logando")
          
        Api.get(`usuario/login?login=${login}&senha=${senha}`)
           .then((res) => {
            if(res !== "Login e/ou senha inválidos.") {
                setValidation(true)
            }
           }).catch((err) => {
            console.log(err)
           });
    };

    console.log(validation)

    return (
        <SafeAreaView>
            <Header name="Entrar"/>
        <Container>
            

        <Image source={require("../../../assets/logo.png")}
          style={{
            width: 50, height: 50
          }} />
        <Text style={{ marginBottom: 70, marginTop: 24 }}>MULTI TECH</Text>
        <InputForm value={login} placeholder="Login" placeholderTextColor="#616161"
          style={{ textAlign: "center" }} onChangeText={(data) => setLogin(data)} />
        <InputForm value={senha} placeholder="Senha" placeholderTextColor="#616161"
          style={{ textAlign: "center" }} onChangeText={(data) => setSenha(data)}/>
        <Button onPress={() => logar()}>
          <Text style={{ color: "white" }}>Entrar</Text>
        </Button>

        <Text></Text>

       
        </Container>
        <StatusBar style="" />
        </SafeAreaView>
    )
}