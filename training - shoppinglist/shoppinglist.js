

const greeting = document.querySelector(".greeting");
const greetingInput = greeting.querySelector(".greeting-input");

const shoppingWindow = document.querySelector(".shopping-window");
const title = shoppingWindow.querySelector(".title");

const HIDDEN = "hidden";



greeting.addEventListener("submit", (e)=> {
    e.preventDefault();
    greeting.classList.add(HIDDEN);
    shoppingWindow.classList.remove(HIDDEN);
    
    const username = greetingInput.value;
    title.innerHTML = `${username}'s shopping list`
});


const listForm = shoppingWindow.querySelector(".list-form");
const listInput = listForm.querySelector("input");

const listName = shoppingWindow.querySelector(".list-name");

const checkBtn = listForm.querySelector("i");


function listAdding()   {
    if (listInput.value !== "") {
    const listValue = listInput.value;
    listInput.value = "";

    const listDiv = document.createElement("div");

    const listing = document.createElement("li");
    listing.innerHTML = listValue;
    listing.style.listStyle = "none";
    listDiv.appendChild(listing);

    const deleting = document.createElement("div");
    deleting.setAttribute("class", "garbageIcon");
    deleting.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    listDiv.appendChild(deleting);


    listName.appendChild(listDiv);


    deleting.addEventListener("click", (e) =>{
        const target = e.target.parentElement;
        target.parentElement.remove();
    })
    
    listDiv.scrollIntoView({block:"center"});
}}



listForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    listAdding();
})

checkBtn.addEventListener("click", (e) =>{
    listAdding();
})