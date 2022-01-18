// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = product.querySelector('.quantity input').valueAsNumber;
  
  let sub = price * quantity;

  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = sub.toFixed(2);
  //... your code goes here

  console.log(subtotalElement);
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  const allProducts = document.querySelectorAll('product');
  
  let total = 0;
  
  for (let i = 0; i > allProducts.length; i++){
  total += updateSubtotal(allProducts[i]);
  }
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here

  let finalTotal = querySelector("#total span").innerHTML
  finalTotal +=  forEach.allProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
