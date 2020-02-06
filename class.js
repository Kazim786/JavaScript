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

// let arr = [2, 5, 6, 7, 8];

// for (let index = 0; index < arr.length; index++){
//     console.log(arr[index])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const companies = [
//     {name: "Company One", category: "Finance", start: 1981, end: 2003},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//     ];
//     const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//     companies.forEach(function(company){
//         console.log(company.name)
//     })

//Map

//The old way
let arr = [0, 1, 2, 3, 4, 5];
// let newArr = []
// for (let index = 0; index < arr.length; index++){
//     newArr.push(2 * arr[index]);

// }

// let newArr = arr.map(function(element){
//     return 2 * element;

// })

// console.log(newArr);

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
    ];

    let newArray = companies.map(function(element){
        element.start = element.start - 5
        return element

    })
    console.log(newArray)