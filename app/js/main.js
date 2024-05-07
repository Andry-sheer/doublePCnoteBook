

class Human {
  constructor (name, gender){
    this.name = name;
    this.gender = gender
  }
}

class Apartament {
    constructor () {
      this.resident = [];
    }

    addResident(person) {
      this.resident.push(person);
    }
  }


/*
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
        console.log("Досягнуто максимальну кількість квартир у будинку.");
      }
    }
  }
  
  // Приклад використання
  const person1 = new Human("Іван", "чоловіча");
  const person2 = new Human("Марія", "жіноча");
  
  const apartment1 = new Apartment();
  apartment1.addResident(person1);
  apartment1.addResident(person2);
  
  const building = new Building(5);
  building.addApartment(apartment1);
  
  console.log(building);*/