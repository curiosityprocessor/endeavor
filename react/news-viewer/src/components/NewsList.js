import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import * as Constants from '../constants/api-constants';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    };
`;

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === Constants.NEWS_CTGR_ALL ? '' : `&category=${category}`;
        return axios.get(Constants.NEWS_URL_TOP + query);
    }, [category]);

    if(loading) {
        return <NewsListBlock>loading</NewsListBlock>;
    }

    if(!response) {
        return null;
    }

    if(error) {
        return <NewsListBlock>error!</NewsListBlock>;
    }

    const { articles } = response.data;

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
};
export default NewsList;