/**
 * Exercise 1:
 */
function capitalize(_input) {
    if (typeof _input !== 'string') {
        throw new Error('Input must be a string');
    }
    return _input.split(' ') // split the string into an array of words
        .map(word => word[0].toUpperCase() + word.slice(1)) // capitalize the first letter of each word
        .join(' '); // join the words back into a string
}

console.log("Exercise 1: Calling capitalize('hello world')");
console.log(capitalize('hello world'));

console.log();

/**
 * Exercise 2:
 */

function max(..._numbers) {
    _numbers.forEach(number => {
        if (typeof number !== 'number') {
            throw new Error('Only numbers are allowed');
        }
    });
    if (_numbers.length === 0) {
        return null;
    }
    return _numbers.reduce((acc, cur) => {
        if (cur > acc) {
            return cur;
        }
        return acc;
    }, _numbers[0]);
}

console.log("Exercise 2: Calling max(100, 500, -200)");
console.log(max(100, 500, -200));

console.log();

/**
 * Exercise 3:
 */
function right(_input) {
    if (typeof _input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (_input.length < 3) {
        throw new Error('Input must be at least 3 characters long');
    }
    return _input.slice(-3) + _input.slice(0, -3);
}

console.log("Exercise 3: Calling right('JavaScript')");
console.log(right('JavaScript'));

console.log();

/**
 * Exercise 4:
 */
function angle_Type(_angle) {
    if (typeof _angle !== 'number') {
        throw new Error('Input must be a number');
    }
    switch (true) {
        case _angle < 90:
            return 'Acute angle';
        case _angle === 90:
            return 'Right angle';
        case _angle < 180:
            return 'Obtuse angle';
        case _angle === 180:
            return 'Straight angle';
        default:
            return 'Very big angle OwO';
    }
}

console.log("Exercise 4: Calling angle_Type(47)");
console.log(angle_Type(47));
console.log("Exercise 4: Calling angle_Type(90)");
console.log(angle_Type(90));
console.log("Exercise 4: Calling angle_Type(145)");
console.log(angle_Type(145));
console.log("Exercise 4: Calling angle_Type(180)");
console.log(angle_Type(180));
console.log("Exercise 4: Calling angle_Type(270)");
console.log(angle_Type(270));

console.log();

/**
 * Exercise 5:
 */
function array_max_sum(ints, len) {
    let maxSum = 0;
    for (let i = 0; i < ints.length; i++) {
        let sum = 0;
        for (let j = 0; j < len; j++) {
            if (j >= ints.length) {
                return maxSum;
            }
            sum += ints[i+j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

console.log("Exercise 5: Calling array_max_sum([1, 2, 3, 14, 5], 2)");
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log("Exercise 5: Calling array_max_sum([2, 3, 5, 1, 6], 3)");
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log("Exercise 5: Calling array_max_sum([9, 3, 5, 1, 7], 2)");
console.log(array_max_sum([9, 3, 5, 1, 7], 2));