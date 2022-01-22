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

