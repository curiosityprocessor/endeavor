import { useEffect, useState } from "react";

export default function usePromise(promiseCreator, deps) {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResponse(resolved);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return [loading, response, error];
}