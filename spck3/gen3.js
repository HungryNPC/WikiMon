window.onload = function () {
    const quotes = [
        "Welcome to Hoenn! Everyone's favourite region. It's located south of Sinnoh and seems to have a warmer climate than other regions.",

        "Hoenn has 16 cities and towns, 34 different routes along with a Pokémon League. Noticeably 40% of its land is surrounded by water.",

        "With 211 different types of Pokémon and a population of 694, Hoenn is the sixth largest region by population.",

        "This is also where the discovery of Mega Evolution was made - a temporary transformation that affects certain Pokémon.", 

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

