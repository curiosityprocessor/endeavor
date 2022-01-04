import {useState, useEffect, useInputs, useReducer } from 'react';


function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    // useEffect(() => {
    //     // console.log('render complete');
    //     // console.log(`name:${name}, nickname:${nickname}`);
    //     // console.log('mount complete');
    //     console.log(`useEffect name:${name}`);
    //     return () => {
    //         console.log(`clean up name:${name}`)
    //     }
    // }, []);
    // //second param: array -> determines whether to run every render(NN) or only at mount/unmount(null)

    // const {name, nickname} = state;
    // const [state, onChange] = useInputs({
    //     name: '',
    //     nickname: ''
    //   });



    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // }

    // const onChangeNickname = (e) => {
    //     setNickname(e.target.value);
    // }

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname:''
    });
    const {name, nickname } = state;
    const onChange = (e) => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                {/* <input value={name} onChange={onChangeName}/> */}
                <input value={name} onChange={onChange}/>
                {/* <input value={nickname} onChange={onChangeNickname}/> */}
                <input value={nickname} onChange={onChange}/>
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