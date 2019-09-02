// let jumpTo = document.querySelector("button");
// function push(){
//   let shoppingListName = document.querySelector("input");
//   let shoppingList = document.createElement("shoppingList");
//   shoppingList.appendChild(document.createTextNode(shoppingListName.value));
//   document.querySelector("div").appendChild(shoppingList);
//   shoppingList.appendChild(document.createTextNode("(0,0)"));
//   document.querySelector("div").appendChild(shoppingList);
//   shoppingListName.value = "";
// }
// add.addEventListener('click', push);
// let add = document.querySelector("button");
// function push(){
//   let shoppingListName = document.querySelector("input");
//   let shoppingList = document.createElement("shoppingList");
//   shoppingList.appendChild(document.createTextNode(shoppingListName.value));
//   document.querySelector("div").appendChild(shoppingList);
//   shoppingList.appendChild(document.createTextNode("(0,0)"));
//   document.querySelector("div").appendChild(shoppingList);
//   shoppingListName.value = "";
// }
// add.addEventListener('click', push);
  


let add = document.querySelector("#addList");
function push(){
  let shoppingListInput = document.querySelector("input");
  let shoppingList = document.createElement("h4");
  shoppingList.appendChild(document.createTextNode(shoppingListInput.value));
  document.querySelector("div").appendChild(shoppingList);
  shoppingList.appendChild(document.createTextNode("(0,0)"));
  document.querySelector("div").appendChild(shoppingList);
  shoppingListInput.value = "";
  shoppingList.style.maxWidth = "700px";
  shoppingList.style.margin = "0 auto"
}

add.addEventListener('click', push);