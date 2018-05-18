//task 1
console.log(!!null);
console.log(!!0);
console.log(!!'blabla');
console.log(!!-56);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!true);

//task 2
console.log(true&&true);
console.log(true||true);
console.log(true&&false);
console.log(true||false);
console.log(false&&true);
console.log(false||true);
console.log(false&&false);
console.log(false||false);

//task 3
var age = -5
console.log(age>0 && age<120);

//task 4
var speed = 85;
console.log(speed>=60 && speed <=120);

//task 5
var num = "f"/56;
if (typeof num === "number" && !isNaN(num)) {
    if (num % 2 === 0) {
        var res = num / 2;
        console.log(res);
    } else {
        console.log ("x");
    }
} else {
    console.log("it is not a number");
}
//task 6
var a =-5,
    b = -2,
    c = -6,
    d = 0,
    e = -1,
    max = a;
if (max < b) {
   max = b; 
}
if (max < c) {
    max = c;
}
if (max < d) {
    max = d;
}
if (max < e) {
    max = e;
}
console.log(max);   

//task 7

var a = 0,
    b = -1,
    c = 4,
    max;
if (a>b) { 
    max = a; 
    a = b; 
    b = max;
}
if (b>c) {
    max = b; 
    b = c; 
    c = max;
}
if (a>c) {
    max = a; 
    a = c;  
    c = max; 
}
console.log(c,b,a);

//task 8

var a = 3,
    b = 0,
    c = 2,
    res = a*b*c;
if (res > 0) {
    console.log ("the sign is +");
}else if (res <0) {
    console.log ("the sign is -");
}else {
    console.log("product is 0");
}

//task 9 
var a = -22,
    b = 22;
if (a>b) {
    console.log(a);
} else if(b>a) {
    console.log(b);
} else {
    console.log("equal numbers");
}

// task 10

var num = 15;

if (num % 3 ===0 && num % 5 ===0) {
    console.log (num);
}else {
    console.log("not divisible by 3 and 5");
}

//task 11

var num = 6;
if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}




