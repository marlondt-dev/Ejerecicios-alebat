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
    userAge: 30,
    userNationality: "España",
  };
  
  function isForeign(user) {
    if (user.userNationality != "España") {
      return 'This person is not eligible for the the goverment help'
     }
    if (user.userAge !== 30){
        return 'This person is not eligible for the the goverment help'
    }
    return 'This person is eligible for the goverment help'
}
  
  console.log(isForeign(newUser));

