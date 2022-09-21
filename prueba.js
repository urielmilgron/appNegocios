

let obtenerDatoCarlos = document.querySelector("#obtenerDatoCarlos");
let pagarImpuestosVar = document.querySelector("#pagarImpuestos")
let mostrarDatosDom = document.querySelector("#mostrarDatos")
let borrarDatosDom = document.querySelector("#borrarDatos")
let modal = document.querySelector("#modal")
let inputImpuestos = document.querySelector("#impuestosInput")
let tomarImpuestos = document.querySelector("#tomarImpuestos")


//Función que borra texto de modal si existe contenido.
function detectarTexto(){
    if (modal != null || modal != undefined || modal != ""){
        modal.innerHTML = "";
    }
}
function detectarNumero(){
    if(inputImpuestos.value == null || inputImpuestos.value == undefined || inputImpuestos.value == 0){
       return alert("No pusiste impuesto")
    } else {
        inputImpuestos.value = null;
    }
}
class Persona {
    constructor(nombre, edad, dni, plata){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.plata = plata;
    } 
    //Pagamos impuestos
    pagarImpuestos(value){
        this.value = value;
        this.plata -= this.value;
        return this.plata
    }
    //Obtenemos datos de personas
    _getDatos(){
        this.datos=[this.nombre,this.edad,this.dni,this.plata]
        return this.datos;
    }
}


const Carlos = new Persona("Carlos",32,35459512,30000);
const Maria = new Persona("Maria",32,35459511,65000);
const Jose = new Persona("Jose",32,35459510,70000);
const Daniel = new Persona("Daniel",32,35459508,90000);

let personas = [Carlos, Maria, Jose, Daniel]

obtenerDatoCarlos.addEventListener("click", ()=> {
    for(let i = 0; i<personas.length;i++){
        console.log(personas[i]._getDatos())
        
    }
   
})

//Agregamos un evento de escucha en pagarImpuestosVar para que cuando se haga click, se le pida al usuario
//que ingrese el valor del impuesto
// pagarImpuestosVar.addEventListener("click", ()=> {
//     for(let i = 0;i<personas.length;i++){
//         personas[i].pagarImpuestos()
//     }
// })

//BUGGG
tomarImpuestos.addEventListener("click", (e)=> {
    e.preventDefault();
    detectarNumero();
for(let i = 0; i<personas.length; i++){
    personas[i].pagarImpuestos(inputImpuestos.value)
}
})

//Idem anterios con respecto al listener, pero este muestra en el modal los datos de las personas.
mostrarDatosDom.addEventListener("click", ()=> {
    detectarTexto();
    for (let i = 0; i<personas.length;i++){
        modal.innerHTML+=`
        <div class="datosPersonas">
        <h2>${personas[i].nombre}</h2>
        <h3>$${personas[i].plata}</h3>
        </div>
        `
    }
    
})

borrarDatosDom.addEventListener("click", ()=>{
    detectarTexto();
})

// http://localhost:5500/index.html