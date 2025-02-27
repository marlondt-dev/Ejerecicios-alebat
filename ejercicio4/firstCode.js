var usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario(user) {
  const nombrCompleto = "Me llamo " + user.nombre + " " + user.apellido;

  return nombrCompleto;
}


//Refactorizando

const newUser = {
    name: 'Pedro',
    lastName: 'Sanchez',
    age : 45,
    profession: 'Barro man'
}

const {name, lastName} = newUser


function completeUserName(user){
    if(!user.name || !user.lastName){
      return 'Debe ingresar todos los datos'
    }

    return `Su nombre es ${user.name} ${user.lastName}`
}

console.log(completeUserName(newUser))