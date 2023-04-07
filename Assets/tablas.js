/************************************ TABLA DINAMICA ELITE ************************************************/

//obj tablas de las Categorias 
const arregloCategorias = [
    //Categoria de elite infantil masculina
    {
        id: "EinfaM",
        puntaje: "9.10",
        equipo: "Army",
    },
    {
        id: "EinfaM",
        puntaje: "8.45",
        equipo: "Akira",
    },
    {
        id: "EinfaM",
        puntaje: "8.10",
        equipo: "Sakura",
    },
    {
        id: "EinfaM",
        puntaje: "7.10",
        equipo: "Kiba",
    },
    //Categoria de elite infantil femenina
    {
        id: "EinfaF",
        puntaje: "9",
        equipo: "Hiro",
    },
    {
        id: "EinfaF",
        puntaje: "8.5",
        equipo: "Momo",
    },
    {
        id: "EinfaF",
        puntaje: "8",
        equipo: "Sasu",
    },
    {
        id: "EinfaF",
        puntaje: "7.10",
        equipo: "Kiba",
    },

    //Categoria elite  masculino cadete
    {
        id: "EcadM",
        puntaje: "9.50",
        equipo: "Hiro",
    },
    {
        id: "EcadM",
        puntaje: "9.05",
        equipo: "Momo",
    },
    {
        id: "EcadM",
        puntaje: "8.10",
        equipo: "Anakin",
    },
    {
        id: "EcadM",
        puntaje: "7.10",
        equipo: "Obi-Wan",
    },
    //categoria de elite femenino cadete
    {
        id: "EcadF",
        puntaje: "9.50",
        equipo: "Coco",
    },
    {
        id: "EcadF",
        puntaje: "9.05",
        equipo: "Rain",
    },
    {
        id: "EcadF",
        puntaje: "8.10",
        equipo: "Dark",
    },
    {
        id: "EcadF",
        puntaje: "7.10",
        equipo: "Bibi",
    },

    //Categoria elite masculino juveniles
    {
        id: "EjuvM",
        puntaje: "9.60",
        equipo: "Start",
    },
    {
        id: "EjuvM",
        puntaje: "9.05",
        equipo: "Ken",
    },
    {
        id: "EjuvM",
        puntaje: "8.10",
        equipo: "MM",
    },
    {
        id: "EcadM",
        puntaje: "7.10",
        equipo: "Kenobi",
    },
    //categoria de elite femenino juvenil
    {
        id: "EjuvF",
        puntaje: "9.80",
        equipo: "Roso",
    },
    {
        id: "EjuvF",
        puntaje: "9.5",
        equipo: "Moro",
    },
    {
        id: "EjuvF",
        puntaje: "8.0",
        equipo: "Dark",
    },
    {
        id: "EjuvF",
        puntaje: "7.10",
        equipo: "GR",
    },

    //Categoria elite masculino menores a 30
    {
        id: "Eadul1M",
        puntaje: "9.50",
        equipo: "Akira",
    },
    {
        id: "Eadul1M",
        puntaje: "9.05",
        equipo: "Momoi",
    },
    {
        id: "Eadul1M",
        puntaje: "8.4",
        equipo: "Aramanta",
    },
    {
        id: "Eadul1M",
        puntaje: "7.10",
        equipo: "W.A.N",
    },
    //categoria de elite femenino adulto menor a 30
    {
        id: "Eadul1F",
        puntaje: "9.5",
        equipo: "Choco",
    },
    {
        id: "Eadul1F",
        puntaje: "9",
        equipo: "Raini",
    },
    {
        id: "Eadul1F",
        puntaje: "8.10",
        equipo: "Dark-Side",
    },
    {
        id: "Eadul1F",
        puntaje: "7.10",
        equipo: "Mora",
    },

    //categoria de elite masculina adultos mayores a 30 
    {
        id: "Eadul2M",
        puntaje: "9",
        equipo: "Kiri",
    },
    {
        id: "Eadul2M",
        puntaje: "8.99",
        equipo: "Momo",
    },
    {
        id: "Eadul2M",
        puntaje: "8.10",
        equipo: "Anakin",
    },
    {
        id: "Eadul2M",
        puntaje: "7.10",
        equipo: "Obi-Wan",
    },
    //categoria de elite femenino adultos mayores a 30
    {
        id: "Eadul2F",
        puntaje: "9.50",
        equipo: "Coco",
    },
    {
        id: "Eadul2F",
        puntaje: "9.05",
        equipo: "Rain",
    },
    {
        id: "Eadul2F",
        puntaje: "8.10",
        equipo: "Dark",
    },
    {
        id: "Eadul2F",
        puntaje: "7.10",
        equipo: "Bibi",
    },


];

function cambioTabla() {
    var tabla = document.getElementById("tablaRkng");
    var j = 1
    //cuerpo de la tabla 
    arregloCategorias.forEach(element => {
        if (j <= 4) {
            let fila = '<tr scope="row"><th>';
            fila += j;
            fila += "</th>";

            fila += "<td>";
            fila += element.puntaje;
            fila += "</td>"

            fila += "<td>";
            fila += element.equipo;
            fila += "</td>";

            fila += "</tr>";

            tabla += fila;
            j++
        }
    });

    return (tabla)
}

document.getElementById("tablaRkng").innerHTML = cambioTabla();


//arreglo con parrafo de los equipos ganadores 
const arrayParrafos = [
    {
        id: "EinfaM",
        equipo: "Army",
        paraffo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil itaque vitae hic similique velit sint voluptate aliquid!",
        fraseIconica: "Quiero morir xd",
    },
];

function mostrarTexto() {
    var id = document.getElementById("cardBody");

    arrayParrafos.forEach(element => {
        var texto = '<h5 class="card-title">' + element.equipo+' </h5>';
        texto += '<p class="card-text">' ;
        texto += element.paraffo;
        texto += '</p>';
        texto += '<p> Frase Iconica: <strong> ';
        texto += element.fraseIconica;
        texto += '</strong></p>';

        id += texto;

    });
       
    return id 

}

document.getElementById("cardBody").innerHTML = mostrarTexto();

