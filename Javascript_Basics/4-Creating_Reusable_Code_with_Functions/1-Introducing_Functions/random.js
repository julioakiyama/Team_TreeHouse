function alertRandom() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
  alert(randomNumber);
}
alertRandom();
alertRandom();
alertRandom();
alertRandom();

/*
COMMON WAY TO WRITE FUNCTION as you can see on anonymous.js


var alertRandom = function() {
  var randomNumber = Math.floor(Math.random() * 6 ) + 1;
  alert(randomNumber);
  };
  alertRandom();
  
  */