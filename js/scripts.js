$(document).ready(function () {
    function Pizza(type, crust, toppings, size) {
        this.type = type;
        this.crust = crust;
        this.toppings = toppings;
        this.size = size;
    }
    Pizza.prototype.typePrice = function () {
        if (this.size === "large") {
            if (this.type === "vegtikka") {
                return 1500;
            } else if (this.type === "chickentikka") {
                return 1200;
            } else if (this.type === "periperi") {
                return 1000;
            } else if (this.type === "hawaiian") {
                return 900;
            } else {
                return 800;
            }
        } else if (this.size === "medium") {
            if (this.type === "vegtikka") {
                return 1200;
            } else if (this.type === "chickentikka") {
                return 1000;
            } else if (this.type === "periperi") {
                return 800;
            } else if (this.type === "hawaiian") {
                return 700;
            } else {
                return 600;
            }
        } else {
            if (this.type === "vegtikka") {
                return 1000;
            } else if (this.type === "chickentikka") {
                return 1800;
            } else if (this.type === "periperi") {
                return 600;
            } else if (this.type === "hawaiian") {
                return 500;
            } else {
                return 450;
            }
        }
        console.log()
    }



});