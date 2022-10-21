

const layerImage = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links");
const magnetic = document.querySelector(".magnetic");

const img = [
    "./css/media/dinos.png"
]



window.addEventListener("mousemove",cursor);

function cursor(e){
    layerImage.style.top = e.pageY + "px";
    layerImage.style.left = e.pageX + "px";

    navLinks.forEach(link => {
        link.addEventListener("mouseleave", ()=> {
            layerImage.classList.remove("cursor");
            layerImage.classList.remove("cursor-grow");
            layerImage.classList.add("cursor-out")
        });
        link.addEventListener("mouseenter", ()=> {
            layerImage.classList.add("cursor-grow");
            layerImage.classList.add("cursor");
            layerImage.classList.remove("cursor-out");
            layerImage.classList.remove("out");
        });
    })    
    console.log(e);
}

// var magnets = document.querySelectorAll('.magnetic')
// var strength = 50

// magnets.forEach( (magnet) => {
//     magnet.addEventListener('mousemove', moveMagnet );
//     magnet.addEventListener('mouseout', function(event) {
//       TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
//     } );
//   });

// function moveMagnet(event) {
//     var magnetButton = event.currentTarget
//     var bounding = magnetButton.getBoundingClientRect()
  
//     //console.log(magnetButton, bounding)
  
//     TweenMax.to( magnetButton, 1, {
//       x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
//       y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
//       ease: Power4.easeOut
//     })
//     }