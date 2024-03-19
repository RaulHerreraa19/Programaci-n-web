document.addEventListener("DOMContentLoaded", () => {
    //array de productos

    var casasArr = [];
    var listaCasas = document.getElementById("lista-casas");

    //cargar Perros
    function cargarJson(){
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        const apiUrl = "https://wizard-world-api.herokuapp.com/Houses";
        
        console.log(casasArr);
        fetch(apiUrl, requestOptions)
        .then(response =>{
            if (!response.ok){
                throw new Error("Ocurrió un error en el response");
            }
            return response.json();
        })
        .then(data =>{
            casasArr = data;
            console.log(casasArr);
            casasArr = data.map(function(elemento){
                return {id: elemento.id, name:elemento.name};
            });
            pintarLinksCasas();
            console.log(casasArr);
        })
        .catch(error =>{
            console.error(error);
        });
    };


    function pintarLinksCasas(){
        casasArr.forEach(function (casa){
            var listItem = document.createElement("li");
            var link = document.createElement("a");

            link.textContent = casa.name;
            link.setAttribute("href", "#");
            link.setAttribute("idcasa",casa.id);
            link.classList.add("link");

            //Agregar elemento a la lista 
            listItem.appendChild(link);
            listaCasas.appendChild(listItem);
        });
    }

    listaCasas.addEventListener("click", function(e){
        e.preventDefault();
        var idcasa = e.target.getAttribute("idcasa");
        console.log(idcasa)
    })

    //btn cargar json con funcion
    document.getElementById("cargarCasas").addEventListener("click", cargarJson);
    
    
}); 
