import React from 'react';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';
import ScrollContainer from '../../components/ScrollContainer'
import Vertical from '../../components/Vertical';

export default ({ loading, popular, topRated, today, refreshFn }) => (
    <ScrollContainer loading={loading} refreshFn={refreshFn}>
        <HorizontalSlider title={"Popular Shows"}>
            {popular.map(show => (
                <Vertical
                    isTv={true}
                    id={show.id}
                    key={show.id}
                    poster={show.poster_path}
                    title={show.name}
                    votes={show.vote_average}
                ></Vertical>
            ))}
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated"}>
            {topRated.map(show => (
                <Vertical
                    isTv={true}
                    id={show.id}
                    key={show.id}
                    poster={show.poster_path}
                    title={show.name}
                    votes={show.vote_average}
                ></Vertical>
            ))}
        </HorizontalSlider>
        <List title="Today">
            {today.map(show => (
                <Horizontal
                    isTv={true}
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    poster={show.poster_path}
                    overview={show.overview}
                ></Horizontal>
            ))}
        </List>
    </ScrollContainer>
)