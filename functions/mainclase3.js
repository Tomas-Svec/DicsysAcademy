//fetch es igual al trycasth, se usa para recuperar datos asyncronicas
//microservicios,son como apis.
/*
let URL = `https://laaquiquenecesito.com/datos` 
fetch(`https://laaquiquenecesito.com/datos`)
*/

/*
let ULR = `https://pokeapi.co/api/v2/pokemon?limit=3`

const pokemonContainer = document.getElementById("pokemon-container")

fetch(ULR)      //agarra la respuesta y lo pasa a JSON
.then( response => response.json())
//nos permite trabajar los datos que obtuvimos del JSON
.then( data =>{//generamos una data y hacemos una funcion

    const pokemons = data.results

    pokemons.forEach(//se usa para recorrer cada pokemon

        (pokemons)=>{//declaramos una funcion para decirle que hacer con esos pokemons

            fetch(pokemons.url)
            .then(response => response.json())
            .then(pokemonData =>{
                const pokemonElement = document.createElement(`div`)
                pokemonElement.innerHTML=`
                        
                    <h2>${pokemonData.name}</h2>
                    <img src="${pokemonData.sprite.front_default}">
                    
                `
                pokemonContainer.appendChild(pokemonElement)
            }).catch(error=>{
                console.error("Exploto");
            })
        }
    )

})
    */


/* ---EMPIEZA EL ABM--- */
//desglozar el problema, el ABM es de un producto.
//PRODUCTO[NAME,STOCK,PRECIO] = crearlo(funcion constructura)

const Producto = function(nombre,precio,stock){//USAMOS LA LISTA
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
//cargamos los productos
let producto1 = new Producto("Neetbook Lenovo", 4800000, 20);
let producto2 = new Producto("Lenovo Pad", 800000, 20);
let producto3 = new Producto("Apple Mac M8", 400000, 20);
let producto4 = new Producto("Apple Smartwatch", 2500000, 20);
let producto5 = new Producto("Samsung Galaxy", 100000, 20);

//los agregamos a la lista.
let lista = [producto1,producto2,producto3,producto4,producto5]

if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista = lista
}

//buscar si existe el producto PRIMERO IMPORTANTE
function filtrarProductos(){

    Swal.fire({
        title:"Ingresa el producto a buscar",
        input:"text",//capturar el dato
        showCancelButton: true,
        ConfirmButtonText: "buscar",
        showLoaderOnConfirm: true,

        preConfirm: (palabraClave)=>{ //aca filtra, trim(saca los espacios), y después pasarlo a ToUpperCase
            palabraClave= palabraClave.trim().toUpperCase()
            let resultado = lista.filter( (producto)=> //buscamos en la lista que va a contener un producto
            producto.nombre.toUpperCase().includes(palabraClave));//Lo que hace es buscar de la palabra clave en la lista.

            //condicion
            if(resultado.length > 0){
                console.table(resultado)

                Swal.fire({
                    title:"resultados de la busqueda",
                    html:
                    "<table><tr><th>Precio</th><th>Stock</th></tr>" + resultado
                    .map( 
                        (producto)=>`<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td></tr>`
                      )
                      .join("")+       
                    "</table>",
                    connfirmButtonText: "ok"
                })
            }else{
                Swal.fire({
                    title: "no hay coincidencias",
                    icon: "error",
                    ConfirmButtonText: "OK"
                })
            }
        }

        
    })

}


//Agregar Productos
function agregarProducto(){

    Swal.fire({
        title: "Agregar Producto",
        html: `<label>Nombre:</label> <input id="nombre-input" class="swal2-input" type="text" autofocus>
    
               <label>Precio:</label><input id="precio-input" class="swal2-input" type="number" step="0.01">
    
               <label>Stock:</label><input id="stock-input" class="swal2-input" type="number" step="1">`,
        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
      }).then( (result)=>{

        //CONFIRMANDO Y GUARDANDO LOS VALORS QUE ME PASARON
        if(result.isConfirmed){
            let nombre = document.getElementById("nombre-input").value.trim()//captura el valor que me ingresaron en el input, (ese nombre esta inyectado desde JS)
            let precio = parseFloat(document.getElementById("precio-input").value) //Parsearlo a Numeros porque vienen como String
            let stock = parseInt(document.getElementById("stock-input").value)



        //VALIDACIONES
        if(isNaN(precio) || isNaN(stock) || (nombre == "") || nombre == null){//Si no es un numero
            Swal.fire({
                title:"Error!",
                icon: "error",
                text: "por favor ingrese datos válidos"
            })
            return;
        }

        let producto = new Producto(nombre,precio,stock)

        //consulta si esta en la lista //esta comparando si el nombre esta en la lista solo puede modificar el stock
        if(lista.some((elemento) => elemento.nombre === producto.nombre )){
            Swal.fire({
                title:"Error!",
                icon: "error",
                text: "ya existe el producto en la lista"
            })
            return;
        }

        //Por ultimo pushealo
        lista.push(producto)


        Swal.fire({
            icon: "success",
            title: "Producto agregado",
            text: `Se agrego un producto ${producto.nombre} a la lista`,

        })

        console.table(lista)


        }

        

      } )

}


//Eliminar Productos
function eliminarProductos(){

    Swal.fire({
        title: "Eliminar producto",
        input: "select",
        inputOptions: lista.reduce((options,producto, index)=>{//Se elimina por el indice no por el nombre
            options[index] = producto.nombre
            return options
        }),
        inputPlaceholder: "selecciona un producto",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
    }).then((result)=>{
    
        if(result.isConfirmed){
            const productoIndex = result.value
            const productoEliminado = lista.splice(productoIndex,1)
            localStorage.setItem("productos", JSON.stringify(lista));

        Swal.fire({
            icon: "success",
            title: "Producto eliminado",
            text: `Se ha eliminado un producto ${productoEliminado[0].nombre}`
        })
    }
})
}


//BOTONERA
/*
const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.addEventListener("click",filtrarProductos()
)

const agregarBtn = document.getElementById("agregar")
agregarBtn.addEventListener("click",agregarProducto()
)

const eliminarBtn = document.getElementById("eliminar")
agregarBtn.addEventListener("click",eliminarProductos()
)
*/

const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.addEventListener("click", filtrarProductos)



const agregarBtn = document.getElementById("agregar")
agregarBtn.addEventListener("click", agregarProducto)



const eliminarBtn = document.getElementById("eliminar")
eliminarBtn.addEventListener("click", eliminarProductos)
