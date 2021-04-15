import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;
const Text = styled.Text`
    margin-left: 10px;
    color: white;
    opacity: 0.6;
`;


export default ({ onPress, text, icon }) => <TouchableOpacity onPress={onPress}>
    <Container>
        <FontAwesome name={icon} color="white" size={22}></FontAwesome>
        <Text>{text}</Text>        
    </Container>
</TouchableOpacity>