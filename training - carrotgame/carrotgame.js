const playstopBtn = document.querySelector(".play__stop--btn");
const timer = document.querySelector(".time");

playstopBtn.addEventListener("click", ()=> {

    let sec = 10;
    let milisec = 100;
    let time = setInterval(()=>{
        milisec = milisec-1;
        timer.innerHTML = `${sec} : ${String(milisec).padStart(2,"0")}`
        if (milisec == 0) {
            sec = sec-1;
            milisec = 99;
            timer.innerHTML = `${sec} : ${String(milisec).padStart(2,"0")}`
        if (sec == 0 ) {
            clearInterval(time);
        }
                
        }; 

    }, 10);
    // 시발 이부분 (sec ==0 && milisec ==0 ){ clearInterval 이렇게 왜안됨?}

time();


})

