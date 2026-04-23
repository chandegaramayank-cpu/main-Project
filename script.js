// Category switching
document.querySelectorAll(".cat-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".cat-item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Filter chips
document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
  });
});

// Wishlist toggle
document.querySelectorAll(".card-wish").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
    btn.style.color = btn.textContent === "♥" ? "#c45c3a" : "";
  });
});

// Offer bar close
document.querySelector(".close-Offer-bar").addEventListener("click", () => {
  document.querySelector(".offer-bar").style.display = "none";
  //animatin move up and fade out
  document.querySelector(".offer-bar").style.animation =
    "moveUpFadeOut 0.5s forwards";
});

// API call for fetch product image and more

const API = fetch("https://fakestoreapi.com/products");

API.then((val) => val.json()).then((data) => {
  console.table(data);
});
