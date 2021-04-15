import React, { useEffect } from 'react';
import { useState } from 'react';
import { movieApi, tvApi } from '../../api';
import DetailPresenter from './DetailPresenter';
import * as WebBrowser  from 'expo-web-browser';

export default ({
    navigation, route,
    route: { params: { isTv, id, title, backdrop, poster, votes, overview } }
}) => {

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({
        title, backdrop, poster, votes, overview, videos: { results: [] }
    })

    const getData = async () => {
        const [getDetail, getDetailError] = isTv ? await tvApi.show(id) : await movieApi.movie(id);
        setDetail({
            ...getDetail,
            title: getDetail.title || getDetail.name,
            backdrop: getDetail.backdrop_path,
            poster: getDetail.poster_path,
            overview: getDetail.overview,
            votes: getDetail.vote_average
        });
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, [id])

    React.useLayoutEffect(() => {
        navigation.setOptions({ title })
    })

    const openBrowser = async (url) => await WebBrowser.openBrowserAsync(url);


    return <DetailPresenter detail={detail} loading={loading} openBrowser={openBrowser}></DetailPresenter>
};
//  {...movie} > prop을 낱개로 보냄
//  movie ={movie} > prop을 movie 오브젝트로 보냄