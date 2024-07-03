gsap.to("#form",{
    bottom:0,
    height : "50%",
    width : "30%",
    duration : 2,
})
gsap.to("#text",{
   left: "50%",
    duration : 2,
    // scrollTriger:{

    // }
})
gsap.to("#topnav",{
    height : "12%",
    duration:1,
})

var main = document.querySelector("body")
var cursor = document.querySelector("#cursor")
var text = document.querySelector("#form")
main.addEventListener("mousemove", function(a) {
    gsap.to(cursor, {
        x: a.x ,
        y: a.y ,
        ease: "back.out(2)",
    });
    cursor.style.mixBlendMode = "difference";
});
text.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        height:"100px",
        width:"100px",
       
        ease:"back-out",
    })
})
text.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        height:"300px",
        width:"300px",
        // x:a.x -150,
        // y:a.y-150,
         ease:"back-out",
    })
})