import {useState} from 'react';
import Info from './Info';

const InfoContainer = () => {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible? 'hide':'show'}
            </button>
            <hr />
            {visible && <Info />}
        </div>
    )
}
export default InfoContainer;