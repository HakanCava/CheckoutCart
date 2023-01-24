const bag = {
  price: 25.99,
};
const shoes = {
  price: 45.99,
};
const clock = {
  price: 74.99,
};
let bagP = JSON.parse(localStorage.getItem("bagP")) || 1;
let shoesP = JSON.parse(localStorage.getItem("shoesP")) || 1;
let clockP = JSON.parse(localStorage.getItem("clockP")) || 1;

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const remove = document.querySelector(".remove");
const container = document.querySelector(".container");
const bagPrice = document.getElementById("bag-price");
const shoesPrice = document.getElementById("shoes-price");
const clockPrice = document.getElementById("clock-price");
const box = document.querySelectorAll(".box");
const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const shipping = document.getElementById("shipping");
const sum = document.getElementById("sum");


window.addEventListener("load", () => {
  localStorage.setItem("bagP", JSON.stringify(bagP));
  localStorage.setItem("shoesP", JSON.stringify(shoesP));
  localStorage.setItem("clockP", JSON.stringify(clockP));


document.querySelector(".count-bag").nextElementSibling.innerText=bagP
document.querySelector(".count-shoes").nextElementSibling.innerText=shoesP
document.querySelector(".count-clock").nextElementSibling.innerText=clockP
 
  totalFunc();
});


container.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("remove")) {
    removeFunc(e);
  } else if (e.target.classList.contains("minus")) {
    minusFunc(e);
  } else if (e.target.classList.contains("plus")) {
    plusFunc(e);
  }

  totalFunc();

  localStorage.setItem("bagP", JSON.stringify(bagP));
  localStorage.setItem("shoesP", JSON.stringify(shoesP));
  localStorage.setItem("clockP", JSON.stringify(clockP));

});

function removeFunc(e) {
  if (e.target.classList.contains("removeBag")) {
    e.target.parentElement.parentElement.remove();
    bagP = 0;
    shipping.innerText -= 5;
  } else if (e.target.classList.contains("removeShoes")) {
    e.target.parentElement.parentElement.remove();
    shoesP= 0;
    shipping.innerText -= 5;
  } else if (e.target.classList.contains("removeClock")) {
    e.target.parentElement.parentElement.remove();
    clockP = 0;
    shipping.innerText -= 5;
  }
}

function minusFunc(e) {
  if (e.target.classList.contains("count-bag")) {
    if (bagP > 1) {
      bagP--;
      e.target.nextElementSibling.innerText = `${bagP}`;
    }else{
      if(confirm("Vintage Backbag will be removed")){
        bagP = 0;
        e.target.closest(".box").remove()
      }
    }
  } else if (e.target.classList.contains("count-shoes")) {
    if (shoesP > 1) {
      shoesP--;
      e.target.nextElementSibling.innerText = `${shoesP}`;
    }else{
      if(confirm("Levi Shoes will be removed")){
        shoesP=0
        e.target.closest(".box").remove()
      }
    }
  } else if (e.target.classList.contains("count-clock")) {
    if (clockP > 1) {
      clockP--;
      e.target.nextElementSibling.innerText = `${clockP}`;
    }else{
      if(confirm("Antique Clock will be removed")){
        clockP=0
        e.target.closest(".box").remove();
      }
    }
  }
 
}

function plusFunc(e) {
  if (e.target.classList.contains("count-bag")) {
    bagP++;
    console.log(bagP);
    console.log(typeof bagP);
    e.target.previousSibling.innerText = `${bagP}`;
  } else if (e.target.classList.contains("count-shoes")) {
    shoesP++;
    e.target.previousSibling.innerText = `${shoesP}`;
  } else if (e.target.classList.contains("count-clock")) {
    clockP++;
    e.target.previousSibling.innerText = `${clockP}`;
  }
}

function totalFunc() {
 

  bagPrice.innerText = `${(bagP * bag.price).toFixed(2)}`;

  shoesPrice.innerText = `${(shoesP * shoes.price).toFixed(2)}`;

  clockPrice.innerText = `${(clockP * clock.price).toFixed(2)}`;

  subtotal.innerText = `${(
    +bagPrice.innerText +
    +shoesPrice.innerText +
    +clockPrice.innerText
  ).toFixed(2)}`;
  

  shipping.innerText =
    subtotal.innerText > 0 && subtotal.innerText < 300 ? 15 : 0;
  tax.innerText = ` ${(+subtotal.innerText * 0.18).toFixed(2)}`;

  sum.innerText = ` ${(
    +subtotal.innerText +
    +tax.innerText +
    +shipping.innerText
  ).toFixed(2)}`;

}

