
const main = document.querySelector("main");
const carrots = document.querySelectorAll(".carrot");
const bugs = document.querySelectorAll(".bug");



carrots.forEach(carrot => distribution(carrot));
bugs.forEach(bug => distribution(bug));

function distribution(e) {
    const randomWidth = Math.floor(Math.random()*1300); //이 숫자를 정확하게 캐치할 수 있었으면 좋겠다. 곱해주는 숫자. 
    const randomHeight = Math.floor(Math.random()*150);

    e.style.transform= `translate(${randomWidth}px, ${randomHeight}px)`;

}

