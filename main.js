//Funcion constructora
const Alumno = function(nombre,apellido,cantclases,valor){
    this.nombre = nombre
    this.apellido = apellido
    this.cantclases = cantclases
    this.valor = valor
}

let alumno1 = new Alumno ("Nicolas","Orsi",4,20000)
let alumno2 = new Alumno ("Noelia","Adamo",8,30000)
let alumno3 = new Alumno ("Isabel","Mercado",4,20000)
let alumno4 = new Alumno ("Jorge","Juarez",12,44000)


//ARRAY DE ALUMNOS
let lista = [alumno1,alumno2,alumno3,alumno4]

console.log (lista)

//Filtrar alumnos
function filtrarAlumnos(){
let palabraClave = prompt ("Ingresar nombre y apellido").toUpperCase().trim()
let resultado = lista.filter((x) => `${x.nombre.toUpperCase()} ${x.apellido.toUpperCase()}`.includes(palabraClave))
if (resultado.length>0) {
    console.table(resultado)
} else {
    alert ("No hay alumno")
}
}
//agregar alumno
function agregarAlumno(){
let nombre = prompt("Ingresa tu nombre")
let apellido= prompt("Ingresa tu apellido")
let cantclases= parseInt (prompt("Ingresa cantidad de clases a tomar"))
let valor= parseFloat(prompt("Ingresa valor de la cuota"))

if(isNaN(valor) || isNaN(cantclases) || nombre === "" || apellido === ""){
    alert ("Ingrese datos correctos")
    return
}
let alumno  = new Alumno (nombre, apellido, cantclases, valor)
lista.push (alumno)
console.log ("Alumno agregado correctamente")
console.table (lista)
}

agregarAlumno()

function calcularPromedioCuotas(){
    if (lista.length === 0){
        alert ("No hay alumnos en la lista")
        return;
    }
    let totalCuotas = lista.reduce((total, alumno) => total + alumno.valor, 0)
    let promedio = totalCuotas / lista.length
    
    console.log (`El promedio de las cuotas es: ${promedio.toFixed(2)}`)

}
function mostrarAlumnos () {
    console.table(lista)
}

function menuPrincipal() {
    while (true) {
        let opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Agregar alumno\n" +
            "2. Filtrar alumnos\n" +
            "3. Calcular promedio de cuotas\n" +
            "4. Mostrar todos los alumnos\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                agregarAlumno();
                break;
            case "2":
                filtrarAlumnos();
                break;
            case "3":
                calcularPromedioCuotas();
                break;
            case "4":
                mostrarAlumnos();
                break;
            case "5":
                return;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }
}

menuPrincipal();




