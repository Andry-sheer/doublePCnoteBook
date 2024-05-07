

class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("reach max apartments in Building");
    }
  }
}


const person1 = new Human("John", "male");
const person2 = new Human("Emili", "female");
const person3 = new Human("Aron", "male");
const person4 = new Human("Casey", "female");
const person5 = new Human("Kim", "female");
// const person6 = new Human("Rose", "female");

const apartment1 = new Apartment();
apartment1.addResident(person1);
apartment1.addResident(person2);
apartment1.addResident(person3);
apartment1.addResident(person4);
apartment1.addResident(person5);
// apartment1.addResident(person6);

const building = new Building(5);
building.addApartment(apartment1);

console.log(building);

