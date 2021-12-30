// Task-1

class Account {
    constructor(name, accno, balance){
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    getBalance() {
        return `The Balance is: ₹${this.balance}`;
    }
    withdraw(amount) {
        if (this.balance >= amount){
            this.balance = this.balance - amount;
            return this.getBalance();
        }else{
            return `Insufficient balance. ${this.getBalance()};`
        }  
    }
    deposit(amount){
        if (amount > 0){
            this.balance = this.balance + amount;
            return this.getBalance();
        } 
    }
}

const hari = new Account("Hari", 5689047 , 10_00_000.00);
const baskar = new Account("Baskar", 5689048 , 10_000.00);
const adhi = new Account("Adhi", 5689049 , 1_00_00_000.00);

console.log("Task-1");
console.log(hari.deposit(20_000));
console.log(hari.getBalance());
console.log(hari.deposit(15_000));


// Task 2

const getCountries = () => {
    console.log("Getting countries.....");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries = xhr.response;
        const countryName = countries.map(countries => countries.name.common);
        const highPop = countries.filter(countries => countries.population > 1_00_00_000);
        // function countSpeakSpa(){
            // return countries.languages.spa === "spanish"
        // }
        // const countSpeakSpa = countries.filter(countries => countries.languages.spa.Spanish === "Spanish");
        console.log(countries);
        console.log(countryName);
        console.log(highPop.map(countries => countries.name.common));
        // console.log(countSpeakSpa);
    }
}
// For task 2 i tried sir but i cant able to filter strings like number so i stuck
getCountries();