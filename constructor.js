var autos = [];
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
for (let i = 0; i < 31; i++) {
    var autoNuevo = new auto("Auto" +i,"Modelo" +i,i);
    autos.push(autoNuevo);
}
console.log(autos);

