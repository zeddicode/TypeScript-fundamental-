const Car =  (function () {
    function  Car (make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        Car.prototype.start = function () {
            console.log("Car Engine Started");
        }
    return Car;
})();

const firstCar = new Car("Mercedes", "CLA", 2015);
console.log(firstCar.make);