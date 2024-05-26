//! Todo eleman ekleme

// eleman seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
  //submit event
  form.addEventListener("submit", addNewItem);
  //delete an item
  taskList.addEventListener("click", deleteItem);
  //delete all item
  btnDeleteAll.addEventListener("click",deleteAllItems);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("you add item");
    console.log("submit");
  }

  // li oluşturma

  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value));

  // a oluşturma

  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);
  taskList.appendChild(li);

  input.value = ""; // input alanını boşaltır

  e.preventDefault();
}

//!  Eleman silme

function deleteItem(e) {
  if (confirm("Silmek istediğinize emin misiniz?")) {
    if (e.target.className === "fas fa-times") {
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
}



//! Tüm elemanları silme

function deleteAllItems(e){
    if(confirm("Tüm elemanları silmek isteğinize emin misin?")){
        taskList.childNodes.forEach(function(item){
            if(item.nodeType===1){
                item.remove();
            }
        });
    }
    // taskList.innerHTML=""; ------>  alternatif yöntem hepsini siler
    e.preventDefault();
}













