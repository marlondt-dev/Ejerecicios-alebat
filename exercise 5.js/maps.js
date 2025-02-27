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

//Ahora a imprimir ejercicios

console.log(newMap); 

console.log(newMap.get("moroso"));

function holaExists(){
    if (newMap.has("hola")){ 
        return 'hola exists'  
    }
    return 'Hola does not exist'
}
console.log(holaExists());

console.log(newMap.size); 

newMap.forEach(function(value, key){
    console.log(`${key}: ${value}`)  
})

newMap.delete("agarrado") 

newMap.clear();