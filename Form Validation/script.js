var password = document.querySelector("#password");
var img = document.getElementById("img1");
var inner = document.querySelector(".inner");
var lockicon = document.querySelector(".fa-lock");
var state = false;
let text, validIcons, invalidIcons;
function toggle() {
  if (state) {
    password.setAttribute("type", "password");
    img.src = "https://i.postimg.cc/HWMtCN1m/eye-close.png";
    lockicon.classList.remove("color-change");
    inner.classList.remove("inner-hover");
    state = false;
  } else {
    password.setAttribute("type", "text");
    img.src = "https://i.postimg.cc/3JHFrZ3v/eye-open.png";
    lockicon.classList.add("color-change");
    inner.classList.add("inner-hover");
    state = true;
  }
}

function valid(item, validIcon, invalidIcon) {
  text = document.querySelector(`#${item}`);
  text.style.opacity = "1";
  validIcons = document.querySelector(`#${item} .${validIcon}`);
  validIcons.style.opacity = "1";
  invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
  invalidIcons.style.opacity = "0";
}

function invalid(item, validIcon, invalidIcon) {
  text = document.querySelector(`#${item}`);
  text.style.opacity = "0.5";
  validIcons = document.querySelector(`#${item} .${validIcon}`);
  validIcons.style.opacity = "0";
  invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
  invalidIcons.style.opacity = "1";
}

function textChange() {
  if (password.value.match(/[A-Z]/) != null)
    valid("capital", "fa-check", "fa-times");
  else invalid("capital", "fa-check", "fa-times");

  if (password.value.match(/[0-9]/) != null)
    valid("number", "fa-check", "fa-times");
  else invalid("number", "fa-check", "fa-times");

  if (password.value.match(/[@_]/) != null)
    valid("special-char", "fa-check", "fa-times");
  else invalid("special-char", "fa-check", "fa-times");

  if (password.value.length >= 8) valid("more-than-8", "fa-check", "fa-times");
  else invalid("more-than-8", "fa-check", "fa-times");
}
