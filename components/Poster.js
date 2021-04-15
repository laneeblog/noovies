import React from 'react';
import styled from 'styled-components';
import { apiImage } from '../api';

const Image = styled.Image`
    width: 100px;
    height: 140px;
    border-radius: 3px;
`;

export default ({url = "./assets/splash.png"}) => <Image source={{uri: apiImage(url)}}></Image>