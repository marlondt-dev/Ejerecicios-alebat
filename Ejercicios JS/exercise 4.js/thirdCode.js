const user = {
    name: "Álvaro",
    last: "Morón",
    age: 30,
    nationality: "Morocco",
  };
  
  function esExtrangero(user) {
    if (user.nationality != "España") {
      if (user.age == "30") {
        return "Apto para la ayuda del gobierno";
      } else {
        return "No es apto para la ayuda del gobierno";
      }
    } else {
      return "No es apto para la ayuda del gobierno";
    }
  }
  
  console.log(esExtrangero(user));


//REFACTORIZANDO

const newUser = {
    userName: "Álvaro",
    userLastName: "Morón",
    userAge: 29,
    userNationality: "Morocco",
  };
  

  const limitAge = 30
  const eligibleCountry = 'Morocco'

  function isForeign(user) {
    if (user.userNationality === eligibleCountry && user.userAge <= limitAge ) {
      return 'This person is eligible for the goverment help'
     }
    
    return 'This person is not eligible for the goverment help'
}
  
  console.log(isForeign(newUser));

