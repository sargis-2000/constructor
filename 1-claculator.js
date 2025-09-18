function Calculator() {
    this.add = (a, b) => {
        return a + b
    }

    this.subtract = (a, b) => {
        return a - b
    }

    this.multiply = (a, b) => {
        return a * b
    }

    this.devide = (a, b) => {
        return a / b
    }
}

const calculator = new Calculator()

console.log(calculator.add(10, 5)) // 15
console.log(calculator.subtract(10, 5)) // 5
console.log(calculator.multiply(10, 5)) // 50
console.log(calculator.devide(10, 5)) // 2