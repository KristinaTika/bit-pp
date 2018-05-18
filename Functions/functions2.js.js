

//task 1

function isString(str) {
    if (typeof str === "string") {
        return true;
    }
    return false;
}

console.log(isString("sdfdsfs"));

// task 2

function blankstring(a) {
    if (typeof a === "string" && a === "") {

        return true;
    }
    else if (a !== "string" && a !== "") {

        return false;
    }
}

console.log(blankstring(""));

// task 3

function concatenates(str, num) {
    var res = "";
    for (var i = 1; i <= num; i++) {
        res += str;
    }
    return res;
}
console.log(concatenates("Sveska", 5));

//task 4

function numberOfLetter(str, num) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (num == str[i]) {
            counter++;
        }
    }
    return counter;
}
console.log(numberOfLetter("jasdoiasjdoajd", "j"));

// task 5

function firstOccurrence(letter, str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            return i;
        }
    }
    return -1;
}
console.log(firstOccurrence("r", "yggiyirty777"));

//task 6

function firstOccurrence(letter, str) {
    for (i = str.length; i <= str.length; i--) {
        if (str[i] === letter) {
            return i;
        }
    }
    return -1;
}
console.log(firstOccurrence("m", "olovkam"));

//task 7


function convert(str) {
    var array = [];
    for (i = 0; i < str.length; i++) {
        array[i] = str[i];
        if (array[i] == " ") {
            array[i] = null;
        }
    }
    return array;
}
console.log(convert("kr ist ina"));

// task 8

function numberparameter(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num !== 1;
}
console.log(numberparameter(8));

// task 9

function separator(str, sep) {

    var newString="";

    for (i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newString += sep;
        }else{
                newString += str[i];     
           } 
    
}
return newString;
}

console.log(separator("daliradi", "-"));

//task 10

function createNewString (n, str){

    var newString = "";

    for (i = 0; i <= n; i++){
            newString += str[i];   
    }
        newString += "...";

      return newString;
}
console.log(createNewString(5,"tastatura"));


// zadatak 11 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

 function stringToArray(arrayOfStrings){
    var arrayOfNumbers=[];
    var pozicija = 0;

     for (var i =0; i < arrayOfStrings.length; i++){
         var element = arrayOfStrings[i];
         var number = parseFloat(element);

         if (!isNaN(number) && isFinite(number)){
            arrayOfNumbers[i - pozicija] = number;
         } else {
             pozicija ++;
         }
     }
     return arrayOfNumbers;
 }

 console.log(stringToArray(["1", "21", undefined, "42", "1e+3", Infinity]));

 // zadatak 12 Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

 function calculateAge(yearOfBirth) {
    var age = parseInt(2017 - yearOfBirth);
    return age;
 }
 
 function isInReitrement(age, gender) {
    gender = gender || "m";
 
    if (gender === "m") {
        return age >= 65;
    } else if(gender === "f") {
        return age >= 60;
    }
 }
 
 function untilRetirement(yearOfBirth, gender) {
    var age = calculateAge(yearOfBirth);
    var gender = gender || "m";
 
    if (isInReitrement(age, gender)) {
        return "Person is already in retirement"
    }
 
    if (gender === "m") {
        return 65 - age;
    } else {
        return 60 - age;
    }
 }
 
 console.log(untilRetirement(1989, "f"));

 // zadatak 13	Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.

 function humanizeNumber(num) {
    if (typeof num == "undefined") {
        return;
    }
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }
    switch (num % 10) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
    }
    return num + "th";
}

console.log(humanizeNumber(301345));
