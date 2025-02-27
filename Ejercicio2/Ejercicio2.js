console.log(a);
var a = "hola"; //undefine 

console.log(b);
let b = "hola";  //imprime ReferenceError: Cannot access 'b' before initialization

console.log(c);
const c = "hola"; //imprime ReferenceError: Cannot access 'c' before initialization

sayHi();

function sayHi() {
  console.log("Hola desde sayHi!"); //Imprimer Hola desde sayHi!
}

function sayBye() {
    console.log("Adios desde sayBye!");  //Imprime Adios desde sayBye!
  }
  
  sayBye();