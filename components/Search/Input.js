import React from 'react';
import styled from 'styled-components';

const TextInput = styled.TextInput`
    background-color: white;
    margin: 20px 30px 40px 30px;
    padding: 10px 20px;
    border-radius: 15px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
    <TextInput
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
        returnKeyType={"search"}
    ></TextInput>
)

export default Input;