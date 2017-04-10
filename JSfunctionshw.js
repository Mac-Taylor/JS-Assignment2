
// ** PROBLEM 1 | 'sum' function







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

for (let count = 0; count < phraseSplit.length; count++){
    
         if (phraseSplit[count].length > longest.length) {
                longest = phraseSplit[count];
         }    
}

return longest

}

let answer = longestWord(phrase);
console.log (answer)
