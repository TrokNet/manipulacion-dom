var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

suscripciones = {
    free: "freee",
    expert:"expertt"
}
var dato = "free"
    if(suscripciones[dato]){
        console.log(suscripciones[dato])
    }else console.log("No existe")