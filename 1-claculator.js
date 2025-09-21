function Calculator() { }

Calculator.prototype.add = (a, b) => {
    return a + b
}

Calculator.prototype.subtract = (a, b) => {
    return a - b
}

Calculator.prototype.multiply = (a, b) => {
    return a * b
}

Calculator.prototype.devide = (a, b) => {
    return a / b
}

const calculator = new Calculator()

console.log(calculator.add(10, 5)) // 15
console.log(calculator.subtract(10, 5)) // 5
console.log(calculator.multiply(10, 5)) // 50
console.log(calculator.devide(10, 5)) // 2