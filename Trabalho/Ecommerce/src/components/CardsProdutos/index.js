import { View, Text } from "react-native";
import { Button, Card, Container, Foto, Price, SubTitle, Title } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native" 

export default function CardsProdutos(props) {
    
    const navigation = useNavigation()


    return (
        
        <Card >
            <Foto style={{width: 50, height: 50}} source={{ uri: props.foto }} />
            <Title>
                {props.title}
            </Title>
            <Price>
                {props.price}
            </Price>
            <View>
                <View>
                    <Ionicons name="star-outline" size={10} color="#FFC120" />
                    <SubTitle>
                        48
                    </SubTitle>
                </View>
                <SubTitle>
                    80 reviews
                </SubTitle>
                <Button onPress={() => navigation.navigate("DescricaoProduto")}>
                    <Ionicons name="cart-outline" size={10} color= "#0C1A30" />
                    <Text>Carrinho</Text>

                </Button>
            </View>
        </Card>
        


    )

}