function loadSVG() {
  fetch("city.svg")
    .then((res) => res.text())
    .then((svg) => {
      document.getElementById("big_city").innerHTML = svg;
      document
        .querySelector("#big_city svg")
        .setAttribute("preserveAspectRatio", "xMidYMid slice");
      setAnimationScroll();
    });
}

loadSVG();

function setAnimationScroll() {
  gsap.registerPlugin(ScrollTrigger);
  let runAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#big_city",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
    },
  });

  runAnimation
    .add([
      gsap.to("#big_city svg", 2, {
        scale: 1.5,
      }),
      gsap.to("#full_city", 2, {
        opacity: 0,
      }),
    ])
    .add([
      gsap.to("#building_top", 2, {
        y: -200,
        opacity: 0,
      }),
      gsap.to("#wall_side", 2, {
        x: -200,
        opacity: 0,
      }),
      gsap.to("#wall_front", 2, {
        x: 200,
        y: 200,
        opacity: 0,
      }),
    ])
    .add([
      gsap.to("#interior_wall_side", 2, {
        x: -200,
        opacity: 0,
      }),
      gsap.to("#interior_wall_top", 2, {
        y: -200,
        opacity: 0,
      }),
      gsap.to("#interior_wall_side_2", 2, {
        opacity: 0,
      }),
      gsap.to("#interior_wall_front", 2, {
        opacity: 0,
      }),
    ]);
}
