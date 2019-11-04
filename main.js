let arrayClientes=[]; 


function aniadirCliente(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    let correcto=true;

    if (isNaN(edad)) {
        alert("La edad tiene que ser un número");
        correcto=false;
    }

    if (edad <= 18) {
        alert("La edad tiene que ser mayor de 18");
        correcto=false;
    }

    if(correcto){
        let cliente={ //Estoy declarando e inicializando un objeto con JSON
            "nombre": nombre,
            "apellidos": apellidos,
            "edad": edad
        }; 

        arrayClientes.push(cliente); //Así meto el cliente en el array
        alert("El cliente se ha insertado de forma correcta"); 
        
        mostrarClientes(); 

    }

}


function mostrarClientes(){

    let div=document.getElementById("clientes"); //No se pone .value porque quiero coger el contenedor

    div.innerHTML=""; //Con esto limpio el div para que no se me dupliquen los datos a insertar en la tabla 

    let table=document.createElement("table"); //Esto genera un <table></table>
    let trcabecera=document.createElement("tr"); 
    
    let thnombre=document.createElement("th"); 
    let thapellidos=document.createElement("th"); 
    let thedad=document.createElement("th"); 
    
    let textonombre=document.createTextNode("Nombre"); //Creo los textos para las cabeceras de la tabla
    let textoapellidos=document.createTextNode("Apellidos");
    let textoedad=document.createTextNode("Edad");

    thnombre.appendChild(textonombre); //Con esto inserto el texto en los th
    thapellidos.appendChild(textoapellidos);
    thedad.appendChild(textoedad);

    trcabecera.appendChild(thnombre); //Con esto inserto los th en las cabecera 
    trcabecera.appendChild(thapellidos); 
    trcabecera.appendChild(thedad); 

    table.appendChild(trcabecera); //Meto la cabecera en la tabla

    arrayClientes.forEach(cliente => {
        let tr=document.createElement("tr"); //Creo las filas dónde voy a meter al cliente

        let tdnombre=document.createElement("td"); //Creo los tds de cada fila
        let tdapellidos=document.createElement("td"); 
        let tdedad=document.createElement("tdedad"); 

        let valornombre=document.createTextNode(cliente.nombre); //De esta forma accedo a los valores de los clientes
        let valorapellidos=document.createTextNode(cliente.apellidos);
        let valoredad=document.createTextNode(cliente.edad);

        tdnombre.appendChild(valornombre); 
        tdapellidos.appendChild(valorapellidos);
        tdedad.appendChild(valoredad);

        tr.appendChild(tdnombre);
        tr.appendChild(tdapellidos);
        tr.appendChild(tdedad); 

        table.appendChild(tr); 

    });



div.appendChild(table); //Con esto yo meto la tabla dentro del div


}