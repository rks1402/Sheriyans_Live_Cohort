// Practicing Inheritance
/*

class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    makesound(){
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal{
    constructor(breed, name, type){
        super(name, type);
        this.breed = breed;
    }

    makesound(){
        console.log(`Woof! I'm a ${this.breed} named ${this.name}`);
    }
}

const dog1 = new Dog("Bull Dog", "Tommy", "Domestic");
dog1.makesound();

const animal1 = new Animal("Gauri", "Wild");
animal1.makesound();

*/

// Practicing Encapsulation

/*
class User{
    #password; // private variable

    constructor(username, password){
        this.username = username;
        this.#password = password;
    }

    checkPassword(inputPassword){
        return inputPassword === this.#password;
    }
}

const user1 = new User("rahul", "rahul123");
*/


//Practicing Abstraction

/*
class Phone{
    constructor(model){
        this.model = model;
    }

    #checkSignalStrength(){
        console.log("Checking signal...");
    }

    #connectToNetwork(){
        console.log("Connecting to network...");
    }


    makeCall(contact){
        this.#connectToNetwork();
        this.#checkSignalStrength();
        console.log(`Calling ${contact} from ${this.model}...`);
    }
}

const phone = new Phone("S25 Ultra");
*/

// Practicing polymorphism

/*
class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    makeSound(){
        console.log("Some generic animal sound");
    }
}

class Cat extends Animal{
    constructor(breed, name, type){
        super(name, type);
        this.breed = breed;
    }

    makeSound(){
        console.log(`Meow! I'm a cat named ${this.name}`);
    }
}

class Cow extends Animal{
    constructor(breed, name, type){
        super(name, type);
        this.breed = breed;
    }

    makeSound(){
        console.log(`Cow! I'm a cow named ${this.name}`);
    }
}

const animal1 = new Animal("Kalu", "Domestic");
const cat1 = new Cat("American", "Cutie", "Wild");
const cow1 = new Cow("Desi", "Gauri", "Domestic");

let animals = [animal1, cat1, cow1];
animals.forEach((element) => {
    element.makeSound();
});
*/

// OOPS Mini Project: Zoo Management System

class Animal{
    #feedingSchedule;

    constructor(feedingSchedule, name, type){
        this.#feedingSchedule = feedingSchedule;
        this.name = name;
        this.type = type;
    }

    makeSound(){
        console.log("Generic animal sound");
    }

    feed(){
        console.log(`Feeding ${this.name} at ${this.#feedingSchedule}`)
    }
}

class Lion extends Animal{
    constructor(region, name, type, feedingSchedule){
        super(feedingSchedule, name, type);
        this.region = region;
    }

    makeSound(){
        console.log(`Roar! I'm a lion named ${this.name}`);
    }
}

class Elephant extends Animal{
    constructor(region, name, type, feedingSchedule){
        super(feedingSchedule, name, type);
        this.region = region;
    }

    makeSound(){
        console.log(`Trumpet! I'm an elephant named ${this.name}`);
    }
}

class Monkey extends Animal{
    constructor(region, name, type, feedingSchedule){
        super(feedingSchedule, name, type);
        this.region = region;
    }

    makeSound(){
        console.log(`Oo-oo-aa-aa! I'm a monkey named ${this.name}`);
    }
}

const lion1 = new Lion("African", "Simbha", "Wild", "2:00 PM");
const elephant1 = new Elephant("Indian", "Nandi", "Domestic", "4:00 PM");
const monkey1 = new Monkey("Indian", "Murli", "Wild", "1:00 PM");

const animals = [lion1, elephant1, monkey1];
animals.forEach((e) => {
    e.makeSound();
    e.feed();
});