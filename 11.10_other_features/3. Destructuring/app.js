// Destructuring Assignment
let a,b;
[a, b] = [100, 200];

//  Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];

// console.log(rest)

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({a, b, ...rest1} = {a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(rest1)

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people

console.log(person1)

// Parse array returned from function
function getPeople() {
    return ['John', 'Beth', 'Mike'];
}

let p1,p2,p3;
[p1,p2,p3] = getPeople()

console.log(p2)

// object destructuring
const person = {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
    sayHello: function() {
        console.log('Hello');
    }
}

// ES6 solution
const { name, age, gender, sayHello } = person
console.log(gender)

sayHello()