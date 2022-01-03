import {useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        // console.log('render complete');
        // console.log(`name:${name}, nickname:${nickname}`);
        // console.log('mount complete');
        console.log(`useEffect name:${name}`);
        return () => {
            console.log(`clean up name:${name}`)
        }
    }, []);
    //second param: array -> determines whether to run every render(NN) or only at mount/unmount(null)

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <b>name:</b> {name}
            </div>
            <div>
                <b>nickname:</b> {nickname}
            </div>
        </div>
    )
}
export default Info;