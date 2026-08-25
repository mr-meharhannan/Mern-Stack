// template literals

const name = "Mehar Hannan";
// console.log("Hello " + name);
console.log("Hello " + name);
// console.log(`Hello ${name}`);
console.log(`Hello ${name}`);

//arrays dstructuring

// const arr = [1,2,3,4,5];
const arr = [1,2,3,4,5];

// let a = arr[0];
let [a,,c,,e] = arr;

// console.log(a,b,c,d,e);
console.log(a,c,e);

// object destructuring

const user = {
    firstname: "Mehar Hannan",
    age: 20,
    city: "Karachi"
}

let {firstname, age, } = user;
console.log(firstname, age);

// crud operations

// performing crud operations on array
const first = ["Mehar", "Hannan", "Ali"];
const second = ["Ahmed", "Ali", "Khan"];

const students = [...first, ...second, "ayan"];
console.log(students);

// performing crud operations on object

const student1 = {
    username: "Mehar Hannan",
    age: 20,
    city: "Karachi"
}

const student2 = {
    username: "Ahmed Ali",
    age: 22,
    city: "Lahore"
}

const student = {...student1, ...student2, country: "Pakistan"};
console.log(student);


//enhanced object literals

const name1 = "Mehar Hannan";
const age1 = 20;

const user1 = {name1, age1};
console.log(user1);