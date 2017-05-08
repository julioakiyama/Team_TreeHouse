// declare program variables
var num1;
var num2;
var message;
// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);

num2 = prompt("Please type another number");
num2 = parseFloat(num2);


if ( num2 === 0 ){
   alert("The number can not be divided by 0.Reload and Try again");
} else if ( isNaN(num1 ) || isNaN(num2 ) ){
    alert("It is not a Number. Reload and try again");
} else {
// build an HTML message
message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
  
// write message to web page
document.write(message);

}