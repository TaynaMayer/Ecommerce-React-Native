import { View, Text } from "react-native";
import { Button, Card, Container, Foto, Price, SubTitle, Title } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons"


export default function CardsProdutos(props) {
    return (
        <Container>
        <Card>
            <Foto source={{ uri: props.foto }} />
            <Title>
                {props.title}
            </Title>
            <Price>
                {props.price}
            </Price>
            <View>
                <View>
                    <Ionicons name="star-outline" size={10} color="FFC120" />
                    <SubTitle>
                        48
                    </SubTitle>
                </View>
                <SubTitle>
                    80 reviews
                </SubTitle>
                <Button>
                    <Ionicons name="cart-outline" size={10} color= "0C1A30" />
                    <Text>Carrinho</Text>

                </Button>
            </View>
        </Card>
        </Container>


    )

}