



//play button

const header = document.querySelector("header")
const playstopBtn = document.querySelector(".playstop__btn")
const playIcon = document.querySelector("button i");

playstopBtn.addEventListener("click",() => {
    carrotBugHandler();
    playStopChange();
    timerHandler()
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


//main carrot , bug setting

const main = document.querySelector("main");
const carrots = document.querySelectorAll(".carrot");
const bugs = document.querySelectorAll(".bug");




const imgSize = (document.querySelector(".carrot")).clientWidth; // carrot , bug 사이즈가

function carrotBugHandler() {
carrots.forEach(carrot => distribution(carrot));
bugs.forEach(bug => distribution(bug));
}


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


function distribution(e) {
    const mainWidth = main.clientWidth;
    const mainHeight = main.clientHeight;

    const randomWidth = randomNumber(0, mainWidth - imgSize);
    const randomHeight = randomNumber(0, mainHeight - imgSize);
    

    // const randomWidth = Math.floor(Math.random()*1300); //이 숫자를 정확하게 캐치할 수 있었으면 좋겠다. 곱해주는 숫자. 
    // const randomHeight = Math.floor(Math.random()*150);

    e.style.transform= `translate(${randomWidth}px, ${randomHeight}px)`;

}

carrotBugHandler();



// timer


const timer = document.querySelector(".time");
let sec = 9;
let milisec = 99;

function timerHandler() {
    let timerInterval = setInterval(() => {
        milisec = --milisec;
        timer.innerHTML = `${sec} : ${String(milisec).padStart(2,"0")}`;
        if (milisec < 0) {
            sec = --sec;
            milisec = 99;
            timer.innerHTML = `${sec} : ${String(milisec).padStart(2,"0")}`;
        } else if (sec == 0 && milisec == 0) {
            clearInterval(timerInterval);
        }
    }, 10);
}






