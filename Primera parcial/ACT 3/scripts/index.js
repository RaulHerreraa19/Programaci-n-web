document.addEventListener("DOMContentLoaded", () => {
    //array de productos
    var productos = [
        {nombre: "Camiseta", precio: 20, cantidad: 2},
        {nombre: "pantalon", precio: 30, cantidad: 5},
        {nombre: "Zapatos", precio: 50, cantidad: 1}
    ];
    
    console.log("arr productos", productos);

    //agregar productos adicional.
    document.getElementById("btnAgregar").addEventListener("click", function(e){
        e.preventDefault();
        var nombre = document.getElementById("nombreProducto").value;
        var precio = document.getElementById("precioProducto").value;
        var cantidad = document.getElementById("cantidadProducto").value;
        productos.push({nombre:nombre, precio:precio, cantidad:cantidad})
        pintarProductos(productos);
    })

    function pintarProductos(items){
        var tablaBody = document.querySelector("#tablaProd tbody");
        tablaBody.innerHTML = "";
        
        items.forEach(function(item){
            console.log(item)
            var fila = tablaBody.insertRow();
            fila.insertCell(0).textContent =item.nombre;
            fila.insertCell(1).textContent =item.precio;
            fila.insertCell(2).textContent= item.cantidad;
            fila.insertCell(3).textContent= item.precio*item.cantidad;
        })
    }
    pintarProductos(productos);
    
    
    function calcularTotalProductos(){
        var total = productos.reduce(function(sum,producto){
            return sum + producto.precio * producto.cantidad;
        }, 0);
        
        console.log(total)
        let totalDiv = document.querySelector("#totalProductos");
        totalDiv.innerHTML = total;
    }
    //filtrar los productos
    function filtrarProductos(){
        var preciomin = document.getElementById("precioMin").value;
        var productosFiltrados = productos.filter(function (producto){ 
            return producto.precio > preciomin;

        });
        console.log("productos filtrados", productosFiltrados);

        function pintarProductosFiltrados(items){
            var tablaBody = document.querySelector("#tablaFiltro tbody");
            tablaBody.innerHTML = "";

            items.forEach(function(item){
                console.log(item)
                var fila = tablaBody.insertRow();
                fila.insertCell(0).textContent =item.nombre;
                fila.insertCell(1).textContent =item.precio;
                fila.insertCell(2).textContent= item.cantidad;
                fila.insertCell(3).textContent= item.precio*item.cantidad;
            })
        }
        pintarProductosFiltrados(productosFiltrados);
    }
    //calcular total 
    document.getElementById("calcularTotal").addEventListener("click", calcularTotalProductos);
    //filtrar productos
    document.getElementById("filtrarProductos").addEventListener("click", filtrarProductos);
    
}); 










    