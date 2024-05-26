
//? Tarayıcı Depolama Alanları


//! Session Storage :: oturum kapatılana kadar tutulur

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const addkey= document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);


function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItem(e){
    sessionStorage.clear();
}



//! Local Storage :: bilgiler javascripte silinene kadar durur kalıcıdır

// SetItem değişken tipi ne olurssa olsun string kaydeder
localStorage.setItem("programlama","javascript");
localStorage.setItem("bilgisayar",7000);


// GetItem  var olan kayıtlı elemana ulaşmak için kullanılır

const value = localStorage.getItem("programlama");
console.log(value);
console.log(typeof value); // burada da string değeri döner her değişken için

// clear local storage

localStorage.clear();

// vei olup olmadığını kontrol etmek için 

console.log(localStorage.getItem("klavye")); //null

if(localStorage.getItem("klavye")===null){
    console.log("sorgulanan veri bulunamadı");
}else {
    console.log("sorgulanan veri bulundu");
}



