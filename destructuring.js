//Destructuring Objects - Begin
const person = {
    name: 'Rafael',
    age: 5,
    address: {
        street: 'Rua ABC',
        number: 11000    
    },
};

const { name, age, mother } = person;
console.log(name, age, mother);

const { name: n, age: i } = person;
const { address: { street, number } } = person;
console.log(street, number);
//Destructuring Objects - End
//Destructuring Arrays - Begin

const [array] = [10];
console.log(array);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, note]] = [[, 8, 8], [9, 6, 8]];
console.log(note);

//Destructuring Arrays - End
//Destructuring Functions - Begin

function rand({ min = 0, max = 1000 }){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

console.log(rand({ max: 50, min: 40 }));

function rand2([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

console.log(rand2([50, 40]));
console.log(rand2([992]));
console.log(rand2([, 10]));
console.log(rand([]));
//Destructuring Functions - End

