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


















