const result = [];

const addResult = (
    No,
    function_name,
    ...inputs
) => {
    var output = function_name(...inputs);
    if (typeof output === "object") {
        output = JSON.stringify(output);
    }
    result.push(No + "." + function_name.name);
    result.push("  Example input: " + inputs);
    result.push("  Example output: " + output);
    result.push("  -------------------");
}

const renderResult = () => {
    document.getElementsByClassName("result")[0].innerHTML = result.join("<br>");
}




// 1. reverse a number
const reverseNumber = (num) => {
    num = String(num);
    let res = [];
    for (let i = num.length - 1; i >= 0; i--) {
        res.push(num[i]);
    }
    return Number(res.join(""));
};

console.log(reverseNumber(12345));
addResult(1, reverseNumber, 12345);



// 2. check palindrome 

function checkPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}

console.log(checkPalindrome("madam"));
addResult(2, checkPalindrome, "madam");



// 5. convert the first letter of each word to uppercase

function isLowerCase(char) {
    return char.charCodeAt(0) >= "a".charCodeAt(0) && char.charCodeAt(0) <= "z".charCodeAt(0);
}

function convertFirstLetterToUpperCase(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1 && str[i] === " " && isLowerCase(str[i + 1])) {
            res.push(str[i]);
            res.push(str[i + 1].toUpperCase());
            i++;
        } else {
            res.push(str[i]);
        }
    }
    return res.join("");
}

console.log(convertFirstLetterToUpperCase("the   quick  brown fox"));
addResult(5, convertFirstLetterToUpperCase, "the   quick  brown fox");


// 6. find the longest word in a string

function findLongestWord(str) {
    let res = str.split(" ");
    let max_length = 0;
    let longest_index = 0;

    for (let i = 0; i < res.length; i++) {
        if (res[i].length > max_length) {
            max_length = res[i].length;
            longest_index = i;
        }
    }
    return res[longest_index];
}

console.log(findLongestWord("Web Development Tutorial"));
addResult(6, findLongestWord, "Web Development Tutorial");

// 7. count the number of vowels in a string
function countVowels(str) {
    let vowels = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels[str[i]]) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("The quick brown fox"));
addResult(7, countVowels, "The quick brown fox");

// 9. return the types of an argument
function getTypeOfArguments(argument) {
    return typeof argument;
}

console.log(getTypeOfArguments());
addResult(9, getTypeOfArguments, "argument");


// 10. n*n identity matrix
function identityMatrix(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0);
        }
        res.push(row);
    }
    return res;
}


const iM = identityMatrix(4);

for (let i = 0; i < iM.length; i++) {
    console.log(iM[i]);
}
addResult(10, identityMatrix, 4);



// 15. calculate the value of bn, where n is the exponent and b is the bases
function calculateExponent(b, n) {
    return Math.pow(b, n);
}

console.log(calculateExponent(2, 3));
addResult(15, calculateExponent, 2, 3);


// 17. number of occurrences of each letter in a string

function isLetter(char) {
    return (char.charCodeAt(0) >= "a".charCodeAt(0) && char.charCodeAt(0) <= "z".charCodeAt(0))
        || (char.charCodeAt(0) >= "A".charCodeAt(0) && char.charCodeAt(0) <= "Z".charCodeAt(0));
}


function countOccurrences(str) {
    let res = {};
    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            if (res[str[i]]) {
                res[str[i]]++;
            } else {
                res[str[i]] = 1;
            }
        }
    }
    return res;
}

console.log(countOccurrences("the"));
addResult(17, countOccurrences, "the");

// 22. count the occurrences of a letter in a string
function countOccurrencesOfLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrencesOfLetter("microsoft.com", "o"));
addResult(22, countOccurrencesOfLetter, "microsoft.com", "o");


renderResult();
