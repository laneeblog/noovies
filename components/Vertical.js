import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../api';
import { trimText } from '../utills';
import Poster from './Poster';
import Votes from './Votes';

import {useNavigation} from '@react-navigation/native';

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;
const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
`;

const Vertical = ({ isTv = false, id, poster, title, votes }) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            isTv, id, title, poster, votes
        });    // 이동할 스크린 이름 "Detail", 파라미터 전달 {id, ...}
    }

    return <TouchableOpacity onPress={goToDetail}>
        <Container>
            <Poster url={poster}></Poster>
            <Title>{trimText(title, 15)}</Title>
            <Votes votes={votes} ></Votes>
        </Container>
    </TouchableOpacity>
};

export default Vertical;