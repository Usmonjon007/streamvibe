"use strict";

// indicators
const indicators = document.querySelectorAll(".indicator-btn");
const exploreItems = document.querySelectorAll(".explore-item__link");
const exploreItemsLength = exploreItems.length;
let totalItems = exploreItemsLength / 5;
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let exploreItemIndex = 0;
let indicatorIndex = 0;

function updateCarousel() {
  if (indicatorIndex >= 3) {
    exploreItems[exploreItemsLength - 1].focus();
  } else {
    exploreItems[indicatorIndex * 5].focus();
  }
  indicators.forEach((indicator, index) => {
    indicator.parentElement.classList.toggle("active", index == indicatorIndex);
  });
}

function moveToNext() {
  indicatorIndex = (indicatorIndex + 1) % totalItems;
  console.log(indicatorIndex);
  updateCarousel();
}

function moveToPrev() {
  indicatorIndex = (indicatorIndex - 1 + totalItems) % totalItems;
  exploreItems[indicatorIndex].focus();
  updateCarousel();
  console.log(indicatorIndex);
}

function moveToIndex(index) {
  indicatorIndex = index;
  updateCarousel();
}

nextBtn.addEventListener("click", moveToNext);
prevBtn.addEventListener("click", moveToPrev);

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    moveToIndex(index);
    if (index != 3) {
      exploreItems[index * 5].focus();
    } else {
      exploreItems[exploreItemsLength - 1].focus();
    }
  });
});

// navbar scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "#141414";
    navbar.style.boxShadow = "0px 5px 5px 0 #000000AA";
  } else if (window.scrollY < 100) {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});
