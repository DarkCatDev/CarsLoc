
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}
gsap.from('.headling', {opacity:0, duration: 3, delay: .5, y: 30, ease:'expo.out'});
gsap.from('.slogan', {opacity:0, duration: 3, delay: 1, y: 25, ease:'expo.out'});
gsap.from('.arrow', {opacity:0, duration: 3, delay: 1, y: 25, ease:'expo.out'});
gsap.from('nav', {opacity:0, duration: 3, delay: 1, y: 25, ease:'expo.out'});

const hamburger = document.querySelector(".hamburger");
const titles = document.querySelector(".titles");
const headling = document.querySelector(".headling");
const html = document.querySelector("html");
const slogan = document.querySelector(".slogan");
const home = document.querySelector(".home");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    titles.classList.toggle("active")
    headling.classList.toggle("active")
    html.classList.toggle("active")
    slogan.classList.toggle("active")
    home.classList.toggle("active")

})
const sr = ScrollReveal({
    duration: 2500,
    reset: true
})

sr.reveal('.data',{origin: 'left', distance: '90px'});
sr.reveal('.img_section',{origin: 'left', distance: '90px', delay:100});

