"use strict";

//REDUCE HEADER HEIGHT ON SCROLL
window.onscroll = function () {
  headerHeight();
};

function headerHeight() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector("header").style.minHeight = "40px";
    document.querySelector(".navbar-brand img").style.height = "60px";
  } else {
    document.querySelector("header").style.minHeight = "60px";
    document.querySelector(".navbar-brand img").style.height = "80px";
  }
}
