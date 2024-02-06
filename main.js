

gsap.from(".box", {

    x: 1920,
    rotation: 360,
    backgroundColor: 'blue',
    scale: 2,
    ease: "elastic.out(1,0.3)",
    duration: 10,
    stagger: 0.5,
});

document.querySelectorAll(".box").forEach(function (box) {
    box.addEventListener("click", function () {
        gsap.to(".box", {
            duration: 2,
            opacity: 0,
            y: -100,
            stagger: 0.1,
            ease: "circ.in"
        });
    });
});