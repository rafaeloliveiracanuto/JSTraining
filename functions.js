//Bind and this
const person = {
    speaking: 'Bom dia!',
    speak(){
        console.log(this.speaking);
    }
};

person.speak();

const speak = person.speak;
speak();

const personSpeaks = person.speak.bind(person);
personSpeaks();

//----------------------

function Person(){
    this.age = 0;

    setInterval(function(){
        this.age++;
        console.log(this.age);
    }.bind(this), 1000);
};

function Person2(){
    this.age = 0;

    const self = this;

    setInterval(function(){
        self.age++;
        console.log(self.age);
    }, 1000);
};

//new Person2;

//Anonymous functions

const adition = function(x, y){
    return x + y;
};

const showResult = function(a, b, operation = adition){
    console.log(operation(a, b));
}

showResult(3, 4);
showResult(3, 4, adition);
showResult(3, 4, function(x, y){
    return x - y;
});
showResult(3, 4, (x, y) =>  x * y);

const human = {
    speak: function(){
        console.log("Opa, meu parceiro")
    },
    complain(){
        console.log("Droga!!");
    }
};

human.speak();
