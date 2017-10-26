document.addEventListener('DOMContentLoaded',function() { 
  getQuote();
});

document.getElementById('newQuoteButton').onclick=function(){
  getQuote();
};

document.getElementById('tweet').onclick=function(){
  sendTweet();
}; 

function getQuote() {
  var rndQuote = new XMLHttpRequest();
  var quoteText = ""
  var quoteAuthor = ""
  rndQuote.open("GET",'https://talaikis.com/api/quotes/random/',true); 
  rndQuote.send(); 
  rndQuote.onload=function(){ 
  var json=JSON.parse(rndQuote.responseText);
  quoteText = "<p class='quote'> " + json.quote;
  quoteAuthor = "- " + json.author + "</p>";
  document.getElementsByClassName('quote')[0].innerHTML = quoteText;
  document.getElementsByClassName('author')[0].innerHTML = quoteAuthor;
  };
  changeColor();
}

function changeColor() {
  var colorList = ["BlueViolet", "CadetBlue", "Coral", "CornflowerBlue", "DarkCyan", "DarkOrange", "DarkOrchid", "DarkTurquoise", "DodgerBlue", "FireBrick", "ForestGreen", "GoldenRod", "Green", "Olive", "RoyalBlue", "Teal", "Tomato", "SteelBlue"];
  var color = colorList[Math.floor(Math.random() * 19)];
  document.body.style.backgroundColor = color;
  document.body.style.color = color;
  document.getElementById('newQuoteButton').style.backgroundColor = color;
}

function sendTweet() {
  var tweetAuthor = document.getElementById("author").textContent.slice(2);
  var tweetText = '"' + document.getElementById("quote").textContent + '" ' + tweetAuthor;
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + tweetText, "_blank");
}