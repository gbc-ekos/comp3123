/**
 * Exercise 1
 */
const gretter = (myArray) => {
    for (const person of myArray) {
        console.log(`Hello ${person}`);
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

console.log()
/**
 * Exercise 2
 */
const capitalize = (str) => {
    const [firstLetter, ...rest] = str;
    return `${firstLetter.toUpperCase()}${rest.join('')}`;
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

console.log();
/**
 * Exercise 3
 */
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);

console.log();
/**
 * Exercise 4
 */
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value < 20);
console.log(filterLessThan20);

console.log();
/**
 * Exercise 5
 */
const array = [1, 2, 3, 4];
const calculateSum = array.reduce((sum, item) => sum + item, 0);
const calculateProduct = array.reduce((sum, item) => sum * item, 1);
console.log(calculateSum);
console.log(calculateProduct);

console.log();
/**
 * Exercise 6
 */
const Car = class {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model}, year: ${this.year}`;
    }

}
const Sedan = class extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    details() {
        return super.details() + `, balance: ${this.balance}`;
    }
}
const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.details());