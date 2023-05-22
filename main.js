/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


window.alert("hi");

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

fetch('https://api.quotable.oi/random')
        .then(response => response.json())
        .then(data => {
            console.log('${data.content} -${data.author}');
});


/*
const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
            .then((data) => data.json())
            .then((item) => {
                console.log(item.content);
        console.log(item.author);
                quote.innerText = item.content;
        author.innerText = item.author;
        
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

*/



