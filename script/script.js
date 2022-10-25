"use strict";

const inputText = document.querySelectorAll("input");
const submitBtn = document.querySelector(".btnSubmit");
const thankYouContainer = document.querySelector(".bottom-thank-you-container");
const inputContainer = document.querySelector(".bottom-input-container");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  inputText.forEach((input) => {
    if (!input.value) {
      submitBtn.disabled = true;
      const error = document.createElement("span");
      error.classList.add("error");
      error.textContent = "cannot be blank";
      input.style.borderColor = "red";
      input.after(error);
      if (input.name === "card-number") {
        error.textContent = "wrong format, numbers only";
      }
    } else {
      submitBtn.disabled = false;
      thankYouContainer.classList.toggle("hidden");
      inputContainer.classList.toggle("hidden");
    }
  });
});

inputText.forEach((input) => {
  input.addEventListener("change", function (e) {
    if (this.name === "card-name") {
      document.querySelector(".card-name").textContent = e.target.value;
    }
    if (this.name === "card-number") {
      document.querySelector(".card-number").textContent = e.target.value;
    }
    if (this.name === "card-year") {
      document.querySelector(".card-year").textContent = e.target.value;
    }
    if (this.name === "card-month") {
      document.querySelector(".card-month").textContent = e.target.value;
    }
    if (this.name === "card-cvv") {
      document.querySelector(".card-cvv").textContent = e.target.value;
    }
  });
});
