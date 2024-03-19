document.addEventListener("DOMContentLoaded", () => {
    //array de productos

    var perrosArr = [];


    //cargar Perros
    function cargarJson(){
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        const apiUrl = "http://shibe.online/api/shibes";
        
        var nPerros = document.getElementById("nPerros").value;
        console.log(nPerros);
        fetch(apiUrl + "?count=" + nPerros,  requestOptions)
        .then(response =>{
            if (!response.ok){
                throw new Error("Ocurrió un herror en el response");
            }
            return response.json();
        })
        .then(data =>{
            perrosArr = data;
            console.log(perrosArr);
            pintarPerros();
        })
        .catch(error =>{
            console.error(error);
        });
    };


    function pintarPerros(){
        var divPerros = document.querySelector(".divPerros");
        console.log("pintarPerros");
    
        perrosArr.forEach(function(perro){
            var tablaBody = document.querySelector("#tablaPerros tbody");
            var fila = tablaBody.insertRow();
            fila.insertCell().innerHTML += '<img src="' + perro +'" class="image" />';

        });
        }
    //btn cargar json con funcion
    document.getElementById("cargarJson").addEventListener("click", cargarJson);
    
}); 
