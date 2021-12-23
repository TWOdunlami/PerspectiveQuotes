// object below this line is incomplete.
var quotes = [
    'Every great dream begins with a dreamer. Always remember you have within you the strength the patience and the passion to reach for the stars to change the world.',
    'No matter what accomplishments you make somebody helped you.',
    'Talk is cheap. Show me the code.',
    'The secret behind success is not as much of a secret as people think. It is pretty simple. It is working as hard as you can to accomplish what you want',
    'Take stock of your thoughts and behavior. Each night ask yourself, when were you negative when you could have been positive? When did you withhold love when you might have given it? When did you play a neurotic game instead of behaving in a powerful way? Use this process to self-correct.',
    'From there to here, and here to there, funny things are everywhere.',
    'We all learn lessons in life. Some stick, some do not. I have always learned more from rejection and failure than from acceptance and success.',
    'However difficult life may seem, there is always something you can do and succeed at.',
    'Wisdom is the power to put our time and our knowledge to the proper use.',
    'It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.',
    'When you single out any particular group of people for secondary citizenship status, that is a violation of basic human rights.',
    'If you prioritize yourself, you are going to save yourself.',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'Happiness is spiritual, born of truth and love. It is unselfish. Therefore it cannot exist alone, but requires all mankind to share it.',
    'To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.',
    'Human rights are not only violated by terrorism, repression or assassination, but also by unfair economic structures that creates huge inequalities.',
    'It is so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one elses job to take care of me but me.',
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
    var video = document.getElementById("vidLoop");
}
*/
