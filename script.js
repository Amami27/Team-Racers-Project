let add = document.querySelectorAll("button")[0];
let shoppingListInput = document.querySelector("input");
function push(){
  let shoppingList = document.createElement("shoppingList");
  shoppingList.appendChild(document.createTextNode(shoppingListInput.value));
  document.querySelector("div").appendChild(shoppingList);
  shoppingListInput.value = "";

  document.querySelector("div").addEventListener("click", event => {
  if (event.target.nodeName == "SHOPPINGLIST") {
    let itemDescription = document.querySelector("input");
    itemDescription.placeholder = "Input an item description";
    let itemList = document.createElement("itemList");
    document.body.appendChild(itemList);
    itemList.appendChild(document.createTextNode(itemDescription.value));
    document.querySelector("div").appendChild(itemList);
    itemDescription.value = "";
    }
  }); 
};

add.addEventListener('click', push);
