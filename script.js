/*==================================================
PRAKASH MARBLE AND GRANITE
PREMIUM SCRIPT
PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

/*=====================================
NAVBAR SCROLL
=====================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});


/*=====================================
ACTIVE MENU
=====================================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav ul li a");

function activeMenu(){

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.offsetHeight;

if(window.scrollY>=top &&
window.scrollY<top+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

}

window.addEventListener("scroll",activeMenu);


/*=====================================
SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*=====================================
SCROLL REVEAL
=====================================*/

const revealItems=document.querySelectorAll(

".stat-card,.about-image,.about-content,.feature-box,.category-card,.collection-card,.why-card,.process-card,.highlight-box,.cta-content,.faq-item,.contact-card,.contact-form,.footer-cta"

);

const reveal=()=>{

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-120){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

};

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(70px)";

item.style.transition=".8s ease";

});

reveal();

window.addEventListener("scroll",reveal);


/*=====================================
COUNTER
=====================================*/

const counters=document.querySelectorAll(".stat-card h2");

let started=false;

function runCounter(){

counters.forEach(counter=>{

const original=counter.innerText;

const target=parseInt(original.replace(/\D/g,""));

let count=0;

const step=Math.max(1,Math.ceil(target/120));

function update(){

count+=step;

if(count<target){

if(original.includes("%")){

counter.innerText=count+"%";

}else{

counter.innerText=count+"+";

}

requestAnimationFrame(update);

}else{

counter.innerText=original;

}

}

update();

});

}

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

if(window.scrollY>stats.offsetTop-350 && !started){

runCounter();

started=true;

}

});
/*==================================================
PRAKASH MARBLE AND GRANITE
PREMIUM SCRIPT
PART 2
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*=====================================
FAQ ACCORDION
=====================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");
const answer=item.querySelector(".faq-answer");
const icon=question.querySelector("span");

question.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.querySelector(".faq-answer").style.display="none";
other.querySelector(".faq-question span").textContent="+";

}

});

if(answer.style.display==="block"){

answer.style.display="none";
icon.textContent="+";

}else{

answer.style.display="block";
icon.textContent="−";

}

});

});


/*=====================================
CONTACT FORM TO WHATSAPP
=====================================*/

const form=document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector('input[type="text"]').value;
const phone=form.querySelector('input[type="tel"]').value;
const product=form.querySelector("select").value;
const message=form.querySelector("textarea").value;

const text=

`Hello Prakash Marble And Granite,

Name : ${name}

Phone : ${phone}

Requirement : ${product}

Message :

${message}`;

window.open(

"https://wa.me/91XXXXXXXXXX?text="+

encodeURIComponent(text),

"_blank"

);

form.reset();

});

}


/*=====================================
SCROLL TO TOP
=====================================*/

const topBtn=document.querySelector(".scroll-top");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*=====================================
FLOATING BUTTON EFFECT
=====================================*/

document.querySelectorAll(

".call-float,.whatsapp-float"

).forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


/*=====================================
BUTTON HOVER
=====================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn,.call-btn"

).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".35s";

});

});


/*=====================================
HERO IMAGE PARALLAX
=====================================*/

const hero=document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

if(hero){

hero.style.transform=

`translateY(${window.pageYOffset*0.08}px)`;

}

});


/*=====================================
IMAGE FADE
=====================================*/

document.querySelectorAll(

".category-card img,.collection-card img"

).forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transition=".6s";

});

});


/*=====================================
PRELOADER READY
=====================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*=====================================
END
=====================================*/

});
});
