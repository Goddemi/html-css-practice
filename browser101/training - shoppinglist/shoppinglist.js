

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


function listAdding() {
    if (listInput.value !== "") {
    const listValue = listInput.value;
    listInput.value = "";

    const listRow = document.createElement("div");
    listRow.setAttribute("class", "list-row");

    listRow.innerHTML = `
    <li>${listValue}</li>
    <div class="garbageIcon">
        <i class="fa-solid fa-trash-can"></i>
    </div>`

    listName.appendChild(listRow);

    
    listDiv.scrollIntoView({block:"center"});
}}


shoppingWindow.addEventListener("click", (e) => {
    if (e.target.nodeName =="I") {
        const deletingChild = e.target.parentElement;
        const deletingContent = deletingChild.parentElement;
                deletingContent.remove();
    }
})


listForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    listAdding();
})

checkBtn.addEventListener("click", (e) =>{
    listAdding();
})