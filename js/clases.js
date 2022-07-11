// ECMA 5
let Persona = function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.datos = function() {
      return "Nombre: " + this.nombre + " Apellido: " + this.apellido + " Edad: " + this.edad;
    }
  };

  Persona.prototype.datosReducidos = function() {
    return "Nombre: " + this.nombre + " Apellido: " + this.apellido;
  }


let pers1 = new Persona("pepe", "perez", 56);
alert(pers1.datos());
let pers2 = new Persona("jose", "rodriguez", 38);
console.log(pers2.datos());

// ECMA 6

class PersonaSugar {
  constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.datos = function() {
      return "Nombre: " + this.nombre + " Apellido: " + this.apellido + " Edad: " + this.edad;
    }
  }
}

//document.getElementById("elId").style.backgroundColor = "#000";

