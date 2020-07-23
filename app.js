function getTime(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening...';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon...';
    } else if (hourNow > 0) {
        greeting = 'Good morning...';
    } else {
        greeting = 'Welcome...';
}
document.write('<h2>' + greeting + '</h2>');
}
getTime();

function getuserName(){
    var userNameInFunction = prompt('Welcome! What is your name?');
    alert('Hello There...' + userNameInFunction);
    document.write('<h2>' + userNameInFunction + '</h2>');
    return userNameInFunction;
}
var userName = getuserName();

function confirmAskQuestions(){
    confirm(userName + ' I would like to ask you a question..');
}
confirmAskQuestions();

function askQuestion(){
    var userCodeAnswer = prompt('Are you looking to adopt a new furry friend? (yes or no)');
    if (userCodeAnswer == "yes"){
        alert('Perfect! Please go to https://www.seattlehumane.org/adoption/dogs/ to find that special friend!');
    } else {
        alert('When you are ready, you can visit https://www.seattlehumane.org/adoption/dogs/ to find that special friend.');
    }
}
askQuestion();
