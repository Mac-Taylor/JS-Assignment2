
// ** PROBLEM 1 | 'sum' function

function sumFunction(value1, value2) {

    sum1 = value1 + value2;

    return sum1;
}

console.log(sumFunction(2, 3)); // returns 5, this one is done.
console.log(sumFunction(2, 11)); // returns 13

// DONE.

// =================================================================================================

// 02 | avg

// Write a function named avg that takes 3 parameters and returns the average of those 3 numbers.

// avg(1, 5, 9); // returns 5
// avg(4, 4, 4); // returns 4
// avg(10, 4, 1); // returns 5

function avg(x, y, z) {
    let nmbrs = [x, y, z];
    let average = (x + y + z) / nmbrs.length;
    return average;
}

console.log(avg(1, 4, 10)); // returns 5
console.log(avg(1, 4, 10, 2, 8)); // also returns 5

// DONE.

// =================================================================================================

// 03 | greaterThan

// Write a function called greaterThan that takes two parameters and returns true if the second parameter is greater than the first. Otherwise the function should return false.

// greaterThan(5, 6); // returns true
// greaterThan(4, 1); // returns false

function greaterThan(nmbr1, nmbr2) {
    if (nmbr2 > nmbr1) {
        return true;
    } else {
        return false;
    }
}

console.log(greaterThan(5, 6)); // returns true
console.log(greaterThan(4, 1)); // returns false

// DONE. 

// =================================================================================================

// ** PROBLEM 4 | 'secondLargest' function


function secondLargest(nmbrs){
    

}

// This one isn't done yet.


// =================================================================================================

// ** PROBLEM 5 | 'containsVowel' function

// Need help




// =================================================================================================

// ** PROBLEM 6 | 'pigLatin' function 

// Need help.



// =================================================================================================

// ** PROBLEM 7 | 'longestWord' function

let phrase = 'Foreigner is an OK band';

function longestWord(string) {

    let phraseSplit = string.split(' ');
    let longest = phraseSplit[0];

    for (let count7 = 0; count7 < phraseSplit.length; count7++) {

        if (phraseSplit[count7].length > longest.length) {
            longest = phraseSplit[count7];
        }
    }

    return longest

}

let answer7 = longestWord(phrase);
console.log(answer7)

// =============================================================================================

// ** HARD MODE - PROBLEM #8 | 'weave' function


// =============================================================================================

// ** HARD MODE - PROBLEM #9 | 'weave' function


// =============================================================================================

// ** HARD MODE - PROBLEM #10 | 'weave' function



// =============================================================================================

// ** HARD MODE - PROBLEM #11 | 'blackack' function

// only have this because we did it in class.

function blackjack(cards) {

    let sum = 0;

    for (let i = 0; i < cards.length; i++) {
        if (cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'K') {
            cards[i] === 10;
        }
        if (cards[i] === 'A') {
            cards[i] = 11;
        }
    }

    for (let i = 0; i < cards.legth; i++) {
        sum = sum + cards[i];
    }
    if (sum > 21) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] === 11) {
                cards[i]; 1;
            }
        }
    }

    sum = 0;
    for (let i = 0; i < cards.length; i++) {
        sum = sum + cards[i];
    }

    if (sum > 21) {
        return true;
    } else {
        return false
    }
}

console.log(blackjack([7, 3, 4]) + ' should be false');
console.log(blackjack([7, 3, 4, 8, 8, 9]) + ' should be true');
console.log(blackjack(['Q', 8, 'A', 7, 5]) + ' should be false');

// =============================================================================================

// ** HARD MODE - PROBLEM #12 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #13 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM - #14 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #15 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #16 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #17 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #18 | 'weave' function

// =============================================================================================

// ** HARD MODE PROBLEM #19 | 'weave' function