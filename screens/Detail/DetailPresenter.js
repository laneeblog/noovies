import Link from '../../components/Detail/Link'
import React from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import styled from 'styled-components';
import { apiImage } from '../../api';
import Poster from '../../components/Poster';
import ScrollContainer from '../../components/ScrollContainer';
import Votes from '../../components/Votes';
import { formatDate } from '../../utills'

const Header = styled.View`
    align-items: center;
    height: ${Dimensions.get("window").height / 3}px;
    justify-content: flex-end;
`;
const BG = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
`;
const Container = styled.View`
    flex-direction: row;
    align-items: center;
    top: 35px;
`;
const Info = styled.View`
    width: 50%;
    margin-left: 30px;
`;
const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
`;
const Data = styled.View`
    margin-top: 30px;
    padding: 20px;
`;
const DataName = styled.Text`
    margin-top: 30px;
    margin-bottom: 5px;
    color: white;
`;
const DataValue = styled.Text`
    color: white;
    opacity: 0.7;
`;

export default ({ detail, loading, openBrowser }) => {


    return <ScrollContainer>
        <Header>
            <BG source={{ uri: apiImage(detail.backdrop, "-") }}></BG>
            <Container>
                <Poster url={detail.poster}></Poster>
                <Info>
                    <Title>{detail.title}</Title>
                    {detail.votes ? <Votes votes={detail.votes}></Votes> : null}
                </Info>
            </Container>
        </Header>
        <Data>
            <DataName>Overview</DataName>
            <DataValue>{detail.overview ? detail.overview : null}</DataValue>
            {detail.spoken_languages ? (
                <>
                    <DataName>Languages</DataName>
                    <DataValue>{detail.spoken_languages.map(l => `${l.name} `)}</DataValue>
                </>
            ) : null}
            {detail.release_date ? (
                <>
                    <DataName>Release Date</DataName>
                    <DataValue>{formatDate(detail.release_date)}</DataValue>
                </>
            ) : null}
            {detail.status ? (
                <>
                    <DataName>Status</DataName>
                    <DataValue>{detail.status}</DataValue>
                </>
            ) : null}
            {detail.revenue ? (
                <>
                    <DataName>Revenue</DataName>
                    <DataValue>💸 {detail.revenue}</DataValue>
                </>
            ) : null}
            {detail.runtime ? (
                <>
                    <DataName>Runtime</DataName>
                    <DataValue>{detail.runtime} minutes</DataValue>
                </>
            ) : null}
            {detail.genres ? (
                <>
                    <DataName>Genres</DataName>
                    <DataValue>{detail.genres.map((g, index) => index + 1 === detail.genres.length ? g.name : `${g.name}, `)}</DataValue>
                </>
            ) : null}
            {detail.number_of_episodes ? (
                <>
                    <DataName>Seasons / Episodes</DataName>
                    <DataValue>{detail.number_of_seasons} / {detail.number_of_episodes} </DataValue>
                </>
            ) : null}
            {detail.imdb_id ? (
                <>
                    <DataName>Links</DataName>
                    <Link onPress={() => openBrowser(`https://www.imdb.com/title/${detail.imdb_id}`)} text={"IMDB Page"} icon={"imdb"}></Link>
                </>
            ) : null}
            {detail.videos?.results?.length > 0 ? (
                <>
                    <DataName>Videos</DataName>
                    {detail.videos.results.map(video => (
                        <Link onPress={() => openBrowser(`https://www.youtube.com/watch?v=${video.key}`)} text={video.name} icon={"youtube-play"} key={video.id}></Link>
                    ))}

                </>
            ) : null}
            {loading && <ActivityIndicator style={{ marginTop: 30 }}></ActivityIndicator>}
        </Data>
    </ScrollContainer>
}