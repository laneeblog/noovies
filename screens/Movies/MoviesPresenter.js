import React from 'react';
import { ActivityIndicator, Dimensions, Platform } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native'; //import styled from 'styled-components';

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;
const Header = styled.View`
    width: 100%;
    height: ${height / 3}px;
`;
const Section = styled.View`
    background-color: red;
    height: 100%;
`;
const Text = styled.Text`
`;

const timeout = Platform.OS == "android" ? 7 : 3;   // for diffrent timeout between ios and android

export default ({ loading, nowPlaying }) => {
    return <Container>
        {loading ? <ActivityIndicator color="white"></ActivityIndicator> :
            <Header>
                <Swiper controlsEnabled={false} loop timeout={timeout}>
                    {nowPlaying.map(movie => (
                        <Section key={movie.id}>
                            <Text>{movie.original_title}</Text>
                        </Section>
                    ))}
                    
                </Swiper>
            </Header>
        }
    </Container>
}