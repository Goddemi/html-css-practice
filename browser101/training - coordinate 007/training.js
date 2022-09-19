


const verticalLine = document.querySelector(".vertical")
const horizontalLine = document.querySelector(".horizontal");
const centerCircle = document.querySelector(".center-circle");


document.addEventListener("mousemove", (event) => {

     const x = event.clientX;
     const y = event.clientY;
     const circleWidth = centerCircle.getBoundingClientRect().width;
     const circleHeight = centerCircle.getBoundingClientRect().height;

    verticalLine.style.transform = `translateX(${x}px)`
    horizontalLine.style.transform = `translateY(${y}px)`
    centerCircle.style.transform = `translate(${x - circleWidth/2}px, ${y - circleHeight/2}px)`



    //  verticalLine.getBoundingClientRect().left = `${x}px`;
    //  horizontalLine.getBoundingClientRect().top = `${y}px`;

    //  centerCircle.getBoundingClientRect().left = coordinateX;
    // centerCircle.getBoundingClientRect().top = coordinateY;
// //왜 안될까?   -->> dom 요소를 업데이트하는게 가능해? 아니 불가해 ! dom 요소를 꾸며주는 css요소를 업데이트해야해


// 그리고 dom getBoundingClientRect 가 0, 0 으로 나올때가 있다. 그것은 circle이
// 로딩되어 지기 전에 함수가 실행된 것이다. 내가 defer로 지정해 놓았기 때문에
//그럴 가능성이 생기는것 그때는 window.addEventListener("load", () => {})
//윈도우가 전부 로드가 되면 그때 타겟의 크기를 읽어와서 이벤트를 등록한다라는 의미가 되는 것. 

const section = document.createElement("h2");
section.setAttribute("class", "title");

    
    

})

