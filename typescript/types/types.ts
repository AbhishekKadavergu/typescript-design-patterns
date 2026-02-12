// type Animal = {
//     name: string;
// }

// type DOG = Animal & {
//     bark(): void
// }

interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

class StreetAnimals implements Dog {
  name = "Charlee";
  bark() {
    console.log("Barking");
  }
}
