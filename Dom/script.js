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


//? ELEMENT OLUŞTURMA

const li = document.createElement("li");

// add class

li.className="list-group-item list-group-item-secondary"; // elemente sınıf ekledik

// add id
li.id="deneme-id"

// title eklemek attribute
li.setAttribute("title","new item");

const text= document.createTextNode("To do 5");
li.appendChild(text); // texti atadık

const a = document.createElement("a");
a.setAttribute("href","#");
a.className= "delete-item float-right";
a.innerHTML= '<i class="fas fa-times"><i/>';
li.appendChild(a);

document.querySelector("#task-list").appendChild(li);

console.log(li);

//?    ELEMENT SİLME


const taskList = document.querySelector("#task-lst");
//taskList.remove(); -----> tüm elemanı sildi

taskList.childNodes[2].remove();
taskList.children[1].remove(); // ---> daha pratik
taskList.removeChild(taskList.children[3]);

// attribute silme

taskList.children[1].removeAttribute("class");


for(let i=0; i<taskList.children.length; i++){
    taskList.children[i].removeAttribute("class");
}

console.log(taskList);

//? ELEMENT GÜNCELLEME

// element güncelleme

const cardHeader = document.querySelector(".card-header");
const h2= document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("Yeni Listeler"));

const parent = document.querySelector(".card");
parent.replaceChild(h2,cardHeader);


// classlarda güncelleme

const taskList2= document.querySelector("#task-list");

let value2;

link= taskList2.children[0].children[0];
value2= link.className;
value2= link.classList;
value2= link.classList[0];
value2= link.classList[1];

link.classList.add("new");
link.classList.remove("new");

console.log(value2);

// attribute güncelleme


value2= link.getAttribute("href");
value2= link.setAttribute("href","www.google.com"); 
value2 =link.hasAttribute("href");





console.log(value2);
