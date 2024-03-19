document.addEventListener("DOMContentLoaded", () => {
    var videojuegos = [
        {id: 201, titulo: "Zelda", Clase:  "Aventura", precio:60},
        {id: 202, titulo: "Red Dead Redemption", Clase: "Accion", precio:60},
        {id: 203, titulo: "The Witcher", Clase: "RPG", precio:40} ,
        {id: 204, titulo: "Super Mario", Clase: "Plataforma", precio:50},
        {id: 205, titulo: "God of War", Clase: "Accion", precio:50},
        {id: 206, titulo: "Persona 5", Clase: "RPG", precio:40},
        {id: 207, titulo: "Uncharted 4", Clase: "Accion", precio:40},
        {id: 208, titulo: "Horizon Zero Dawn", Clase: "Aventura", precio:40},
        {id: 209, titulo: "The Last of Us", Clase: "Accion", precio:60},
        {id: 210, titulo: "Animal Crossing", Clase: "Simulacion", precio:50}
    ];

    console.log("videojuegos:", videojuegos);
        //agregar productos adicional.
        document.getElementById("btnAgregar").addEventListener("click", function(e){
            e.preventDefault();
            var id = document.getElementById("idVideojuego").value;
            var titulo = document.getElementById("nombreVideojuego").value;
            var Clase = document.getElementById("claseVideojuego").value;
            var precio = document.getElementById("precioVideojuego").value;
            videojuegos.push({id:id, titulo:titulo, Clase:Clase, precio:precio})
            pintarTabla(videojuegos);
        })

    function pintarTabla(items){
        var tablaBody = document.querySelector("#tablaJuegos tbody");
        tablaBody.innerHTML = "";
        
        items.forEach(function(item){
            var fila = tablaBody.insertRow();
            fila.insertCell(0).textContent =item.id;
            fila.insertCell(1).textContent =item.titulo;
            fila.insertCell(2).textContent= item.Clase;
            fila.insertCell(3).textContent= item.precio;
        })
    }
    pintarTabla(videojuegos);

    function calcularPromedio(){
        var total = videojuegos.reduce(function(prom, videojuego){
            return prom += videojuego.precio /videojuegos.length;
        }, 0);
        
        console.log(total)
        let totalDiv = document.querySelector("#promedioJuegos");
        totalDiv.innerHTML = total;
    }
    //filtrar los productos
    function filtrarJuegos(){
        var clase = document.getElementById("filtro").value;
        var videojuegosFiltrados = videojuegos.filter(function (juego){ 
            return juego.Clase === clase;

        });
        console.log("juegos filtrados:", videojuegosFiltrados);

        function pintarJuegosFiltrados(videojuegos){
            var tablaBody = document.querySelector("#tablaFiltro tbody");
            tablaBody.innerHTML = "";

            videojuegos.forEach(function(juego){
                var fila = tablaBody.insertRow();
                fila.insertCell(0).textContent =juego.id;
                fila.insertCell(1).textContent =juego.titulo;
                fila.insertCell(2).textContent= juego.Clase;
                fila.insertCell(3).textContent= juego.precio;
            })
        }
        pintarJuegosFiltrados(videojuegosFiltrados);
    }
    //calcular total 
    document.getElementById("calcularPromedio").addEventListener("click", calcularPromedio);
    //filtrar productos
    document.getElementById("filtrarVideojuegos").addEventListener("click", filtrarJuegos);

    
});