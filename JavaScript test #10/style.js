 // Text wrapper
 var textWrapper = document.querySelector(".title");
 textWrapper.innerHTML = textWrapper.textContent.replace(
   /\S/g,
   "<span class='letter'>$&</span>"
 );

  // Timeline
 anime.timeline().add({targets: ".title .letter", translateY: [-200, 0], easing: "easeOutExpo", duration: 1400, delay: (el, i) => 6500 + 30 * i,});

 TweenMax.staggerFrom(".container > .block",2,
   {y: "110%", ease: Expo.easeInOut, delay: 1,},0.4);

 TweenMax.to(".overlay", 2.5, {y: "100%", ease: Expo.easeInOut, delay: 5.2,});

 TweenMax.to(".container", 2.5, {scale: "2", y: "90%", ease: Expo.easeInOut, delay: 5.5,});

 TweenMax.staggerFrom(".navbar > div",1.6,
   {opacity: 0, y: -100, ease: Expo.easeInOut, delay: 6,},0.08);

TweenMax.staggerFrom(".site-menu > div",1,
   {opacity: 0,y: -100,ease: Power2.easeOut,delay: 6.5,},0.1);