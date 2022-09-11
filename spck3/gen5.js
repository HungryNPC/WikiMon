window.onload = function () {
    const quotes = [
        "Welcome to Unova! It is far away from the four other large regions, and the Pokémon here are diverse and different from those as well.",

        "The climate of Unova, unlike other regions, solely depends on the time of the year. Spring, summer, autumn and winter recur three times a year.",

        "Each season brings with it different weather patterns, unlocks different events, and presents altered Pokémon availabilities.",

        "The Unova region has a total population of 949, including all the towns, cities and areas and is currently the third largest region by population.", 

        "With a total of 300 Pokémon, this region introduces 156 new creatures along with many new features like seasonal cycle, rotation and triple battles.",

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

