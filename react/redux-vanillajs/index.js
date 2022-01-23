import { createStore } from 'redux';

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("#counter");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = (difference) => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

const initialState = {
    toggle: false,
    counter: 0
}
console.log(1);

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(2);

const render = () => {
    const state = store.getState();

    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    counter.innerText = state.counter;
};

render();
console.log(3);

store.subscribe(render);
console.log(4);

divToggle.onClick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
    store.dispatch(decrease());
};
console.log(5);
