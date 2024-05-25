//! ELEMENTLERİN SEÇİLMESİ


//? TEK ELEMENT SEÇİMİ

// document.getElementById() metodu

let veri;

veri = document.getElementById("header");
veri = document.getElementById("header").id;
veri = document.getElementById("header").className;
veri = document.getElementById("header");
// veri = veri.id; ---> bu şekilde kısa olabilir

veri.style.color = "blue";
veri.style.fontSize = "50px";
veri.style.fontWeight = "bold";
document.getElementById("header").innerText= "Yapılacaklar";
document.getElementById("header").innerHTML= "<b>To Do List</b>";


// document.querySelector() metodu


console.log(document.querySelector("#header")); //id ile
console.log(document.querySelector(".card-header")); // class ile
console.log(document.querySelector("div")); // etiket ismi ile
console.log(document.querySelector("li")).style.color = "blue"; // elemanın rengini değiştirmek için
console.log(document.querySelector("li:last-child")).style.color = "green"; // son elemanın rengini değiştirmek için
console.log(document.querySelector("li:nth-child(2")).style.color = "red"; // son elemanın rengini değiştirmek için
console.log(document.querySelector("li")).className = "list-group-item list-group-item primary";
console.log(document.querySelector("li")).classList.add("active");

//? ÇOKLU ELEMENT SEÇİMİ

// document.getElementsByClassName()


veri= document.getElementsByClassName("list-group-item");
veri= document.getElementsByClassName("list-group-item")[0];

veri[1].style.fontSize="20px";
veri[1].style.color="red";
veri[2].textContent="new item"; // içeriğini değiştirmek için

for(let i=0; i<veri.length; i++){
    console.log(veri[i].style.color="orange");
}

// document.getElementsByTagName() : elemenları etikete göre seçer

veri= document.getElementsByTagName("li");
veri= document.getElementById("task-list").getElementsByTagName("a");


// document.querySelectorAll()

veri= document.querySelectorAll("li"); // tüm li ler gelir forEach kullanılır

veri.forEach(function(item,index){
    item.textContent=`${index}-item`;
})

console.log(veri);

//? ELEMENTLER ÜZERİNDE GEZİNME

let value;

const todoList= document.querySelector(".list-group");
const todo= document.querySelector(".list-group-item:nth-child(2");

value= todoList;
value=todo;



// child nodes

value=todoList.childNodes;

value=todoList.children;
value=todoList.children[0];
value=todoList.children[1].textContent="değişen madde";
value=card;
value=card.children;
value=card.children[1].children[0].textContent="merhaba";
value=todoList;
value=todoList.children[0];
value=todoList.firstElementChild;
value=todoList.lastElementChild;
value=todoList.children.length;
value=todoList.childElementCount;
console.log(value);

// parent nodes

value.card;
value=card.parentElement;
value=card.parentElement.parentElement;

console.log(value);

// sibling node

value= todo;
value=todo.previousElementSibling;
value=todo.nextElementSibling;
value=todo.nextElementSibling.nextElementSibling;

console.log(value);
