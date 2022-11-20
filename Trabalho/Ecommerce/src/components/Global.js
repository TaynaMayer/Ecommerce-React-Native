import styled from "styled-components/native"

export const Container = styled.View`

    flex: 1;
    width: 100%;
    padding: 40px 45px;
    align-items: center;
    background-color: #ffffff;


`

export const Title = styled.Text`

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    line-height: 39px;
    text-align: center;
    margin: 0 auto;  
    color: #690A0A;
`

export const InputForm = styled.TextInput`
    text-align: center;
    background: #F5F5F5;
    border: 2px solid #FAFAFA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 100%;
    margin-bottom: 23px;

`;

export const Button = styled.TouchableOpacity`

    background: #690A0A;
    border-radius: 5px;
    padding: 9px 80px;        
    font-size: 12px;
    
`;
