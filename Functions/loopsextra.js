

//Task 1

var e = 3;
var a = [5, -4.2, 3, 8];
var contains = false;

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        contains = true;
        break;
    }
}
if (contains) {
    console.log("Yes");
} else {
    console.log("No");
}

//task 2

var a = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] *= 2;
    }
}
console.log(a);

//task 3


var array = [4, 2, 2, -1, -6];
var minElement = 0;
var minIndex = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] < minElement) {
        minElement = array[i];
        minIndex = i;
    }
}


console.log("Minimum element: " + minElement + ", at index: " + minIndex);

//task 4


var array = [4, 2, 2, -1, 6, ];
var minElement = 9007199254740991;
var largerElement = 0;


for(var i = 0; i < array.length; i++) {
    var currentElement = array[i];

    if (currentElement < minElement) {
        largerElement = minElement;
        minElement = currentElement;
    }
}

console.log(minElement, largerElement);

//task 5

var a = [3, 11, -5, -3, 2];
var b = 0;

for (var i =0; i < a.length; i++){
    if (a[i] > 0){
        b+=a[i];
    }
}
console.log(b);





