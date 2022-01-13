import { useNavigate } from "react-router-dom";

const HistoryFunctionSample = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const handleGoHome = () => {
        navigate("/");
    }


    return (
        <div>
            <button onClick={handleGoBack}>back</button>
            <button onClick={handleGoHome}>Home</button>
        </div>
    );
}

export default HistoryFunctionSample;