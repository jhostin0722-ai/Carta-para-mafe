const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

const heartsContainer = document.getElementById("hearts-container");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

const gift = document.getElementById("gift");
const surprise = document.getElementById("surprise");



/* ABRIR CARTA */

openBtn.addEventListener("click",()=>{

    envelope.classList.add("open");


    setTimeout(()=>{

        document.querySelector(".cover").style.display="none";

        letter.style.display="block";

        createHearts();

        createParticles();


        window.scrollTo({

            top:0,
            behavior:"smooth"

        });


    },1200);

});





/* CORAZONES */


function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";


    const icons=[
        "❤️",
        "💗",
        "💕",
        "💖",
        "✨"
    ];


    heart.innerHTML=
    icons[Math.floor(Math.random()*icons.length)];


    heart.style.left=
    Math.random()*100+"%";


    heart.style.fontSize=
    (15+Math.random()*25)+"px";


    heart.style.animationDuration=
    (5+Math.random()*5)+"s";


    heartsContainer.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);


}



function createHearts(){

    setInterval(()=>{

        createHeart();

    },500);

}





/* PARTICULAS */

function createParticles(){

    for(let i=0;i<25;i++){


        let particle=document.createElement("div");


        particle.innerHTML="✨";


        particle.style.position="fixed";

        particle.style.left=
        Math.random()*100+"%";


        particle.style.top=
        Math.random()*100+"%";


        particle.style.fontSize="18px";


        particle.style.animation=
        "floatHeart 6s infinite";


        document.body.appendChild(particle);



        setTimeout(()=>{

            particle.remove();

        },6000);

    }

}






/* MUSICA */


let playing=false;


musicBtn.addEventListener("click",()=>{


    if(!playing){


        music.play();


        musicBtn.innerHTML=
        "⏸ Pausar música";


        playing=true;



    }else{


        music.pause();


        musicBtn.innerHTML=
        "🎵 Reproducir música";


        playing=false;


    }


});







/* SORPRESA FINAL */


gift.addEventListener("click",()=>{


    gift.style.transform="scale(2)";


    setTimeout(()=>{


        gift.style.display="none";


        surprise.style.display="block";


        createHearts();


    },500);



});