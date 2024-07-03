gsap.to("#form",{
    bottom:0,
    height : "45%",
    // width : "30%",
    duration : 2,
    delay: "5",
})
gsap.to("#text",{
   right: "-50%",
    duration : 2,
})
gsap.to("#topnav",{
    height : "12%",
    duration:2,
})

var main = document.querySelector("body")
var cursor = document.querySelector("#cursor")
var text = document.querySelector("#form")
main.addEventListener("mousemove", function(a) {
    gsap.to(cursor, {
        x: a.x ,
        y: a.y ,
        ease: "back.out",
    });
    cursor.style.mixBlendMode = "difference";
});
text.addEventListener("mouseenter",function(a){
    gsap.to(cursor,{
        height:"30px",
        width:"30px",
       
        ease:"back-out",
    })
})
text.addEventListener("mouseleave",function(a){
    gsap.to(cursor,{
        height:"100px",
        width:"100px",
    })
})