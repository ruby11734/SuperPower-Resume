"use strict";
let tabs = document.querySelectorAll(".nav__options");
let pages = document.querySelectorAll(".subpage");
// to do: set all subpages same class name
// let pages = document.querySelectorAll();

const icon = document.querySelector(".nav__icon");
const menu = document.querySelector(".site__nav__menu");

// let currentTab = document.querySelector(".home__page");
// currentTab.classList.add("active");

icon.addEventListener("click", showMobileSideBar);

function showMobileSideBar() {
  console.log("======");

  if (menu.className === "site__nav__menu") {
    menu.classList.add("mobile__nav");
  } else {
    menu.classList.remove("mobile__nav");
  }
}

let currentTab;
let currentPage;

// to be update
for (let i = 0; i < tabs.length; i++) {
  currentTab = tabs[0];
  currentTab.classList.add("active");
  currentPage = pages[0];

  if (i !== 0) {
    pages[i].classList.add("hidden");
  }

  tabs[i].addEventListener("click", () => {
    currentTab.classList.remove("active");
    currentPage.classList.add("hidden");
    tabs[i].classList.add("active");
    pages[i].classList.remove("hidden");
    currentTab = tabs[i];
    currentPage = pages[i];
  });
}
