//                                              OBJECTS PRACTICALS



// 1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var myFavouriteCoffee = {

    name: "domaca",
    strength: "jaka koliko zelim da bude",
    flavour: "nista bez nesa",
    milk: "pozdrazumeva se",
    sugar: "samo beli secer"
}

console.log(myFavouriteCoffee);
console.log(myFavouriteCoffee.flavour);


// 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

var myFavouriteTvShow = {

    title: "The Walking Dead",
    actors: "Andrew Lincoln, Danai Gurrira, Norman Reedus, Chandler Biggs, Melissa McBride...",
    director: "Robert Kirkman, Scott M. Gimple",
    genre: "drama",
    popularity: "worldwide of course"
}

console.log(myFavouriteTvShow);
console.log(myFavouriteTvShow.actors);


// 3. Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.

function createComputerProgram(des, lang, git, status) {

    var computerProgram = {

        description: des,
        programingLanguage: lang,
        gitRepository: git,
        booleanStatus: status,

        printProgramRepository: function () {

            return computerProgram.gitRepository;
        },

        isCompleted: function () {

            return computerProgram.booleanStatus;
        }

    };

    computerProgram.isWrittenInJs = function () {

        return computerProgram.programingLanguage === "JS";

    }

    return computerProgram;
}

var jsProgram = createComputerProgram("programski jezik", "JS", "folder/folder/folder/objecs/practical.js", true);

console.log(jsProgram);

console.log(jsProgram.isCompleted());

console.log(jsProgram.isWrittenInJs());

console.log(jsProgram.printProgramRepository());


/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
    Add a method that prints out all the ingredients necessary for the meal preparation. 
    Add a method that checks if a meal can be prepared for 15 minutes. 
    Add a method that changes the type of cuisine to the given value. 
    Add a method that delete a given ingredient from the list of ingredients.  */


function createCulinaryRecipe(name, cuisine, complexity, list, prepTime, instructions) {

    var recipe = {

        name: name,
        typeOfCuisine: cuisine,
        complexity: complexity,
        list: list,
        preparingTime: prepTime,
        instructions: instructions,

        printIngredients: function () {

            return recipe.list;
        },

        if15Min: function () {

            return recipe.preparingTime < 15;
        },

        changeTypeOfCuisine: function (newTypeOfCuisine) {

            return typeOfCuisine = newTypeOfCuisine;
        },

        deleteIngredient: function (ingredient) {

            for (var i = 0; i < recipe.list.length; i++) {
                if (recipe.list[i] === ingredient) {
                    delete recipe.list[i];
                }
            }

            return recipe.list;
        }
    }

    return recipe;
}

var newRecipe = createCulinaryRecipe("Pizza", "Italian Food", "simple", ["bacon", "mozzarella", "oregano", "ketchup", "olives"], 30, "nesto nesto nesto");

console.log(newRecipe);

console.log(newRecipe.printIngredients());

console.log(newRecipe.if15Min());

console.log(newRecipe.changeTypeOfCuisine("bosanska"));

console.log(newRecipe.deleteIngredient("oregano"));


function createRecipe(name, type, complexity, list, prepTime, inst) {

    var recipe = {

        name: name,
        typeOfCuisine: type,
        complexity: complexity,
        listOfIngredients: list,
        preparingTime: prepTime,
        preparingInstructions: inst,

        printListOfIngredients: function () {

            return recipe.listOfIngredients;
        },

        ifMealUnder15: function () {

            return parseInt(recipe.preparingTime) < 15;
        },

        changeTypeOfCuisine: function (newTypeOfCuisine) {

            return recipe.typeOfCuisine = newTypeOfCuisine;
        },

        deleteGivenIngredient: function (ingredient) {

            for (var i = 0; i < recipe.listOfIngredients.length; i++) {
                if (recipe.listOfIngredients[i] === ingredient) {
                    delete recipe.listOfIngredients[i];
                }

                return recipe.listOfIngredients;
            }
        }
    }

    return recipe;
}

var plazma = createRecipe("plazma torta", "srpska kuhinja", "jednostavno, lenja zena", ["plazma 300gr", "mlevena plazma 300gr", "prah secer 200gr", "slag krem beli 500gr", "vanilin secer", "pavlaka x2"], "10", "kako napraviti tortu");

console.log(plazma);

console.log(plazma.printListOfIngredients());

console.log(plazma.ifMealUnder15());
console.log(plazma.changeTypeOfCuisine("bosanska"));
console.log(plazma.deleteGivenIngredient("plazma 300gr"));




//                              PRACTICAL BUILT-IN OBJECTS

// Write a function to convert a number from one base (radix) to another. 
//Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
//'ff', 16, 8 -> 377


function convertBase(number, initialBase, changeBase) {
    if (!initialBase || changeBase < 2 || changeBase > 36) {
        return 'Base between 2 and 36';
    }

    var num = parseInt(number + '', initialBase);
    return num.toString(changeBase);
}

console.log(convertBase('ff', 16, 8));
console.log(convertBase(1000, 2, 8));


// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

//12345 -> 54321


function reverseNumber(num) {

   num = num + "";

   return num.split("").reverse().join("");
}

var result = reverseNumber(12345);

console.log(typeof result);

console.log(result);


// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//Note: Assume punctuation, numbers and symbols are not included in the passed string.

//“Webmaster” -> “abeemrstw”
function sortAlphabetOrder(str) {
    return str.split('').sort().join('');
}

console.log(sortAlphabetOrder("webmaster"));

// varijacija zadatka, zelim da mi w bude veliko slovo na kraju niza

function returnPassedString (inputStr) {
   
     var a = inputStr.toLowerCase().split("").sort();

    var transformedLetter = a.pop().toUpperCase();
    a.push(transformedLetter);

   return a.join("");
}

var result = returnPassedString("Webmaster");

console.log(result);


// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
//"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function alphabetizeWords (inputStr){
    var currentArr = inputStr.split(" ");
    var outputArr= [];

    for ( var i = 0; i < currentArr.length; i++) {
        outputArr[outputArr.length] = currentArr[i].split("").sort().join("");
    }

   return outputArr.join(" ");
}

var result = alphabetizeWords("Republic Of Serbia");
console.log(result);


function poredjaj (input) {

    var trenutno = input.split(" ");
    var output = [];

    for ( var i = 0; i < trenutno.length; i++){
        output[output.length] = trenutno[i].split("").sort().join("");
    }

    return output.join(" ");
}

var result = poredjaj(" Republic Of Serbia");
console.log(result);

// Write a function to split a string and convert it into an array of words.

//	"John Snow" -> [ 'John', 'Snow' ]

function splitWords (input){

    return input.trim().split(" ");
}

var result = splitWords("John Snow");
console.log(result);


// Write a function to convert a string to its abbreviated form. 

//	"John Snow" -> 	"John S."

function convertString (input){

    var splitInput = input.split(" ");
   var letterS = splitInput.pop().slice(0,1) + ".";
    splitInput.push(letterS);
    return splitInput.join(" ");
}

var result = convertString("John Snow");
console.log(result);


// Write a function that can pad (left, right) a string to get to a determined length.

//	'0000', 123, 'l' -> 0123 
 //   '00000000', 123, 'r' -> 12300000


function padEndString (someStr, someNumber) {
    var stringOutOfNumber = someNumber.toString();
    
  return someStr.slice(0,1). padEnd(4, stringOutOfNumber);
 
}

console.log(padEndString("0000", 123));

function padStartString (someStr, someNumber) {
  var stringOutOfNumber = someNumber.toString();
  
return someStr.slice(0, 5).padStart(8, stringOutOfNumber);

}

console.log(padStartString("00000000", 123));


// Write a function to capitalize the first letter of a string and returns modified string.

//"js string exercises" -> "Js string exercises"


function capitalizeFirstLetter(input){
    
  return input.charAt(0).toUpperCase() + input.slice(1);

}

var result = capitalizeFirstLetter("js string exercises");
console.log(result);


// 9. Write a function to hide email addresses to protect them from unauthorized users.

//"somerandomaddress@example.com" -> "somerand...@example.com"
    

function hideAdress (input) {

    return input.slice(0,8) + "...@example.com";
}

var result = hideAdress("somerandomaddress@example.com");
console.log(result);



// 10. Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var LOWER = 'abcdefghijklmnopqrstuvwxyz';

//"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"


function swapCharacter (input) {

    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var output = "";

    for ( var i = 0; i < input.length; i++){
        for ( var j = 0; j < UPPER.length; i++) {
            if (input[i] === UPPER[j]){
                output +=input[i].toLowerCase();
            }
            if (input[i] === LOWER[j]){
                output += input[i].toUpperCase();
            }
        }
        if (input[i] === " "){
            output += input[i];
        }
    }
    return output;
}

var result = swapCharacter("The Quick Brown Fox");
console.log(result);

function swapTheCase(someString) {
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var newString = "";
    for (var i = 0; i < someString.length; i++) {
        for (var j = 0; j < UPPER.length; j++) {
            if (someString[i] === UPPER[j]) {
                newString += someString[i].toLowerCase();
            }
            if (someString[i] === LOWER[j]) {
                newString += someString[i].toUpperCase();
            }
        }
        if (someString[i] === " ") {
            newString += someString[i];
        }
    }

    return newString;
}

console.log(swapTheCase("The Quick Brown Fox"));
