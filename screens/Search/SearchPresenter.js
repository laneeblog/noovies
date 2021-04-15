import React from 'react';
import styled from 'styled-components/native';
import Input from '../../components/Search/Input';
import HorizontalSlider from '../../components/HorizontalSlider'
import Vertical from '../../components/Vertical'
import ScrollContainer from '../../components/ScrollContainer';

const Container = styled.ScrollView`
    background-color: black;
`;
const SearchPresenter = ({ movies, shows, keyword, onChange, onSubmit }) => (
    <ScrollContainer loading={false} refreshFn={onSubmit}>
        <Input
            placeholder="Write a keyword"
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        ></Input>
        {movies.length !== 0 && (
            <HorizontalSlider title={"Movie results"}>
                {movies.map(movie => (
                    <Vertical
                        key={movie.id}
                        id={movie.id}
                        poster={movie.poster_path}
                        title={movie.original_title}
                        votes={movie.vote_average}
                    ></Vertical>
                ))}
            </HorizontalSlider>
        )}
        {shows.length !== 0 && (
            <HorizontalSlider title={"TV results"}>
                {shows.map(show => (
                    <Vertical
                        isTv={true}
                        key={show.id}
                        id={show.id}
                        poster={show.poster_path}
                        title={show.original_name}
                        votes={show.vote_average}
                    ></Vertical>
                ))}
            </HorizontalSlider>
        )}
    </ScrollContainer>
)

export default SearchPresenter;