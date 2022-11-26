import { View, Text } from "react-native";
import { Button, Card, Container, Foto, Price, SubTitle, Title } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native" 
import { IdContext } from "../../context/IdContext";
import { useContext, useState } from "react";
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold} from "@expo-google-fonts/dm-sans";

export default function CardsProdutos({ item }) {

    const navigation = useNavigation()


    return (

        <Card key={item.id}>
            <Foto style={{width: "100%", height: 80, marginBottom: 12}} source={{ uri: item.foto }} />
            <Title>
                {item.nome.substring(0, 10)}...
            </Title>
            <Price>
                R$ {item.preco}
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
                <Button onPress={() => navigation.navigate("DescricaoProduto", {id: item.id})}
>
                    <Ionicons name="caret-forward-outline" size={16} color= "#0C1A30" />
                    <Text>Detalhes</Text>

                </Button>
        </Card>



    )

}