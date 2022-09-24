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
   
    <li class="li-item" draggable="true">${task}</li>
  
     `;
  });
  let taskList = document.querySelector(".taskList");
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
    <li class="li-item" draggable="true">${task}</li>
     `;
  });
  let taskList = document.querySelector(".taskList");
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
    <li class="li-item" draggable="true">${task}</li>
     `;
  });
  let taskList = document.querySelector(".taskList");
  taskList.innerHTML = html;
}

let liItem = document.querySelectorAll(".li-item");
liItem.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

let taskLists = document.querySelectorAll(".taskList");
taskLists.forEach((taskList) => {
  taskList.addEventListener("dragover", (e) => {
    // e.prevetDefault();
    let afterList = getDragAfterList(taskList, e.clientY);
    let draggable = document.querySelector(".dragging");
    if (!afterList) {
      taskList.appendChild(draggable);
    } else {
      taskList.insertBefore(draggable, afterList);
    }
  });
});

function getDragAfterList(taskList, y) {
  let draggableList = [...taskList.querySelectorAll(".liItem:not(.dragging)")];

  return draggableList.reduce(
    (closest, child) => {
      let box = child.getBoundingClientRect();
      let offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
