import React from 'react';
import styled from 'styled-components';

const Votes = styled.Text`
    color: white;
    opacity: 0.7;
    margin-bottom: 5px;
`;

export default ({votes}) => <Votes>⭐ {votes} / 10</Votes>