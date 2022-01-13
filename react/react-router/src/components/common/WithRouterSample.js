import { useLocation, useNavigate, useParams } from 'react-router-dom';

const WithRouterSample = () => {
    const param = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <h4>location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={10}
                readOnly={true}
            />
            <h4>param</h4>
            <textarea
                value={JSON.stringify(param, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}
export default WithRouterSample;