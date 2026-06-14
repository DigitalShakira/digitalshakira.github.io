// Navbar Scroll Effect

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.3)";

    } else {

        nav.style.boxShadow = "none";

    }

});



// Reveal Sections on Scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

threshold:.15

}

);



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});




// Card Hover Glow

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.borderColor="#00d4ff";

});

card.addEventListener("mouseleave",()=>{

card.style.borderColor="rgba(255,255,255,.05)";

});

});




// Button Glow Animation

const buttons = document.querySelectorAll(".primary-btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 40px rgba(0,212,255,.5)";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="none";

});

});




// Console Signature 🙂

console.log(

"%cBuilt by Shakira Shaikh | Revenue Growth Leader",

"color:#00d4ff;font-size:18px;font-weight:bold"

);
