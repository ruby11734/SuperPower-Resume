"use strict";
let tabs = document.querySelectorAll(".nav__options");
// to do: set all subpages same class name
// let pages = document.querySelectorAll();

const icon = document.querySelector(".nav__icon");
const menu = document.querySelector(".site__nav__menu");

// let currentTab = document.querySelector(".home__page");
// currentTab.classList.add("active");
let currentTab;
for (let i = 0; i < tabs.length; i++) {
  currentTab = tabs[0];
  currentTab.classList.add("active");

  tabs[i].addEventListener("click", () => {
    currentTab.classList.remove("active");
    tabs[i].classList.add("active");
    currentTab = tabs[i];
  });
}

icon.addEventListener("click", showMobileSideBar);

function showMobileSideBar() {
  console.log("======");

  if (menu.className === "site__nav__menu") {
    menu.className = " mobile__nav";
  } else {
    menu.className = "site__nav__menu";
  }
}
