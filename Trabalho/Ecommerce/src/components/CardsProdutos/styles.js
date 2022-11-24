import styled from "styled-components/native";
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold} from "@expo-google-fonts/dm-sans";

export const Card = styled.View`
  
    padding: 12px 15px;
    background-color: #F5F5F5;
    border-radius: 25px; 
    width: 40%;
    height: 231px;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
  
`


export const Foto = styled.Image`    

    

`

export const Title = styled.Text`
  
    font-size: 14px;
    font-weight: 500;    
    line-height: 18px;
    letter-spacing: 0.2px;
    color: #0C1A30;
    text-align: left;
    width: 100%;

`

export const Price = styled.Text`

    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #570909;
    text-align: left;
    width: 100%;
    margin-bottom: 6px;

`
export const SubTitle = styled.Text`

    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.2px;
    color: #0C1A30;

`

export const Button = styled.TouchableOpacity`

    background: white;
    border: 2px solid #FAFAFA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 5px 10px;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    
`