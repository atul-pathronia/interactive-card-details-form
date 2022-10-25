"use strict";

const submitBtn = document.querySelectorAll(".submitBtn");
const inputText = document.querySelectorAll("input");
const infoSaved = document.querySelector(".card-saved");
const inputInfo = document.querySelector(".input-card-details");
const cardNameError = document.createElement("span");
const cardNumError = document.createElement("span");
const cardMonthError = document.createElement("span");
const cardYearError = document.createElement("span");
const cardCVVError = document.createElement("span");

submitBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    inputText.forEach((input) => {
      if (!input.value && input.name === "cardholder-name") {
        cardNameError.textContent = "can't be blank";
        cardNameError.style.left = "0px";
        cardNameError.classList.add("error");
        input.after(cardNameError);
        input.style.borderColor = "red";
      }
      if (!input.value && input.name === "card-number") {
        cardNumError.textContent = "wrong format, numbers only";
        cardNumError.style.left = "0px";
        cardNumError.classList.add("error");
        input.after(cardNumError);
        input.style.borderColor = "red";
      }
      if (!input.value && input.name === "card-month") {
        cardMonthError.textContent = "can't be blank";
        cardMonthError.classList.add("error");
        input.after(cardMonthError);
        input.style.borderColor = "red";
      }
      if (!input.value && input.name === "card-year") {
        cardYearError.textContent = "can't be blank";
        cardYearError.classList.add("error");
        input.after(cardYearError);
        input.style.borderColor = "red";
      }
      if (!input.value && input.name === "card-cvv") {
        cardCVVError.textContent = "can't be blank";
        cardCVVError.classList.add("error");
        input.after(cardCVVError);
        input.style.borderColor = "red";
      } else {
        infoSaved.classList.toggle("hidden");
        inputInfo.classList.toggle("hidden");
      }
    });
  });
});
