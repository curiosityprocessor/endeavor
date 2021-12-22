import {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('default');
    const onClickEnter = () => {setMessage('Hi!')};
    const onClickExit = () => {setMessage('Bye!')};

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickExit}>Exit</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>red</button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>green</button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>blue</button>
        </div>
    )
}

export default Say;