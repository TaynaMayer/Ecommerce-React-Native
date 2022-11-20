import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../Global';
import Ionicons from "@expo/vector-icons/Ionicons"
import { ContHeader } from './styles';

// import { Container } from './styles';

export default function Header( props ){
  const navigation = useNavigation();
  return (
    <ContHeader>
        <Ionicons onPress={() =>  navigation.goBack()}  name="chevron-back-outline" size={24} color="#690A0A"/>
        <Title>{props.name}</Title>

        
    </ContHeader>
  );
}

