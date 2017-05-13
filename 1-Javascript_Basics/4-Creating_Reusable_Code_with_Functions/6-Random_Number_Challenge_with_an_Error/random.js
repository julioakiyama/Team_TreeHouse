function getRandomNumber (upper, lower) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error('Both arguments must be number');
  }
  return   Math.floor(Math.random() * (upper - lower + 1)) + lower ; 
}


console.log( getRandomNumber (50,1000000) );
console.log( getRandomNumber (30,100000) );
console.log( getRandomNumber ('tweenty',1000) );
console.log( getRandomNumber (10,'thousand') );