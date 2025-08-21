const cart = [];
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Add product to cart array, update UI
    alert("Added to cart!");
  });
});
