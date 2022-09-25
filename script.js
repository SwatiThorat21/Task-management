let addBtn1 = document.getElementById("add-btn1");
addBtn1.addEventListener("click", addTask1);

function addTask1() {
  let addInput = document.getElementById("task-1");
  if (addInput.value == "") {
    return alert("Please add a task!!");
  }
  let listArray;
  let list = localStorage.getItem("taskList1");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  listArray.push(addInput.value);
  localStorage.setItem("taskList1", JSON.stringify(listArray));

  addInput.value = "";
  showList1();
}

function showList1() {
  let listArray;
  let list = localStorage.getItem("taskList1");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }

  let html = "";
  listArray.forEach((task, index) => {
    html += `
   
    <li class="li-item" draggable="true" id="list1-${index}" ondragstart="drag(event)">${task}</li>
  
     `;
  });
  let taskList = document.querySelector("#taskList1");
  taskList.innerHTML = html;
}

let addBtn2 = document.getElementById("add-btn2");
addBtn2.addEventListener("click", addTask2);

function addTask2() {
  let addInput = document.getElementById("task-2");
  if (addInput.value == "") {
   return alert("Please add a task!!");
  }
  let listArray;
  let list = localStorage.getItem("taskList2");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  listArray.push(addInput.value);
  localStorage.setItem("taskList2", JSON.stringify(listArray));

  addInput.value = "";
  showList2();
}
function showList2() {
  let listArray;
  let list = localStorage.getItem("taskList2");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }

  let html = "";
  listArray.forEach((task, index) => {
    html += `
    <li class="li-item" draggable="true" id="list2-${index}" ondragstart="drag(event)">${task}</li>
     `;
  });
  let taskList = document.querySelector("#taskList2");
  taskList.innerHTML = html;
}

let addBtn3 = document.getElementById("add-btn3");
addBtn3.addEventListener("click", addTask3);

function addTask3() {
  let addInput = document.getElementById("task-3");
  if (addInput.value == "") {
   return alert("Please add a task!!");
  }
  let listArray;
  let list = localStorage.getItem("taskList3");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  listArray.push(addInput.value);
  localStorage.setItem("taskList3", JSON.stringify(listArray));

  addInput.value = "";
  showList3();
}

function showList3() {
  let listArray;
  let list = localStorage.getItem("taskList3");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }

  let html = "";
  listArray.forEach((task, index) => {
    html += `
    <li class="li-item" draggable="true" id="list3-${index}" ondragstart="drag(event)">${task}</li>
     `;
  });
  let taskList = document.querySelector("#taskList3");
  taskList.innerHTML = html;
}

function drag(ev) {
  ev.dataTransfer.setData("taskId", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  let taskId = ev.dataTransfer.getData("taskId");
  let taskElement = document.getElementById(taskId);
  let ogList = taskElement.parentElement;
  let newList = ev.currentTarget;
  newList.appendChild(taskElement);

  // remove task from ogList
  let listArray;
  let listStr = localStorage.getItem(ogList.id);
  if (listStr == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listStr);
  }
  let index = listArray.indexOf(taskElement.textContent);
  if (index !== -1) {
    listArray.splice(index, 1);
  }
  localStorage.setItem(ogList.id, JSON.stringify(listArray));

  // add task to newList
  listStr = localStorage.getItem(newList.id);
  if (listStr == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listStr);
  }
  listArray.push(taskElement.textContent);
  localStorage.setItem(newList.id, JSON.stringify(listArray));
}

showList1();
showList2();
showList3();
