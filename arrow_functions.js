let double = function(a){
    return 2 * a;
}

double = (a) => {
    return 2 * a;
}

double = a => 2 * a;

console.log(double(Math.PI));

let hello = function(){
    return 'Olá';
}

hello = () => 'Olá';

console.log(hello());

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
};

new Person;