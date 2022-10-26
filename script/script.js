"use strict";

const submitBtn = document.querySelector(".submitBtn");
const inputText = document.querySelectorAll("input");
const infoSaved = document.querySelector(".card-saved");
const inputInfo = document.querySelector(".input-card-details");
const cardNameError = document.createElement("span");
const cardNumError = document.createElement("span");
const cardMonthError = document.createElement("span");
const cardYearError = document.createElement("span");
const cardCVVError = document.createElement("span");
const cardNumber = document.querySelector(".card-front-card-number");
const cardName = document.querySelector(".card-front-cardholder-name");
const cardMonth = document.querySelector(".card-front-card-month");
const cardYear = document.querySelector(".card-front-card-year");
const cardCVV = document.querySelector(".card-back-details-cvv");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  inputCheck();
  if (
    inputText[0].value &&
    inputText[1].value &&
    inputText[2].value &&
    inputText[3].value &&
    inputText[4].value
  ) {
    infoSaved.classList.remove("hidden");
    inputInfo.classList.add("hidden");
  }
});

const inputCheck = function () {
  inputText.forEach((input, index) => {
    if (!input.value && input.name === "cardholder-name") {
      cardNameError.textContent = "can't be blank";
      cardNameError.style.left = "0px";
      cardNameError.classList.add("error");
      input.after(cardNameError);
      input.style.borderColor = "red";
    } else if (input.value) {
      cardNameError.remove();
      input.style.borderColor = "inherit";
    }
    if (!input.value && input.name === "card-number") {
      cardNumError.textContent = "wrong format, numbers only";
      cardNumError.style.left = "0px";
      cardNumError.classList.add("error");
      input.after(cardNumError);
      input.style.borderColor = "red";
    } else if (input.value) {
      cardNumError.remove();
      input.style.borderColor = "inherit";
    }

    if (!input.value && input.name === "card-month") {
      cardMonthError.textContent = "can't be blank";
      cardMonthError.classList.add("error");
      input.after(cardMonthError);
      input.style.borderColor = "red";
    } else if (input.value) {
      cardMonthError.remove();
      input.style.borderColor = "inherit";
    }

    if (!input.value && input.name === "card-year") {
      cardYearError.textContent = "can't be blank";
      cardYearError.classList.add("error");
      input.after(cardYearError);
      input.style.borderColor = "red";
    } else if (input.value) {
      cardYearError.remove();
      input.style.borderColor = "inherit";
    }

    if (!input.value && input.name === "card-cvv") {
      cardCVVError.textContent = "can't be blank";
      cardCVVError.classList.add("error");
      input.after(cardCVVError);
      input.style.borderColor = "red";
    } else if (input.value) {
      cardCVVError.remove();
      input.style.borderColor = "inherit";
    }
  });
};

inputText.forEach((input) => {
  input.addEventListener("input", function (e) {
    if (input.name === "cardholder-name") {
      cardName.textContent = e.target.value;
    }
    if (input.name === "card-number") {
      cardNumber.textContent = e.target.value;
    }
    if (input.name === "card-month") {
      cardMonth.textContent = e.target.value;
    }
    if (input.name === "card-year") {
      cardYear.textContent = e.target.value;
    }
    if (input.name === "card-cvv") {
      cardCVV.textContent = e.target.value;
    }
  });
});
