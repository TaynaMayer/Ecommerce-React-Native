import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Container } from '../../../components/Global';

// import { Container } from './styles';

const RecuperaçãoT1 = () => {
  const navigation = useNavigation();
  return (

    <Container>
    <Text>RecuperaçãoT1</Text>

    <TouchableOpacity onPress={() => 
            navigation.navigate("RecuperaçãoT2")
        }>
            <Text style={{color: 'black'}}>Recuperação t2</Text>
        </TouchableOpacity>

    </Container>
  );
}

export default RecuperaçãoT1;