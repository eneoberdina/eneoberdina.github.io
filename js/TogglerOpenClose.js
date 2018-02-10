'use strict';

function toggleOpen() {
  document.getElementById("expand").classList.toggle("opened");
  document.getElementById("expand").classList.toggle("closed");

  document.getElementById("hidden-ul").classList.toggle("opened");
  document.getElementById("ehidden-ul").classList.toggle("closed");
}

function toggleOpenSadebar() {
  document.getElementById("hidd-block1").classList.toggle("opened");
  document.getElementById("hidd-block1").classList.toggle("closed");

  document.getElementById("active").classList.toggle("opened");
  document.getElementById("active").classList.toggle("closed");
}