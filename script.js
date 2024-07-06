
gsap.to("#page1", {
    backgroundColor: "rgb(38, 42, 86)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "7%",
        end: "100vh",
        scrub: 1,
    }
});
gsap.to("#form",{
    bottom:0,
    height : "47%",
    // width : "30%",
    duration : 2,
    delay: "5",
})
gsap.to("#text",{
   right: "-40%",
    duration : 2,
})
gsap.to("#topnav",{
    height : "12%",
    duration:2,
})
gsap.to("#topnav", {
    backgroundColor: "rgb(38, 42, 86)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -50vh",
        end: "top -100vh",
        scrub: 1
    }
});
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = "none";
sidebar.style.width="70%";
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
function showSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
}
function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
gsap.registerPlugin(ScrollTrigger);

