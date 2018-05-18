

function sumNumbers (arrayOfNumbers, msg) {
    var sum = 0;

    for (var i =0; i <arrayOfNumbers.length; i++){
        sum += arrayOfNumbers[i];  
    }
    console.log(msg + sum);
     return sum
}
var numbers= [10,3,4,7, 6, 24, 13];
console.log(sumNumbers(numbers, "Result is: "));

//task 1

function maximum (num1, num2){
    var result;
    if (num1>num2){
        result = num1
    }else {
        result = num2
    }
    return result;
}
console.log(maximum(14,9));

//task 2 

function odd (num){
    if (num%2 !==0){ 
    result = num + "is odd";
} else {
     result = num + "is even";
}
 return result
}
console.log(odd(7.6));

//task 3

function isThreeDigits (num){
    if (num > 99 ){
    return true;
    }else {
        return false
    }
}
console.log(isThreeDigits(453));

//task 4

function arithmetic (){
    var sum=0;
    
    for (var i =0; i <arguments.length; i++){
        sum += arguments[i];
    }
    return (sum/arguments.length)
}
console.log(arithmetic(2,3,4,5,6,7,8));

//task 7

function numberOfDigits(num){
    var numToString = num + "";
    return numToString.length
}
console.log(numberOfDigits(379876575675679));

// task 8

function appearance (num, array){
    var brojac=0;
    for (var i=0; i < array.length; i++){
        if (num == array[i]){
            brojac++
        }
    }
    return brojac
}
console.log(appearance(3,[3,4,3,6,7,8,9]));

// task 9

function sum(array){
    var sum=0;
    for (var i=0; i<array.length; i++){
        if (array[i]%2 !==0){
            sum+=array[i]
        }
    }
    return sum
}
console.log(sum([2,3,4,5,6,7,8,9]));

// task 10

function stringNumOfLetters (letter,string){
    var brojac=0;
    for(var i=0; i<string.length; i++){
        if (letter ==string[i] || letter.toUpperCase() == string[i]){
            brojac++;
        }
    }
    return brojac;
}
console.log(stringNumOfLetters("t", "tastaturaT"));


// task 11


function multipleString(num, string){
    var res = "";
for (var i =0; i<= num; i++){
    res += string;
}
return res;
}
console.log(multipleString(10,"jovica"));

//task 5

function square(num){
    var result= "";
    var top="";
    var middle="";
    for(var i=0; i<num; i++){
        top += "*";
        if(i === 0 || i === num-1){
            middle += "*";
        }else {
            middle += " ";
        }
    }
    return top + middle + top
}

console.log(square(5));

console.log("*****\n"+"*"+" "+" "+" "+"*\n"+"*****");

