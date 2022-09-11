window.onload = function () {
    const quotes = [
        "Welcome to Alola! It is a popular resort destination and attracts a lot of tourists from other regions.",

        "Alola is made up of five islands: the natural islands Melemele, Akala, Ula'ula and Poni and the artificial island Aether Paradise.",

        "In Alola, humans and Pokémon coexist in a very close relationship, and a culture has developed that is different from other regions.",

        "Similar to Hoenn, Alola as a whole seems to have a warmer climate than other regions. It is implied to have a tropical climate.", 

        "You can see a thriving rainforest grows on Akala Island. However, Mount Lanakila, Alola's highest point, constantly experiences snow.",

        "Alola has 9 cities and towns, and a Pokémon League. Like in Unova and Kalos, the routes of Alola start counting again from 1 to 17.",

        "The region has a total population of 1005, it has been the second largest region by population along with 403 Pokémon, 86 new ones and 18 Alolan variants.",

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

