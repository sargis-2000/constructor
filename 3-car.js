function Car(model, milesPerGallon) {
    this.model = model
    this.milesPerGallon = milesPerGallon
    this.tank = 0
    this.odometer = 0
}

Car.prototype.fill = function (gallons) {
    this.tank += gallons
}

Car.prototype.drive = function (distance) {
    const possibleDistance = this.tank * this.milesPerGallon

    if (distance <= possibleDistance) {
        this.odometer += distance
        this.tank -= distance / this.milesPerGallon
    } else {
        this.odometer += possibleDistance
        this.tank = 0
        return `I ran out of fuel at ${this.odometer} miles`
    }
}

const car1 = new Car("Toyota", 25);

car1.fill(10); // add 10 gallons
console.log(car1.tank); // 10

car1.drive(100);
console.log(car1.odometer); // 100
console.log(car1.tank);     // 6 (100 miles / 25 mpg = 4 gallons used)

// console.log(car1.drive(300));
// // "I ran out of fuel at 350 miles!" (used up all fuel)

// console.log(car1.tank); // 0