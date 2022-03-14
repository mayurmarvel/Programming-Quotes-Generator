// assigning variables
let quoteText = document.querySelector('#quote-text');
let quoteAuthor = document.querySelector('#quote-author');




let generate = async function () {

    let response = await fetch("https://programming-quotes-api.herokuapp.com/Quotes/random");
    let { author, en: quote, id } = await response.json();

    quoteText.innerHTML = quote;
    quoteAuthor.innerHTML = `- ${author}`;

}







