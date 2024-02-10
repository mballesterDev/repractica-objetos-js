const gato = {
    nombre : "Bitch",
    edad : 13,
    alimento : "Pineso",
    apodos : ["Bichita", "pesada", "bicholoco"]
}

//Forma 1 
for (propiedades in gato){
    console.log(propiedades);
}

for (propiedades in gato){
    console.log(gato[propiedades]); //es como poner gato.propiedades
}

for (propiedades in gato){
    console.log(`${propiedades} : ${gato[propiedades]}`); //asim recooremos todo junto
}

//  Este metodo nos devuelve un array con los valores o las keys
const valores = Object.values(gato);
const claves = Object.keys(gato);

console.log(valores); // ["Bitch", 13, "Pineso", ["Bichita", "pesada", "bicholoco"]]
console.log(claves); // ["nombre", "edad", "alimento", "apodos"]

//para pasar de un array a string podemos usar el for each
valores.forEach((valor) => {
    console.log(valor);
});