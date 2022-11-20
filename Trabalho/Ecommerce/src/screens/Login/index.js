import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Gradient } from "../../components/index";
import { Container } from "../../components/Global";
import { Header } from "../../components/header/header";

export default function Login() {

    return (
        <Container>
            
            <Header name="Entrar">
                 
            </Header>

            <TouchableOpacity onPress={() => 
            navigation.navigate("RecuperaçãoT1")
        }>
            Esqueci Minha senha
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            Cadastro
        </TouchableOpacity>
        </Container>
    )
}