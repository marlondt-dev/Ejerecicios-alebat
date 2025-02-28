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
    salary: 5000,
    profession: "Barro man",
  };

  function getCompleteName({name = "unknown", last = "unknown"}, message = 'Name and last name are required') {
    if (!name || !last) {
        return message;
    }
    return `Your complete name is ${name} ${last}`;
}
  
  function getAnnualSalary({salary} = {} , message = "Salary is required or your salary is less than 0"){
    if( typeof salary !== "number" || salary <= 0){
      return message
    } 
    const monthsInAYear = 12 
    const yearSalary = salary * monthsInAYear
    return `Your salary is: ${yearSalary} ` 
  }

  function printUserInfo(user){
    console.log(`${getCompleteName(user)}  ${getAnnualSalary(user)}`);
  }

  printUserInfo(newUser);