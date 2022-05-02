const $ = document;
const container = $.querySelector(".container");
const password = $.getElementById("password");
const passChar = 10;

password.addEventListener("input", (e) => {
  let passNum = password.value.length
  if (password.value === "") {
    container.style.filter = "blur(" + passChar + "px)";
  } else {
    container.style.filter = "blur(" + (passChar - passNum) + "px)"
  }
})