const rabbit = document.querySelector(".rabbit");

const button = document.querySelector("button");


button.addEventListener("click", () => {
    rabbit.scrollIntoView({behavior: "smooth", block: "center"});
})
