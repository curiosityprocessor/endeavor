import { useSearchParams } from 'react-router-dom';

const About = () => {
    const [searchParams] = useSearchParams();
    console.log(Object.fromEntries([...searchParams]));
    const showDetail = searchParams.get('detail') === 'true';
    return (
        <div>
            <h1>About</h1>
            <p>Sample project for testing react-router</p>
            {showDetail && <p>showing detail page!</p>}
        </div>
    )
};

export default About;