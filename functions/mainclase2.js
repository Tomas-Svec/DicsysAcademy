class Hamburguesa {
  constructor(nombre, precio, ingredientes, numeroCombo, image) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.numeroCombo = numeroCombo;
    this.image = image;
  }
}

const hamburguesas = [];

hamburguesas.push(new Hamburguesa("Krusty Burger", 300, ['Carne', 'Queso'], 1, 'https://hips.hearstapps.com/delish/assets/16/37/1473993824-m9c9457.jpg')); //agregar una imagen y poner el link y luego mostrarlo
hamburguesas.push(new Hamburguesa("Krusty Burger Doble", 180, ['Carne', 'Queso', 'Panceta'], 2, 'https://cdn.pedix.app/FMsBm2c5Gesuo93Jn00b/products/1714139382702.png?size=800x800'));
hamburguesas.push(new Hamburguesa("Krusty Pollo", 120, ['Pollo', 'Queso'], 3, 'https://cdn.pedix.app/FMsBm2c5Gesuo93Jn00b/categories/1696015624016.png?size=500x500&quality=80'));
hamburguesas.push(new Hamburguesa("Krusty Mega balde de Pollo", 400, ['Pollo', 'Queso', 'Aderezo'], 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2TMtBenaSZKsBaAXIPJseli-O9ZN8pU7GbA&s'));
hamburguesas.push(new Hamburguesa("Super Krusty", 330, ['Carne', 'Queso', 'huevo'], 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgLfMphLYICIAeaIiyaOBzAuQ6qMwqIxPFg&s'));
hamburguesas.push(new Hamburguesa("Super Krusty Doble", 250, ['Carne', 'Queso', 'huevo'], 6, 'https://www.infobae.com/resizer/v2/TLZ3WO4XEFF4RCZQSU7FK3F5HQ.jpg?auth=7d89fc8292261f1466db1f0b8978e9d7e24a8f5f1fd1c65f2a1a0181db39d90f&smart=true&width=1200&height=900&quality=85'));
hamburguesas.push(new Hamburguesa("Super Krusty Triple", 100, ['Carne', 'Queso', 'huevo'], 7, 'https://images.letseat.mx/eyJidWNrZXQiOiJsZXRzZWF0LmltYWdlcyIsImtleSI6IjY3OGY3Y2IxZWNiYjhmOGNlY2RjOTdiNjE5NTUyYmQzLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTI4MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9fX0='));
hamburguesas.push(new Hamburguesa("Krusty Vegan", 100, ['Espinaca', 'Soja'], 8, 'https://vegetarian-vacations.com/wp-content/uploads/2023/09/14611.webp'));

//console.log(hamburguesas);

const combosCaros = hamburguesas.filter(hamburguesa => hamburguesa.precio > 200);

// Mostrar resultados utilizando console.table
if (combosCaros.length > 0) {
  //console.table(combosCaros);
} else {
  console.warn('No se han encontrado productos coincidentes.');
}
/*
if(localStorage.getItem("hamburguesas")){
  lista = JSON.parse(localStorage.getItem("hamburguesas"))
}else{
  hamburguesa = hamburguesa
}
*/

let listaHamburguesas = hamburguesas.map(hamburguesa => `<div class="card">
    
        <ul>
        <h3>${hamburguesa.nombre}</h3>
        <img class="pepito" src=${hamburguesa.image} alt=""></a>
        </ul>
        <p></p>
        <ul>
        $${hamburguesa.precio}
        </ul>
        <ul>
        <p></p>
        <h4>Contenido: ${hamburguesa.ingredientes}</h4> 
        </ul>
        
     
    </div>`).join("");


console.log(listaHamburguesas)




// Selecciona el contenedor dentro del main
let contenedor = document.getElementById("container_hamburguesas");
contenedor.innerHTML = `
  <div class="card_group">
    ${listaHamburguesas}
  </div>
`;

function mostrarTodo(){
  let contenedor = document.getElementById("container_hamburguesas");
contenedor.innerHTML = `
  <div class="card_group">
    ${listaHamburguesas}
  </div>
`;
}


function filtrar() {
  const combosCaros = hamburguesas.filter(hamburguesa => hamburguesa.precio > 200).map(hamburguesa => `<div class="card">
    <ul>
    <h3>${hamburguesa.nombre}</h3>
    <img class="pepito" src=${hamburguesa.image}  alt="">
    </ul>
    <p></p>
    <ul>
    $${hamburguesa.precio}
    </ul>
    <ul>
    <p></p>
    <h4>Contenido: ${hamburguesa.ingredientes}</h4> 
    </ul>
</div>`).join("");

  if (combosCaros.length > 0) {
    let contenedor = document.getElementById("container_hamburguesas");
    contenedor.innerHTML = 
    `
      <div class="card_group">
      ${combosCaros}
      </div>
    `
;
  } else {
    console.warn('No se han encontrado productos coincidentes.');
    Swal.fire({
      title: "No hay coincidencias",
      icon: "error",
      ConfirmButtonText: "OK"
  })
  }
}


function buscar(){
  Swal.fire({
    title:"Ingresa el producto a buscar",
    input:"text",//capturar el dato
    showCancelButton: true,
    ConfirmButtonText: "buscar",
    showLoaderOnConfirm: true,

    
    preConfirm: (palabraClave)=>{ //aca filtra, trim(saca los espacios), y después pasarlo a ToUpperCase
        palabraClave = palabraClave.trim().toUpperCase()
        let resultado = hamburguesas.filter( (hamburguesas)=> //buscamos en la lista que va a contener un producto
        hamburguesas.nombre.toUpperCase().includes(palabraClave));//Lo que hace es buscar de la palabra clave en la lista.
        console.log(resultado)
        console.log(hamburguesas)

        //condicion
        if(resultado.length > 0){
            console.table(resultado)

            Swal.fire({
                title:"resultados de la busqueda",
                html:
                `<table class="pepe"><tr><th>Precio</th><th> Stock</th> <th> Combos</th></tr>` + resultado
                .map( 
                    (hamburguesas)=>`<tr><td>${hamburguesas.nombre}</td><td>${hamburguesas.precio}</td><td>${hamburguesas.numeroCombo}</td></tr>`
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

function buscarDoble(){
  
  Swal.fire({
    title: "Todavía no me sale esta función...",
    text: "Intente más tarde :(",
    icon: "question"
  });
  


}