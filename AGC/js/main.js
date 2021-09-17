if(document.querySelector('.mFirst')){
  AOS.init();
let tlMF = gsap.timeline({
  scrollTrigger: {
    trigger: ".mFirst",
    start: "top top", 
    end: "bottom top", 
    scrub: 1,
  }
});

// add animations and labels to the timeline
tlMF.to(".mFirst__t1", { xPercent:-10},0)
.to(".mFirst__t2", { xPercent:20},0)
.to(".mFirst__t3", { xPercent:-20},0)
.to(".mFirst__t4", { xPercent:5},0)
.to(".mFirst__t5", { xPercent:-15},0)


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mAdv",
    start: "top bottom", 
    end: "bottom top", 
    scrub: 2,
  }
});

// add animations and labels to the timeline
tl.from(".mAdv__cirkle", {yPercent:-65, xPercent:-50})
.to(".mAdv__cirkle", {yPercent:-40, xPercent:-50})
.to(".mAdv__cirkle", {yPercent:-48, xPercent:-50})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mText",
    start: "top bottom", 
    end: "bottom top", 
    scrub: 1,
  }
});


tl2.from(".mText__cirkle", {yPercent:-40, xPercent:-70, duration: 1})
.to(".mText__cirkle", {yPercent:-50, xPercent:-35, duration: 1})
.to(".mText__cirkle", {yPercent:-60, xPercent:-50, duration: 1})
.to(".mText__t1", { xPercent:5, duration: 2},0)
.to(".mText__t2", { xPercent:-5, duration: 2},0)
.to(".mText__t3", { xPercent:10, duration: 2},0)
.to(".mText__t4", { xPercent:-5, duration: 2},0)
.to(".mText__t5", { xPercent:-15, duration: 2},0)

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mProj",
    start: "top bottom", 
    end: "top top", 
    scrub: 1,
  }
});
tl3.from(".mProj__title", {yPercent:100, xPercent:0})
.to(".mProj__title", {yPercent:0, xPercent:0})
.to(".mProj__title", {yPercent:-0, xPercent:-30})


ScrollTrigger.create({
  trigger: ".mServ__svg",
  start: "top top",
  start: "top bottom",
  // endTrigger: "#otherID",
  // end: "bottom 50%+=100px",
  onToggle: self => {
    if(self.isActive){
      document.querySelectorAll('.mServ__svg path').forEach((el,key)=>{
        setTimeout(()=>{
          el.style.strokeDashoffset = '0px'
        },100*key+1)
      })
    }else{
      document.querySelectorAll('.mServ__svg path').forEach((el,key)=>{
        setTimeout(()=>{
          el.style.strokeDashoffset = ''
        },100*key+1)
      })
    }
  },
});

ScrollTrigger.create({
  trigger: ".mNums__invert",
  start: "top top",
  start: "top bottom",
  // endTrigger: "#otherID",
  // end: "bottom 50%+=100px",
  onToggle: self => {
    if(self.isActive){
      document.querySelectorAll('.mNums__cirk').forEach((el,key)=>{
        setTimeout(()=>{
          el.style.strokeDashoffset = '0px'
        },100*key+1)
      })
    }else{
      document.querySelectorAll('.mNums__cirk').forEach((el,key)=>{
        setTimeout(()=>{
          el.style.strokeDashoffset = ''
        },100*key+1)
      })
    }
  },
});

let contPar = document.querySelector('.mProj__par')

var rect = contPar.getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

contPar.addEventListener('mousemove', function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
})


 
// Ticker event will be called on every frame
gsap.ticker.add(function(){
  if (mouse.moved){    
    parallaxIt(".mProj__parCirkle", -10);
    parallaxIt(".mProj__parImg1", 100);
    parallaxIt(".mProj__parImg2", -100);
    parallaxIt(".mProj__parImg3", 10);
    parallaxIt(".mProj__parImg4", -10);
    parallaxIt(".mProj__parImg5", 20);
    parallaxIt(".mProj__parImg6", -30);
    parallaxIt(".mProj__parImg7", 200);
    parallaxIt(".mProj__parImg8", -300);
    parallaxIt(".mProj__parImg9", 100);
  }
  mouse.moved = false;
});


function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

document.addEventListener('scroll',
  function(){
    rect = contPar.getBoundingClientRect();
  }
) 
}

if(document.querySelector('.aFirst')){
  const swAFirst = new Swiper('.swAFirst', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    on: {
      realIndexChange: function () {
        setTimeout(() => {
          console.log(swAFirst.realIndex);
          document.querySelector('.aFirst__sliderNum').textContent = ((swAFirst.realIndex+1)>10)?(swAFirst.realIndex+1):"0"+(swAFirst.realIndex+1)
        }, 100);
      },
    },
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".aAdvantages",
      start: "top bottom", 
      end: "bottom top", 
      scrub: 2,
    }
  });
  
  // add animations and labels to the timeline
  tl.from(".aAdvantages__cirkle", {yPercent:0},"someLabel")
  .to(".aAdvantages__cirkle", {yPercent:10})
  .to(".aAdvantages__cirkle", {yPercent:5})
  .to(".aServ__cirkle", {yPercent:-100},0)
  .to(".aServ__cirkle", {yPercent:-90},">")
  .to(".aServ__cirkle", {yPercent:-95},">")

  const swASb = new Swiper('.swASb', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
  const swASs = new Swiper('.swASs', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    on: {
      realIndexChange: function () {
        setTimeout(() => {
          document.querySelector('.swASs__num').textContent = (((swASs.realIndex+1)>10)?(swASs.realIndex+1):"0"+(swASs.realIndex+1)) + " — " + (((swASs.slides.length-2)>10)?(swASs.slides.length-2):"0"+(swASs.slides.length-2))
          document.querySelector('.swASs__bar div').style.width = (swASs.realIndex+1)/(swASs.slides.length-2)*100+'%'
        }, 100);
      },
    },
  });
  swASs.controller.control = swASb;
  swASb.controller.control = swASs;


  ScrollTrigger.create({
    trigger: ".aServ__svg",
    start: "top top",
    start: "top bottom",
    // endTrigger: "#otherID",
    // end: "bottom 50%+=100px",
    onToggle: self => {
      if(self.isActive){
        document.querySelectorAll('.aServ__svg path').forEach((el,key)=>{
          setTimeout(()=>{
            el.style.strokeDashoffset = '0px'
          },100*key+1)
        })
      }else{
        document.querySelectorAll('.aServ__svg path').forEach((el,key)=>{
          setTimeout(()=>{
            el.style.strokeDashoffset = ''
          },100*key+1)
        })
      }
    },
  });

  const swHist = new Swiper('.swHist', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    autoplay: {
      delay: 5000,
    },
  });

}

if(document.querySelector('.prFirst')){
  tippy('[data-tippy-content]',{
    duration: 0,
    arrow: false,
    delay: [100, 300],
    theme: 'my',
    placement: 'top-end',
    animation: 'scale',
  });

  if(innerWidth>1024){

    gsap.ticker.add(myFunction);
    let bar1 = document.querySelector('.bar1')
    let sec1 = document.querySelector('.prFoto')
    let barW = bar1.getBoundingClientRect().width
    let bar2 = document.querySelector('.bar2')
    let sec2 = document.querySelector('.prMap')
    let bar3 = document.querySelector('.bar3')
    let sec3 = document.querySelector('.prProj')
    let scrW = innerWidth
    function myFunction() {
      let pos1 = sec1.getBoundingClientRect().left
      bar1.style.left = ((pos1 > 0) ? ((pos1<scrW-barW*3)? pos1 : scrW-barW*3+2 ) : 0) + 'px'

      let pos2 = sec2.getBoundingClientRect().left
      // console.log((pos2))
      bar2.style.left = ((pos2 > 0 + barW-1) ? ((pos2<scrW-barW*2)? pos2 : scrW-barW*2+1 ) : 0 + barW-1) +'px'
      let pos3 = sec3.getBoundingClientRect().left
      console.log((pos3))
      bar3.style.left = ((pos3 > 0 + barW*2-1) ? ((pos3<scrW-barW*1)? pos3 : scrW-barW*1 ) : 0 + barW*2-2)  +'px'
    
    }

    let sections = gsap.utils.toArray(".prSec");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".prWrap",
        pin: true,
        scrub: 0.3,
        snap: directionalSnap(1 / (sections.length - 1)),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500"
      }
    });
    // helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
    function directionalSnap(increment) {
      let snapFunc = gsap.utils.snap(increment);
      return (raw, self) => {
        let n = snapFunc(raw);
        return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
      };
    }
    document.querySelectorAll('.prFoto__imgW').forEach(el=>{
      let img = el.querySelector('img')
      let tl = gsap.timeline({
  
        scrollTrigger: {
          trigger: el,
          scroller: '.prFoto',
          start: "top bottom",
          end: "bottom top",
          scrub: 1, 
        }
      });
      tl.from(img, {yPercent: 0})
        .to(img, {yPercent: -50})
    })
  } else{
    
  }

}

let transform = {
  x: 0,
  y: 0,
  curX: 0,
  curY: 0,
  scale: 1,
  opacity: 1
};
let imgTarget = '';
console.log('12312312')
document.querySelectorAll('.moveImg').forEach((el)=>{
  el.addEventListener('mouseover',(e)=>{
    if (innerWidth < 1023) return
    transform.x = e.clientX - el.getBoundingClientRect().left
    transform.y = e.clientY - el.getBoundingClientRect().top
    imgTarget = e.target.querySelector('img')
    gsap.to(this.imgTarget, { x: transform.x, y: transform.y, scale: 1, duration: 0 })
    gsap.ticker.add(this.updatePos)
  })
  el.addEventListener('mousemove',(e)=>{
    if (innerWidth < 1023) return
    transform.curX = e.clientX - el.getBoundingClientRect().left
    transform.curY = e.clientY - el.getBoundingClientRect().top
  })
  el.addEventListener('mouseout',()=>{
    if (innerWidth < 1023) return
    gsap.to(imgTarget, { x: transform.x, y: transform.y, scale: 0, opacity: 0, duration: 0.5 })
    gsap.ticker.remove(updatePos)
  })
})
function updatePos (e) {
  if (innerWidth < 1023) return
  transform.x = (transform.x * 9 + transform.curX) / 10
  transform.y = (transform.y * 9 + transform.curY) / 10
  gsap.to(imgTarget, { x: transform.x, y: transform.y, scale: 1, opacity: transform.opacity, duration: 0.3 })
}


// document.querySelectorAll('.mServ__svg path').forEach((el,key)=>{
//   setTimeout(()=>{
//     el.style.strokeDashoffset = '0px'
//   },100*key+1)
// })



// const accordeon = {
//   init: function(){
//     if(document.querySelector('.accordeon')){
//       accordeon.heads = document.querySelectorAll('.accordeon__head');
//       accordeon.heads.forEach((el)=>{
//         el.addEventListener('click', accordeon.showAcc);
//       })      
//     }
//   },
//   showAcc: function(evt){
//       accordeon.heads.forEach((el)=>{
//         el.classList.remove('open');
//       })
//       evt.currentTarget.classList.add('open');
//   }
// }
// document.addEventListener('DOMContentLoaded',()=>{
//   accordeon.init();
//   moveBtn.init();
//   invertEl.initInv();
// });


// const accordeon = {
//   init: function(){
//     this.wrap = document.querySelectorAll('.accordeon');
//     if(this.wrap.length){
//       this.wrap.forEach((wrapI)=>{
//         wrapI.addEventListener('click', (e)=>{
//             if(e.target.classList.contains("accordeon__head")|| e.target.closest('.accordeon__head')){
              
//             }
//         });
//       })
//     }
//   },
//   showAcc: function(evt){
//     accWr.querySelectorAll('.accordeon__head').forEach((el)=>{
//       el.classList.remove('open');
//     })
//     console.log(evt)
//     console.dir(evt)
//     evt.currentTarget.classList.add('open');
//   }
// }
// document.addEventListener('DOMContentLoaded',()=>{
//   accordeon.init();
// });