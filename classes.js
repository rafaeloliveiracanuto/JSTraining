class Posting{
    constructor(name = 'Genérico', value = 0){
        this.name = name;
        this.value = value;
    }
};

class FinancialCycle{
    constructor(month, year){
        this.month = month;
        this.year = year;
        this.postings = [];
    };

    addPostings(...postings){
        postings.forEach(l => this.postings.push(l));
    };

    summary(){
        let newValue = 0;
        this.postings.forEach(l => {
            newValue += l.value;
        });

        return newValue;
    };
};

const salary = new Posting('Salário', 10000);
const electricBill = new Posting('Luz', -220);

const bills = new FinancialCycle(6, 2018);
bills.addPostings(salary, electricBill);
console.log(bills.summary());

//Inheritance

class Grandfather{
    constructor(lastName){
        this.lastName = lastName;
    };
};

class Father extends Grandfather{
    constructor(lastName, profession = 'Desenvolvedor Mobile'){
        super(lastName);
        this.profession = profession;
    };
};

class Son extends Father{
    constructor(){
        super('Canuto');
    };
};

const son = new Son;
console.log(son);