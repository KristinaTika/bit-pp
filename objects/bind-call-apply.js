
var dudeObj = {
    job: 'Ninja',
    say: function (who) {
        return 'Hey ' + who + ', I am a ' + this.job;
    }
};
dudeObj.say('Dude'); // "Hey Dude, I am a Ninja"

var programmerObj = { job: 'Scripting guru' };
console.log(dudeObj.say.call(programmerObj, 'Dude'));

var kristina = {
    hobi: "tenis",
    serija: "The Walking Dead",
    say: function (sta) {
        return "Fear The Walking Dead mi je medju top 5 omiljenih serija!" + sta;
    }
}

var ana = {
    mob: "telefon"
}

console.log(kristina.say.apply(ana,["ma ne seri"]));


var personProto = {
    calculateAge: function () {
        var year = new Date().getFullYear();
        var age = year - this.yob;
        console.log(age);
    }
 }
 
 var john = Object.create(personProto);
 john.yob = 1989;
 john.calculateAge();



 var john = {
    name: "John",
    job: "Teacher",
    say: function (greeting) {
        console.log(greeting + ", I'm " + this.name);
    }
 }
 
 john.say("Hi");
 
 var mara = {
    name: "Marija"
 }
 
 mara.hello = john.say.bind(mara);
 mara.hello("Hello");
 
 mara.ola = john.say.bind(this, "Ola");
 mara.ola();
 
 john.say.call(mara, "Good morning");
 john.say.apply(mara, ["Good afternoon"]);
 
 var kristina = {
     hobi: "sta god",
     fon: "ma da",
     say: function (par){
         return "sta kazes" + par + "!";
     }
 }

 var ana = {
     meni: "domaci"
 }

 ana.hello = kristina.say.bind(this, "da dodam nesto");
 console.log(ana.hello());


 // demo

function Person(name, surname){

    this.name = name;
    this.surname = surname;
 }

 Person.prototype.fullName = function(){
    return this.name + " " + this.surname;
 }
 Person.prototype.printInfo = function(){
    console.log(this.fullName());
 }
 var pera = new Person('Pera', 'Peric');
 pera.printInfo();
 
 // we would like Programmer to inherit from Person
 function Programmer(name, surname, favouriteLanguage){

    Person.call(this, name, surname);
    this.favouriteLanguage = favouriteLanguage;
 }
 
 // we create the object with prototype Person.prototype
 Programmer.prototype = Object.create(Person.prototype);
 
 // we assign the value to a constructor property of Programmer’s
 // prototype as we overwrote it with the previous statement
 Programmer.prototype.constructor = Programmer;
 console.log(Programmer.prototype);
 console.log(Person.prototype);
 
 Programmer.prototype.printInfo = function(){
 var fulllName = this.fullName();
 var fulllName = Object.getPrototypeOf(Programmer.prototype).fullName.call(this);
 //var fulllName = Programmer.prototype.__proto__.fullName.call(this);
 console.log(fulllName + " " + this.favouriteLanguage);
 }
 var laza = new Programmer('Laza', 'Lazic', 'JS');
 laza.printInfo();
 
var p = document.querySelector(".p");
var div = document.createElement("div");
div.textContent= "samo probam";
p.appendChild(div);

div.className= "div-class";

var target = document.querySelector(".div-target");

var li = document.querySelector(".li-class");
li.innerHTML = "<span class='span'> Ovo je Span </span";

var liTwo = document.querySelector(".li-2");
var par = document.createElement("p");
par = document.createTextNode("smao da napisem nesto");
liTwo.appendChild(par);
