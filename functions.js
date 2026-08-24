const name = "Mehar Hannan";

function greet(name) {
    return "Hello " + name;
}
console.log(greet(name));

const expresion = function (name){
    return "Hello " + name;
}

console.log(expresion(name));

const arrow = () => {
    return "Hello " + name;
}

console.log(arrow(name));

const square = (n) => n*n;

console.log(square(5));

const hello = (name = "Mehar Hannan") => "hello " + name;
console.log(hello());

const total = (...marks) => {

    let total = 0;

    for(const mark of marks){
        total += mark;
    }
    return console.log("total marks is:", total );
    }

total(2,2,2);
