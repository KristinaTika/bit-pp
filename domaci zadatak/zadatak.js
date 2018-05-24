/*
za sve zaposlene u nizu "names" treba preuzeti podatke iz objekta "details" i za svakog zaposlenog napraviti objekat koji ima polja "nameSurname", "numberOfHours u koje treba staviti zbir svih radnih sati zaposlenog. Sve ove objekte koji sadrze podatke o zaposlenima treba staviti u niz koji cemo nazvati "allEmployees", koji treba prikazati u konzoli, kao i  ukupan broj muskaraca i zena.
*/
var names = ["dragan", "milica", "ivana", "jovica", "milutin", "maja"];

var details = {
    
    "milutin": {
        "prezime": "ilic",
        "pol": "m",
        "sati": [4, 2, 1, "4"]
    },
    "dragan": {
        "prezime": "todorovic",
        "pol": "m",
        "sati": [2, "1"]
    },
    "maja": {
        "prezime": "majic",
        "pol": "z",
        "sati": [1]
    },
    "jovica": {
        "prezime": "kocic",
        "pol": "m",
        "sati": ["2", "2"]
    },
    "milica": {
        "prezime": "peric",
        "pol": "z",
        "sati": [5, 1, 1]
    },
    "ivana": {
        "prezime": "tadic",
        "pol": "z",
        "sati": []
    }
};

var women = 0;
var men = 0;
var allEmployees = [];

names.forEach(function(name){
    if(details[name]) {
        var employeeInfo = details[name];
        var employee = [];
        var name = name[0].toUpperCase()+ name.slice(1);
        var surname = employeeInfo["prezime"][0].toUpperCase() + employeeInfo["prezime"].slice(1); 

        employee.nameSurname = name + " " + surname;

        if(employeeInfo.pol === "m") {
            men++;
        } else if (employeeInfo.pol === "z") {
            women++;
        }
        var numberOfHours = 0;
        employeeInfo.sati.forEach(function(hours){
            numberOfHours += parseInt(hours);
        });
        employee.numberOfHours = numberOfHours;
        allEmployees.push(employee);
    }

});
    console.log("All employees: ");
    console.log(allEmployees);
    console.log("total number of men: " + men);
    console.log("total number of women: " + women);


  

   