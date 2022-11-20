import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Gradient } from "../../components/index";
import { Container } from "../../components/Global";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header/header";

export default function Login() {
    const navigation = useNavigation();
    return (
        <>
            <Header name="Entrar"/>
        <Container>
            

            <TouchableOpacity onPress={() => 
            navigation.navigate("RecuperaçãoT1")
        }>
            <Text style={{color: 'black'}}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} >
            <Text style={{color: 'black'}}>Cadastro</Text>
        </TouchableOpacity>
        </Container>
        </>
    )
}