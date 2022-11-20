import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Gradient } from "../../components/index";
import { Container } from "../../components/Global";

export default function Login() {

    return (
        <Container>
            <Text>MultiTech</Text>
            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </Container>
    )
}