const modalBox = document.getElementById("myModal")

const heroBtn = document.getElementById("myBtn")

const modalBtn = document.getElementById("close")

const contactBtn = document.getElementById("cBtn")

const servicesBtn = document.getElementById("sBtn")

const aboutBtn = document.getElementById("aBtn")


function displayModal() {
    modalBox.style.display = "flex";
} 

function hideModel() {
    modalBox.style.display = "none"
}


heroBtn.addEventListener('click', displayModal);

contactBtn.addEventListener('click', displayModal);

servicesBtn.addEventListener('click', displayModal);

aboutBtn.addEventListener('click', displayModal);



//-- Model Box Close --//

modalBtn.addEventListener('click', hideModel);

//-- Image Slider --//

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

if(index<0){
    index = slides.length-1;
}
  
if(index>slides.length-1){
    index = 0;
}
  
for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
}
  
slides[index].style.display= "block";
dot[index].classList.add("active");
  
index++;
  
setTimeout(changeSlide,3000);
  
}

changeSlide();