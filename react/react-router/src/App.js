import { Link, Route, Routes } from 'react-router-dom';
import About from './components/common/About';
import HistoryFunctionSample from './components/common/HistoryFunctionSample';
import Home from './components/common/Home';
import Profiles from './components/profile/Profiles';

/*
    since react-router-dom v6
    <Route> cannot be used by itself. must be placed within <Routes>
    in <Route> "component={componentName}" property replaced by "element={<Component/>}"
*/
const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profiles">Profile</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
            </ul>
            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path = "/about" element={<About/>} />
                <Route path = "/profiles/*" element={<Profiles/>} />
                <Route path = "/history" element={<HistoryFunctionSample/>} />
            </Routes>
        </div>
    )
};

export default App;