document.addEventListener("DOMContentLoaded", () => {

    var casasArr = [];
    var listaCasas = document.getElementById("listas-casas")
    var card = document.getElementById("cardtext");
    var casaTitle = document.getElementById("casaTitle");
    var casaAnimal = document.getElementById("casaAnimal");
    var casaElement = document.getElementById("casaElement");

    function cargarcasas(){
        const requestOptions= {
            method : "GET",
            redirect: "follow"
        };
        const apiUrl = "https://wizard-world-api.herokuapp.com/Houses"; 

        fetch(apiUrl, requestOptions)
        .then(response =>{
            if (!response.ok){
                throw new Error("Ocurrió un error en el response");
            }
            return response.json();
        })
        .then(datos =>{
            casasArr = datos;
            console.log(casasArr);
            casasArr = datos.map(function(elemento){
                return {animal: elemento.animal, name: elemento.name, element: elemento.element, ghost: elemento.ghost};
            });

            pintarInfoCasas();
            console.log(casasArr);
        })
        .catch(error => {
            console.log("error", error);
        });
    }

    function pintarInfoCasas(){
        listaCasas.innerHTML = ''; 
        casasArr.forEach(function (casa) {
            var listItem = document.createElement("li");
            var link = document.createElement("a");

            link.textContent = casa.name;
            link.setAttribute("href","#");
            link.setAttribute("casaanimal", casa.animal);
            link.classList.add("Link"); 
            listItem.appendChild(link);
            listaCasas.appendChild(listItem);
        });
    }

    listaCasas.addEventListener("click", function(evento){
        evento.preventDefault();
        var casaAnimal = evento.target.getAttribute("casaanimal");
        var casa = casasArr.find(casa => casa.animal === casaAnimal);

        if (casa) {
            mostrarInfoCasa(casa);
        }
    });
// mostrar casas
    function mostrarInfoCasa(casa) {
        casaTitle.textContent = casa.name;
        casaAnimal.textContent = casa.animal;
        casaElement.textContent = casa.element;
        casaGhost.textContent = casa.ghost;
        card.style.display = "block";
    }

    //cargar casas
    document.getElementById("cargarCasas").addEventListener("click", cargarcasas);
    
});