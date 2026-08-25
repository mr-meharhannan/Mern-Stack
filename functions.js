const name = "Mehar Hannan";


// normal function

function greet(name) {
    return "Hello " + name;
}
console.log(greet(name));

// function expression

const expresion = function (name){
    return "Hello " + name;
}

console.log(expresion(name));

// arrow function

const arrow = (name) => {
    return "Hello " + name;
}

console.log(arrow(name));

// arrow function with implicit return

const square = (n) => n*n;

console.log(square(5));

// arrow function with default parameter

const hello = (name = "Mehar Hannan") => "hello " + name;
console.log(hello());

// arrow function with rest parameter

const total = (...marks) => {

    let total = 0;

    for(const mark of marks){
        total += mark;
    }
    return console.log("total marks is:", total );
    }

total(2,2,2);

// closure function

const createBankAccount = () => {
    let balance = 1000
    return {
        checkBalance: () => balance,
        deposit: (amount) => {
            balance += amount;
            return balance;
        },

    };
}

const account = createBankAccount();

console.log(account.checkBalance());
console.log(account.deposit(500));
console.log(account.checkBalance());
