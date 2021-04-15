import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { apiImage } from '../../api';
import Poster from '../Poster';
import { TouchableOpacity } from 'react-native';
import Votes from '../Votes';
import { trimText } from '../../utills';
import { useNavigation } from '@react-navigation/native';


const Container = styled.View`
    width: 100%;
    height: 100%;
`;
const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
`;
const Content = styled.View`
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2px 0;
`;
const Data = styled.View`
    width: 50%;    
    align-items: flex-start;
`;
const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 10px;
`;
const VotesContainer = styled.Text`
    margin-bottom: 5px;
`;
const Overview = styled.Text`
    color: white;
    opacity: 0.7;
    margin-bottom: 5px;
`;
const Button = styled.View`
    background-color: rebeccapurple;
    padding: 5px 10px;
    border-radius: 3px;
`;
const ButtonText = styled.Text`
    color: white;
`;


const Slide = ({id, title, backdrop, votes, overview, poster}) => {

    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            id, title, backdrop, votes, overview, poster
        })
    }

    return <Container>
        <BG source={{uri: apiImage(backdrop)}}></BG>
        <Content>
            <Poster url={poster}></Poster>
            <Data>
                <Title>{trimText(title, 30)}</Title>
                <VotesContainer>
                    <Votes votes={votes}></Votes>
                </VotesContainer>                
                <Overview>{trimText(overview, 100)}</Overview>
                <TouchableOpacity onPress={goToDetail}>
                    <Button>
                        <ButtonText>View details</ButtonText>
                    </Button>
                </TouchableOpacity>
            </Data>
        </Content>
    </Container>
}

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backdrop: PropTypes.string,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
}

export default Slide;