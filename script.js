function toggleClass() {
    let menu = document.querySelector(".main");
    menu.classList.toggle("toggleCls");
}

let hamburger = document.querySelector(".icon");

hamburger.addEventListener ("click", toggleClass);