//task1
//Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.

function countVowels(inputStr) {
    var counter = 0;

    for (var i = 0; i < inputStr.length; i++) {
        if (inputStr[i] === "a"
            || inputStr[i] === "e"
            || inputStr[i] === "i"
            || inputStr[i] === "o"
            || inputStr[i] === "u"
        ) {
            counter++;
        }
    }
    return counter;
} console.log(countVowels("akdghakhyzl"));


//task2
//Write a function that combines two arrays by alternatingly taking elements.

function combineArrays(inputArr1, inputArr2) {

    var newArr = [];

    for (var i = 0; i < inputArr1.length && i < inputArr2.length; i++) {

        newArr += inputArr1[i] + inputArr2[i];
    }
    return newArr;
}
console.log(combineArrays(["a", "b", "c"], [1, 2, 3]));


//task 3
//Write a function that rotates a list by k elements.

function rotateListItems(inputArr, counter) {

    var newArr = [];

    for (var i = counter, j = 0; i < inputArr.length; i++, j++) {
        newArr[j] = inputArr[i];
    }

    for (var k = 0; k < counter; k++) {
        newArr[newArr.length] = inputArr[k];    
    }

    return newArr;
}
console.log(rotateListItems([1, 2, 3, 4, 5, 6], 3));

//task 4
//Write a function that takes a number and returns array of its digits.

function numberToArray(num){
    var newStr=""
}

console.log(2*0);
function as(a, b){
   return a+b;
}
console.log(as(12));