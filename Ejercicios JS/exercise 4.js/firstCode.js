console.log(a);
var a = "hola";  //Da undefined

console.log(b);
let b = "hola";  //Uncaught ReferenceError: Cannot access 'b' before initialization

console.log(c);
const c = "hola";  //Ejercicio2.js:7 Uncaught ReferenceError: Cannot access 'c' before initialization

sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");   //imprime Hola desde sayHi!
}

function sayBye() {
    console.log("Adios desde sayBye!");   //imprime Adios desde sayBye!
  }
  
  sayBye();