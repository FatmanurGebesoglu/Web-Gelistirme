alert("siteye hoşgeldiniz!");
console.log("mrb");
console.error("hata oluştu");
console.warn("uyarı mesajı");

//!  Değişkenler
var password;
console.log(password);
password = "fatmanur";
console.log(password);

yas = 25;
console.log(yas);

//? Değişlen tanımlama kuralları
//değişken isimleri rakam ile başlayamaz
//komutları değişken adı olarak kullanamayız for,while
//değişken adı oluşturulurken boşluk kullanılamaz
//değişken isimleerinde türkçe karakter kullanılmamalı

yas1 = 30;
var adSoyad;
adSoyad = "Fatmanur Gebeşoğlu";
console.log(adSoyad);

var email;
email = "1234@gmail.com";
console.log(email);

email = "24545@gmail.com";
console.log(email);

const sabit = "3242@gm.com";

//! Değişken Türleri

//?  Primitive Types

//String

let firstname = "fatmanur";
console.log(typeof firstname);

//Number

let age = 30;
console.log(typeof age);

//boolean

let krediKullanımı = false;
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
  city: "istanbul",
  country: "türkiye",
};
console.log(typeof address);

var hesapla = function () {
  return 0;
};

console.log(typeof hesapla);

//! OPERATÖRLER

//?      1-Arimetrik Operatörler + - / *

let veri;
const a = 10;
const b = 20;
let d = 4;
veri = a + b;
veri = a * b;
veri = a / b;
veri = a % b;
veri = d++;
console.log(veri);
console.log(typeof veri);
console.log(d);

//?      2-Atama Operatörleri

let veri2;
veri2 = a;
veri2 += a; // veri = veri + a;
veri2 -= a; // veri = veri - a;
veri2 *= a; // veri = veri * a;
veri2 /= a; // veri = veri / a;
veri2 %= a; // veri = veri % a;

//?      3-Karşılaştırma Operatörleri

let veri3;
const c = 5;
veri3 = a == b;
veri3 = b == c;
veri3 = 5 === "5";
veri3 = a != b;
veri3 = a !== b;
veri3 = a < b;
veri3 = b > a;
veri3 = 5 >= 5;
veri3 = b <= c;

//?      4-Mantıksal Operatörler

// and &&

veri3 = a > b && a < c;

// or ||

veri3 = a > b || a < c;

// not !

veri3 = !(a > b);

//!   DATA OBJECT

let zaman = new Date();
console.log(zaman);
console.log(typeof zaman);
let birthday = new Date(1999, 4, 12);

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

console.log(zaman.getFullYear() - birthday.getFullYear());

//! NUMBERS

let data;
let data2;
let data3;
data = Number("5");
data2 = parseInt("5");
data3 = parseFloat("5.5");
data3 = isNaN("c5");

console.log(data);
console.log(typeof data);

var sayi = 15.6353234523;
var sayi2 = sayi.toPrecision(3); //3 basamak alır 15.6
sayi2 = sayi.toFixed(3); // virgülden sonra 3 basamak

veri = Math.PI;
veri = Math.round(3.5);
veri = Math.round(3.2);
veri = Math.ceil(3.2); // yukarı yuvarlama
veri = Math.floor(8.3); // aşağı yuvarlama
veri = Math.pow(3.2); // karesi için 3^2
veri = Math.sqrt(81);
veri = Math.abs(-80);
veri = Math.min(2, 4, 5, 1, 4, 0, 5, 6);
veri = Math.max(2, 4, 5, 1, 4, 0, 5, 6);
veri = Math.random() * 10;

//! STRINGS

const namee = "fatmanur";
const lname = "gebeşoğlu";
const agee = "23";

let personData;

// string birleştirme

personData = namee + "" + lname;
personData =
  "Benim adım " +
  namee +
  "" +
  lname +
  "" +
  "yaşım" +
  agee +
  " ve Sakarya'da yaşıyorum.";
let hobbies = "kitap okumak dizi izlemek yürüyüş minnoş ile oynamak";
let hobbiesArray;

personData = namee.concat("", lname);
personData = personData.toUpperCase();
personData = personData.toLowerCase();

personData = personData.substring(3, 11); // belli bir bölümü alabilmek için
personData = personData.slice(1, 8); // belli arayı alır
personData = personData.indexOf("t"); // karakter araması yapmak için -1 döndürülürse karakter yok demektir
personData = personData.replace("fatmanur", "nur"); // yer değiştirmek için kullanılır
const newlength = personData.length;

hobbiesArray = hobbies.split(" "); //boşluğa göre ayırır dizi oluşturur.

console.log(personData);
console.log(typeof personData);

//! ARRAYS

let nameArray = ["arda", "kerem", "aslı", "mert"];
let birthdayYears = [1980, 1999, 2000, 2005];
let mixArray = ["arda", "yılmaz", 1990, null, undefined];
console.log(nameArray);
console.log(nameArray.length);
console.log(typeof nameArray);

// get array item

console.log(nameArray[0]);

// set array item

nameArray[0] = "fatmanur";
console.log(nameArray);
nameArray[nameArray.length + 1] = "mehmet";

//add item

nameArray.push("eda"); // dizi sonuna eleman ekler
nameArray.unshift("leyla"); //başına eleman ekler

// remove item
birthdayYears.pop(); // sondan siler
birthdayYears.shift(); // baştan siler

// indexOf

let index = nameArray.indexOf("fatmanur"); // aranan değerin index değerini döndürür

// reverse diziyi ters çevirmek için kullanılır

nameArray.reverse();

// sıralamak için

birthdayYears.sort(); // sıralı olarak küçükten büyüğe

// dizi birleştirmek için

let mixArray2 = nameArray.concat(birthdayYears);

// silmeden veya silerek ekleme
nameArray.splice(2, 0, "ahmet"); // 2.indexten sonra silme ahmet ekle
nameArray.splice(2, 1, "ahmet"); // 2.indexten sonra sil ahmet ekle

//!   KOŞUL DURUMLARI (if-else)

const personName = "Çağla";
const userName = "caglayilmaz";
const userAge = 20;
const isStudent = true;
const school = "university";

if (userName == "caglayilmaz") {
  console.log("merhaba " + personName);
} else {
  console.log("kullanıcı bulunamadı");
}

if (userAge === 20) {
  console.log("yaşınız: 20");
}

let id = "242452167";

if (typeof id != "undefined") {
  console.log("id:" + id);
} else {
  console.log("no id");
}

//!    SWITCH KOSUL YAPISI

let islem = 1;

switch (islem) {
  case 1:
    console.log("1 numaralı işlem yapıldı");
    break;
  case 2:
    console.log("2 numaralı işlem yapıldı");
    break;

  case 3:
    console.log("3 numaralı işlem yapıldı");
    break;

  default:
    console.log("işlem yapılmadı");
    break;
}

let today;

switch (new Date().getDay()) {
  case 0:
    day = "Pazar";
    break;
  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;
}

console.log(day);

//!  OBJECT LITERALS KULLANIMI


let userData;

let user={
    userName:"fatmanurg5",
    firstname:"Fatmanur",
    lastname:"Gebeşoğlu",
    age:23,
    hobbies: ["kitap okumak", "yazılım", "dans"],
    address: {
        city:"sakarya",
        country:"türkiye",
        phone:"3286329463",
    }
}

userData= user;

console.log(userData);
console.log(typeof userData);




//!   DÖNGÜLER(LOOPS)


//?     while


let i=0;

while(i<10){
    console.log(i);
    i++;
}

// break ve continue

let f=0;
while(i<10){
    console.log(f);
    if (f==6) {
        break;
    }
    f++;
}

let m=0;
while (m<10) {
    if(m==3){
        continue;
    }
    console.log(m);
    m++;
}

//?     Do while


let k=0;
do{
    console.log(k);
    k++;
}while(k<10);

//?     For Loop


for (let i=0; i<10; i++){
    console.log(i);
}




let toplam =0;

for(let i=0; i<10; i++){
    toplam +=i;
    console.log(toplam);
}


//!   DİZİ VE OBJELERDE DÖNGÜ KULLANIMI

let cities = ["istanbul", "ankara", "izmir", "adana","sakarya","karabük"]


for(let i=0; i<cities.length;i++){
    console.log(cities[i]);
}


// for-in

for( let i in cities){
    console.log(`index: ${i} value: ${cities[i]}`);
}


// for-each

cities.forEach(function(item){
    console.log(item);
});


let users = [
    {userName:"aslı",userLastName:"yılmaz"},
    {userName:"kerem",userLastName:"yılmaz"},
    {userName:"hüseyin",userLastName:"yılmaz"},
]


for(let i=0; i<users.length; i++){
    console.log(users[i])
}


//map : retuns an array

let usersData= users.map(function(item){
    return item.userName+ " " + item.userLastName;
});

console.log(usersData);

let numbers = [1,2,3,4,5,6,7,8,9];

let num = numbers.map(function(n){
    return n*n;
});

console.log(num);













