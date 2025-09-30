class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.stomach = []
    }

    eat(food) {
        if (this.stomach.length < 10) {
            this.stomach.push(food)
        }
    }

    poop() {
        this.stomach = []
    }

    toString() {
        return `${this.name}, ${this.age}`
    }

    compareAge(otherPerson) {
        if (this.age > otherPerson.age) {
            return `${otherPerson.name} is younger than me.`
        } else if (this.age < otherPerson.age) {
            return `${otherPerson.name} is older than me`
        } else {
            return `${otherPerson.name} is the same age as me`
        }
    }
}

const p1 = new Person('Samuel', 24)
const p2 = new Person('Joel', 36)
const p3 = new Person('Lily', 24)

console.log(String(p1)) // Samuel, 24

console.log(p1.compareAge(p2)) // Joel is older than me.
console.log(p2.compareAge(p1)) // Samuel is younger than me.
console.log(p1.compareAge(p3)) // Samuel is younger than me.

p1.eat('apple')
p1.eat('sandwich')
console.log(p1.stomach) // [ 'apple', 'sandwich' ]

p1.poop()
console.log(p1.stomach) // []

// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.stomach = []
// }

// Person.prototype.eat = function (food) {
//     if (this.stomach.length < 10) {
//         this.stomach.push(food)
//     }
// }

// Person.prototype.poop = function () {
//     this.stomach = []
// }

// Person.prototype.toString = function () {
//     return `${this.name}, ${this.age}`
// }

// Person.prototype.compareAge = function (otherPerson) {
//     if (this.age > otherPerson.age) {
//         return `${otherPerson.name} is younger than me.`
//     } else if (this.age < otherPerson.age) {
//         return `${otherPerson.name} is older than me.`
//     } else {
//         return `${otherPerson.name} is the same age as me`
//     }
// }