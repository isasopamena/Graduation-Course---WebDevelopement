const words = ["Fourth Wing", "MindF*ck Series", "The Graham Effect", "Seven Husbands of Evelin Hugo", "Love and Other Words", "One True Loves"]

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})

let boxTl = gsap.timeline()

boxTl.to('.box', {duration: 1, width: "21vw", delay: 0.5, ease: "power4.inOut"})
    .from('.fivestar', {duration: 1, y: "7vw", ease: "power3.out", onComplete: () => masterTL.play()})
    .to('.box', {duration: 1, height: "7vw", ease: "elastic.out(1,0.3)"})
    .to('.box', {duration: 2, autoAlpha: 0.7, yoyo: true, repeat: -1, ease: "rough{(template:none.out, strength: 1, points:20, taper: 'none', randomize: true, clamp:false})"})

let masterTL = gsap.timeline({repeat: -1}) .pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1, text: word})
    masterTL.add(tl)
})