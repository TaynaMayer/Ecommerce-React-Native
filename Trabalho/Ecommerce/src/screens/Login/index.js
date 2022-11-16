import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { Gradient } from "../components/Gradient";

export default function Login() {

    return (
        <View>
            <Gradient />
            <Text>MultiTech</Text>
            <TextInput>Digite seu email</TextInput>
            <TextInput>Digite sua senha</TextInput>
            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}