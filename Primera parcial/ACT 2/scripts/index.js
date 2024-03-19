document.addEventListener("DOMContentLoaded", () => {
    //array de productos
    var productos = [
        {nombre: "Camiseta", precio: 20, cantidad: 2},
        {nombre: "pantalon", precio: 30, cantidad: 5    },
        {nombre: "Zapatos", precio: 50, cantidad: 1}
    ];
    
    console.log("arr productos", productos);

    function pintarProductos(){
        var tablaBody = document.querySelector("#tablaProd tbody");
        tablaBody.innerHTML = "";
        
        productos.forEach(function(producto){
            console.log(producto)
            var fila = tablaBody.insertRow();
            fila.insertCell(0).textContent =producto.nombre;
            fila.insertCell(1).textContent =producto.precio;
            fila.insertCell(2).textContent= producto.cantidad;
            fila.insertCell(3).textContent= producto.precio*producto.cantidad;
        })
    }
    pintarProductos();

});


