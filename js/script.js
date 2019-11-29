let subtractPantsButton = document.getElementById(`minusbtn`);
let addPantsButton = document.getElementById(`plusbtn`);

let pantsUnitPrice = document.getElementById(`pants-price`);
let shirtsUnitPrice = document.getElementById(`shirts-price`);

let pantsQuantity = document.getElementById(`pantsQty`);
let shirtsQuantity = document.getElementById(`shirtsQty`);

let subtractShirtsButton = document.getElementById(`sh-minusbtn`);
let addShirtsButton = document.getElementById(`sh-plusbtn`);

let pantsExtendedPrice = document.getElementById(`pants-total`);
let shirtsExtendedPrice = document.getElementById(`shirts-total`);

let calculateButton = document.getElementById(`submit`);
let discountButton = document.getElementById(`promo`);


//pants extended price 
function subtractProduct() {
  if(parseInt(pantsQuantity.innerHTML) > 0){
    pantsQuantity.innerHTML = parseInt(pantsQuantity.innerHTML) -1; 
    return pantsTotal = pantsExtendedPrice.innerHTML =parseFloat(parseInt(pantsQuantity.innerHTML) * parseFloat(pantsUnitPrice.innerHTML));
  }
}
subtractPantsButton.addEventListener("click",subtractProduct);

function addProduct() {
  pantsQuantity.innerHTML = parseInt(pantsQuantity.innerHTML) + 1; 
  return pantsTotal = pantsExtendedPrice.innerHTML =parseFloat(parseInt(pantsQuantity.innerHTML) * parseFloat(pantsUnitPrice.innerHTML));
}

addPantsButton.addEventListener("click",addProduct);


//shirt add minus button

function subtractShirtProduct() {
  if(parseInt(shirtsQuantity.innerHTML) > 0){
    shirtsQuantity.innerHTML = parseInt(shirtsQuantity.innerHTML) -1; 
    return shirtTotal= shirtsExtendedPrice.innerHTML =parseFloat(parseInt(shirtsQuantity.innerHTML) * parseFloat(shirtsUnitPrice.innerHTML));
  }
}
subtractShirtsButton.addEventListener("click",subtractShirtProduct);

function addShirtProduct() {
  shirtsQuantity.innerHTML = parseInt(shirtsQuantity.innerHTML) + 1; 
   return shirtTotal = shirtsExtendedPrice.innerHTML =parseFloat(parseInt(shirtsQuantity.innerHTML) * parseFloat(shirtsUnitPrice.innerHTML));
}

addShirtsButton.addEventListener("click",addShirtProduct);


//calculate subtotal

function calculateSubtotal() {
  let subTotal = shirtTotal + pantsTotal;
  let tax = (subTotal * 0.13).toFixed(2);
  let total = parseFloat(subTotal)+ parseFloat(tax);
  document.getElementById(`subtotal`).innerHTML = `
  <p>Subtotal: ${subTotal} </p>
  <p>Tax: ${tax} </p>
  <p>Total: ${total} </p>
  `;
}

calculateButton.addEventListener("click" , calculateSubtotal);

//PROMO CODE

function promoCode() {
  let noTax = `NOTAX`;
  let halfOff = `FIFTYFIFTY`;

  var enterCode = prompt("Please enter your discount code:", "");

  if (enterCode.toUpperCase() == `NOTAX`) {
    let subTotal = shirtTotal + pantsTotal;
    let tax = 0;
    let total = parseFloat(subTotal)+ parseFloat(tax);
    document.getElementById(`subtotal`).innerHTML = `
    <p>Subtotal: ${subTotal} </p>
    <p>Tax: ${tax} </p>
    <p>Total: ${total} </p>
  `;
  } else if (enterCode.toUpperCase() == `FIFTYFIFTY`) {
    let subTotal = shirtTotal + pantsTotal;
    let tax = (subTotal * 0.13).toFixed(2);
    let total = ((parseFloat(subTotal)+ parseFloat(tax)) * 0.5).toFixed(2);
    document.getElementById(`subtotal`).innerHTML = `
    <p>Subtotal: ${subTotal} </p>
    <p>Tax: ${tax} </p>
    <p>Total: ${total} </p>
  `;
  }
}

discountButton.addEventListener("click" , promoCode);

