// object below this line is incomplete.
var quotes = [
    'Every great dream begins with a dreamer. Always remember you have within you the strength the patience and the passion to reach for the stars to change the world',
    'No matter what accomplishments you make somebody helped you'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteMsg').innerHTML = quotes[randomNumber];
}

/*
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quote.[author];

    document.getElementById("quoteMsg").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
*/
