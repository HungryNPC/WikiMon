window.onload = function () {
    const quotes = [
        "Welcome to Sinnoh! Formerly known as Hisui. Out of all the regions, this is my personal favourite. It's located north of Kanto, Johto and Hoenn.",

        "Sinnoh is composed of the large mainland, the Battle Zone on another landmass and several smaller islands on both sides of the region.",

        "The region is divided by Mount Coronet. Most of Sinnoh's routes are on land, having very few water routes, in vast contrast to Hoenn.",

        "Sinnoh has 14 cities and towns, 3 areas and a Pokémon League. With a population of 755, making it the fourth largest region by population.", 

        "This region has 210 Pokémon including the Lake Guardians, the Creation Trio and their master: Arceus aka 'The Original One'.",

        "It is said that it created Sinnoh, and possibly the entire Pokémon universe.",

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

