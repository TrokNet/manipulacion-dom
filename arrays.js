var frutas = ["Manzana","Platano","Cereza","Fresa"];
var tipo = ["piedra","papel","tijera"];
console.log(tipo[0])

var masFrutas = frutas.push("Uvas");
console.log(frutas.length);

var estudiantes = ["Maria","Sergio","Rosa", "Daniel"];

for(var i = 0; i< estudiantes.length -1; i++){
    console.log("Hola " +estudiantes[i]);
}
var estudiantes = ["Maria","Sergio","Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola,  ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}