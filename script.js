// ========================================
// NAVBAR SHADOW ON SCROLL
// ========================================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.35)";

    }

    else {

        nav.style.boxShadow = "none";

    }

});



// ========================================
// SECTION REVEAL ANIMATION
// ========================================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);



document.querySelectorAll("section").forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});




// ========================================
// CARD HOVER GLOW
// ========================================

document.querySelectorAll(".card").forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow =
            "0 20px 60px rgba(0,212,255,.15)";

    });


    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow =
            "none";

    });

});




// ========================================
// ADVISORY CARD HOVER GLOW
// ========================================

document.querySelectorAll(".advisory-card").forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow =
            "0 20px 60px rgba(139,92,246,.18)";

    });


    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow =
            "none";

    });

});




// ========================================
// BUTTON GLOW EFFECT
// ========================================

document.querySelectorAll(".primary-btn").forEach((button)=>{

    button.addEventListener("mouseenter",()=>{

        button.style.boxShadow =
            "0 0 40px rgba(0,212,255,.4)";

    });


    button.addEventListener("mouseleave",()=>{

        button.style.boxShadow =
            "none";

    });

});




// ========================================
// PARALLAX PROFILE IMAGE
// ========================================

window.addEventListener("scroll",()=>{

    const image = document.querySelector(".hero-right img");

    if(image){

        const offset = window.scrollY * 0.05;

        image.style.transform =
            `translateY(${offset}px)`;

    }

});




// ========================================
// CONSOLE SIGNATURE 😎
// ========================================

console.log(

"%cBuilt by Shakira Shaikh | Revenue Growth Leader",

"color:#00d4ff;font-size:18px;font-weight:bold"

);
