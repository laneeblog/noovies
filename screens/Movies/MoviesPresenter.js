import React from 'react';
import { Dimensions, Platform, ScrollView } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native'; //import styled from 'styled-components';
import Horizontal from '../../components/Horizontal';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 3.5}px;
    margin-bottom: 50px;
`;
const Container = styled.View``;
const UpcomingContainer = styled.View`
    margin-top: 20px;
`;


const timeout = Platform.OS == "android" ? 10 : 3;   // for diffrent timeout between ios and android

export default ({ loading, nowPlaying, popular, upcoming, refreshFn }) => {
    return <ScrollContainer loading={loading} refreshFn={refreshFn}>
        <>
            <SliderContainer>
                <Swiper controlsEnabled={false} loop timeout={timeout}>
                    {nowPlaying.map(movie => <Slide
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        votes={movie.vote_average}
                        overview={movie.overview}
                        backdrop={movie.backdrop_path}
                        poster={movie.poster_path}
                    ></Slide>
                    )}
                </Swiper>
            </SliderContainer>
            <Container>
                <HorizontalSlider title={"Popular Movies"}>
                    {popular.map(movie => (
                        <Vertical
                            id={movie.id}
                            key={movie.id}
                            poster={movie.poster_path}
                            title={movie.original_title}
                            votes={movie.vote_average}
                        ></Vertical>
                    ))}
                </HorizontalSlider>
                <List title="Coming Soon">
                    {upcoming.map(movie => (
                        <Horizontal
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            releaseDate={movie.release_date}
                            poster={movie.poster_path}
                            overview={movie.overview}
                        ></Horizontal>
                    ))}
                </List>
            </Container>
        </>
    </ScrollContainer>
}