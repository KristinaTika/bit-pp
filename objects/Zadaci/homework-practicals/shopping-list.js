"use strict";

/*
(function () {

    // constructor function
    function Product(name, price, expDate) {

        this.productId = parseInt(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expDate);
    }

    Product.prototype.getInfo = function () {

        var output = "";
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name[this.name.length - 1].toUpperCase();
        return output = firstLetter + lastLetter + this.productId + ", " + this.name + ", " + this.price;
    }

    // constructor function
    function ShoppingBag() {

        this.listOfProducts = [];
    }
    ShoppingBag.prototype.addProduct = function (product) {

        if (!product && (!product instanceof Product) || Date.now() > product.expirationDate.getTime()) {
            return "Error, invalid date!"
        } else {
            return this.listOfProducts.push(product);
        }
    }
    ShoppingBag.prototype.calcAveragePrice = function () {
        var totalPrice = 0;

        this.listOfProducts.forEach(function (product) {
            totalPrice += product.price;
        });
        return totalPrice / this.listOfProducts.length;

    }
    ShoppingBag.prototype.getMostExpensive = function () {
        var mostExpensive = 0;

        for (var i = 0; i < this.listOfProducts.length; i++) {
            var product = this.listOfProducts[i];
            if (mostExpensive < product.price) {
                mostExpensive = product.price;
            }
        }
        return product.getInfo();
    }
    ShoppingBag.prototype.calcTotalPrice = function () {
        var totalPrice = 0;

        this.listOfProducts.forEach(function (product) {
            totalPrice += product.price;
        });
        return totalPrice;
    }

    //constructor function
    function PaymentCard(balance, validUntilDate) {

        this.accountBalance = parseFloat(balance.toFixed(2));
        this.validUntilDate = new Date(validUntilDate);
    }
    PaymentCard.prototype.isActive = function () {
        return Date.now() < this.validUntilDate.getTime();
    }

    //function
    function checkoutAndBuy ( bag, card) {
        var missingMoney = 0;
        if (!card.isActive()){
            return "Error, purchase unsuccessful, payment card has expired!";
        }
        if (card.accountBalance >= bag.calcTotalPrice()) {
            card.accountBalance = card.accountBalance - bag.calcTotalPrice();
            return ("Successful payment!");
        } else {
            missingMoney = bag.calcTotalPrice()- card.accountBalance;
            return "Purchase unsuccessful, the amount of missing money is: " + missingMoney;
        }
    }

    // create product
    var kiwi = new Product("kiwi", 200, "10/10/2019")
    // create product
    var banana = new Product("banana", 120, "11/11/2018");
    // create shopping bag
    var kristinasBag = new ShoppingBag();
    //create payment card
    var kristinasCard = new PaymentCard(1000, "10/10/2022");

    // add product to shopping bag
    kristinasBag.addProduct(banana);
    // add product to shopping bag
    kristinasBag.addProduct(kiwi);
    
    console.log(checkoutAndBuy(kristinasBag, kristinasCard));

})();

*/

(function () {

    function Product(name, price, expDate) {

        this.productId = Math.random() * 100000;
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expDate);
    }
    Product.prototype.getInfo = function () {
        var output = "";
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name[this.name.length - 1].toUpperCase();

        return output = firstLetter + lastLetter + ", " + this.name + ", " + this.price;
    }

    function ShoppingBag() {

        this.listOfProducts = [];
    }
    ShoppingBag.prototype.addProduct = function (product) {
        if (!product && (!product instanceof Product) || Date.now() > product.expirationDate.getTime()) {
            return "Error, invalid expiration date!";
        } else {
            return this.listOfProducts.push(product);
        }
    }
    ShoppingBag.prototype.calcAveragePrice = function() {
        var totalPrice = 0;

        this.listOfProducts.forEach(function(product){
            totalPrice += product.price;
        });
        return totalPrice/this.listOfProducts.length;
    }
    ShoppingBag.prototype.getMostExpensive = function() {
        var mostExpensive = 0;

        for (var i = 0; i < this.listOfProducts.legth; i++) {
            var product = this.listOfProducts[i];
            if (mostExpensive < product. price){
                mostExpensive = product.price;
            }
        }
        return product.getInfo();
    }
    ShoppingBag.prototype.calcTotalPrice = function() {
        var totalPrice = 0;
        this.listOfProducts.forEach(function(product){
            totalPrice += product.price;
        });
        return totalPrice;
    }

    function PaymentCard (balance, validUntilDate){

        this.accountBalance = parseFloat(balance.toFixed(2));
        this.validUntilDate = new Date(validUntilDate);
    }
    PaymentCard.prototype.isActive = function() {
        
        return Date.now() < this.validUntilDate.getTime();
    }

    function checkoutAndBuy(bag, card) {
        var missingMoney = 0;

        if (!card.isActive()){
            return "Error, payment unsuccessful, payment card is expired!";
        }
        if (card.accountBalance >= bag.calcTotalPrice()){
            card.accountBalance = card.accountBalance - bag.calcTotalPrice();

            return "Payment successful!";
        } else {
            missingMoney = bag.calcTotalPrice() - card.accountBalance;
            return "Unsuccessful payment, the amount of missing money is: " + missingMoney;
        }
    }
    
    // create product
    var kiwi = new Product("kiwi", 200, "10/10/2019")
    // create product
    var banana = new Product("banana", 120, "11/11/2018");
    // create shopping bag
    var kristinasBag = new ShoppingBag();
    //create payment card
    var kristinasCard = new PaymentCard(1000, "10/10/2022");

    // add product to shopping bag
    kristinasBag.addProduct(banana);
    // add product to shopping bag
    kristinasBag.addProduct(kiwi);
    
    console.log(checkoutAndBuy(kristinasBag, kristinasCard));

})()