var quotes = [
'Anyone can do any amount of work, provided it isn’t the work he is supposed to be doing at that moment. —Robert Benchley',
'I like work; it fascinates me. I can sit and look at it for hours. —Jerome K. Jerome',
'Doing nothing is very hard to do. You never know when you’re finished. —Leslie Nielsen',
'Before you criticize someone, walk a mile in their shoes. That way, you’ll be a mile from them, and you’ll have their shoes. - Jack Handey',
'It’s so simple to be wise. Just think of something stupid to say and then don’t say it. - Anonymous',
'Nothing in all the world is more dangerous than sincere ignorance and conscientious stupidity. - Martin Luther King Jr.',
'I fear one day I’ll meet God; he’ll sneeze and I won’t know what to say - Anonymous'
]



//Generates random color and quote from quotes array
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
document.getElementById('body').style.backgroundColor = randomColor;

};


// function newColor() {
//     var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

//     document.getElementById('body').style.backgroundColor = randomColor;
    
// }