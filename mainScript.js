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
    document.querySelector(".navbar").style.top = "-88px";
  }
  prevScrollpos = currentScrollPos;
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
  document.getElementById("alert2").style.display = "block";
  setTimeout(function(){
      document.getElementById("alert").style.display = "none";
      document.getElementById("alert2").style.display = "none";
  }, 1000);
}

var imageUrls   = ['url("./douches-photo/sdo(3).jpg")','url("./douches-photo/sdo(2).jpg")','url("./douches-photo/sdo(5).jpg")', 
                   'url("./douches-photo/sdo(4).jpg")', 'url("./douches-photo/sdo(8).jpg")', 'url("./douches-photo/sdo(7).jpg")', 
                   'url("./douches-photo/sdo(10).jpg")', 'url("./douches-photo/sdo(12).jpg")','url("./douches-photo/sdo(24).jpg")',
                   'url("./douches-photo/sdo(23).jpg")', 'url("./douches-photo/sdo(26).jpg")', 'url("./douches-photo/sdo(25).jpg")']

var imageNumber = imageUrls.length

function imagePop(id){

    document.getElementById('imagePopId').style.display = 'block'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'

    var imageName = document.getElementById(id + '-image').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)
    
    document.getElementsByClassName('imageContain')[0].style.animation = 'he 800ms forwards'

    document.getElementsByClassName('imageContain')[0].style.backgroundImage = imageUrls[imageIndex]
}
function imageChange(id){

    var imageName = document.getElementById(id).style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex >= imageNumber - 1)
    imageIndex = 0
    else
    imageIndex++

    document.getElementById(id).style.backgroundImage = imageUrls[imageIndex]
}
function imageMoveLeft(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex <= 0)
    imageIndex = imageNumber - 1
    else
    imageIndex--

    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex];
}
function imageMoveRight(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex >= imageNumber - 1)
    imageIndex = 0
    else
    imageIndex++

    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex]
}
function imagePopNone(){

    document.getElementsByClassName('imagePop')[0].style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'

}