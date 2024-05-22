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


//! OPERATÖRLER

//?      1-Arimetrik Operatörler + - / * 

let veri;
const a=10;
const b=20;
let d=4;
veri = a+b;
veri =a*b;
veri= a/b;
veri =a%b;
veri=d++;
console.log(veri);
console.log(typeof veri);
console.log(d);


//?      2-Atama Operatörleri

let veri2;
veri2=a;
veri2 +=a; // veri = veri + a;
veri2 -=a; // veri = veri - a;
veri2 *=a; // veri = veri * a;
veri2 /=a; // veri = veri / a;
veri2 %=a; // veri = veri % a;


//?      3-Karşılaştırma Operatörleri

let veri3;
const c=5;
veri3 = a==b;
veri3 = b==c;
veri3 = 5==="5";
veri3 = a!=b;
veri3 = a!==b;
veri3 = a<b;
veri3 = b>a;
veri3 = 5>=5;
veri3 = b<=c;

//?      4-Mantıksal Operatörler

// and &&

veri3 = (a>b) && (a<c);

// or || 

veri3 = (a>b) || (a<c);

// not !

veri3 =!(a>b);



//!   DATA OBJECT

let zaman = new Date();
console.log(zaman);
console.log( typeof zaman);
let birthday= new Date(1999,4,12);

// set methods

zaman.setDate(25);
zaman.setMonth(3);
zaman.setFullYear(2024);
zaman.setHours(20);

// get methods

console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());

console.log(zaman.getFullYear()-birthday.getFullYear());

