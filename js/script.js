/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
var quotes = [
    {
        quote: "I never dreamed about success. I worked for it.",
        source: "Estée Lauder"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        source: "Winston Churchill"
    },
    {
        quote: "Experience is the name everyone gives to their mistakes.",
        source: "Oscar Wilde",
        year: 1892,
        citation: "Lady Windermere's Fan"
    },
    {
        quote: "Believe you can and you're halfway there.",
        source: "Theodore Roosevelt"
    },
    {
        quote: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
        source: "Alexander Graham Bell",
        year: 1992
    },
    {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you",
        source: "Walt Whitman"
    },
    {
        quote: "You miss 100% of the shots you don't take",
        source: "Wayne Gretzky",
        year: 1983,
        citation: "THN"
    }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    //Generate random number based on array length
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return randomNumber;
}

/***
 * `printQuote` function
***/

function printQuote() {
    //do while loop to show new quote everytime
    do {
        random = getRandomQuote();
    } while (random === printQuote.last)
    randomQuote = quotes[random];
    //insert quote and source
    document.getElementsByClassName('quote')[0].innerHTML = randomQuote.quote;
    document.getElementsByClassName('source')[0].innerHTML = randomQuote.source;
    //add new span tag with citation if the quote has a citation property
    if (randomQuote.hasOwnProperty('citation')) {
        console.log("This object has citation property");
        document.getElementsByClassName('source')[0].innerHTML += `<span class="citation">${randomQuote.citation}</span>`;
    };
    //add new span tag with year of quote if the quote has a year property
    if (randomQuote.hasOwnProperty('year')) {
        document.getElementsByClassName('source')[0].innerHTML += `<span class="year">${randomQuote.year}</span>`;
    };

}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);