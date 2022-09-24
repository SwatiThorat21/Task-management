let addBtn1 = document.getElementById("add-btn1");
addBtn1.addEventListener("click", addTask1);

function addTask1() {
  let addInput = document.getElementById("task-1");
  if (addInput.value == "") {
    alert("Please add a task!!");
  }
  let listArray;
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  listArray.push(addInput.value);
  localStorage.setItem("list", JSON.stringify(listArray));

  addInput.value = "";
  showList1();
}

function showList1() {
  let listArray;
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }

  let html = "";
  listArray.forEach((task) => {
    html += `
    <div class="li-element">
    <li>${task}</li>
    </div>
     `;
  });
  let taskList = document.getElementById("taskList1");
  taskList.innerHTML = html;
}

let addBtn2 = document.getElementById("add-btn2");
addBtn2.addEventListener("click", addTask2);

function addTask2() {
  let addInput = document.getElementById("task-2");
  if (addInput.value == "") {
    alert("Please add a task!!");
  }
  let listArray;
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  listArray.push(addInput.value);
  localStorage.setItem("list", JSON.stringify(listArray));

  addInput.value = "";
  showList2();
}
function showList2() {
  let listArray;
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }

  let html = "";
  listArray.forEach((task) => {
    html += `
    <li>${task}</li>
     `;
  });
  let taskList = document.getElementById("taskList2");
  taskList.innerHTML = html;
}

let addBtn3 = document.getElementById("add-btn3");
addBtn3.addEventListener("click", addTask3);

function addTask3() {
  let addInput = document.getElementById("task-3");
  if (addInput.value == "") {
    alert("Please add a task!!");
  }
  let listArray;
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  listArray.push(addInput.value);
  localStorage.setItem("list", JSON.stringify(listArray));

  addInput.value = "";
  showList3();
}

function showList3() {
  let listArray;
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }

  let html = "";
  listArray.forEach((task) => {
    html += `
    <li>${task}</li>
     `;
  });
  let taskList = document.getElementById("taskList3");
  taskList.innerHTML = html;
}
