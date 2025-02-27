const newMap = new Map();

newMap.set("moroso",  user = {
    name : 'Pedro',
    profession : 'unknown'
});
newMap.set("agarrado", user = {
    name : 'Rosa',
    age : 27
});
newMap.set("generoso", "user2");
newMap.set("funcion", function findAnimal(){
    return 'You have found a tigger'
});
newMap.set("color", "red");

console.log(newMap); //Muestra por consola todo el map
console.log(newMap.get("moroso")); //Muestra por consola el key moroso

if (newMap.has("hola")){
    console.log(`existe moroso`);   //Comprueba si existe la key hola
}else{
    console.log('no exsite hola')
}

console.log(newMap.size); //Muestra por consola el tamaño total del map

newMap.forEach(function(value, key){
    console.log(`${key}: ${value}`)   //Recorre el map con un forEach
})

newMap.delete("agarrado") //Elimina el elemento agarrado del map

newMap.clear();