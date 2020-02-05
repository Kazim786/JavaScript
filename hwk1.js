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

    
function tipAmount(){
    let question = prompt("What was the level of your service? Good, Fair, or bad?");
    
    if (question == "Good"){
        var tip = .20;
    }
    else if (question == "Fair"){
        var tip = .15;
    }
    else if(question == "Bad"){
        var tip = .10;
    }
    else{
        console.log("Choose between Good, Fair, or Bad.");
    }
return(tip);
}
var good = "Good";
console.log(tipAmount(good))