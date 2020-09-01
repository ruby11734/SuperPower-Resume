"use strict";

const icon = document.querySelector(".nav__icon");

const menu = document.querySelector(".site__nav__menu");

icon.addEventListener("click", showMobileSideBar);

function showMobileSideBar() {
  console.log("======");

  if (menu.className === "site__nav__menu") {
    menu.className = " mobile__nav";
  } else {
    menu.className = "site__nav__menu";
  }
}
