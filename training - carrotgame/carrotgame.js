
//play button

const header = document.querySelector("header")
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const playstopBtn = document.querySelector(".playstop__btn")
const playIcon = document.querySelector("button i");
const replay = document.querySelector(".replay")

const bgm = new Audio("sound/bg.mp3");
const carrotPull = new Audio("sound/carrot_pull.mp3");
const bugPull = new Audio("sound/bug_pull.mp3");
const gameWin = new Audio("sound/game_win.mp3");
const gameLose = new Audio("sound/alert.wav");

// timer

const timer = document.querySelector(".time");
let timeInterval = undefined;


function timerHandler() {
    let sec = 9;
    let milisec = 99;
    timeInterval = setInterval(() => {
        milisec = --milisec;
        timer.innerHTML = `${sec} : ${String(milisec).padStart(2,"0")}`;
        if (milisec < 0) {
            sec = --sec;
            milisec = 99;
            timer.innerHTML = `${sec} : ${String(milisec).padStart(2,"0")}`;
        } else if (sec == 0 && milisec == 0) {
            losingGame()
        } 
    }, 10);
}


//replay ! 
//나중에 replay 버튼이랑 play 버튼 기능 합치기. 
replay.addEventListener("click",() => {
    carrots.forEach(e => e.classList.remove("hidden"));
    carrotBugHandler();
    stopToPlay()
    footerHiddenBtnVis()
    carrotCount.innerHTML = 10;
    timer.innerHTML = "10:00";
    started = false;
})


let started = false;
let score = 0;

playstopBtn.addEventListener("click",() => {
    if (started) {
        stopGame();
    } else {
        startGame();
    }
    started = !started;
});


function startGame() {
    carrotBugHandler();
    playStopChange();
    timerHandler();
    bgm.play();
    bgm.currentTime = 0;
    main.style.visibility = "visible";
}

function stopGame() {
    losingGame()
    playStopChange()

    main.style.visibility = "hidden";
}

function playStopChange() {
    if (playIcon.classList.contains("fa-play")) {
        playToStop()
        return ;
    } else if (playIcon.classList.contains("fa-stop")) {
        stopToPlay()
}};

function playToStop() {
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-stop");
}

function stopToPlay() {
    playIcon.classList.remove("fa-stop");
    playIcon.classList.add("fa-play")
}


//main carrot , bug setting


let carrots = document.querySelectorAll(".carrot");
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

    e.style.transform= `translate(${randomWidth}px, ${randomHeight}px)`;
}

//function WinningGame!

const resultText = document.querySelector(".result__value");
 
function winningGame() {
    clearInterval(timeInterval);
    footerVisBtnHidden()
    resultText.innerHTML = `YOU WIN`
    bgm.pause()
    gameWin.play()
}

//function losingGame!

function losingGame() {
    clearInterval(timeInterval);
    footerVisBtnHidden()
    resultText.innerHTML = `YOU LOSE`
    bgm.pause()
    gameLose.play();
}

function footerVisBtnHidden() {
    footer.classList.remove("hidden");
    playstopBtn.classList.add("hidden");
}

function footerHiddenBtnVis() {
    footer.classList.add("hidden")
    playstopBtn.classList.remove("hidden");
}

// click disappearing

main.addEventListener("click", carrotClick);
    
function carrotClick(e) {
    if (!started) {
        return;
    } else {
        if(e.target.className === "carrot") {
            e.target.classList.add("hidden");
            carrotQuantity();
            carrotPull.play();
            
        } else if (e.target.className === "bug") {
            losingGame()
            bugPull.play();
        };
        
}};

// carrot quantities

const carrotCount = document.querySelector(".carrot__count");

function carrotQuantity() {
    carrots = document.querySelectorAll(".carrot");
    const carrotArray = [...carrots];
    const lastCarrot = carrotArray.filter(e => e.className ==="carrot hidden");
    const lastCarrotNumber = 10 - (lastCarrot.length);
    carrotCount.innerHTML = lastCarrotNumber;
    if (lastCarrotNumber === 0) {
        winningGame()
    }
}






