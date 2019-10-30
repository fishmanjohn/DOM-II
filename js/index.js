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

const mapChange = document.querySelector(".map-img");
const body = document.querySelector("body");
window.addEventListener("resize", ()=>{
    mapChange.src="img/neon.jpg";
    body.style.backgroundColor="teal";
})

console.log(mapChange)

const destinationShift = document.querySelector(".content-destination h2");

destinationShift.addEventListener('mouseenter', ()=>{
    destinationShift.style.color = '#33ff00';
})

destinationShift.addEventListener('mouseleave', ()=>{
    destinationShift.style.color = '#3c00ff';
})

const imgRnd = document.querySelector(".content-destination img");

document.addEventListener("keypress", () => {
   
   imgRnd.style.borderRadius = "200px";
});

const textColor = document.querySelector(".content-section :last-child p")

textColor.addEventListener('mousedown',()=>{
    textColor.style.color = "#40ff00";
});

const buttonone = document.querySelector(".content-pick :first-child .btn ");

    window.addEventListener('keyup',(event)=>{
        buttonone.style.backgroundColor = "#ff0d00";
        event.stopPropagation();
    });

    const buttontwo = document.querySelector(".content-pick :nth-child(2) .btn ");

    window.addEventListener('keyup',(event)=>{
        buttontwo.style.backgroundColor = "#ffea00";
        event.stopPropagation();
    });

const buttonthree = document.querySelector(".content-pick :last-child .btn ");

    window.addEventListener('keyup',(event)=>{
        buttonthree.style.backgroundColor = "limegreen";
        event.stopPropagation();
    })

    const tookPill = document.querySelector(".img-fluid")

    tookPill.addEventListener('mousemove',()=>{
        tookPill.src ="img/pill.jpg"
    })


    let navigation = document.querySelectorAll('.nav a');
    navigation.forEach(title => {
        navigation.preventDefault();
        })
