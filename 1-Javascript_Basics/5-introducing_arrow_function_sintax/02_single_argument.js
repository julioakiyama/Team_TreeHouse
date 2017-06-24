//function square(x) {
//    return x * x;
//}

//ABOVE ARE THE SAME AS ...

const square = x =>  x * x;




//function cube(x) {
//    return square(x) * x;
//}

//ABOVE ARE THE SAME AS ...


const cube = x =>  square(x) * x;

