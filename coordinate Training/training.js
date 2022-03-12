


const verticalLine = document.querySelector(".vertical")
const horizontalLine = document.querySelector(".horizontal");
const centerCircle = document.querySelector(".center-circle");


document.addEventListener("mousemove", (event) => {

     const x = event.clientX;
     const y = event.clientY;

    verticalLine.style.left = `${x}px`
    horizontalLine.style.top = `${y}px`
    centerCircle.style.left = `${x}px`
    centerCircle.style.top = `${y}px`









    //  verticalLine.getBoundingClientRect().left = `${x}px`;
    //  horizontalLine.getBoundingClientRect().top = `${y}px`;

    //  centerCircle.getBoundingClientRect().left = coordinateX;
    // centerCircle.getBoundingClientRect().top = coordinateY;
// //왜 안될까?

    
    

})