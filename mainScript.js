function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.navbar_burger');
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  })
}
toggleMenu();

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-84px";
  }
  prevScrollpos = currentScrollPos;
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function copy(copyId){
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  let copyText = document.getElementById(copyId).innerHTML;
  inputElement.value = copyText;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);
  
  document.getElementById("alert").style.display = "block";
  setTimeout(function(){
      document.getElementById("alert").style.display = "none";
  }, 1000);
}
