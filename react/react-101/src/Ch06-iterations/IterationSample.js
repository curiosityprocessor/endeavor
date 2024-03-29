import {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'item1'}
        , {id: 2, text: 'item2'}
        , {id: 3, text: 'item3'}
        , {id: 4, text: 'item4'}
        , {id: 5, text: 'item5'}
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(6);
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };
    const nameList = names.map((name) => (
        <li key={name.id}
            onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>add item</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample;