

const playstopBtn = document.querySelector(".playstop__btn")
const main = document.querySelector("main");
const carrots = document.querySelectorAll(".carrot");
const bugs = document.querySelectorAll(".bug");
const playIcon = document.querySelector("button i");


function carrotBugHandler() {
carrots.forEach(carrot => distribution(carrot));
bugs.forEach(bug => distribution(bug));
}

function distribution(e) {
    const randomWidth = Math.floor(Math.random()*1300); //이 숫자를 정확하게 캐치할 수 있었으면 좋겠다. 곱해주는 숫자. 
    const randomHeight = Math.floor(Math.random()*150);

    e.style.transform= `translate(${randomWidth}px, ${randomHeight}px)`;

}

carrotBugHandler();


playstopBtn.addEventListener("click",() => {
    carrotBugHandler();
    playStopChange();

})

function playStopChange() {
    if (playIcon.classList.contains("fa-play")) {
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-stop");
        return ;
    } else if (playIcon.classList.contains("fa-stop")) {
        playIcon.classList.remove("fa-stop");
        playIcon.classList.add("fa-play")
}};

