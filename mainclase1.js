/*
function averiguarRangoNumero(){
let numero = parseInt(prompt("Ingresa un número: "));
if (numero > 10 && numero < 20) {
    alert10("El número está entre 10 y 20");
}
}
averiguarRangoNumero()
*/
function averiguarNumero(){

    let numero = parseInt(prompt("Ingresa un número: "));

    if (numero >= 10 && numero <= 20) {
    console.log("El número está entre 10 y 20");
    Swal.fire(
        {
            title: 'Genial!',
            text: "El número está entre 10 y 20",
            icon: 'success',
            confirmButtonText: ':)'
          }
    
    )
    }else{
        console.log("El numero no está entre 10 y 20")
        Swal.fire(
            {
                title: 'Error!',
                text: "El numero no está entre 10 y 20",
                icon: 'error',
                confirmButtonText: ':('
              }
        
        )
    }
}

function calcularEdad(){
    let edad = parseInt(prompt("¿Cuál es tu edad? "));
    if (edad >= 18 && edad <= 65) {
    console.log("Puedes trabajar");
    Swal.fire(
        {
            title: 'Genial!',
            text: "Puedes chambear",
            icon: 'success',
            confirmButtonText: ':)'
          }
    
    )
    }else{
        Swal.fire(
            {
                title: 'Error!',
                text: "No puedes chambear",
                icon: 'error',
                confirmButtonText: ':('
              }
        
        )
    }
}

function calcularPar(){
    let numero1 = parseInt(prompt("Ingresa el primer número: "));
let numero2 = parseInt(prompt("Ingresa el segundo número: "));
if (numero1 % 2 === 0 && numero2 % 2 === 0) {
    console.log("Ambos números son pares");
    Swal.fire(
        {
            title: 'Genial!',
            text: "Son par",
            icon: 'success',
            confirmButtonText: ':)'
          }
    
    )
} else {
    console.log("Al menos uno de los números no es par");
    Swal.fire(
        {
            title: 'Error!',
            text: "Al menos uno de los números no es par",
            icon: 'error',
            confirmButtonText: ':('
          }
    
    )
}
}