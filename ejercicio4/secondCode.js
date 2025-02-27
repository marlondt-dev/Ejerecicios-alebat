const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));

//Refactorizando con primera ley de solid

const newUser = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    salary: 1000,
    profesion: "Barro man",
  };

  function getCompleteName(user){
    return `Complete name is ${user.name} ${user.last} `
  }

  function getAnnualSalary(user){
    return user.salary * 12;
  }

  function printUserInfo(){
    console.log(`${getCompleteName(newUser)}and his annual salary is ${getAnnualSalary(newUser)}`);
  }

  printUserInfo();