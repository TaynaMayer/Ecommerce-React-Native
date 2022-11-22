import { View, Text } from "react-native";
import { Button, Card, Container, Foto, Price, SubTitle, Title } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native" 

export default function CardsProdutos(props) {
    
    const navigation = useNavigation()


    return (
        
        <Card >
            <Foto style={{width: "100%", height: 60, marginBottom: 12}} source={{ uri: props.foto }} />
            <Title>
                {props.title}
            </Title>
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
                <Button onPress={() => navigation.navigate("DescricaoProduto")}>
                    <Ionicons name="cart-outline" size={16} color= "#0C1A30" />
                    <Text>Carrinho</Text>

                </Button>
        </Card>
        


    )

}