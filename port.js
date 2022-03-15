const navbar = document.querySelectorAll('.home-nav');

// โชว์การขยับเมื่อเลื่อน
const highlightmenu = () =>{
    const  all = document.querySelector('.highlight');
    const  about = document.querySelector('#abouthero');
    const  skill = document.querySelector('#skillfeatures');
    const  project = document.querySelector('#project');
    const  contect = document.querySelector('#contect');
    let scroll = window.scrollY

    //ใส่ไฮไลท์ในเมนู
    if(window.innerWidth > 0 && scroll < 600){
        about.classList.add('highlight');
        skill.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 600 && scroll < 1000){
        about.classList.remove('highlight');
        skill.classList.add('highlight');
        project.classList.remove('highlight');
        contect.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 1200 && scroll < 1600){
        about.classList.remove('highlight');
        skill.classList.remove('highlight');
        project.classList.add('highlight');
        contect.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 1600 && scroll < 2000){
        about.classList.remove('highlight');
        skill.classList.remove('highlight');
        project.classList.remove('highlight');
        contect.classList.add('highlight');
        return;
    }
}
window.addEventListener('scroll', highlightmenu);
window.addEventListener('click', highlightmenu);

// slideassign
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}