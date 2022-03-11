
const orangeBox = document.querySelector(".box:nth-child(6)");


orangeBox.addEventListener("click", (event) => {
    console.log(event);
    const rect = orangeBox.getBoundingClientRect();
    console.log(rect);
    console.log(`${event.clientX} , ${event.clientY}`);
    console.log(`${event.pageX} , ${event.pageY}`)
})


const scrollingBy = document.querySelector("button:first-child");
const scrollingTo = document.querySelector("button:nth-child(2)");
const scrollingInto = document.querySelector("button:last-child");


scrollingBy.addEventListener("click", () => {
    window.scrollBy({
        top:100,
        behavior:"smooth",
    });
})


scrollingTo.addEventListener("click", ()=> {
    window.scrollTo(0,100);
} )


scrollingInto.addEventListener("click", () => {
    orangeBox.scrollIntoView();
})