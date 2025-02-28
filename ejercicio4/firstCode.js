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


function completeUserName({name, lastName} = {}, message = 'Name and last name are required'){
    if(!name || !lastName){
      return message
    }

    return `Su nombre es ${name} ${lastName}`
}
console.log(completeUserName(newUser))