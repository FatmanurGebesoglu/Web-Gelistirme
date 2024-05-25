//! EVENT LISTENER VE EVENT OBJESI


const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");

btn.addEventListener("click",function(){
    console.log("butona tıkandı");
});


function btnClick(){
    console.log("butona tıkandı");
};

btn.addEventListener("click",btnClick);

btn2.addEventListener("click",btnClick);

btn.addEventListener("click",function(a){
    let value;
    value=a;
    value=a.target;
    value=a.target.id;
    value=a.target.classList;
    a.preventDefault;// varsayılanı engelleme anlamında refresh gerçekleşmez
    console.log(value);
})



//! MOUSE EVENTLERİ

const btn3= document.querySelector("#btnAddNewTask");
const ul= document.querySelector("#task-list");


//click event

btn3.addEventListener("click",run);
ul.addEventListener("click",run);

//double click event

btn3.addEventListener("dblclick",run);

//mouse down event : tıklanıldığı andan
btn3.addEventListener("mousedown",run);

//mouse up event : bırakılan anda
btn3.addEventListener("mouseup",run);

//mouseenter event : her üzerine geldiğinde çalışır
btn3.addEventListener("mouseenter",run);

//mouseenter leave : üzerinden ayrıldığında çalışır
btn3.addEventListener("mouseleave",run);

//mouse over : alt elemanlar için de geçerli oluyor
ul.addEventListener("mouseover",run);

//mouse out : alt elemanlar için de geçerli oluyor
ul.addEventListener("mouseout",run);

//mouse move event : hareket piksel cinsinden kaydedilir genelde görseller için
ul.addEventListener("mousemove",run);

function run(event){
    console.log(`event type: ${event.type}`);
    console.log(event.target.value);
}


//! KEYBOARD EVENTLERİ

const text = document.getElementById("txtTaskName");

//focus event
text.addEventListener("focus",run);

//blur event
text.addEventListener("blur",run);

//paste event yapıstırma olayı olursa
text.addEventListener("paste",run);

//copy event
text.addEventListener("copy",run);

//cut event
text.addEventListener("cut",run);

//select event
text.addEventListener("select",run);

//keyDown event
text.addEventListener("keydown",run);

//keyUp event
text.addEventListener("keyup",run);



