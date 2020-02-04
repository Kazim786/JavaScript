// // {/* <script>
// //     document.body.innerHTML = 
// //     "Hello World!";
// // </script> */} this came about because we were using js in another html file (the class.html file)

// // console.log('Hello class') /*to make it run type node and then name of file*/

// // var school = "digital crafts" 

// // doing strings in js^^

// // var myString = "Kazim";
// // var myInt = 72;
// // var myBool = true;
// // console.log(myString.length)
// var num = 1; //integer
// var num2 = 1.2; //float
// var myString = "school";
// // console.log(myString.length)
// var concat = "hello" + "world";
// console.log(concat)
// console.log(concat.indexOf("world"));

// var boolean = !true; //to make false add ! in front of true
// console.log(boolean);
// var not = !boolean //now boolean will return back to being true. remember ! makes boolean do opposite

// var and = boolean && false; //you need two ampersands for ANDS 
// console.log(and)

// var or = boolean || false; //you need 2 pipes for OR 
// console.log(or)

//to write a condition:

// var a = 4
// var b = 4

// if(a == b){
//     console.log("Equality")

// }

// var age = 20

// if (age >= 21){
//     console.log("You are allowed to make a membership")
// }
// else if(age < 18){
//     console.log("Arey yaar")
// }
// else{
//     console.log("Sorr-e")
// }

// var expr = "Papayas";
// if(expr == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(expr == 'Mangoes')
// {
//     console.log("Mangoes")
// }
// else if(expr == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else
// {
//     console.log('Sorry, we are out of ' + expr + '.');
// }
// var expr = "Papayas";
// switch (expr) {
//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound.')
        
    
//         break;
//     case "Mangoes":
//         console.log("Mangoes")
//         break;
    
//     case "Papayas":
//         console.log('Mangoes and papayas are $2.79 a pound.');
//         break;
//     default:
//         console.log('Sorry, we are out of ' + expr + '.');
//         break;
//   }

// var count = 0;
// while (count < 10){
//     // count = count + 1; OR count++
//     count++
//     console.log(count);
// }

// for(var count = 0; count < 10; ++count){
//     console.log(count);
//     for(var inner = 0; inner < 3; inner++){
//         console.log(inner);
//     }
// }

// var lottoNum = [];

// lottoNum.push(3);

// console.log(lottoNum);

// lottoNum.push(34);

// console.log(lottoNum);

// // lottoNum= [3, 34] if we pop the last one will be deleted.

// lottoNum.pop();
// console.log(lottoNum);

var lottoNums = [23, 11, 43, 19, 37, 16];
// console.log(lottoNums[2]);
// console.log(lottoNums[20]); //will give you an undefined.
// lottoNums[1] = 4; //to change a number at any given position.
// console.log(lottoNums); 
// var theShiftedNumber = 
// lottoNums.shift();
// console.log(theShiftedNumber); //shift removes the first number in the array,

// splicing 

var arrayOfSplicedValues = lottoNums.splice(2, 1); //SPLICING DOES NOT MODIFY THE ORIGINAL LIST!!
console.log(arrayOfSplicedValues);