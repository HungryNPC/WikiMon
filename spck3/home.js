window.onload = function () {
    const quotes = [
        "Welcome fellow researcher! My name is Oak, I'm a Pokémon Professor from Kanto.",

        "If you also have the passion for the world of Pokémon like I do then take a look over here.",

        "I have traveled the 8 regions, witnessed and studied all 8 generations of Pokémon.",

        "Fortunately for you I have collected and stored all the information you will need inside of these Pokéballs.",

        "Each of them represents a generation and their respective region.",

        "Don't be shy! Feel free to pick one and start studying.",

        "..."
    ];

    let currentQuoteIndex = 0;
    const div = document.querySelector("#text");
    textbox.addEventListener("click", changeText);
    text.addEventListener("click", changeText);
    function changeText() {
        currentQuoteIndex++;
        if (currentQuoteIndex >= quotes.length) {
            currentQuoteIndex = 0;
        }
        div.innerText = quotes[currentQuoteIndex];
    }
    
    var oakImage = document.getElementById("oak");
    oakImage.addEventListener("click", reveal);
    oakImage.addEventListener("click", sprite);
    function reveal(){
        document.getElementById("oak").style.animation = "reveal 2s forwards";
    }
    function sprite(){
        setTimeout(() => {
        document.getElementById("oak").style.marginLeft = "13.9%";
        document.getElementById("oak").style.animation = "sprite 0.15s infinite alternate";
        },2000);
    }

    var briefcaseImage = document.getElementById("briefcase");
    briefcaseImage.addEventListener("click", open);
    briefcaseImage.addEventListener("click", look);
    function open(){
        document.getElementById("briefcase").src = 'spck3-img/briefcase.gif';
    }
    function look(){
        setTimeout(() => {
        document.getElementById("button").style.visibility = "visible";
        },800);
    } 

    var takeALookInside = document.getElementById("button");
    takeALookInside.addEventListener("click", pokeballs);
    takeALookInside.addEventListener("click", pokeballsSprite);
    function pokeballs(){
        document.getElementById("gen1").style.display = "inline"
        document.getElementById("gen1").style.animation = "fadeIn 1.5s linear forwards";   
        document.getElementById("gen2").style.display = "inline" 
        document.getElementById("gen2").style.animation = "fadeIn 1.5s linear forwards";    
        document.getElementById("gen3").style.display = "inline"
        document.getElementById("gen3").style.animation = "fadeIn 1.5s linear forwards";    
        document.getElementById("gen4").style.display = "inline"
        document.getElementById("gen4").style.animation = "fadeIn 1.5s linear forwards";    
        document.getElementById("gen5").style.display = "inline"
        document.getElementById("gen5").style.animation = "fadeIn 1.5s linear forwards";    
        document.getElementById("gen6").style.display = "inline"
        document.getElementById("gen6").style.animation = "fadeIn 1.5s linear forwards";    
        document.getElementById("gen7").style.display = "inline"
        document.getElementById("gen7").style.animation = "fadeIn 1.5s linear forwards";    
        document.getElementById("gen8").style.display = "inline"
        document.getElementById("gen8").style.animation = "fadeIn 1.5s linear forwards";    
        document.getElementById("gen9").style.display = "inline"
        document.getElementById("gen9").style.animation = "fadeIn 1.5s linear forwards";    
    }
    function pokeballsSprite(){
        setTimeout(() => {
        document.getElementById("gen1").style.animation = "sprite 0.21s infinite alternate"
        },1500);
        setTimeout(() => {
        document.getElementById("gen2").style.animation = "sprite 0.22s infinite alternate"
        },1500);
        setTimeout(() => {
        document.getElementById("gen3").style.animation = "sprite 0.23s infinite alternate"
        },1500);
        setTimeout(() => {
        document.getElementById("gen4").style.animation = "sprite 0.24s infinite alternate"
        },1500);
        setTimeout(() => {
        document.getElementById("gen5").style.animation = "sprite 0.25s infinite alternate"
        },1500);
        setTimeout(() => {
        document.getElementById("gen6").style.animation = "sprite 0.26s infinite alternate"
        },1500);
        setTimeout(() => {
        document.getElementById("gen7").style.animation = "sprite 0.27s infinite alternate"
        },1500);
        setTimeout(() => {
        document.getElementById("gen8").style.animation = "sprite 0.28s infinite alternate"
        },1500);
    }
}