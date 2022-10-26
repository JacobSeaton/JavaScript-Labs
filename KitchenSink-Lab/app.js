//step 1: name variable
let fullName = 'Jacob Seaton';
//step 2: states constant
const states = 50;
//step 3: sum variable and function
let sum = add(5, 4);

function add(num1, num2) {
    return num1 + num2;
}
//step 4: Hello World! function
function sayHello() {
    alert("Hello World!");
}
//step 5: call function
sayHello();
//console sum log
console.log(sum);
//step 6: checkAge function
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you're not old enough to view this page!");
    }
}
//step 7: friends to run through function
let charles = {
    name: "Charles",
    age: 21
};

let abby = {
    name: "Abby",
    age: 27
};

let james = {
    name: "James",
    age: 18
};

let john = {
    name: "John",
    age: 17
};

checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);
//step 8: vegetable array
let vegetables = ['corn', 'asparagus', 'celery', 'peas'];
//step 9: loop through veggies
for (let i=0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}
//step 10: array of 5 friends
let friends = [
    {
      name: "Leo",
      age: 25 
    },
    {
        name: "Post",
        age: 18
    },
    {
        name: "Pooch",
        age: 23
    },
    {
        name: "Turner",
        age: 16
    },
    {
        name: "Tina",
        age: 28
    }
];
//step 11: run friends through loop
for (let i=0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
//step 12: getLength function
function getLength(string) {
    return string.length;
}
//step 13: call function
let length = getLength("Hello World");
//step 14: check odd/even on length
if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}