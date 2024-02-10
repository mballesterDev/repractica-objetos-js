const gato = {
    nombre : "Bitch",
    edad : 13,
    alimento : "Pineso",
    apodos : ["Bichita", "pesada", "bicholoco"]
}

//de esta forma tan facil destructueamos el objeto en variables
// const {nombre, edad, alimento, apodos} = gato;


// Si no queremos que tenga el mismo nombre que tenia por defecto podemos usar :
const {nombre : nombreGato, edad, alimento, apodos} = gato;

 console.log(nombreGato);


 const gato2 = {
    nombre : "Bitch",
    apodos : {
        apodo1 : "Manel",
        apodo2 : "Bichito2"
    },
    edad : 13,
    alimento : "Pineso",
    
}
//para destructurar un objeto anidad simplemente usamos el punto 
const{apodo1, apodo2} = gato2.apodos
console.log(apodo1);
