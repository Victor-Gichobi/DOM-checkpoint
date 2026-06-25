const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const trashBtns = document.querySelectorAll(".fa-trash-alt");
const heartBtns = document.querySelectorAll(".fa-heart");
const total = document.querySelector(".total");

// Calculate total price
function updateTotal() {
  let sum = 0;

  const products = document.querySelectorAll(".list-products > .card-body");

  products.forEach((product) => {
    const price = parseInt(
      product.querySelector(".unit-price").textContent
    );

    const quantity = parseInt(
      product.querySelector(".quantity").textContent
    );

    sum += price * quantity;
  });

  total.textContent = sum + " $";
}

// PLUS BUTTON
plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantity =
      btn.parentElement.querySelector(".quantity");

    quantity.textContent =
      parseInt(quantity.textContent) + 1;

    updateTotal();
  });
});

// MINUS BUTTON
minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantity =
      btn.parentElement.querySelector(".quantity");

    let currentValue = parseInt(quantity.textContent);

    if (currentValue > 0) {
      quantity.textContent = currentValue - 1;
    }

    updateTotal();
  });
});

// DELETE BUTTON
trashBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = btn.closest(".list-products > .card-body");

    product.remove();

    updateTotal();
  });
});

// HEART BUTTON
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

// Initial total
updateTotal();