//#6.0 Quotes

const quotes = [
{
    quote: "Work banishes those three great evils- boredom, vice and poverty.",
    author:"Goethe",
},
{
    quote: "The hardest work is to go idle.",
    author:"Jewish Proverb",
},
{
    quote: "Liberty without learning is always in peril and learning without liberty is always in vain.",
    author:"John F. Kennedy",
},
{
    quote: "Nothing is more despicable than respect based on fear.",
    author:"Albert Camus",
},
{
    quote: "Anything you'er good at contributes to happiness.",
    author:"Bertrand Russell",
},
{
    quote: "Only the person who has faith in himself is able to be faithful to others",
    author:"Erich Fromm",
},
{
    quote: "Never, never, never, never give up.",
    author:"Winston Churchill",
},
{
    quote: "Who contrils the past controls the future.Who controls the present controls the past.",
    author:"George Orwell",
},
{
    quote: "One man who has a mind and knows it acn always beat ten men who haven't and don't.",
    author:"George Bernard Shaw",
},
{
    quote: "A friend in power is a friend lost.",
    author:"Henry Adams",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;