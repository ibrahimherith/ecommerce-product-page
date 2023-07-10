//On clicking the hamburger menu
const btn = document.getElementById("menu-btn");

const nav = document.getElementById("menu");
const icon_open = document.getElementById("icon-open");
const icon_close = document.getElementById("icon-close");

btn.addEventListener("click", () => {
    //opens and closes icon-bars
    icon_open.classList.toggle("hidden");
    icon_open.classList.toggle("flex");

    icon_close.classList.toggle("flex");
    icon_close.classList.toggle("hidden");

    //opens and closes menu items
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})



//On Clicking the Cart and Avatar
const avatar_btn = document.getElementById("icon-avatar");
const cart_btn = document.getElementById("icon-cart");
const show_cart = document.getElementById("cart"); 

avatar_btn.addEventListener("click", () => {
    //opening and closing the cart
    show_cart.classList.toggle("flex");
    show_cart.classList.toggle("hidden");
})

cart_btn.addEventListener("click", () => {
    //opening and closing the cart
    show_cart.classList.toggle("flex");
    show_cart.classList.toggle("hidden");
})




//Product actions

