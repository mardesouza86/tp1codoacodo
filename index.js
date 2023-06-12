//evenlistener boton tickets
let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", precioTickets);

//evenlistener boton deleted
let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", Borrado);

//evenlistener para detectar cuando hacen click en el input Cantidad
let ticketsQty = document.querySelector(".ticketsQty");
ticketsQty.addEventListener("click", clearInput);

//evenlistener para detectar cuando hacen click en el input Categoria
let categoriaTickets = document.querySelector(".categoriaTickets");
categoriaTickets.addEventListener("click", descuento);


//eventlistener para detectar click en los div estudiante/trainee/junior
let estudiante = document.querySelector(".estudiante");
estudiante.addEventListener("click", category);
let trainee = document.querySelector(".trainee");
trainee.addEventListener("click", category);
let junior = document.querySelector(".junior");
junior.addEventListener("click", category);


//FUNCION PrecioTicket
function precioTickets(evento) {
    console.log(evento);
    evento.preventDefault();

    //toma la cantidad desde el Input
    let ticketsQty = document.querySelector(".ticketsQty");

    if (Number(ticketsQty.value)) {
        let categoriaTickets = document.querySelector(".categoriaTickets");
        let totalAPagar;

        switch (categoriaTickets.value) {
            case "Estudiante": {
                totalAPagar = 200 * ticketsQty.value * 0.2;
                break;
            }
            case "Trainee": {
                totalAPagar = 200 * ticketsQty.value * 0.5;
                break;
            }
            case "Junior": {
                totalAPagar = 200 * ticketsQty.value * 0.85;
                break;
            }
        }
    
        document.querySelector(".ticketsSub").textContent = `EL TOTAL A PAGAR CON EL DESCUENTO APLICADO ES DE $ ${totalAPagar}`;
        let outputNode = document.querySelector(".ticketsSub");
        let spanNode = document.createElement("span");

    } else {
        document.querySelector(".ticketsQty").style.border = "2px solid red";
        ticketsQty.value = "";
        ticketsQty.placeholder = "Ingrese una cantidad válida";
        alert("Ingrese una cantidad válida");
    }

}

//FUNCION Borrado
function Borrado() {

    document.querySelector(".ticketsSub").textContent = ""

}

//FUNCION Actualiza categoria
function category(evento) {
    // console.log(document.querySelector(".categoriaTickets"));
    let categoria = evento.target.parentNode.className;

    switch (categoria) {
        case "estudiante": {
            console.log("es estudiante");
            document.querySelector(".categoriaTickets").options.selectedIndex = 0;
            document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "trainee": {
            console.log("es trainee");
            document.querySelector(".categoriaTickets").options.selectedIndex = 1;
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "junior": {
            console.log("es junior");
            document.querySelector(".categoriaTickets").options.selectedIndex = 2;
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "#f2f2f2";
            break;
        }
    }
}

// FUNCION Eleccion ticket
function ticketsSubmit() {

    let form = document.querySelector(".ticketsForm");
console.log(form);
    inputCheck(form);
    }


//FUNCION Limpiar campo
function clearInput(evento) {
    // console.log(evento.target.className);
    document.querySelector("." + evento.target.className).style.border = "1px solid let(--gray-300)";
}

//FUNCION Switch
function descuento(evento) {
    // console.log(typeof(evento.target.value));
    switch (evento.target.value) {
        case "Estudiante": {
            document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "Trainee": {
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "Junior": {
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "#f2f2f2";
            break;
        }
    }
}


    


   