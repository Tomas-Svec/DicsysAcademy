
//console.warn("mensaje de cuidado")
//console.error("mensaje de error")
//let valor = confirm("deseas salir?")  //confirm toma valor bool
//nombre = "javier"

//console.log(nombre.toLowerCase())  // pasa todo a MAYUSCULA
//console.log(nombre.toUpperCase())   //pasa todo a minuscula
//console.log(nombre.length)  //dice cantidad de caracteres



    //EJEMPLO DE IF
    /* 
    
    let nombre = prompt('Ingresa tu nombre');
                    if (nombre === 'belen') {
                    console.log('¡Hola, belen!');
                    } else {
                    console.log('¡Hola, amigo, no te conozco!');
                    } 
 */

/* 
let num1 = 100
let num2 = 500 

let respuesta = (num1 > num2)
let respuesta = (num1 = num2)  //aca no comparo, sino que asigno. para comparacion es ==. esto es causa normal de errores

if (respuesta){
    console.log("num1 es menor a num2")
} */


        //IF ELSE  se puede usar el if solo, pero no se puede usar un else sin if


/* let respuesta = prompt("preferis una computadora o una notebook?")

if(respuesta.toLowerCase == "computadora"){
    console.log("las computadoras son buenas para jugar😊")
} else{
    console.log("las notebook son mas faciles de transportar💂‍♀️")
} */ 


        //EJEMPLO DE ELSE IF USANDO TODO LO APRENDIDO


/* console.log("vendo algo, escucho ofertas.")

let ofertabase = 2000
let ofertaDelUsuario = prompt("ingresa tu oferta:")
if (ofertaDelUsuario < 1000){
    console.error("olvidate, tu oferta es demaciado baja")
}else if(ofertaDelUsuario < 2000 && ofertaDelUsuario > 1000){
    console.warn("estirate un poco mas")
}else if(ofertaDelUsuario > 2000){
    console.log("oferta aceptada! ✅ te enviare un mensaje para coordinar el envio")
}else{
    console.log("tu oferta no se entendio")
} */



/* Ejercicio fácil:
Escribe un programa que verifique si un número ingresado por el usuario 
es mayor que 10 y menor que 20. Si cumple ambas condiciones, 
imprime "El número está entre 10 y 20" */
/*
let numero = parseInt(prompt("Ingrese un número: "))
if (numero > 10 && numero < 20){
    console.log("El numero está entre 10 y 20 :) "+ numero)
}else{
    console.log("El número ingresado es menor a 10 o mayor a 20 "+numero)
}
*/


/* 
Ejercicio de nivel medio:
Crea un programa que pregunte al usuario su edad y si es mayor de 18 años 
o menor de 65 años, imprime "Puedes trabajar". 
Utiliza el operador || para combinar las condiciones. */
/*
let edad = parseInt(prompt("Ingrese su edad: "))
if (edad > 18 || edad < 65){ //Respuesta: (edad > 18 && edad < 65) 
    console.log("Podes trabajar "+edad)
}else{
    console.log("Estas muy chikito o viejito "+edad)
}
*/




/* Ejercicio avanzado:
Desarrolla un programa que solicite al usuario dos números y compruebe 
si ambos son pares. Si lo son, que imprima "Ambos números son pares"; 
sino, imprime "Al menos uno de los números no es par". 
y tienen que usar el operador && para combinar las condiciones. */
/*
let num1 = parseInt(prompt("Ingresa el número 1: "))
let num2 = parseInt(prompt("Ingresa el número 2: "))
let resultado = num1+num2 
if(resultado % 2 === 0){
    console.log("El número es multiplo de 2: "+resultado)
}else{
    console.log("El número no es multiplo de 2: "+resultado)
}
*/


/* respuestas:

facil

let numero = parseInt(prompt("Ingresa un número: "));
if (numero > 10 && numero < 20) {
    console.log("El número está entre 10 y 20");
}


medio:

let edad = parseInt(prompt("¿Cuál es tu edad? "));
if (edad < 18 || edad > 65) {
    console.log("Puedes trabajar");
}


avanzado:


let numero1 = parseInt(prompt("Ingresa el primer número: "));
let numero2 = parseInt(prompt("Ingresa el segundo número: "));
if (numero1 % 2 === 0 && numero2 % 2 === 0) {
    console.log("Ambos números son pares");
} else {
    console.log("Al menos uno de los números no es par");
}


*/


//OPERADORES LOGICOS  (AND-OR-NOT)  && || !

//BUSCAR EL GOOGLE LA TABLA DE LA VERDAD (programacion)


/* 
 */

/* if(numA < numB && numA < 1500){  //si uno solo da falso, ya no se cumple la sentencia
    console.log("esto nunca se va a mostrar")
}


if(numA < numB || numA < 1500){  //si se cumple una o la otra, se ejecuta
    console.log("esto si se va a mostrar porque una se cumple")
}

if(numA =! numB){    //para estar siempre seguro, usar ==! (estrictamente diferente)
    console.log("esto se muestra porque son diferentes")
} */



/* let correo = prompt("ingrese su correo")

if(correo =! "" ){ // si el ingreso NO ESTA VACIO (si es diferente a vacio), muestra el msj
    console.log("bienvenido ", correo)
}else{
    console.warn("ingresa un correo valido")
} */





            //CICLOS E ITERACIONES

            /* Los ciclos e iteraciones son estructuras fundamentales en programación 
            
            En JavaScript, un ciclo es una estructura de control que permite repetir 
            una serie de instrucciones (bloque de código) varias veces. 
            Los ciclos son útiles cuando se necesita realizar una tarea varias veces 
            o cuando se desea iterar sobre una lista o un arreglo de elementos.




            saben lo que es iterar?


            /* "Iterar" significa repetir una serie de instrucciones o acciones, 
            generalmente se usa el termino en un ciclo o bucle. En términos de programación, 
            iterar seria ejecutar una porción de código de manera repetitiva, 
            puede ser un número específico de veces o hasta que se cumpla una condición determinada.

            La iteración es una técnica esencial en programación, nos permite automatizar por decirlo asi...
            o simplificar tareas repetitivas. cuando iteramos sobre un conjunto de datos o 
            un bloque de código, podemos procesar y manipular información de manera mas rapida y eficiente.

            Un ejemplo común de iteración es recorrer los elementos de una lista o arreglo uno por uno 
            para realizar alguna operación en cada elemento. Entonces Cada vez que se itera, se realiza 
            una acción específica y se avanza al siguiente elemento hasta que se termina de recorrer todo.

            En resumen, hablando TECNICAMENTE
            iterar en programación implica repetir una serie de acciones o instrucciones de manera 
            sistemática hasta que se cumpla una condición o se complete un número específico de repeticiones. */







/*Hay varios tipos de ciclos en JavaScript, pero los más comunes son:


                                //FOR

Ciclo "for": este ciclo se utiliza para repetir un bloque de código un número específico
de veces. 
Se utiliza principalmente cuando se conoce de antemano el número de iteraciones 
que se requieren. Por ejemplo: */


        //ESTRUCTURA DEL FOR
/*     desde     hasta      actualizacion
for (inicio, limite o condicion, incremento)


*/


//debugger 
//esta palabra se utiliza para ver paso a paso que sucede en la consola

//EXPLICAR DE DONDE VIENE LA PALABRA DEBUGGER

/* for(let i =0; i<10; i++){
    console.log("estoy iterando con el for", i)   
} */  //en este caso i++ es igual a i=i+1
   //para sumar de a mas se usa el i+=2






/*  
                    BREAK       => FILMINA 13



for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }




                    CONTINUE    =>  FILMINA 14

  for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}

 */


//ejercicio para ellos
/* for (let i = 0; i < 10; i++) {
    console.log(i);
  } */





/* Tanto el while como el for son estructuras de control de flujo que existen en la 
mayoría de los lenguajes de programación. 
y nos permiten repetir una sección de código varias veces. 
Pero, existen algunas diferencias clave entre ambos.

el ciclo for se usa cuando se conoce la cantidad exacta de iteraciones 
que se necesitan, si? osea que se repite hasta que se alcance 
la condición de finalización.

while es una estructura de control de bucle que se usa cuando se desconoce 
el número exacto de iteraciones que se necesitan para completar una tarea. 
En un ciclo while, se comprueba una condición antes de cada iteración, 
y si se cumple, se ejecuta el cuerpo del bucle. 
El ciclo se repite hasta que la condición se vuelva falsa. */




                    
                        //WHILE


//el ciclo while se puede ejecutar 0 o infinito de veces
/* La sentencia while: se usa para ejecutar un bloque de código repetidamente 
mientras se cumpla una condición determinada. 
La condición se evalúa antes de que se ejecute el bloque de código. 
Si la condición es verdadera, el bloque de código se ejecuta. 
Si la condición es falsa, el bloque de código no se ejecuta, se corta el bucle 
y el programa continua con la siguiente instrucción después del bucle while. */




 /*  cuando se usa el while? se usa cuando no se conoce de antemano 
  el número de veces que se desea repetir un bloque de código. 
  El ciclo se ejecuta mientras se cumple una condición. Por ejemplo: */
 


 
/*              ejemplo con true, false


let iterar = true 


 /* while(iterar ===true){  //mientras la variable es verdadera se va a ejecutar (OJO CON LOS BUCLES INFINITOS)
    console.log("imprimo el mensaje en la consola")
    iterar= confirm("desea continuar la ejecucion del bucle?")//dentro de las llaves HAY QUE CONTROLAR la ejecucion
 } 
 
                ejemplo con condicional
 
 let contador = 5;

 while (contador < 5) {
   console.log("El valor del contador en el ciclo while es: " + contador);
   contador++;
 } */
 






                //DO WHILE


/* El ciclo do-while es otra estructura de control de bucle que es similar al ciclo while, 
pero con una diferencia importante: en un ciclo do-while, el cuerpo del bucle se ejecuta 
al menos una vez antes de que se compruebe la condición. */





/* let contador2 = 6;

do {
  console.log("El valor del contador en el ciclo do-while es: " + contador2);
  contador2++;
} while (contador2 < 5); */




/* let intentos = 1

let indentificar = true    //para que funcione, cambiar a true

do{
    let usuario = prompt("ingresa tu usuario, (solo 3 intentos)")  //se pide ingresar usser
    if(usuario === null){   //si usser es null se salta a siguiente
        break
 }

if (usuario === "javier gimenez" && intentos <=3){  //si usser ok en menos de 3 intentos hay acceso
    alert("bienvenido "+ usuario)
    indentificar =false //si hay acceso, el identificador pasa a ser false para no seguir en bucle

}else{
    alert("no se reconoce el usuario:" + usuario)   // si no hay acceso, siguiente paso
    intentos++
    if(intentos >3){  //si intentos mayor a 3, termina programa
        alert("usted supero los 3 intentos")
        console.error("no hay mas intentos")
        break
    }
}

} while(indentificar)
 */











                    //SWITCH


/* En JavaScript, el "switch" es una estructura de control de flujo 
que se utiliza para tomar decisiones basadas en el valor de una expresión. 
Es similar a la estructura "if...else if...else", 
pero puede ser más eficiente y legible en algunos casos. */






                    
/* console.log("bienvenidos a la consesionaria de coches")

let consulta = confirm ("te puedo ayudar a buscar un coche?")

if(consulta===true){
    let coche = prompt("que coche estas buscando?  ingresa la marca")
    let color = prompt("elige el color de tu " + coche)

    //estructura del switch
    switch(color) {     //dentro del switch va la KEY. 
        case "blanco":  //en el case, se pone el color predefinido del coche
            alert("tenemos " + coche + " en color " + color)  //aca si se escribe el color, se manda este mensaje
            break;  //si no se elije el color blanco, se salta a la siguiente
        case "negro":
            alert("tenemos " + coche + " en color " + color)
            break;
        case "rojo":
            alert("tenemos " + coche + " en color " + color)

               //aca agregamos otro condicional para saber si lo quiere comprar
            let comprar = confirm("queres comprarlo?")
            if(comprar===true){    //si comprar es true, envia el alert de compra. sino sale del preograma
                alert("gracias por tu compra")
            }
            break;
            default:   //si no ocurre ninguna de las anteriores, se manda por default este mensaje
                console.log("no tenemos " + coche + " en " + color)
                break;
    }
} */

