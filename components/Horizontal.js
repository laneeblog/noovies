import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../api';
import { formatDate, trimText } from '../utills';
import Poster from './Poster';
import Votes from './Votes';
import {useNavigation} from '@react-navigation/native';

const Container = styled.View`
    padding: 0px 30px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;
const Data = styled.View`
    width: 65%;
    margin-left: 10px;
`;
const Title = styled.Text`
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
`;
const ReleaseDate = styled.Text`
    color: white;
    margin-bottom: 5px;
`;
const Overview = styled.Text`
    color: white;
`;
const Horizontal = ({ isTv = false, id, title, poster, overview, releaseDate }) => {

    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            isTv, id, title, poster, overview, releaseDate
        }); // 이동할 스크린 컴포넌트 "Detail", 파라미터 전달 {id, ...}
    }

    return <TouchableOpacity onPress={goToDetail}>
        <Container>
            <Poster url={poster}></Poster>
            <Data>
                <Title>{trimText(title, 25)}</Title>
                {releaseDate ? <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate> : null}
                <Overview>{trimText(overview, 100)}</Overview>
            </Data>
        </Container>
    </TouchableOpacity>
};

export default Horizontal;