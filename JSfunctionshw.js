
// ** PROBLEM 1 | 'sum' function

let number1 = 5;
let number2 = 12;
let sum1 = 0;


function sum(value1, value2) {

    sum1 = number1 + number2;

    return sum1;
}

let answer = sum(number1, number2);
console.log(answer) 

// ** PROBLEM 2 | 'avg' function







// ** PROBLEM 3 | 'greaterThan' function







// ** PROBLEM 4 | 'secondLargest' function







// ** PROBLEM 5 | 'containsVowel' function







// ** PROBLEM 6 | 'pigLatin' function 







// ** PROBLEM 7 | 'longestWord' function

let phrase = 'Foreigner is an OK band';

function longestWord(string) {

let phraseSplit = string.split(' ');
let longest = phraseSplit[0];

for (let count7 = 0; count7 < phraseSplit.length; count7++){
    
         if (phraseSplit[count7].length > longest.length) {
                longest = phraseSplit[count7];
         }    
}

return longest

}

let answer7 = longestWord(phrase);
console.log (answer7)
