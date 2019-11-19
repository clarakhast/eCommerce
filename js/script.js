let subtractPantsButton = document.getElementById(`minusbtn`);
let addPantsButton = document.getElementById(`plusbtn`);

function subtractProduct() {
  let pantsQuantity = document.getElementById(`pantsQty`);

  pantsQuantity.innerHTML = parseInt(pantsQuantity.innerHTML) - 1; 
}
subtractPantsButton.addEventListener("click",subtractProduct);

function addProduct() {
  let pantsQuantity = document.getElementById(`pantsQty`);

  pantsQuantity.innerHTML = parseInt(pantsQuantity.innerHTML) - 1; 
}

addPantsButton.addEventListener("click",addProduct);

