var userNumber1 = prompt('Please type the starting number');
var bottomNumber = parseInt(userNumber1);
var userNumber = prompt("please type a number");
var topNumber = parseInt(userNumber);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p> ";
document.write(message);