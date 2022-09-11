window.onload = function () {
    const quotes = [
        "Welcome to Galar! Comprises a long mainland area as well as an outlying island area, the Isle of Armor, east of the mainland, the Crown Tundra, south of the mainland.",

        "The Galar region has a total population of 727, including all towns, cities, and other areas, it is the fifth largest region by population.",

        "Galar has 12 cities and towns. Like in Unova, Kalos, and Alola, Galarian route numbers start from 1. There are 10 routes in total.", 

        "Unlike in most other regions, it is impossible to travel through Galar using just these routes. Instead, a train system connects different cities and towns.",

        "The Galar region also has an extensive area called the Wild Area which adjoins several towns and cities in the region.",

        "Also, did I mention dynamaxing and gmaxing Pokémon are this generation gimmicks among 400 Pokémon to choose from.",

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

