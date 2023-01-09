console.log(10);
let x = 5; 
let shoeSize = x;
console.log(shoeSize);

//Very easy//
let gasPrices = 10;
let newGasPrices = 5;
console.log(`gas prices have increased by ${gasPrices - newGasPrices}`);

//Easy//
let myName = `Cameron`;
let otherName = `Andres`;
console.log(`${myName}'s name is longer than ${otherName} by ${1}letter`)

//Medium//
let userInput = prompt("write something");

 if (userInput === userInput.toUpperCase) {
    console.log("You Are Shouting");
 } else if (userInput === userInput.toLowerCase) ;{
    console.log ("you are Whispering");
 } 
//   else { 
    console.log ("you are talking normally");
//  }

//Hard//
function add(number, other)
{console.log ("answer is:", number + other)
}
add(5,9)

function subtract(number2, option2 )
{console.log ("answer is:", number2 - option2)
}
subtract(30,15)

function multiply(number3, other3)
{console.log ("answer is:", number3 * other3)
}
multiply(5,10)

function divide(number4, other4)
{console.log ("answer is:", number4 / other4)
}
divide(30,2)

//very hard//
let number5 = prompt("enter number");
let opp1 = prompt("enter math function");
let number7 = prompt("enter other number");
let answer = null;

if (opp1 === "+") {
    answer = add(number5, number7);
} else if (opp1 === "-") {
    answer= subtract(number5, number7);
} else if (opp1 === "*") {
    answer= multiply(number5,number7);
} else(opp1 === "/") ;{
    answer = divide (number5,number7);
}

