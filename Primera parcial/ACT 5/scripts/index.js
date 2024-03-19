document.addEventListener("DOMContentLoaded", () => {
    //array de productos

    var heroes;

    function pintarProductos(items){
        var tablaBody = document.querySelector("#tablaProd tbody");
        tablaBody.innerHTML = "";
        
        items.forEach(function(item){
            var fila = tablaBody.insertRow();
            fila.insertCell(0).textContent =item.nombre;
            fila.insertCell(1).textContent =item.poderes;
            fila.insertCell(2).textContent= item.edad;
            fila.insertCell(3).textContent= item.ciudad;
        })
    }

    
    
    //filtrar los productos
    function filtrarItems(){
        var edadmin = document.getElementById("filtro").value;
        var heroesFiltrados = heroes.filter(function (heroe){ 
            return heroe.edad > edadmin;

        });

        function pintarProductosFiltrados(heroes){
            var tablaBody = document.querySelector("#tablaFiltro tbody");
            tablaBody.innerHTML = "";

            heroes.forEach(function(heroe){
                var fila = tablaBody.insertRow();
                fila.insertCell(0).textContent =heroe.nombre;
                fila.insertCell(1).textContent =heroe.poderes;
                fila.insertCell(2).textContent= heroe.edad;
                fila.insertCell(3).textContent= heroe.ciudad;
            })
        }
        pintarProductosFiltrados(heroesFiltrados);
    }
    //cargar JSON
    function cargarJson(){
        fetch('heroes.json')
            .then(response =>{
                if (!response.ok){
                    throw new Error("Ocurrió un herror en el response");
                }
                return response.json();
            })
            .then(data =>{
                heroes = data;
                console.log(heroes);
                pintarProductos(heroes);
            })
            .catch(error =>{
                console.error("Error en: ", error);
            });
            
    };
    //btn cargar json con funcion
    document.getElementById("cargarJson").addEventListener("click", cargarJson);

    //filtrar productos
    document.getElementById("filtrarProductos").addEventListener("click", filtrarItems);
    
}); 
