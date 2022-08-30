window.onload = function () {
    const quotes = [
        "Welcome to Kanto! Where the first generation of Pokémon is. This is also my hometown so I have a very special bond with it.",

        "There are a total of 10 towns here and my lab is in Pallet Town right on Route 1, feel free pay me a visit if you happen to travel here.",

        "Anyways, there are 151 Pokémon for you to see along with many locations to explore in Kanto.", 
        
        "Also watch your step walking in Wayward Cave, I still get lost in there sometimes.",

        "...",
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
}
