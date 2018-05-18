
//task 1
var weather = "rainy";

switch (weather) {
    case "rainy":
    case "cold":
        console.log("it's a bad weather!");
        break;
    case "sunny":
        console.log("it's sunny.");
        break;
    default:
        console.log("some new weather type");
}

//task 2

var dayOfTheWeek = 5;
switch (dayOfTheWeek) {
    case 1:
        console.log("it's monday");
        break;
    case 2:
        console.log("it's tuesday");
        break;
    case 3:
        console.log("it's wednesday");
        break;
    case 4:
        console.log("it's thursday");
        break;
    case 5:
        console.log("it's friday");
        break;
    case 6:
        console.log("it's saturday");
        break;
    case 7:
        console.log("it's sunday");
        break;
    default:
        console.log("input must be a number between 1 and 7.");
}

//task 3
var dayOfTheWeek = 5;
switch (dayOfTheWeek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("it's weekday");
        break;
    case 6:
    case 7:
        console.log("it's weekend");
        break;
    default:
        console.log("input must be a number between 1 and 7.");
}

//task 4

var month = 5;
switch (month) {
    case 1:
        console.log("it's january");
        break;
    case 2:
        console.log("it's february");
        break;
    case 3:
        console.log("it's march");
        break;
    case 4:
        console.log("it's april");
        break;
    case 5:
        console.log("it's may");
        break;
    case 6:
        console.log("it's june");
        break;
    case 7:
        console.log("it's july");
        break;
    case 8:
        console.log("it's august");
        break;
    case 9:
        console.log("it's september");
        break;
    case 10:
        console.log("it's october");
        break;
    case 11:
        console.log("it's november");
        break;
    case 12:
        console.log("it's december");
        break;
    default:
        console.log("input must be a number between 1 and 12.");
}

//task 5

var season = 5;
switch (season) {
    case 1:
    case 2:
    case 3:
        console.log("it's winter.");
        break;
    case 4:
    case 5:
    case 6:
        console.log("it's spring.");
        break;
    case 7:
    case 8:
    case 9:
        console.log("it's summer.");
        break;
    case 10:
    case 11:
    case 12:
        console.log("it's autumn.")
    default:
        console.log("input must be a number between 1 and 12.");
}

//task 6
var grade = "h";
switch (grade) {
    case "a":
        console.log("good job");
        break;
    case "b":
        console.log("pretty good");
        break;
    case "c":
        console.log("passed");
        break;
    case "d":
        console.log("not so good");
        break;
    case "f":
        console.log("failed");
        break;
    default:
        console.log("unknown grade.");
}

 // task 7

 var a = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
 console.log(a[5]);
 console.log(a[9]);
 console.log(a[0]);
 //task 8

 var a= ["monday", "tuesday","wednesday", "thursday", "friday", "saturday", "sunday"];
 console.log(a[6]);

 //task 9

 var a=[2, -4, 5, -2, -11];
 console.log(a[1],3,4);

 