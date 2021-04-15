import React, { useEffect, useState } from 'react';
import FavsPresenter from './FavsPresenter';
import { movieApi } from '../../api';

const FavsContainer = () => {

    const [movies, setMovies] = useState({
        results: [],
        error: null
    })

    const getData = async () => {
        const [results, error] = await movieApi.discover();
        setMovies({
            results,
            error
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return <FavsPresenter {...movies}></FavsPresenter>;
}

export default FavsContainer;