"use strict"


// jedna funkcija:

function putMinElementAtNBeginning(numbers){

    var numbers=[3, 5, 1, 2, 6, 2, 9];

    for (var i = 0; i < numbers.length-1; i++){
        var position = i;

        for (var j = i; j < numbers.length;j++){  
            if (numbers[position] > numbers[j]) {
                position = j;
            } 
        }

    var tmp = numbers[i];
    numbers[i] = numbers[position];
    numbers[position] = tmp;

    }

    return numbers;
}

console.log(putMinElementAtNBeginning([3,5,1,2,6,2,9]));



// funkcija u funkciji:


function filterNumbers(numbers, shouldIAddTheNumber) {

    var filteredNumbers=[];

    for (var i=0; i< numbers.length; i++) {
        if (!shouldIAddTheNumber(numbers[i])){
            continue;
        }

        filteredNumbers[filteredNumbers.length]= numbers[i];
    }

    return filteredNumbers;
}
    function conditionFunction(element){
        return (element !=="l" || element ==8);
}

console.log(filterNumbers("hello", conditionFunction));



// drugi nacin


function filterNumbers(numbers, shouldIAddTheNumber) {

    var filteredNumbers=[];

    for (var i=0; i< numbers.length; i++) {
        if (!shouldIAddTheNumber(numbers[i])){
            continue;
        }

        filteredNumbers[filteredNumbers.length]= numbers[i];
    }

    return filteredNumbers;
}
    function conditionFunction(element){
        return !isNaN(element) && isFinite(element);
}

console.log(filterNumbers([2, 3, NaN, Infinity, true], conditionFunction));



// treci nacin:


function filterNumbers(numbers, shouldIAddTheNumber) {

    var filteredNumbers=[];

    for (var i=0; i< numbers.length; i++) {
        if (!shouldIAddTheNumber(numbers[i])){
            continue;
        }

        filteredNumbers[filteredNumbers.length]= numbers[i];
    }

    return filteredNumbers;
}
    function conditionFunction(element){
        return (element !==3 && element !==9);
}

console.log(filterNumbers([3,5,1,2,6,4,9], conditionFunction));


//cetvrti nacin:


function transformValues(numbers, transformerFunction) {

    var transformed=[];

    for (var i=0; i< numbers.length; i++) {
       transformed[transformed.length] = transformerFunction(numbers[i]);

    }

    return transformed;
}
    function transformerFunction(element){
        return element * 2 + 3;

}

console.log(transformValues([2,3,4,5], transformerFunction));



// zadatak Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	//Input array: [4, 5, 11, 9]
    //Output array: [ 9, 5, 11, 4]

function noviNiz (inputArr){

  var outputArr=[];

    for (i=0; i< inputArr.length; i++){

         outputArr[0] = inputArr[inputArr.length-1];
        outputArr[inputArr.length-1]= inputArr[0];
          
         outputArr[1] = inputArr[1];  
         outputArr[2] = inputArr[2]; 
        
        }
    return outputArr;
}

console.log(noviNiz([4, 5, 11, 9]));


// zadatak 2  Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
//Input: 4 5
//Output: 20 

function povr(a,b) {
 return a * b ; 

}

console.log(povr(5,8));


// zadatak 3 Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
//	Input: prograMming
//	Output: progra**ing, 2

function replaceStar(inputStr) {
    var outputStr='' ;
     var pos = 0 ;
    for(var i = 0 ; i < inputStr.length ; i ++  ) {
        if(inputStr[i] === 'm' || inputStr[i] === 'M') {
           pos++; 
           outputStr += '*'; 
        }else {
            outputStr += inputStr[i];
        }
    } 
return (outputStr + pos);
}

console.log(replaceStar('prograMming'));

// 4. zadatak Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// Output: pera.peric@gmail.com

function mail(name , surname) {

    var form = name + '.' + surname + '@gmail.com' ;
    return form ;

}

console.log(mail('kristina' , 'butkovic')) ;


// 5  
//Write a function that returns a function that calculates a decimal value of the given octal number. 
//Input: 034
//Output: 28

function octalNum(arguments1){

       return arguments1;
     }

function broj2() {

      return parseInt(octalNum(), 8);
    }
   
 console.log(octalNum(34));
 
 function broj1 (numbers){
     var  dec = parseInt(numbers,8);
     return number;
 }
 function broj2(broj1){
     return broj1();
 }
console.log(broj2(54));