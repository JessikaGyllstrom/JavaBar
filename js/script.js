let navbar = document.querySelector('.navbar');




function myFunction() {
    let cartItem = document.querySelector('.cart-items-container');

    cartItem.classList.toggle('active');
}

/*
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
}*/
/*
let cartItem = document.querySelector('.cart-items-container');

    document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');

}*/
window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }