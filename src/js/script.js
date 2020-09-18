"use strict";

let tabs;
let pages;
let pageNavigationMap;
let currentTabIndex = 0;

const icon = document.querySelector(".nav__icon");
const menu = document.querySelector(".site__nav__menu");

function init() {
  tabs = document.querySelectorAll(".nav__options");
  pages = document.querySelectorAll(".subpage");

  const [homePage, resumePage, servicesPage, blogPage, contactPage] = [
    pages[0],
    pages[1],
    pages[2],
    pages[3],
    pages[4],
  ];

  addHomeHashOnFirstLoad();

  homePage.classList.add("current__page");
  tabs[0].classList.add("active");

  pageNavigationMap = {
    "#home": homePage,
    "#resume": resumePage,
    "#services": servicesPage,
    "#blog": blogPage,
    "#contact": contactPage,
  };

  addListenerForNavTabs();
  addListenerForMobileNavBar();
}

function addHomeHashOnFirstLoad() {
  if (location.hash === "" || location.hash !== "#home") {
    location.hash = "#home";
  }
}

function addListenerForNavTabs() {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      highlightTargetTab(index);
    });
  });
}

function highlightTargetTab(index) {
  hideAllTabsHighlight();

  tabs[index].classList.add("active");
  currentTabIndex = index;
}

function hideAllTabsHighlight() {
  tabs[currentTabIndex].classList.remove("active");
}

function hideAllPages() {
  pages.forEach((page) => {
    if (page.classList.contains("current__page")) {
      page.classList.remove("current__page");
    }
  });
}

function showTargetPage(pageNode) {
  hideAllPages();
  pageNode.classList.add("current__page");
}

function navigatePage() {
  const targetPage = pageNavigationMap[location.hash];
  showTargetPage(targetPage);
}

window.onload = function () {
  init();

  window.onhashchange = navigatePage;
};

function addListenerForMobileNavBar() {
  icon.addEventListener("click", showMobileSideBar);
}

function showMobileSideBar() {
  if (menu.className === "site__nav__menu") {
    menu.classList.add("mobile__nav");
  } else {
    menu.classList.remove("mobile__nav");
  }
}
