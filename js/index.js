// Your code goes here

const welcome = document.querySelector(".intro h2");
welcome.addEventListener('mouseover', ()=>{
    welcome.style.transform = "scale(2.5)";
    welcome.style.transition ="all 10s";
});

const paintBus = document.querySelector(".nav-container h1");

 //console.log(paintBus);
paintBus.addEventListener('dblclick',()=>{
paintBus.style.color = '#ff006f';
});

const letsGo = document.querySelector(".text-content h2")
//console.log(letsGo)

letsGo.addEventListener('click', ()=>{
    letsGo.style.color ="red";
})

const mapChange = document.querySelector(".map-img")
window.addEventListener("resize", ()=>{
    mapChange.src="img/neon.jpg";
    window.style.
})

console.log(mapChange)

