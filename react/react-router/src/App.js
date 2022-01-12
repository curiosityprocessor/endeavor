import { Link, Route, Routes } from 'react-router-dom';
import About from './components/common/About';
import Home from './components/common/Home';
import Profile from './components/profile/Profile';

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
                    <Link to="/profile/curiosity">curiosity profile</Link>
                </li>
                <li>
                    <Link to="/profile/cyjoo">cyjoo profile</Link>
                </li>
            </ul>
            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path = "/about" element={<About/>} />
                <Route path = "/profile/:username" element={<Profile/>} />
            </Routes>
        </div>
    )
};

export default App;