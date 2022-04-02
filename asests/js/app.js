let openMenu=document.getElementById("toggle-menu");
let navbar=document.querySelector(".nav");
let header=document.querySelector(".header");
    openMenu.addEventListener("click",()=>{
      navbar.classList.toggle("nav-active");
    });
  let links = document.querySelectorAll("#link");
  
  for (link of links){
    link.addEventListener("click",()=>{
      navbar.classList.remove("nav-active");
    })
  }
    /* scrollReval */
    // v3
window.sr = new ScrollReveal();

sr.reveal('.card', { 
  interval: 12, 
  reset: true,
 /* distance: '100%', */
  origin: 'bottom',
});
