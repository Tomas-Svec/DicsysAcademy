/*

    principio DRY= Comencemos por DRY, que significa "No te repitas a ti mismo" en español. 
    Este principio nos dice que debemos evitar la repetición innecesaria de código. 
    Si repetimos mucho el mismo código, puede haber errores y dificultades para mantenerlo en el futuro. 
    En lugar de eso, debemos buscar formas de escribir código que sea reutilizable y modular.
    
    Por ejemplo, en lugar de escribir la misma función varias veces en diferentes partes de nuestro código, 
    podemos crear una única función y reutilizarla cada vez que sea necesario. 



principio KISS = El principio KISS (Keep It Simple, Stupid) significa "Manténlo simple y estúpido" en español. 
    Este principio nos dice que debemos mantener nuestro código simple y fácil de entender. 
    Al hacerlo, será más fácil de mantener y menos propenso a errores.
    
    Por ejemplo, en lugar de escribir una función compleja que hace muchas cosas diferentes, 
    podemos dividirla en varias funciones más pequeñas que hacen una sola cosa.
            
            
    
    PRINCIPIO YAGNI= El principio YAGNI (You Ain't Gonna Need It) que significa "No necesitarás esto" en español. 
    Este principio nos dice que debemos evitar escribir código innecesario que podría ser útil en el futuro, 
    pero que actualmente no se necesita. Al hacerlo, podemos mantener nuestro código más simple y 
    fácil de entender.

    Por ejemplo, en lugar de agregar características a nuestro código que aún no necesitamos, 
    podemos esperar hasta que realmente las necesitemos antes de agregarlas.


*/

                                        


//COMO DECLARAR UNA FUNCION


                /* function nombreFuncion() {
                     instrucciones que ejecutará la función
                }  */                                 

                function saludar (){
                    console.log("Esto es el mensaje de la funcion")
                }




                            //FUNCION CONVENCIONAL
function login(){
    let usuario = prompt ("ingresa tu usuario:")
    //aca valido si es diferente a "", le saco los espacios al dato que ingresa, y que sea mayor a 1 letra
    if(usuario !== ""){ 
      alert("bienvenido: " + usuario)       
    }else{
        alert("error en el dato ingresado")
    }

}
º 

            //EJEMPLO DE FUNCION CON PARAMETRO
          

            //ejemplo para calcular el iva
            const IVA = 1.21

function calcularIva(importe){  //Creo funcion con un parametro (importe)
    if (parseFloat(importe)){    // convierto a numero, si el importe es un numero => segui
        let resultado = importe * IVA  //dentr o de variable resultado guardo el importe por el IVA
        alert("el importe mas iva es: " + resultado)  //muestro el valor del resultado
    }

}


//ejemplo de una funcion dentro de otra
function calcularPrecioFinal(){  //creo una funcion nueva
    let precioDelProducto = prompt("ingresa el importe del producto:") //pido dato al usuario
    calcularIva(precioDelProducto) //utilizo la funcion ya creada y le paso como parametro la nueva
    alert("el importe final es: " + resultado) //esto se rompe, por el scope de resultado

}

calcularPrecioFinal()





                    
            //FUNCION CON DOS PARAMETROS

function sumar(numA,numB){
    /* numA= parseInt(prompt("ingrese primer numero")) 
    numB= parseInt(prompt("ingrese segundo numero"))  */

    let resultado = numA + numB
    alert("el resultado de la suma es :" + resultado)
}

//sumar()



            //FUNCIONES CON RETURN

            //ejemplo simple con numeros

            function sumar(num1, num2) {
                let resultado = num1 + num2;
                return resultado;
              }

              


    function concatenar(texto1,texto2){
    if(texto1.trim() !=="" && texto2.trim() !==""){  //verifico que no halla espacios y que no este vacio
        textoConcatenado = texto1.trim() + texto2.trim()
        return textoConcatenado
    }
}
                 


                //SCOPE 

/* El scope se refiere al alcance de las variables en nuestro código. 
Es importante entender esto para evitar errores y mejorar la organización de nuestro código.

Existen dos tipos de scope en JavaScript: el scope global y el scope local. 
El scope global se refiere a las variables que se definen fuera de cualquier función 
y están disponibles para todo el código. 
El scope local, por otro lado, se refiere a las variables que se definen dentro de una función y 
sólo están disponibles dentro de esa función. */


let nombre2 = "Juan";
console.log(nombre2); // Juan

function saludar() {
  // Scope local
  let mensaje = "Hola";
  console.log(mensaje + " " + nombre2); // Hola Juan
}

saludar();
console.log(mensaje); // Error: mensaje no está definido





// Función anónima asignada a una variable
let sumar = function(a, b) {
  return a + b;
}

console.log(sumar(2, 3)); // 5



/* FUNCION DECLARADA VS FUNCION EXPRESADA */
function declarada(){
  console.log("esto es una funcion que se puede llamar desde cualquier lado, sin importar donde se declaro")
}

const funcionExpresada= function (){
  console.log("esta funcion esta asignada a una variable. si la llamo antes de esto, no existe para js")
}



      //FUNCIONES FLECHA O   ARROW FUNCTION


      function normal(a,b){
        return a+b
      }



      let funcionAnonima = function(a, b) {
        return a + b;
      }



      let funcionFlecha = (a, b) => {
        return a + b;
      }


      let funcionFlechaEnLinea = (a, b) => a + b;

