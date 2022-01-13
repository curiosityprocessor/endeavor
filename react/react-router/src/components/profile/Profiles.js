import { Link, Route, Routes } from "react-router-dom"
import WithRouterSample from "../common/WithRouterSample";
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>user list</h3>
            <ul>
                <li>
                    <Link to="/profiles/curiosity">curiosity</Link>
                </li>
                <li>
                    <Link to="/profiles/cyjoo">cyjoo</Link>
                </li>
            </ul>
            
            <Routes>
                <Route 
                    path="/*"
                    element={<div>select profiles</div>}
                    />
                <Route path=":username" element={<Profile/>}/>
            </Routes>

            <WithRouterSample />

        </div>
    )
};

export default Profiles;