alert("siteye hoşgeldiniz!");
console.log("mrb");
console.error("hata oluştu");
console.warn("uyarı mesajı");


//!  Değişkenler
var password;
console.log(password);
password="fatmanur";
console.log(password);

yas=25;
console.log(yas);

//? Değişlen tanımlama kuralları
//değişken isimleri rakam ile başlayamaz
//komutları değişken adı olarak kullanamayız for,while
//değişken adı oluşturulurken boşluk kullanılamaz
//değişken isimleerinde türkçe karakter kullanılmamalı



yas1=30;
var adSoyad;
adSoyad="Fatmanur Gebeşoğlu";
console.log(adSoyad);

var email;
email="1234@gmail.com";
console.log(email);

email="24545@gmail.com";
console.log(email);

const sabit="3242@gm.com";

//! Değişken Türleri

//?  Primitive Types

//String

let firstname="fatmanur";
console.log(typeof firstname);

//Number

let age=30;
console.log(typeof age);

//boolean

let krediKullanımı=false;
console.log(typeof krediKullanımı);

//undefined

let phone;
console.log(phone);

//?  Reference Types : Objects

//array

let liste = ["aslı", "kerem", "ahmet"];
console.log(typeof liste);

//object literals

let address = {
    city:"istanbul",
    country:"türkiye",
}
console.log(typeof address);

var hesapla = function(){
    return 0;
}

console.log(typeof hesapla);
