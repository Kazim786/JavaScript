// var a = 4;
// var b = 5;

// function add(a, b){
//     console.log(a + b)

//     return a+b;
// }

// var result = add(4, 5);

// var a = 4;
// var b = 5;

// var c = a;

// c = 88;

// console.log(a);
// console.log(c);

myArrayOrig = [1, 2, 3, 6, 7];

myArrayCopy = myArrayOrig;

console.log(myArrayOrig);
console.log(myArrayCopy);
myArrayOrig[0] = 99;
console.log(myArrayOrig);
console.log(myArrayCopy);
//the myArrayCopy also changed because its being passed by reference.


