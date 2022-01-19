import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import * as Constants from '../constants/api-constants';

const categories = [
    {
        name: Constants.NEWS_CTGR_ALL,
        text: 'All'
    },
    {
        name: Constants.NEWS_CTGR_BUSINESS,
        text: 'Business'
    },
    {
        name: Constants.NEWS_CTGR_SCIENCE,
        text: 'Science'
    },
    {
        name: Constants.NEWS_CTGR_ENTERTAINMENT,
        text: 'Entertainment'
    },
    {
        name: Constants.NEWS_CTGR_SPORTS,
        text: 'Sports'
    },
    {
        name: Constants.NEWS_CTGR_HEALTH,
        text: 'Health'
    },
    {
        name: Constants.NEWS_CTGR_TECHNOLOGY,
        text: 'Technology'
    },
]

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%;
        overflow-x: auto;
    };
`;

const CategoryBlock = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    
    &:hover {
        color: #495057;
    };

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        };
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = () =>  {
    return (
        <CategoriesBlock>
            {categories.map(ctgr => (
                <CategoryBlock 
                    key={ctgr.name}
                    to={ctgr.name === Constants.NEWS_CTGR_ALL ? '/' : `/${ctgr.name}`}
                >
                    {ctgr.text}
                </CategoryBlock>
            ))}
        </CategoriesBlock>
    )
}
export default Categories;