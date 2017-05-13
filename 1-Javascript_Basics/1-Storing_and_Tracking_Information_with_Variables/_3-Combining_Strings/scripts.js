var visitor = prompt('What is your name?');
var message = 'Hello ' + visitor + ". Welcome to Treehouse.";
message += "We are so glad that you came by to visit, ";
message += visitor;
message +=  ". Please come again, When you want to learn some more."
document.write(message);


// 3 different way to do the same thing


//  way 1 -  message += "We are so glad that you came by to visit, " + visitor + ". Please come again, When you want to learn some more.";
//  way 2 -  var message = 'Hello ' + visitor + ". Welcome to Treehouse." + "We are so glad that you came by to                   visit, " + visitor + ". Please come again, When you want to learn some more.";
//  way 3 -  message = message + "We are so glad that you came by to visit, " + visitor + ". Please come again, When you want to learn some more.";



//   var visitor = prompt('What is your name?');
//   var message = 'Hello ' + visitor + ". Welcome to Treehouse." + "We are so glad that you came by to visit, " + visitor + ". Please come again, When you want to learn some more.";
//   document.write(message);



//    var visitor = prompt('What is your name?');
//    var message = 'Hello ' + visitor + ". Welcome to Treehouse.";
//    message = message + "We are so glad that you came by to visit, " + visitor + ". Please come again, When you want to learn some more.";
//    document.write(message);
