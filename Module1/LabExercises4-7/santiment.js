var Sentiment = require('sentiment');

function doSentimentScore(text){
    var sentiment = new Sentiment();
    return sentiment.analyze(text).score;    
}

console.log("Score 'Dogs are smart'".concat(" = ", doSentimentScore("Dogs are smart")));