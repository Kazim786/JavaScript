//1
// function madlib(name, subject){
// var output = "Hello my name" + name + "is, I am taking " + subject;
// // console.log(output);
// return output; 

// } 
// var Kazim = "Kazim";
// var DigitalCrafts = "DigitalCrafts";
// console.log(madlib(Kazim, DigitalCrafts));

//2

    
// function tipAmount(bill, serviceLevel){
    
    
//     if (serviceLevel == "Good"){
//         var tip = bill * .20;
//     }
//     else if (serviceLevel == "Fair"){
//         var tip = bill * .15;
//     }
//     else if(serviceLevel == "Bad"){
//         var tip = bill * .10;
//     }
//     else{
//         console.log("Choose between Good, Fair, or Bad.");
//     }
// return(tip);
// }
// console.log(tipAmount(100, "Good"));

//3
// function totalBill(bill, serviceLevel){
    
//     if (serviceLevel == "Good"){
//         var tip = bill * .20;
//         total = tip + bill

//     }
//     else if (serviceLevel == "Fair"){
//         var tip = bill * .15;
//         total = tip + bill
//     }
//     else if(serviceLevel == "Bad"){
//         var tip = bill * .10;
//         total = tip + bill
//     }
//     else{
//         console.log("Choose between Good, Fair, or Bad.");
//     }
// return(total);
// }
// console.log(totalBill(100, "Good"));

//4

function printNumbers(1, 10)
{
    myList = []
    var count = 1;
while (count < 10){
    console.log(count);
    count = count + 1;
    myList.push(count);

}
return count;
}
theList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 console.log(printNumbers(theList));