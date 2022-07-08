//Hour

//If and Else
let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log('Good Morning')

}
else if (hour >= 12 && hour < 18) {
    console.log('Good AfterNoon');
}
else
    console.log('Goodnight Evening');

// //switch and case

let role;

switch (role) {
    case 'guest':
        console.log('Welcome Guest');
        break;
    case 'moderator':
        console.log('Welcome Moderator User');
        break;
    default:
        console.log('Unknown User');
}
// //Running the same code with a role initialized

let role2 = 'guest';

switch (role2) {
    case 'guest':
        console.log('Welcome Guest User');
        break;
    case 'moderator':
        console.log('Welcome Moderator User');
        break;
    default:
        console.log('Unknown User');
}

// //implementing the same using if statements

let role3 = 'moderator';

if (role3 === 'guest') {
    console.log('Guest User');
} else if (role3 === 'moderator') {
    console.log('Moderator User');
}
else {
    console.log('Unknown User');
}
//Using for statements
for (let i = 0; i < 5; i++) {
    console.log('Omera Ihero Walo', i);
}
//Altenatively
//    Using for statements
for (let i = 1; i <= 5; i++) {
    console.log('Omera Ihero Walo', i);
}

//     //check if i is an odd number

for (let x = 1; x <= 5; x++) {
    //if x is an odd number disply it
    if (x % 2 !== 0) {
        console.log('Display The Odd Number.', x);
    }
}
for (let y = 1; y <= 5; y++) {
    //if x is an odd number displsy it
    if (y % 2 !== 0) {
        console.log('Display The Odd Number.', y);
    }
}

// for while loop

let z = 0;
while (z <= 5) {
    if (z % 2 !== 0)
        console.log('While Loops Odd Number Is ', z);
    z++;

}

let h = 0;
do {
    if (h % 2 !== 5)
        console.log('This is a do while loop ', h);
    h++;

} while (h <= 5);

//for in loop
const person = {
    name: 'Okello',
    age: 30
};

for (let key in person) {
    console.log(person[key]);
}

//  //for in loop for arrays

//  const colors = ['green','red','blue'];

//  for(let index in colors){
//     console.log('Index Accessed', index);
//     console.log('Values in This Object is ',colors[index]);
//     console.log('OR');
//     console.log(index, colors[index]);
//  }

//for ofloop
const colors = ['green', 'red', 'blue'];
for (let color of colors) {
    console.log('+++++++++');
    console.log(color);
}

//using break key word

let t = 0;
while (t <= 10) {
    if (t === 5)
        break;
    console.log('We have  broken the loop at ', t);
    t++;
}

let u = 0;
while (u <= 10) {
    if (u % 2 == 0) {
        u++;
        continue;
    }
    console.log('If U is an even number , continue ', u);
    u++;
}

//Exercise : write  a function that takes two numbers nd returns the maximum of the two

let number = max(400, 300);

console.log('Maximum is ', number);

function max(num1, num2) {

    if (num1 > num2) return num1;
    else return num2;

}
//We can make this code cleaner by implementing it this way
let number2 = max2(400, 600);

console.log('Maximum is ', number2);

function max2(numm1, numm2) {
    return (numm1 > numm2) ? num1 : numm2;

}
//Exercise to see if ann image is landscape or not
let landscape = isLandScape(200, 500);
console.log(landscape);

function isLandScape(width, height) {
    return (width > height) ? true : false;

}

//using if statement

let landscape2 = isLandScape2(500, 800);
console.log('Is Landscape with If Statements,', landscape2);
function isLandScape2(width, height) {
    if (width > height) {
        return true;
    }
    else return false;
}

//Mosh's Solution with cleaner code 1
let landscape3 = isLandScape2(500, 800);
console.log('Mosh Cleanest Solution,', landscape2);
function isLandScape3(width, height) {
    if (width > height) return true;
    return false;
}
//Mosh Solution 2
let landscape4 = isLandScape4(700, 500);
console.log(landscape4);

function isLandScape4(width, height) {
    return (width > height);

}

//The fizzBuzz test 

const output = fizzBuzz(5);

console.log(output);
function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;

}

//exercise 4
checkspeed(80);
function checkspeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        console.log('Ok');
    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            console.log('Licence Suspended');

        } else {
            console.log('Points ', points);

        }
    }

}