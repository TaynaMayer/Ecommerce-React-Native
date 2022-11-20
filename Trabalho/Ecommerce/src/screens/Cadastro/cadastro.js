import { Text, Image } from "react-native";
import { Container, InputForm, Button } from "../../components/Global";
import Header from '../../components/header/header';

export default function Cadastro() {
    return (
        <>
        <Header name="Cadastro de usuários"/>
        <Container>
            <Image source={require("../../../assets/logo.png")}
                style={{
                    width: 50, height: 50
                }} />
            <Text style= {{ marginBottom: 40}}>MULTI TECH  </Text>
            <InputForm placeholder= "Nome" placeholderTextColor= "#616161" />
            <InputForm placeholder= "E-mail" placeholderTextColor= "#616161" />
            <InputForm placeholder= "CPF" placeholderTextColor= "#616161" />
            <InputForm placeholder= "Senha" placeholderTextColor= "#616161" />
            <InputForm placeholder= "Endereço Completo" placeholderTextColor= "#616161" />
            <InputForm placeholder= "Cep" placeholderTextColor= "#616161" />
            <Button>
             <Text style= {{color: "white"}}>Cadastrar</Text>
             </Button> 
        </Container>
        </>
    )
}