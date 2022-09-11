window.onload = function () {
    const quotes = [
        "Welcome to Johto! This region is located west of Kanto which together form a joint landmass that is south of Sinnoh and Sinjoh Ruins.",

        "It is home to an additional 100 Pokémon that were not present in Kanto since the two regions are so close together.",

        "However, Johto is notably more rural than the Kanto region, which leans more towards to the urban side.",

        "There's also a total population of 452 across 10 cities and towns here making it the seventh largest region by population.", 

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

