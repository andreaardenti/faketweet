let moment = require('moment');
let tweets = [];
let COUNTER = 1;

//restituisce tutti i tweet
exports.getTweet = function() {
    return tweets;
}

//aggiungere un tweet
exports.addTweet = function(param1, param2) {
    let tweet = {
        id: COUNTER++,
        author: param1,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        description: param2
    }
    tweets.push(tweet);
}

//cercare un tweet in base all'autore
exports.findTweetByAuthor = function(param) {
    let filteredTweetByAuthor = [];
    for (let tweet of tweets) {
        if (tweet.author === param) {
            filteredTweetByAuthor.push(tweet);
        }
    } return filteredTweetByAuthor;
}

//cercare un tweet in base alla description
exports.findTweetByDescription = function(param) {
    let filteredTweetByDescription = [];
    for (let tweet of tweets) {
        if (tweet.description.includes(param)) {
            filteredTweetByDescription.push(tweet);
        }
    } return filteredTweetByDescription;
}

//modificare la description di un tweet
exports.modifyTweetById = function(param1, param2) {
    for (let i=0; i<tweets.length; i++) {
        //console.log(tweets[i].description);
        if (tweets[i].id === param1) {
            tweets[i].description = param2;
            return tweets;
        }
    } 
}

//cancellare un tweet in base all'ID
exports.deleteTweet = function(param) {
    for (let i=0; i<tweets.length; i++) {
        if (tweets[i].id === param) {
            tweets.splice(i, 1);
            return tweets;
        }
    }
}

//reset
exports.reset = function() {
    tweets = [];
    COUNTER = 0;
    return tweets;
}

// this.addTweet('andrea', 'questo è il mio primo tweet');
// this.addTweet('mario', 'questo è il mio secondo tweet');
// this.addTweet('giulio', 'questo è il mio terzo tweet');
// this.addTweet('marco', 'questo è il mio terzo tweet');

// console.log(tweets);
// console.log('---------------------------------------------------');
// console.log(this.findTweetByAuthor('andrea'));
// console.log('---------------------------------------------------');
// console.log(this.findTweetByDescription('terzo'));
// console.log('---------------------------------------------------');
// console.log(this.modifyTweetById(1, 'ho modificato il mio primo tweet!'));