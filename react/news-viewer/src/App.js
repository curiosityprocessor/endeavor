import { useState, useCallback } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import * as Constants from './constants/api-constants';

const App = () => {
    const [category, setCategory] = useState(Constants.NEWS_CTGR_ALL);
    const onSelect = useCallback(
        (selectedCategory) => {
            setCategory(selectedCategory);
        },
        [],
    )

    return (
    <>
        <Categories category={category} onSelect={onSelect}/>
        <NewsList category={category} />
    </>
    );
};

export default App;