

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


function listAdding()   {
    const listValue = listInput.value;
    listInput.value = "";

    const listDiv = document.createElement("div");

    const listing = document.createElement("li");
    listing.innerHTML = listValue;
    listing.style.listStyle = "none";
    listDiv.appendChild(listing);

    const deleting = document.createElement("div");
    deleting.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    listDiv.appendChild(deleting);


    listName.appendChild(listDiv);



    deleting.addEventListener("click", (e) =>{
        const target = e.target.parentElement;
        target.parentElement.remove();
    })
    
}

/* 엘리와 니코와 코드 만드는데 차이가 있었다. 엘리는 
const listDiv = document.createElement("div")
한다음 
listDiv.setAttribute('class', 'item__row');  이렇게 진행하였다.
이렇게 진행한 이유는 애초에 html 에 예시로 item row class로 된 li 를 만들어 놓고 css로 반영해 두었기 때문이다.
이게 더 좋은 방법인것 같다. 
다시 말하자면, 처음부터 html 작성시에 내가 앞으로 반영할 것을 예측해 li를 담아둔다. 
li와 , garbage 아이콘을 html 상에 생성해두고 애초에 , (내가 했던 방식은 그냥 js에서 생성했던 것이었다.)
css까지 그에 맞게 적용해 둔다. 그 다음에 js에서 li에 주었던 class를 사용해서 li를 추가하고 
기존에 html 작성해 두었떤 것을 삭제하는 과정이다. 좋은 방법인듯 . */

// 쓰레기통을 클릭했을때 삭제되는 방식을 엘리는
//
//     deleting.addEventListener("click", (e) =>{
 //   const target = e.target.parentElement;
 //   const   target.parentElement.remove();




