/*==================================================
PRAKASH MARBLE AND GRANITE
SCRIPT.JS
PART - 1
==================================================*/

/*==================================================
PRELOADER
==================================================*/
window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 700);
    }

});


/*==================================================
STICKY NAVBAR
==================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/*==================================================
ACTIVE NAV LINK
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop-120;

const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==================================================
SCROLL TO TOP
==================================================*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==================================================
COUNTER ANIMATION
==================================================*/

const counters=document.querySelectorAll(".stat-card h2");

let counterStarted=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const trigger=stats.offsetTop-500;

if(window.scrollY>trigger && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

const text=counter.innerText;

const number=parseInt(text.replace(/\D/g,""));

const suffix=text.replace(/[0-9]/g,"");

let count=0;

const speed=Math.ceil(number/80);

const update=()=>{

count+=speed;

if(count>=number){

counter.innerText=number+suffix;

}else{

counter.innerText=count+suffix;

requestAnimationFrame(update);

}

};

update();

});

}

});

/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

const buttons = document.querySelectorAll(
".primary-btn,.secondary-btn,.enquiry-btn,.footer-btn"
);

buttons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform = "translateY(-6px)";

});

button.addEventListener("mouseleave", () => {

button.style.transform = "translateY(0px)";

});

});

/*==================================================
 

/*==================================================
REVEAL ON LOAD
==================================================*/

window.addEventListener("DOMContentLoaded",()=>{

document.querySelectorAll(

".hero-left,.section-title,.stat-card"

).forEach(el=>{

el.classList.add("active");

});

});

/*==================================================
CURRENT YEAR (OPTIONAL)
==================================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==================================================
END
==================================================*//*==================================================
PRAKASH MARBLE AND GRANITE
SCRIPT.JS
PART - 2
==================================================*/

/*==================================================
FAQ ACCORDION
==================================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

faq.querySelector(".faq-answer").style.maxHeight=null;

}

});

item.classList.toggle("active");

const answer=item.querySelector(".faq-answer");

if(item.classList.contains("active")){

answer.style.maxHeight=answer.scrollHeight+"px";

}else{

answer.style.maxHeight=null;

}

});

});

/*==================================================
SCROLL REVEAL
==================================================*/
const revealElements=document.querySelectorAll(

".stat-card,.about-image,.about-content,.trust-box,.premium-category-card,.collection-card,.why-card,.application-box,.process-card,.testimonial-card,.contact-info,.contact-form,.footer-column"

);

function revealOnScroll(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<trigger){

el.classList.add("active");

}else{

el.classList.remove("active");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();



/*==================================================
CARD TILT EFFECT
==================================================*/

const cards=document.querySelectorAll(

".premium-category-card,.collection-card,.why-card,.testimonial-card,.process-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/20);

const rotateY=((rect.width/2-x)/20);

card.style.transform=

`perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/*==================================================
NUMBER FLOAT EFFECT
==================================================*/

document.querySelectorAll(".step-number").forEach(step=>{

step.addEventListener("mouseenter",()=>{

step.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0)"

}

],{

duration:600

});

});

});

/*==================================================
BUTTON GLOW
==================================================*/

document.querySelectorAll(

".primary-btn,.secondary-btn"

).forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

btn.style.background=

`radial-gradient(circle at ${x}px ${y}px,

#deb06b,

#8a5b2d)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background="";

});

});

/*==================================================
MOUSE FOLLOW GLOW
==================================================*/

const glow=document.createElement("div");

glow.style.cssText=`

position:fixed;

width:260px;

height:260px;

border-radius:50%;

pointer-events:none;

background:radial-gradient(circle,

rgba(214,163,93,.18),

transparent 70%);

transform:translate(-50%,-50%);

z-index:0;

transition:.08s linear;

`;

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/*==================================================
SCROLL PROGRESS BAR
==================================================*/

const progress=document.createElement("div");

progress.style.cssText=`

position:fixed;

top:0;

left:0;

height:4px;

width:0%;

background:linear-gradient(90deg,#8a5b2d,#deb06b);

z-index:99999;

`;

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});

/*==================================================
SECTION TITLE ANIMATION
==================================================*/

document.querySelectorAll(".section-title h2").forEach(title=>{

title.addEventListener("mouseenter",()=>{

title.animate([

{

letterSpacing:"0px"

},

{

letterSpacing:"2px"

},

{

letterSpacing:"0px"

}

],{

duration:450

});

});

});

/*==================================================
FLOATING WHATSAPP EFFECT
==================================================*/

const whatsapp=document.querySelector(".floating-whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:900

});

},3000);

}

/*==================================================
END
==================================================*/ /*==================================================
PRAKASH MARBLE AND GRANITE
SCRIPT.JS
PART - 3 (FINAL)
==================================================*/

/*==================================================
WHATSAPP ENQUIRY FORM
==================================================*/

/*==================================================
WHATSAPP ENQUIRY FORM
==================================================*/

const enquiryForm = document.getElementById("whatsappForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const city = document.getElementById("city").value.trim();
        const customerType = document.getElementById("customerType").value;
        const product = document.getElementById("product").value;
        const area = document.getElementById("area").value.trim();
        const requirement = document.getElementById("requirement").value.trim();
        const message = document.getElementById("message").value.trim();

        if (
            name === "" ||
            phone === "" ||
            city === "" ||
            customerType === "" ||
            product === "" ||
            requirement === ""
        ) {

            alert("Please fill all required fields.");

            return;

        }

        if (!/^[6-9]\d{9}$/.test(phone)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;

        }

        /*=========================
        YOUR WHATSAPP NUMBER
        =========================*/

        const whatsappNumber = "919829073288";

        /*=========================*/

        const text =
`🏛 *New Premium Website Enquiry*

👤 *Full Name:* ${name}

📱 *Mobile:* ${phone}

🏙 *City:* ${city}

👷 *Customer Type:* ${customerType}

🪨 *Interested Product:* ${product}

📐 *Approx Area / Quantity:* ${area || "Not Mentioned"}

📝 *Project Requirement:*
${requirement}

💬 *Additional Message:*
${message || "Not Mentioned"}`;

        const url =
`https://wa.me/${919829073288}?text=${encodeURIComponent(text)}`;

     console.log({
    name,
    phone,
    city,
    customerType,
    product,
    area,
    requirement,
    message
});

        window.open(url, "_blank");

        enquiryForm.reset();

    });

}

/*==================================================
MOBILE MENU
==================================================*/

const menuBtn=document.querySelector(".menu-btn");
const mobileMenu=document.querySelector("nav ul");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("show");

menuBtn.classList.toggle("active");

});

document.querySelectorAll("nav ul li a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("show");

menuBtn.classList.remove("active");

});

});

}

/*==================================================
LAZY IMAGE LOADING
==================================================*/

const lazyImages=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.classList.add("loaded");

imageObserver.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});

/*==================================================
AUTO HIGHLIGHT CURRENT NAV
==================================================*/

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

document.querySelectorAll("section").forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

const id=section.getAttribute("id");

if(scroll>=top && scroll<top+height){

document.querySelectorAll("nav a").forEach(link=>{

link.classList.remove("active");

});

const active=document.querySelector(`nav a[href="#${id}"]`);

if(active){

active.classList.add("active");

}

}

});

});

/*==================================================
DISABLE RIGHT CLICK (OPTIONAL)
==================================================*/

// document.addEventListener("contextmenu",(e)=>{
// e.preventDefault();
// });

/*==================================================
DISABLE IMAGE DRAG
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/*==================================================
SMOOTH PAGE FADE
==================================================*/

window.addEventListener("beforeunload",()=>{

document.body.style.opacity="0";

});

window.addEventListener("pageshow",()=>{

document.body.style.opacity="1";

});

/*==================================================
CONSOLE MESSAGE
==================================================*/

console.log("%cPrakash Marble And Granite",

"color:#d6a35d;font-size:24px;font-weight:bold;");

console.log("%cDesigned & Developed by Pratap Singh Rathore",

"color:#ffffff;font-size:14px;");

/*==================================================
PERFORMANCE
==================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*==================================================
END OF SCRIPT
==================================================*/
/*=========================================
PREMIUM CATEGORY SLIDER
=========================================*/

document.querySelectorAll(".premium-category-card").forEach((card) => {

    const slides = card.querySelectorAll(".slide");

    const prevBtn = card.querySelector(".prev");

    const nextBtn = card.querySelector(".next");

    let current = 0;

    let autoSlide;

    function showSlide(index){

        slides.forEach((slide)=>{

            slide.classList.remove("active");

        });

        slides[index].classList.add("active");

    }

    function nextSlide(){

        current++;

        if(current >= slides.length){

            current = 0;

        }

        showSlide(current);

    }

    function prevSlide(){

        current--;

        if(current < 0){

            current = slides.length - 1;

        }

        showSlide(current);

    }

    function startSlider(){

        autoSlide = setInterval(()=>{

            nextSlide();

        },5000);

    }

    function resetSlider(){

        clearInterval(autoSlide);

        startSlider();

    }

    nextBtn.addEventListener("click",()=>{

        nextSlide();

        resetSlider();

    });

    prevBtn.addEventListener("click",()=>{

        prevSlide();

        resetSlider();

    });

    showSlide(current);

    startSlider();

});

/*=========================================
 HERO IMAGE SLIDER V2
 PART 1
=========================================*/

const heroSlider = document.querySelector(".hero-slider");
const heroSlides = [...document.querySelectorAll(".hero-slide")];
const heroPrev = document.querySelector(".hero-prev");
const heroNext = document.querySelector(".hero-next");
const heroDots = document.querySelector(".hero-dots");

if (heroSlider && heroSlides.length) {

    let currentHero = 0;
    let heroInterval = null;
    const heroDelay = 6000;

    /*-------------------------
    CREATE DOTS
    -------------------------*/

    heroDots.innerHTML = "";

    heroSlides.forEach((slide, index) => {

        const dot = document.createElement("span");

        dot.className = "hero-dot";

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {

            currentHero = index;

            showHero(currentHero);

            restartHero();

        });

        heroDots.appendChild(dot);

    });

    const dots = heroDots.querySelectorAll(".hero-dot");

    /*-------------------------
    SHOW HERO
    -------------------------*/

    function showHero(index) {

        heroSlides.forEach((slide) => {

            slide.classList.remove("active");

        });

        dots.forEach((dot) => {

            dot.classList.remove("active");

        });

        heroSlides[index].classList.add("active");

        dots[index].classList.add("active");

    }

    /*-------------------------
    NEXT
    -------------------------*/

    function nextHero() {

        currentHero++;

        if (currentHero >= heroSlides.length) {

            currentHero = 0;

        }

        showHero(currentHero);

    }

    /*-------------------------
    PREVIOUS
    -------------------------*/

    function prevHero() {

        currentHero--;

        if (currentHero < 0) {

            currentHero = heroSlides.length - 1;

        }

        showHero(currentHero);

    }
    /*-------------------------
    START AUTO SLIDER
    -------------------------*/

    function startHero() {

        stopHero();

        heroInterval = setInterval(() => {

            nextHero();

        }, heroDelay);

    }

    /*-------------------------
    STOP AUTO SLIDER
    -------------------------*/

    function stopHero() {

        if (heroInterval) {

            clearInterval(heroInterval);

            heroInterval = null;

        }

    }

    /*-------------------------
    RESTART
    -------------------------*/

    function restartHero() {

        stopHero();

        startHero();

    }

    /*-------------------------
    BUTTON EVENTS
    -------------------------*/

    if (heroNext) {

        heroNext.addEventListener("click", () => {

            nextHero();

            restartHero();

        });

    }

    if (heroPrev) {

        heroPrev.addEventListener("click", () => {

            prevHero();

            restartHero();

        });

    }

    /*-------------------------
    HOVER PAUSE
    -------------------------*/

    heroSlider.addEventListener("mouseenter", stopHero);

    heroSlider.addEventListener("mouseleave", startHero);

    /*-------------------------
    MOBILE SWIPE
    -------------------------*/

    let touchStartX = 0;
    let touchEndX = 0;

    heroSlider.addEventListener("touchstart", (e) => {

        touchStartX = e.changedTouches[0].screenX;

    }, { passive: true });

    heroSlider.addEventListener("touchend", (e) => {

        touchEndX = e.changedTouches[0].screenX;

        if (touchEndX < touchStartX - 50) {

            nextHero();

            restartHero();

        }

        if (touchEndX > touchStartX + 50) {

            prevHero();

            restartHero();

        }

    }, { passive: true });

    /*-------------------------
    TAB VISIBILITY
    -------------------------*/

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            stopHero();

        } else {

            startHero();

        }

    });

    /*-------------------------
    INIT
    -------------------------*/

    showHero(currentHero);

    startHero();

}
