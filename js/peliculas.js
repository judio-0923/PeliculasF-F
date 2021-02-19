let productos =[

    {
        id: 1,
        imagen: "img/f1.jpg",
        alt: "RF1",
        descripcion: "Rapido & Furioso 1",
        precio: 4.00,
    },
    {
        id: 2,
        imagen: "img/f2.jpg",
        alt: "RF2",
        descripcion: "Rapido & Furioso 2",
        precio: 5.10,

    },
    {
        id: 3,
        imagen: "img/f3.jpg",
        alt: "RF3",
        descripcion: "Rapido & Furioso 3",
        precio: 5.90,

    },
    {
        id: 4,
        imagen: "img/f4.jpg",
        alt: "RF4",
        descripcion: "Rapido & Furioso 4",
        precio: 6.30,

    },
    {
        id: 5,
        imagen: "img/f5.jpg",
        alt: "RF5",
        descripcion: "Rapido & Furioso 5",
        precio: 7.00,

    },
    {
        id: 6,
        imagen: "img/f6.jpg",
        alt: "RF6",
        descripcion: "Rapido & Furioso 6",
        precio: 7.80,

    },
    {
        id: 7,
        imagen: "img/f7.jpg",
        alt: "RF7",
        descripcion: "Rapido & Furioso 7",
        precio: 8.40,

    },
    {
        id: 8,
        imagen: "img/f8.jpg",
        alt: "RF8",
        descripcion: "Rapido & Furioso 8",
        precio: 9.00,

    },
    {
        id: 9,
        imagen: "img/f9.jpg",
        alt: "RF9",
        descripcion: "Rapido & Furioso 9",
        precio: 9.90,

    }

];

let lineasCarrito = [];

let texto ="";

productos.forEach(item =>{
    texto += 
    `<div class="peli">
        <img src="${item.imagen}" alt="${item.alt}">
        <p>${item.descripcion}</p>
        <p>${item.precio.toFixed(2)} €</p>
        <button id="${item.id}" class="button">Comprar</button>
    </div>`;
});
document.getElementById("container").innerHTML = texto;

//evento para el contenedor

document.getElementById("container").addEventListener("click", comprar);

function comprar(e){

    let id= e.target.id;

    if (e.target.innerHTML === "Comprar") {
        
        let producto = productos.find(item => item.id == id);

        let linea = lineasCarrito.find(item => item.id == id);

        // console.log(linea);

        if (linea == undefined) {
            lineasCarrito.push({
            
                id: producto.id,
                cantidad: 1,
                nombre: producto.descripcion,
                precio: producto.precio,
            
            
        });
        }else{
            linea.cantidad +=1;
        }
        

        
    actualizarCarrito();
}
}
// evento quitar producto

document.getElementById("carrito").addEventListener("click", menor);


function menor(e){

    let id= e.target.id;
    // console.log(e.target);
    // console.log(e.target.className);
    if (e.target.className == "menos") {
        id= id.replace("menos", "");
        // console.log(id);

        let linea = lineasCarrito.find(item => item.id == id);
        // console.log(linea.cantidad);
let posicion = lineasCarrito.indexOf(linea);
// console.log(posicion);

        if (linea.cantidad == 1 ) {
            lineasCarrito.splice(posicion, 1);
            console.log(linea.id.cantidad);
            // lineasCarrito = lineasCarrito.filter((i)=>  i.id !== id);
            // console.log(lineasCarrito);

        }
        if(linea.cantidad > 1){
            linea.cantidad -=1;
        }
        actualizarCarrito();
     
            
    }
    
}
    


    //splice()








function actualizarCarrito() {
    let textoCarrito=` <table>
    <caption>Carrito</caption>
    <tr>
        <th></th>
        <th coldspan="2">Cantidad</th>
        <th>Producto</th>
        <th class="num">Precio</th>
        <th class="num">Total</th>
    </tr>
    `;

    let total = 0;
    lineasCarrito.forEach(item => {
        // console.log(item);
        total += item.precio * item.cantidad;
        textoCarrito+=`<tr>
        <th><button  id="menos${item.id}" class="menos">X</button></th>
        <td class="cant">${item.cantidad}</td>
        <td>${item.nombre}</td>
        <td class="num">${item.precio.toFixed(2)} €</td>
        <td class="num">${(item.precio * item.cantidad).toFixed(2)} €</td>
</tr>`;

    });
    textoCarrito +=`<tr>
    <td class="Rnegr" colspan="4">Total</td>
    <td class="Rnegr">${total.toFixed(2)} €</td>
</tr>


</table>`;
document.getElementById("carrito").innerHTML = textoCarrito;
}