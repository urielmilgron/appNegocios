//Tomo el dom con QS (querySelector)
let obtenerDatoCarlos = document.querySelector("#obtenerDatoCarlos");
// let pagarImpuestosVar = document.querySelector("#pagarImpuestos");
let mostrarDatosDom = document.querySelector("#mostrarDatos");
let borrarDatosDom = document.querySelector("#borrarDatos");
let modal = document.querySelector("#modal");
let inputImpuestos = document.querySelector("#impuestosInput");
let tomarImpuestos = document.querySelector("#tomarImpuestos");

//Ya lo sabremos
let valorImpuesto;


//Toma un array, puede ser de personas, con el mismo constructor, atributos
function imprimirArray(value) {
    for (let i = 0; i < value.length; i++) {
      modal.innerHTML += `
              <div class="datosPersonas">
              <h2>${value[i].nombre}</h2>
              <h3>$${value[i].plata}</h3>
              </div>
              `;
    }
  }
//Función que borra texto de modal si existe contenido.
function detectarTexto() {
  if (modal != null || modal != undefined || modal != "") {
    modal.innerHTML = "";
  }
}
function detectarNumero() {
  if (
    inputImpuestos.value == null ||
    inputImpuestos.value == undefined ||
    inputImpuestos.value == 0
  ) {
    return alert("No pusiste impuesto");
  } else {
    inputImpuestos.value = null;
  }
}

class Persona {
  constructor(nombre, edad, dni, plata) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.plata = plata;
  }
  //Pagamos impuestos
  pagarImpuestos(value) {
    this.value = value;
    this.plata -= this.value;
    return this.plata;
  }
  //Obtenemos datos de personas
  _getDatos() {
    return (this.datos = [this.nombre, this.edad, this.dni, this.plata]);
  }
//   cambiarDatos(nombre, edad, dni, plata){
    
//   }
}


const Persona1 = new Persona("Carlos", 32, 35459512, 30000);
const Persona2 = new Persona("Maria", 32, 35459511, 65000);
const Persona3 = new Persona("Jose", 32, 35459510, 70000);
const Persona4= new Persona("Daniel", 32, 35459508, 90000);

let personas = [Persona1, Persona2, Persona3, Persona4];




//Agregamos un evento de escucha en pagarImpuestosVar para que cuando se haga click, se le pida al usuario
//que ingrese el valor del impuesto
// pagarImpuestosVar.addEventListener("click", () => {
//     for(let i = 0;i<personas.length;i++){
//         personas[i].pagarImpuestos()
//     }
// })

tomarImpuestos.addEventListener("click", (event) => {
  //Previene el comportamiento por default del botón = (actualizar página)
  event.preventDefault();
  valorImpuesto = inputImpuestos.value;
  detectarNumero();
  for (let i = 0; i < personas.length; i++) {
    personas[i].pagarImpuestos(valorImpuesto);
  }
  detectarTexto();
  imprimirArray(personas);
});

//Idem anterios con respecto al listener, pero este muestra en el modal los datos de las personas.
mostrarDatosDom.addEventListener("click", () => {
  detectarTexto();
  imprimirArray(personas);
});

borrarDatosDom.addEventListener("click", () => {
  detectarTexto();
});

function capturarDatos(){
  let datosInpuestos = document.getElementById('pagarImpuestos').value

}




// http://localhost:5500/index.html
