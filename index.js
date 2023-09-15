const getNewQuote = () =>{
fetch("https://type.fit/api/quotes")
.then(function(response) {
  return response.json();
})
.then(function render(data) {
  
console.log(data)
let currentmenu = Math.floor(Math.random() * data.length)

let quotes = document.getElementById("quotes")
 let authors = document.getElementById("authors")

 

 let quote = data[currentmenu]
quotes.innerHTML = "Quotes:   " + quote.text
authors.innerHTML = "Author: " +  quote.author



})

}


getNewQuote()
   