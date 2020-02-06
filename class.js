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

// myArrayOrig = [1, 2, 3, 6, 7];

// myArrayCopy = myArrayOrig;

// console.log(myArrayOrig);
// console.log(myArrayCopy);
// myArrayOrig[0] = 99;
// console.log(myArrayOrig);
// console.log(myArrayCopy);
//the myArrayCopy also changed because its being passed by reference.


//class backs
// function myFunc(){
//     console.log("hello");
//     return "hello";
// }
// let hello = myFunc();
// console.log(myFunc);

// let add = function(num1, num2){
//     return num1 + num2;
// }

// let substract = function(num1, num2){
//     return num1-num2;
// }

// let calc = function(num1, num2, opFunction){
//     return opFunction(num1, num2)

// }

// let result = calc(3, 4, add) //add here isnt the function add because the parenthesis werent used
// console.log(result);

// let sum = calc(3, 4, substract)
// console.log(sum)

//Arrays

let arr = [2, 5, 6, 7, 8];

for (let index = 0; index < arr.length; index++){
    console.log(arr[index])
}

arr.forEach(function(element){
    console.log(element);
})

