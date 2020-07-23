var petQuestion = prompt('Would you like to test your canine care knowledge? enter 1 for yes, or enter 2 for no.');

var correctAnswer = 2;


while(petQuestion == 1){
    for (var i = 0; i < 5; i = i + 1){
        var userAnswer = prompt('How many times should a dog eat daily?');
        if(userAnswer == correctAnswer){
            petQuestion  = alert('Woof Woof! You are correct! It is best to feed your dog twice daily at 8 - 12 hour intervals.');
            break;
        } else {        
            if (userAnswer < correctAnswer){
                alert('Is your dog on a diet? I hope not! Please try again.');
            } else {
                alert('Oh my! I hope your dog gets a lot of exercise.  Please try again.');
            }
        }
    }
}