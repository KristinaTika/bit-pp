"use strict";
/*
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getPersonData = function () {

        return this.name + " " + this.surname;
    }

    function Seat(number, category) {
        number = number || Math.floor(Math.random() * (100 - 10) + 10);
        category = category || "e";

        this.number = number;
        this.category = category.toUpperCase();
    }
    Seat.prototype.getSeatData = function () {

        return this.number + ", " + this.category;
    }

    function Passenger(person, seat) {
        if ((!person instanceof Person)) {
            return "Error, please enter valid person!";
        } else {
            this.person = person;
        }
        if ((!seat instanceof Seat)) {
            return "Error, please enter valid seat!"
        } else {
            this.seat = seat;
        }
    }
    Passenger.prototype.changeCategorySeat = function () {
        if (this.seat.category === "B") {
            return this.seat.category = "B";
        } else {
            return this.seat.category = "E";
        }
    }
    Passenger.prototype.getPassengerData = function () {

        return this.seat.number + ", " + this.changeCategorySeat() + ", " + this.person.getPersonData();
    }

    function Flight(relation, date) {
        this.relation = relation;
        var inputDate = new Date(date);
        this.date = inputDate.getMonth() + 1 + "." + inputDate.getDate() + "." + inputDate.getFullYear();
        this.listOfPassengers = [];
    }
    Flight.prototype.addPassenger = function (passenger) {

        return this.listOfPassengers.push(passenger);
    }
    Flight.prototype.totalInBussiness = function () {
        var counter = 0;

        this.listOfPassengers.forEach(function (passenger) {
            if (passenger.seat.category === "b") {
                counter++;
            }
        })
        return counter;
    }
    Flight.prototype.getFlightData = function () {
        var output = "";
        var flightData = "";

        this.listOfPassengers.forEach(function (passenger) {
            flightData += "\t" + "\t" + passenger.getPassengerData() + "\n";
        });
        return output = this.date + ", " + this.relation + "\n" + flightData;
    }

    function Airport(name) {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }
    Airport.prototype.addFlight = function (flight) {

        return this.listOfFlights.push(flight);
    }
    Airport.prototype.getAirportData = function () {
        var output = "";
        var airportData = "";
        var totalNumOfPas = 0;

        this.listOfFlights.forEach(function (flight) {
            totalNumOfPas += flight.listOfPassengers.length;
        });
        this.listOfFlights.forEach(function (flight) {
            airportData += "\t" + flight.getFlightData() + "\n";
        });
        output = "Airport: " + this.name + ", " + " total passengers: " + totalNumOfPas + "\n";

        return output + airportData;
    }

    function createFlight(relation, date) {
        var createdFlight = new Flight(relation, date);

        return createdFlight;
    }

    function createPassenger(name, surname, seatNumber, category) {
        var createdPerson = new Person(name, surname);
        var createdSeat = new Seat(seatNumber, category);
        var createdPassenger = new Passenger(createdPerson, createdSeat);

        return createdPassenger;
    }

    // Persons
    var johnSnow = new Person("John", "Snow");
    var cercei = new Person("Cercei", "Lannister");

    //create passengers:
    var john = createPassenger("John", "Snow", 1, "e");
    var cercei = createPassenger("Cercei", "Lannister", 5, "b");
    var daenerys = createPassenger("Daenerys", "Targaryen", 8);
    var tyrion = createPassenger("Tyrion", "Lannister");

    //create flights:
    var bgNy = createFlight("Belgrade - New York", "Oct 25 2017");
    var barBg = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    //add passengers to flights:
    bgNy.addPassenger(john);
    bgNy.addPassenger(cercei);
    bgNy.addPassenger(daenerys);
    bgNy.addPassenger(tyrion);
    barBg.addPassenger(daenerys);
    barBg.addPassenger(tyrion);

    // create airport:
    var tesla = new Airport("Nikola Tesla");

    // add flights to airports:
    tesla.addFlight(bgNy);
    tesla.addFlight(barBg);

    console.log(tesla.getAirportData());

})()


(function(){

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getPersonData = function() {

        return this.name + " " + this.surname;
    }

    function Seat (number, category) {
        number = number || Math.floor(Math.random() * (100 - 10) + 10);
        category = category || "e";

        this.number = number;
        this.category = category.toUpperCase();
    }
    Seat.prototype.getSeatData = function() {

        return this.number + ", " + this.category;
    }

    function Passenger(person, seat){
        if(!person instanceof Person) {
            return "Error, please enter valid person!";
        } else {
            this.person = person;
        }
        if(!seat instanceof Seat) {
            return "Error, please enter valid person!";
        } else {
            this.seat = seat;
        }
    }
    Passenger.prototype.getPassengerData = function(){
        var output = ""

        return output = this.seat.number + ", " + this.seat.category + ", " + this.person.getPersonData();
    }

    function Flight(relation, date) {
        this.relation = relation;
        var inputDate = new Date(date);
        this.date = inputDate.getMonth() + 1 + "." + inputDate.getDate() + "." + inputDate.getFullYear();
        this.listOfPassengers = [];
    }
    Flight.prototype.addPassenger = function(passenger){
        if(!passenger instanceof Passenger){
            return "Error, please enter valid passenger!"
        } else {
            this.listOfPassengers.push(passenger);
        }
    }
    Flight.prototype.getFlightData = function() {
        var output = "";
        var flightData = "";

        this.listOfPassengers.forEach(function(passenger){
            flightData += "\t" + "\t" + passenger.getPassengerData() + "\n";
        });
        return output = this.date + "," + this.relation + "\n" + flightData;
    }

    function Airport(name) {
        this.name = name;
        this.listOfFlights = [];
    }
    Airport.prototype.AddFlight = function(flight) {
        if(!flight instanceof Flight){
            return "Error, please enter valid flight!"
        } else {
            this.listOfFlights.push(flight);
        }
    }
    Airport.prototype.getAirportData = function(){
        var output = "";
        var airportData = "";
        var totalNumOfPas = 0;

        this.listOfFlights.forEach(function(flight){
            totalNumOfPas += flight.listOfPassengers.length;
        });
        this.listOfFlights.forEach(function(flight){
            airportData += "\t" + flight.getFlightData() + "\n";
        });

        return output = "Airport: " + this.name + ", total passengers: " + totalNumOfPas + "\n" + airportData; 
    }

    function createFlight(relation, date) {
        var createdFlight = new Flight(relation, date);

        return createdFlight;
    }

    function createPassenger(name, surname, seatNumber, category) {
        var createdPerson = new Person(name, surname);
        var createdSeat = new Seat(seatNumber, category);
        var createdPassenger = new Passenger(createdPerson, createdSeat);

        return createdPassenger;
    }
 
    var john = createPassenger("John", "Snow", 1, "b");
    var cercei = createPassenger("Cercei", "Lannister", 2, "b");
    var daenerys = createPassenger("Daenerys", "Targaryen", 14);
    var tyrion = createPassenger("Tyrion", "Lannister");

    var bgNy = createFlight("Belgrade - New York", "Oct 25 2017");
    var barBg = createFlight("Barcelona - Belgrade", "Nov 11 2017");
    
    var tesla = new Airport("Nikola Tesla");
    
    bgNy.addPassenger(john);
    bgNy.addPassenger(cercei);
    barBg.addPassenger(daenerys);
    barBg.addPassenger(tyrion);

    tesla.AddFlight(bgNy);
    tesla.AddFlight(barBg);

    console.log(tesla.getAirportData());

})()
*/

(function(){

    function Person (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getPersonData = function() {

        return this.name + " " + this.surname;
    }

    function Seat(number, category) {
        number = number || Math.floor(Math.random() * (100-10) +10);
        category = category || "e";

        this.number = number;
        this.category = category.toUpperCase();
    }
    Seat.prototype.getSeatData = function(){

        return this.number + ", " + this.category;
    }

    function Passenger(person, seat) {
        if(!person instanceof Person){
            return "Error, please input valid person!";
        } else {
            this.person = person;
        }
        if(!seat instanceof Seat){
            return "Error, please enter valid seat!";
        } else {
            this.seat = seat;
        }
    }
    Passenger.prototype.getPassengerData = function(){
        var output = "";

        return output = this.seat.number + ", " + this.seat.category + ", " + this.person.getPersonData();
    }
    
    function Flight(relation, date) {
        this.relation = relation;
        var inputDate = new Date(date);
        this.date = inputDate.getMonth() + 1 + "." + inputDate.getDate() + "." + inputDate.getFullYear();
        this.listOfPassengers = [];
    }
    Flight.prototype.addPassenger = function(passenger){
        if(!passenger instanceof Passenger) {
            return "Error, please enter valid passenger!";
        } else {
            this.listOfPassengers.push(passenger);
        }
    }
    Flight.prototype.getFlightData = function() {
        var output = "";
        var flightData = "";

        this.listOfPassengers.forEach(function(passenger){
            flightData += "\t" + "\t" + passenger.getPassengerData() + "\n";
        });
        return output = this.date + ", " + this.relation + "\n" + flightData;
    }

    function Airport (name) {
        this.name = name;
        this.listOfFlights = [];
    }
    Airport.prototype.addFlight = function(flight) {
        if(!flight instanceof Flight) {
            return "Error, please enter valid flight!";
        } else {
            this.listOfFlights.push(flight);
        }
    }
    Airport.prototype.getAirportData = function() {
        var output = "";
        var airportData = "";
        var totalNumOfPas = 0;

        this.listOfFlights.forEach(function(flight){
            totalNumOfPas += flight.listOfPassengers.length;
        });
        this.listOfFlights.forEach(function(flight){
            airportData += "\t" + flight.getFlightData();
        });

        return output = "Airport: " + this.name + ", total passengers: " + totalNumOfPas + "\n" + airportData;
    }

    function createFlight(relation, date) {
        var createdFlight = new Flight(relation, date);

        return createdFlight;
    }

    function createPassenger(name, surname, seatNumber, category) {
        var createdPerson = new Person (name, surname);
        var createdSeat = new Seat (seatNumber, category);
        var createdPassenger = new Passenger (createdPerson, createdSeat);

        return createdPassenger;
    }

    var john = createPassenger("John", "Snow", 1, "b");
    var cercei = createPassenger("Cercei", "Lannister", 2, "b");
    var daenerys = createPassenger("Daenerys", "Targaryen", 14);
    var tyrion = createPassenger("Tyrion", "Lannister");

    var bgNy = createFlight("Belgrade - New York", "Oct 25 2017");
    var barBg = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var tesla = new Airport("Nikola Tesla");

    bgNy.addPassenger(john);
    bgNy.addPassenger(daenerys);
    barBg.addPassenger(cercei);
    barBg.addPassenger(tyrion);

    tesla.addFlight(bgNy);
    tesla.addFlight(barBg);

    console.log(tesla.getAirportData());

})()