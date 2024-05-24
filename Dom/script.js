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









