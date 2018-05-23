(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getPersonData = function () {

        return (`${this.name}, ${this.surname}`)
    }

    function Seat(number, category = "e") {
        number = number || Math.floor(Math.random() * (100 - 10) + 10);

        this.number = number;
        this.category = category.toUpperCase();
    }
    Seat.prototype.getSeatData = function () {

        return (`${this.number} ${this.category}`)
    }

    function Passenger(person, seat) {
        if (!person instanceof Person) {
            return "Error, please input valid person!";
        } else {
            this.person = person;
        }
        if (!seat instanceof Seat) {
            return "Error, please enter valid seat!";
        } else {
            this.seat = seat;
        }
    }
    Passenger.prototype.getPassengerData = function () {
        let output = "";

        return output = (`${this.seat.number}, ${this.seat.category}, ${this.person.getPersonData()}`)
    }

    function Flight(relation, date) {
        this.relation = relation;
        let inputDate = new Date(date);
        this.date = (`${inputDate.getMonth() + 1}${"." + inputDate.getDate()}${"." + inputDate.getFullYear()}`)
        this.listOfPassengers = [];
    }
    Flight.prototype.addPassenger = function (passenger) {
        if (!passenger instanceof Passenger) {
            return "Error, please enter valid passenger!";
        } else {
            this.listOfPassengers.push(passenger);
        }
    }
    Flight.prototype.getFlightData = function () {
        let output = "";
        let flightData = "";

        this.listOfPassengers.forEach(function (passenger) {
            flightData += "\t" + "\t" + passenger.getPassengerData() + "\n";
        });
        return output = (`${this.date} ${this.relation}, ${"\n" + flightData}`)
    }

    function Airport(name) {
        this.name = name;
        this.listOfFlights = [];
    }
    Airport.prototype.addFlight = function (flight) {
        if (!flight instanceof Flight) {
            return "Error, please enter valid flight!";
        } else {
            this.listOfFlights.push(flight);
        }
    }
    Airport.prototype.getAirportData = function () {
        let output = "";
        let airportData = "";
        let totalNumOfPas = 0;

        this.listOfFlights.forEach(function (flight) {
            totalNumOfPas += flight.listOfPassengers.length;
        });
        this.listOfFlights.forEach(function (flight) {
            airportData += "\t" + flight.getFlightData();
        });

        return output = (`${"Airport: " + this.name}, ${"total passengers: " + totalNumOfPas}, ${"\n" + airportData}`)
    }

    function createFlight(relation, date) {
        var createdFlight = new Flight(relation, date);

        return createdFlight;
    }

    function createPassenger(name, surname, seatNumber, category) {
        const createdPerson = new Person(name, surname);
        const createdSeat = new Seat(seatNumber, category);
        const createdPassenger = new Passenger(createdPerson, createdSeat);

        return createdPassenger;
    }

    const john = createPassenger("John", "Snow", 1, "b");
    const cercei = createPassenger("Cercei", "Lannister", 2, "b");
    const daenerys = createPassenger("Daenerys", "Targaryen", 14);
    const tyrion = createPassenger("Tyrion", "Lannister");

    const bgNy = createFlight("Belgrade - New York", "Oct 25 2017");
    const barBg = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    const tesla = new Airport("Nikola Tesla");

    bgNy.addPassenger(john);
    bgNy.addPassenger(daenerys);
    barBg.addPassenger(cercei);
    barBg.addPassenger(tyrion);

    tesla.addFlight(bgNy);
    tesla.addFlight(barBg);

    console.log(tesla.getAirportData());
    
})()