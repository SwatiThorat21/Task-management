showList();
let addCardBtn = document.getElementById("add-card-button");

addCardBtn.addEventListener("click", () => {
  let addInput = document.getElementById("add-input");
  if (addInput.value == "") {
    alert("Please add a task!!");
  }
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  listArray.push(addInput.value);
  localStorage.setItem("list", JSON.stringify(listArray));

  addInput.value = "";
  showList();
});

function showList(){
  let list = localStorage.getItem("list");
  if (list == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(list);
  }
  
}
