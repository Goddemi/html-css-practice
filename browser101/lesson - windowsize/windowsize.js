
const windowSize = document.querySelector(".window-size");




function updateTag() {
   windowSize.innerHTML = `window.screen: ${window.screen.width}, ${window.screen.height} </br> 
   window.outer: ${window.outerWidth}, ${window.outerHeight},  </br>
   window.inner: ${window.innerWidth}, ${window.innerHeight} </br> 
   documentElement.clientWidth:  ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`
}

updateTag();
 window.addEventListener("resize", updateTag);