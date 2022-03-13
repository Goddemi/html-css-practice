

const greeting = document.querySelector(".greeting");
const greetingInput = greeting.querySelector(".greeting-input");

const HIDDEN = "hidden";



greeting.addEventListener("submit", (e)=> {
    e.preventDefault();
    greeting.classList.add(HIDDEN);
    const username = greetingInput.value;
});