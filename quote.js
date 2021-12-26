// object below this line is incomplete.
var quotes = [
    'Every great dream begins with a dreamer. Always remember you have within you the strength the patience and the passion to reach for the stars to change the world.',
    'No matter what accomplishments you make somebody helped you.',
    'Talk is cheap, Show me the code.',
    'The secret behind success is not as much of a secret as people think. It is pretty simple. It is working as hard as you can to accomplish what you want',
    'Take stock of your thoughts and behavior. Each night ask yourself, when were you negative when you could have been positive? When did you withhold love when you might have given it? When did you play a neurotic game instead of behaving in a powerful way? Use this process to self-correct.',
    'From there to here, and here to there, funny things are everywhere.',
    'We all learn lessons in life. Some stick, some don\'t. I have always learned more from rejection and failure than from acceptance and success.',
    'However difficult life may seem, there\'s always something you can do and succeed at.',
    'Wisdom is the power to put our time and our knowledge to the proper use.',
    'It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.',
    'When you single out any particular group of people for secondary citizenship status, that is a violation of basic human rights.',
    'If you prioritize yourself, you are going to save yourself.',
    'Happiness does not depend on outward circumstances, but on the state of the heart.',
    'Laziness is nothing more than the habit of resting before you get tired.',
    'It takes considerable knowledge just to realize the extent of your own ignorance.',
    'I am an optimist, but an optimist who carries a raincoat.',
    'Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.',
    'Defeat isn\'t the worst of failures. Not to have tried is the true failure.',
    'Success is often the result of taking a misstep in the right direction.',
    'If you find it in your heart to care for somebody else, you will have succeeded.',
    'When love and skill work together, expect a masterpiece.',
    'Success is not a good teacher, failure makes you humble.',
    'The family is the nucleus of civilization.',
    'I have a lot of things to prove to myself. One is that I can live my life fearlessly.',
    'However difficult life may seem, there\'s always something you can do and succeed at.',
    'Trust in dreams, for in them is hidden the gate to eternity.',
    'One of the most beautiful qualities of true friendship is to understand and to be understood.',
    'Each friend represents a world in us, a world possibly not born until they arrive, and it\'s only by this meeting that a new world is born.',
    'Blockchain is really exciting technology because it is actually providing both transparency but also agility in a contractual relationship that any organization should have.',
    'What\'s the intersection between technology, art and science? Curiosity and wonder, because it drives us to explore, because we are surrounded by things we cannot see.',
    'If you hire great people, and they are all self-motivated, then you can get by without a lot of structure.', 
    'If you don\'t express your own original ideas, if you do not listen to your own being, you will have betrayed yourself.',
    'Do not let your special character and values, the secret that you know and no one else does, the truth do not let that get swallowed up by the great chewing complacency.',
    'Happiness is spiritual, born of truth and love. It\'s unselfish. Therefore it cannot exist alone, but requires all mankind to share it.',
    'To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.',
    'Human rights are not only violated by terrorism, repression or assassination, but also by unfair economic structures that creates huge inequalities.',
    'It\'s so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one elses job to take care of me but me.',
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
