/*var sum = 0;
var number = 1;
while (number < 1000) {
    if (number % 3 === 0 && number % 5 === 0) {
        sum += number;
    }
    number++;
}
console.log(sum);*/

/*var x = [4, 3, 6, 8 ];
var sum = 0;
var product = 1;
var i = 0;
while (i < x.length) {
    sum = sum + x[i];
    product *= x[i];
    i++;
}

console.log(sum,product);*/

/*var i = 0;
while (i <= 15) {
    if(i % 2 === 0) {

       console.log(i + " je paran"); 
    }
    else {
        console.log(i + " je neparan");
    }

    i++;
}*/

/*var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
for(var i = 0; i < x.length; i++) {
    console.log(x[i]);
} 
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
for (var i=0; i<a.length; i++){
    for (var j =0; j<a[i].length; j++){
        console.log(a[i][j]);
    }
}*/

var numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var squares = 1;
var sum = 0;

for (var i=0; i<20; i++){
    squares = numbers[i]* numbers[i];
    sum+=squares;
    console.log(squares);
     
}
console.log(sum);

var names = [80, 77,88, 95, 68];
var grades = ["f", "d", "c", "b","a"];

for (var i = 60; i<101; i+10){
     

    console.log(average);
}
