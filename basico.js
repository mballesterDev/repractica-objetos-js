

const gato = {
    nombre : "Bitch",
    edad : 13,
    alimento : "Pineso",
    apodos : ["Bichita", "pesada", "bicholoco"]
}

console.log(gato.nombre);
console.log(gato["nombre"]); //ese método es importante para recorrer el array

gato.color = "Rojo" //crear
gato.edad = 17 // actualizar
delete gato.apodos // borrar

console.log(gato);

console.log(gato.hasOwnProperty("edad")) //para comprobar si tiene una propiedad(será util el objetos grandes)

//tambien puede ser util para comprobar si lo tiene y solo si lo tiene cambiar su propiedad

if (gato.hasOwnProperty("edad")){
    gato.edad = 1
}

console.log(gato);

const gato2 = {
    nombre : "Bitch",
    edad : 13,
    alimento : "Pineso",
    apodos : ["Bichita", "pesada", "bicholoco"],
    comer(comida){
        console.log(`${this.nombre} está comiendo ${this.alimento} y ${comida}`);
    }
}
//el this hace referencia al objeto, ne conbtexto javascript en el cual se esta ejecutando el codigo 
gato2.comer("Atun") //el parametro que pasamos como comida
                    //tambien se pueden usar funciones de flecha, pero no es recomendable usarlas como metodos ya que no tienen this ni super