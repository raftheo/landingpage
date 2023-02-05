  //sticky
  window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)

})
//hamburger menu toggle
const navbarToggle = document.querySelector('.navbar_toggle');
const menu = document.querySelector('.menu');

navbarToggle.addEventListener('click', ()=>{
    navbarToggle.classList.toggle('active');
    menu.classList.toggle('active');
})

//  Close mobile Menu when clicking on a menu item
const navLogo = document.querySelector('.logo');
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// highlight
let links = document.querySelectorAll(".links");
let bodyId= document.querySelector("body").id;

for(let link of links){
  if(link.dataset.active == bodyId){
    link.classList.add("active");

  }
}
