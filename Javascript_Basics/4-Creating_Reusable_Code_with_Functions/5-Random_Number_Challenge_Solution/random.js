function getRandomNumber (upper, lower) {
  return   Math.floor(Math.random() * (upper - lower + 1)) + lower ; 
}


console.log( getRandomNumber (50,100) );
console.log( getRandomNumber (40,1000000) );
console.log( getRandomNumber (30,100000) );
console.log( getRandomNumber (20,1000) );
console.log( getRandomNumber (10,10000) );