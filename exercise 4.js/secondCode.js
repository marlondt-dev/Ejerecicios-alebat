//Primer codigo

const newUser = {
    nombre: "Pedro",
    apellido: "Sánchez",
    edad: 45,
    profesion: "Barro man",
  };
  
  const {nombre, apellido} = newUser;

  function UserCompleteName() {
    console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`)   
  }

  UserCompleteName();

  
  //Segundo codigo


  const user = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    salary: 1000,
    profesion: "Barro man",
  };
  
  function userAnnualSalary(user) {
    const annualSalary = user.salary * 12;
    return annualSalary
  }

  function userFullName(user) {
    const fullName = user.name + user.last
    return fullName
  }

  function showUserDetais(){
    return `Mi nombre es ${fullName} y mi sueldo anual es ${annualSalary}`
  }

  console.log(showUserDetais(user))