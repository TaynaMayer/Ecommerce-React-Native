import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Gradient } from "../../components/index";

export default function Login() {

    return (
        <View>
            <Gradient />
            <Text>MultiTech</Text>
            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}