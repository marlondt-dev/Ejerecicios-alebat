//Ejercicio 1
type Birds = {
  name: string;
  canEat: string;
  canDrink: string;
  canSleep: string;
  canFly: string;
};

const birdsa: Birds = {
  name: "palmoa",
  canEat: "piedritas",
  canDrink: "water",
  canSleep: "during night",
  canFly: "Yes",
};

type Dogs = Birds & {
  race: "husky" | "labrador" | "chucho"; //Ejercicio 2 Modificamos para que la raza (race), solo pueda ser Husky, Labrador, Chucho
  age: number;
};

const dogsa: Dogs = {
  name: "doggy",
  canEat: "normal food human eat",
  canDrink: "water and cocacola",
  canSleep: "during night",
  canFly: "cannot fly",
  race: "chucho",
  age: 6,
};

// Ejercicio 3
type Cat = Birds & {
  color: string;
};
type NewAnimal = Pick<Cat, "name" | "color" | "canSleep">;

const cata = {
  name: "garfield",
  color: "Red",
  canSleep: "Sometimes",
};

type Snake = Pick<Birds, "canEat" | "canDrink" | "canSleep">;

const snakea = {
  canEat: "other animals and insects",
  canDrink: "water",
  canSleep: "at night",
};
