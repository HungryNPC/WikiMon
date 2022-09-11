window.onload = function () {
    const quotes = [
        "Welcome to Kalos! It is shaped like a five-pointed star, with one of its biggest cities being Lumiose City in the north-central part of the region.",

        "It features a vast network of rivers and waterways snaking through much of its landscape, cities and towns.",

        "North-east of Lumiose City lies a mountain range where more frigid temperatures exist, extending down into the plains below.",

        "Western Kalos features a vast ocean, where the shoreside city of Shalour City lies in the middle of a cove.", 

        "The region has a total population of 1288 including 16 towns, cities, 22 routes and a Pokémon League making it the largest region by population.",

        "Because it is so huge, this region is home to a massive 457 Pokémon with 72 new Pokémon across the central, coastal and mountain areas.",

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

