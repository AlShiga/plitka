document.addEventListener("DOMContentLoaded", function (e) {
  new Headroom(document.querySelector("header")).init();
  gsapInit();
  new Swiper(".mySwiper", { spaceBetween: 10 });
  new Swiper(".mySwiper1", { spaceBetween: 10 });
});

function gsapInit() {
  document.querySelector(".mFirst").addEventListener("mousemove", function (e) {
    gsap.to(".mFirst__cirkle", {
      duration: 1,
      x: function (i) {
        return (
          ((e.clientX - window.innerWidth / 2) / window.innerWidth / (i + 1)) *
          150
        );
      },
      y: function (i) {
        return (
          i * -20 * ((e.clientY - window.innerHeight / 2) / window.innerHeight)
        );
      },
      rotation: Math.random() * 0.1,
      overwrite: "auto",
    });
    gsap.to(".mFirst__cirkle", {
      duration: 1,
      attr: {
        opacity:
          0.9 - 0.1 * ((e.clientX - window.innerWidth / 2) / window.innerWidth),
      },
    });
    // gsap.to('.mFirst__cirkle', {duration:1, opacity:0.2+0.55*(e.clientY/window.innerHeight)})
  });

  document.querySelector(".mFirst").addEventListener("click", function (e) {
    if (gsap.getProperty(".mFirst__cirkle", "scale") != 1) return;
    document.querySelectorAll(".mFirst__cirkle").forEach((el, i) => {
      gsap.fromTo(
        el,
        { transformOrigin: "50% 50%", scale: 1 },
        {
          duration: 0.7 - i / 25,
          scale: 0.9,
          ease: "back.in(10)",
          yoyo: true,
          repeat: 1,
        }
      );
    });
  });



  let logo = document.querySelector(".logo svg");
  let logoRot = 0;
  logo.addEventListener("click", () => {
    logoRot += 90;
    gsap.to(logo, { rotation: logoRot, duration: 1 });
  });
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mFirst",
      start: "top top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });
  // tl.from(document.querySelector(".mFirst__content"), {yPercent:-100, opacity:0})
  // tl.to(".mFirst__content", {x: 1000, duration: 1});
  tl.to(".mFirst__content", { y: -300, opacity: 0 });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mFirst",
      start: "top top",
      end: "bottom+=100%",
      pin: true,
      pinSpacing: false,
      scrub: 2,
    },
  });
  // tl.from(document.querySelector(".mFirst__content"), {yPercent:-100, opacity:0})
  // tl.to(".mFirst__content", {x: 1000, duration: 1});
  tl1.fromTo(
    ".mSecond__tags_1",
    { x: 700, y: 100, opacity: 1, rotate: 20 },
    { x: -500, y: 0, opacity: 1, rotate: -120 },
    "-=50%"
  );
  tl1.fromTo(
    ".mSecond__tags_2",
    { x: 600, y: -100, opacity: 1, rotate: -20 },
    { x: -700, y: 0, opacity: 1, rotate: 120 },
    "<"
  );
  tl1.fromTo(
    ".mSecond__tags_3",
    { x: 500, y: 0, opacity: 1, rotate: -10 },
    { x: -700, y: 0, opacity: 1, rotate: -320 },
    "<"
  );
  tl1.fromTo(
    ".mSecond__tags_4",
    { x: 700, y: 0, opacity: 1, rotate: 40 },
    { x: -900, y: -100, opacity: 1, rotate: 120 },
    "<"
  );
  tl1.fromTo(
    ".mSecond__tags_5",
    { x: 500, y: -100, opacity: 1, rotate: 20 },
    { x: -700, y: 0, opacity: 1, rotate: -120 },
    "<"
  );
  tl1.fromTo(
    ".mSecond__tags_6",
    { x: 600, y: 0, opacity: 1, rotate: 10 },
    { x: -700, y: 0, opacity: 1, rotate: 320 },
    "<"
  );
  // tl1.fromTo(".mSecond__tags_7", {x: 700, y: 0, opacity:1, rotate:20},{x: -700, y: 100, opacity:1, rotate:-320},"<")

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mSecond",
      start: "top top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mVideo",
      start: "top",
      endTrigger: ".mVideoWrap",
      end: "bottom",
      pin: true,
      pinnedContainer: ".mVideoWrap",
      pinSpacing: false,
      scrub: true,
      markers: true,
      // duration: 4
    },
  });
  tl3.fromTo(".mVideo__bg", { scale: 1 }, { scale: 2.5, duration: 3 });
  tl3.fromTo(
    ".mVideo__quote1",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote4",
    { opacity: 0, y: 0 },
    { opacity: 0, y: -100, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote1",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -100, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote2",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote4",
    { opacity: 0, y: 0 },
    { opacity: 0, y: -100, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote2",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -100, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote3",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote4",
    { opacity: 0, y: 0 },
    { opacity: 0, y: -100, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote3",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -100, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote4",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 }
  );
  tl3.fromTo(
    ".mVideo__quote4",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -100, duration: 1 }
  );

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mAdvantages",
      start: "top top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  if (innerWidth > 1024) {
    document.querySelectorAll(".mProd").forEach((el) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });
    });
  }

  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mProj",
      start: "top",
      endTrigger: ".mProjWrap",
      end: "bottom",
      pin: true,
      pinnedContainer: ".mProjWrap",
      pinSpacing: false,
      scrub: 1,
      markers: true,
    },
  });
  tl5.fromTo(
    ".mProj__or1",
    { rotate: "0 center", transformOrigin: "50% 50%" },
    { rotate: "210 center", transformOrigin: "50% 50%", duration: 10 }
  );
  tl5.fromTo(
    ".mProj__or2",
    { rotate: "0 center", transformOrigin: "50% 50%" },
    { rotate: "250 center", transformOrigin: "50% 50%", duration: 10 },
    "<"
  );
  tl5.fromTo(
    ".mProj__text_1",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_4",
    { opacity: 0, y: 0 },
    { opacity: 0, y: -100, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_1",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -100, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_2",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_4",
    { opacity: 0, y: 0 },
    { opacity: 0, y: -100, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_2",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -100, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_3",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_4",
    { opacity: 0, y: 0 },
    { opacity: 0, y: -100, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_3",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -100, duration: 1 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_4",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 2 },
    "<1"
  );
  tl5.fromTo(
    ".mProj__text_4",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -100, duration: 2 },
    "<1"
  );

  // let tl6 = gsap.timeline({scrollTrigger:{
  // 	trigger:".mMap",
  // 	start:"top top",
  //   pin: true,
  //   pinSpacing: false ,
  //   scrub: 1
  // }})

  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mMap",
      start: "top",
      endTrigger: ".mMapWrap",
      end: "bottom",
      pin: true,
      pinnedContainer: ".mMapWrap",
      pinSpacing: false,
      scrub: true,
      markers: true,
    },
  });
  if (innerWidth > 1024) {
    tl6.fromTo(
      ".mMap__bg",
      { translateY: "0%", translateX: "-50%" },
      { translateY: "0%", translateX: "0%", duration: 1 }
    );
    tl6.fromTo(
      ".mMap__bg",
      { translateY: "0%", translateX: "0%" },
      { translateY: "0%", translateX: "0%", duration: 1 }
    );
  } else {
    tl6.fromTo(
      ".mMap__bg",
      { translateY: "-65%", translateX: "0%" },
      { translateY: "0%", translateX: "0%", duration: 1 }
    );
    tl6.fromTo(
      ".mMap__bg",
      { translateY: "0%", translateX: "0%" },
      { translateY: "0%", translateX: "0%", duration: 1 }
    );
  }

  let tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".mEvents",
      start: "top",
      end: "bottom",
      scrub: 1,
      markers: true,
    },
  });
  tl7.fromTo(
    ".mEvents__c",
    { strokeDashoffset: "2510px" },
    { strokeDashoffset: "0px" }
  );
  tl7.fromTo(
    ".mEvents__c1",
    { strokeDashoffset: "2510px" },
    { strokeDashoffset: "0px" }
  );
  tl7.fromTo(
    ".mEvents__c2",
    { strokeDashoffset: "2510px" },
    { strokeDashoffset: "0px" }
  );
  tl7.fromTo(
    ".mEvents__c",
    { strokeDashoffset: "2510px" },
    { strokeDashoffset: "0px" }
  );
  // tl7.fromTo(".mEvents__c2", {rotate:0},{rotate:210, duration: 10})

  let tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top bottom",
      end: "bottom",
      scrub: 1,
    },
  });
  tl8.fromTo(".footer", { translateY: 200 }, { translateY: 0, duration: 1 });
  tl8.fromTo(".footer", { translateY: 0 }, { translateY: 0, duration: 1 });
}
