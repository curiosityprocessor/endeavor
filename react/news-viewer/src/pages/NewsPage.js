import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import * as Constants from '../constants/api-constants';
import { useParams } from "react-router-dom";

const NewsPage = () => {
    const params = useParams();
    const category = params.category || Constants.NEWS_CTGR_ALL ;
    // console.log('category:', category);

    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    )
};

export default NewsPage;