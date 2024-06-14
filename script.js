var body = document.querySelector("body")
var crsr = document.querySelector(".crsr")
var pp = document.querySelector(".pp")

body.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        x:dets.x,
        y:dets.y,
        scrub:2,
        ease:"back.out"
    })
})
pp.addEventListener("mousemove",function(dets){
  gsap.to(crsr,{
      x:dets.x,
      y:dets.y,
      scrub:2,
      ease:"back.out"

  })
  crsr.innerHTML = "hey i am OPS";
  setTimeout(function() {
    crsr.innerHTML = "👦";
  }, 2000);
})

