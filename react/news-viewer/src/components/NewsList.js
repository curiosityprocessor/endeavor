import styled from 'styled-components';
import NewsItem from './NewsItem';

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

const mockArticle = {
    title: 'news title',
    desription: 'short description of the article',
    url: 'www.google.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = () => {
    return (
        <NewsListBlock>
            <NewsItem article={mockArticle} />
            <NewsItem article={mockArticle} />
            <NewsItem article={mockArticle} />
            <NewsItem article={mockArticle} />
        </NewsListBlock>
    )
};
export default NewsList;