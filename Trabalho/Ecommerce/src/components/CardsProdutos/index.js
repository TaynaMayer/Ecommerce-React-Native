import { View, Text } from "react-native";
import { Button, Card, Container, Foto, Price, SubTitle, Title } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native" 
import { IdContext } from "../../context/IdContext";
import { useContext } from "react";

export default function CardsProdutos(props) {
    const { setId } = useContext(IdContext)
    const navigation = useNavigation()
    
    function addItem(){
        const itemId = id;
        setId()
        navigation.navigate("DescricaoProduto")

    }

    return (
        
        <Card >
            <Foto style={{width: "100%", height: 60, marginBottom: 12}} source={{ uri: props.foto }} />
            <Title>
                {props.title}
            </Title>
            <Title>{props.key}</Title>
            <Price>
                R$ {props.price}
            </Price>
            <View style={{flexDirection: "row", width: "100%"}}>
                <View style={{flexDirection: "row", marginRight: 10}}>
                    <Ionicons name="star-outline" size={10} color="#FFC120" />
                    <SubTitle>
                        48
                    </SubTitle>
                </View>
                <SubTitle>
                    80 reviews
                </SubTitle>
            </View>
                <Button onPress={() => addItem()}
>
                    <Ionicons name="cart-outline" size={16} color= "#0C1A30" />
                    <Text>Carrinho</Text>

                </Button>
        </Card>
        


    )

}