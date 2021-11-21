document.getElementById("form-id").addEventListener("submit", create);

function countZ(num, x) { //Para añadir ceros;
    while (num.toString().length < x) {
        num = "0" + num;
    }
    return num;
}

function create(e) { // se crea la factura; y se guarda en el localStorage;
    console.log("bien");
    let input = document.getElementById("input").value;
    let a = new Date(); // Aqui se optiene la fecha;
    let b = countZ(a.getHours(), 3); // se obtiene la hora
    let c = countZ(a.getMinutes(), 2); // se obtine los minutos;
    let z = countZ(a.getMilliseconds(), 3); // se obtiene los milisegundos;
    let id = b + c + z; // se concatena las variables anteriores y se guarda en el ID;

    let nota = { // el cuerpo de la nota;
        id,
        input
    };

    if (localStorage.getItem("Notas") === null) { //condicional key = Notas, este vacio y se agrega la nota;
        let notas = [];
        notas.push(nota);
        localStorage.setItem("Notas", JSON.stringify(notas));
    } else {
        let notas = JSON.parse(localStorage.getItem("Notas"));
        notas.push(nota);
        localStorage.setItem("Notas", JSON.stringify(notas));
    }
    read();
    document.getElementById("form-id").reset(); // se resetea los inputs;
    e.preventDefault(); // prevenir eventos por defectos;
}



function read() { // funcion para mostrar en pantalla;
    let notes = JSON.parse(localStorage.getItem("Notas"));
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < notes.length; i++) {
        let input = notes[i].input;
        let id = notes[i].id;
        document.getElementById("tbody").innerHTML += `<tr>
            <td>${id}</td>
            <td>${input}</td>
            <td><button type="button" onclick="dele('${id}')" class="btn btn-success">¡Hecho!</button></td>
        </tr>`
    }
}


function dele(id) { // funcion para eliminar;
    console.log("eliminando");
    let notes = JSON.parse(localStorage.getItem("Notas"));
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id == id) {
            notes.splice(i, 1);
        }
    }
    localStorage.setItem("Notas", JSON.stringify(notes));
    read();
}
read();
nuevo
nuevo
