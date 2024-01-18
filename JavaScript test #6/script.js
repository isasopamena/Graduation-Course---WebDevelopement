$(document).ready(function(){
//global vars

var klok = gsap.timeline({yoyo: false}); 

//gspa code
    console.log("ready");
    
    klok.from(".rij1", 2, {x: 1500, duration: 1, ease: "none"})
    klok.from(".rij2", 2, {x: -1500, duration: 1, ease: "none", delay: -2})
    klok.from(".rij3", 2, {x: 1500, duration: 1, ease: "none", delay: -2})
    klok.from(".rij4", 2, {x: -1500, duration: 1, ease: "none", delay: -2})

    klok.from(".intro-tekst", 2.5, {y: 1500, duration: 1, ease: "none", delay: -2})
    klok.to(".", 3, {scale: 1.2, duration: 0.2, ease: "power1.in", delay: -3.5})

})
