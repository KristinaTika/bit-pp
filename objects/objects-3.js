// zadatak 1 Write a functional expression that duplicates each element of a given array.



function cloneArray(input) {

    var output = [];
    input.forEach(function (element) {
        output.push(element, element)
    });

    return output;
}

console.log(cloneArray([2, 4, 7, 11, -2, 1]));


// zadatak 2 Write a functional expression that removes all duplicates in a given array.


function removeDuplicate(input) {
    var output = [];







    return output;
}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

// Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

function hasArrayOddNumberOfElements(input) {

    return input.length % 2 === 1;

}

console.log(hasArrayOddNumberOfElements([1, 2, 9, 2, 1, 6]));

// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4

function countLessElementsThanMiddleElement(input) {

    var counter = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] < (input.length + 1) / 2) {
            counter++;
        }
    }
    return counter;
}
console.log(countLessElementsThanMiddleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }

function isSmaller (value) {
    return output = {
        minValue: Math.min(... value),
        minLastIndex: value.lastIndexOf(Math.min(...value))
    }
}
console.log(isSmaller([2, 3, 8, -2, 11, 4]));


//

/*Write a function that finds all the elements in a given array less than a given element. 
Input: [2, 3, 8, -2, 11, 4], 6 
Output: [2, 3, -2, 4]
Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
    Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
Output: [’Programming’, ‘product’]

Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. */

function isSmaller(value) {
    return value < 9;
  }
  
  var filtered = [2, 3, 8, -2, 11, 4].filter(isSmaller);

console.log(filtered);




// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
        Output: [’Programming’, ‘product’]
    
    
        function proSubstring (input) {

            var output= [];

            for ( var i = 0; i < input.length; i++){
                if (input[i].slice(0, 4) === "pro") {
                    output[i] += input[i];
                }
            }

            return output;
        }

        console.log(proSubstring(["JavaScript", "Programming", "fun", "product"]));



// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,


    function List (name, price){
        this.name = name;
        this.price = price;
    }

    var list3 = new List ("apples", 100);
    var list1 = new List ("milk", 80);
    var list2 = new List ("bananas", 150);
    var list = [];
    list.push(list3);
    list.push(list1);
    list.push(list2);
    console.log(list);

