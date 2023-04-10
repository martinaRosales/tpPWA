/************************************ TABLA DINAMICA PROMOCIONAL ************************************************/
//arreglo elite masculino infantil 
var infaMasc = new Array();
var infaM1 = [1, '9.10 ', 'Army'];
var infaM2 = [2, '8.45', 'Akira '];
var infaM3 = [3, '8.10', 'Sakura '];
var infaM4 = [4, '7.10', 'Kiba'];
infaMasc = [infaM1, infaM2, infaM3, infaM4];

//arreglo elite femenino infantil 
var infaFem = new Array();
var infaF1 = [1, '9.50 ', 'Swift'];
var infaF2 = [2, '9.45', 'August '];
var infaF3 = [3, '8.7', 'DFY'];
var infaF4 = [4, '7.0', 'Good'];
infaFem = [infaF1, infaF2, infaF3, infaF4];

//arreglo elite masculino cadete
var cadMasc = new Array();
var cadM1 = [1, '9.50 ', 'Momo'];
var cadM2 = [2, '9.05', 'Hiro '];
var cadM3 = [3, '8.10', 'Sasu '];
var cadM4 = [4, '7.0', 'Kibo'];
cadMasc = [cadM1, cadM2, cadM3, cadM4];

//arreglo elite femenino cadete
var cadFem = new Array();
var cadF1 = [1, '9.40 ', 'Coco'];
var cadF2 = [2, '9.5', 'Rain'];
var cadF3 = [3, '8.7', 'Dark'];
var cadF4 = [4, '7.10', 'Bibi'];
cadFem = [cadF1, cadF2, cadF3, cadF4];

//arreglo elite masculino juvenil
var juvMasc = new Array();
var juvM1 = [1, '9.60 ', 'Start'];
var juvM2 = [2, '9.05', 'Ken '];
var juvM3 = [3, '8.10', 'MM '];
var juvM4 = [4, '7.10', 'Kenobi'];
juvMasc = [juvM1, juvM2, juvM3, juvM4];

//arreglo elite femenino juvenil
var juvFem = new Array();
var juvF1 = [1, '9.80 ', 'Roso'];
var juvF2 = [2, '9.51', 'Moro'];
var juvF3 = [3, '8.0', 'GR'];
var juvF4 = [4, '7.40', 'Caramel'];
juvFem = [juvF1, juvF2, juvF3, juvF4];

//arreglo elite masculino menos 30
var menos30Masc = new Array();          
var menos30M1 = [1, '9.10 ', 'Kira'];
var menos30M2 = [2, '9.05', 'Anakin '];
var menos30M3 = [3, '9.0', 'Obi-Wan '];
var menos30M4 = [4, '8.0', 'Side'];
menos30Masc = [menos30M1, menos30M2, menos30M3, menos30M4];

//arreglo elite femenino menos 30
var menos30Fem = new Array();
var menos30F1 = [1, '9.50 ', 'Akira'];
var menos30F2 = [2, '9.05', 'Mp'];
var menos30F3 = [3, '8.4', 'Araminta'];
var menos30F4 = [4, '7.10', 'WAN'];
menos30Fem = [menos30F1, menos30F2, menos30F3, menos30F4];

//arreglo elite masculino mas 30
var mas30Masc = new Array();
var mas30M1 = [1, '9.90 ', 'MMM'];
var mas30M2 = [2, '9.50', 'WWW '];
var mas30M3 = [3, '8.15', 'Sama '];
var mas30M4 = [4, '7.50', 'Hima'];
mas30Masc = [mas30M1, mas30M2, mas30M3, mas30M4];

//arreglo elite femenino mas 30
var mas30Fem = new Array();
var mas30F1 = [1, '9.05 ', 'TKD'];
var mas30F2 = [2, '8.95', 'Nara'];
var mas30F3 = [3, '8.70', 'Camel'];
var mas30F4 = [4, '7.0', 'PPP'];
mas30Fem = [mas30F1, mas30F2, mas30F3, mas30F4];

//arreglo para las tablas de las diferentes categorias 
var arrayTablas = new Array();

arrayTablas[0] = [infaFem];
arrayTablas[1] = [infaMasc];

arrayTablas[2] = [cadFem];
arrayTablas[3] = [cadMasc];

arrayTablas[4] = [juvFem];
arrayTablas[5] = [juvMasc];

arrayTablas[6] = [menos30Fem];
arrayTablas[7] = [menos30Masc];

arrayTablas[8] = [mas30Fem];
arrayTablas[9] = [mas30Masc];



function crearTabla(){
  const tablaGeneral = document.getElementById("tablaProm");
  tablaGeneral.innerHTML = `<tr>
  <th scope="col">N°</th>
  <th scope="col">Puntaje</th>
  <th scope="col">Equipo</th>
</tr>`;
}

function cambioTabla(indice) {
  var a = arrayTablas[indice];
  var tabla = document.getElementById("tablaRkng").innerHTML;
  tabla = "";
  tabla = "";
  crearTabla();
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      //cuerpo de la tabla 
      let fila = '<tr scope="row"><th>';
      fila += a[i][j][0];
      fila += "</th>";

      fila += "<td>";
      fila += a[i][j][1];
      fila += "</td>"

      fila += "<td>";
      fila += a[i][j][2];
      fila += "</td>";

      fila += "</tr>";

      tabla += fila;

    }
  }

  return (tabla)

}


//arreglo con parrafo de los equipos ganadores 
var arrayParrafos = new Array();

//elite infantil masculino ganador
var winMascInfa = new Array();
winMascInfa = [
  'Army',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'El momento en que te rindes es el momento en que dejas que otro gane'];

//elite infantil femenino ganador
var winFemInfa = new Array();
winFemInfa = [
  'Swift',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?',
  'Mente positiva, vibraciones positivas, vida positiva'
];

//elite cadete masculino ganador
var winMascCad = new Array();
winMascCad = [
  'Momo',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil',
  'Es un proceso lento, pero abandonar no lo acelerará'
];

//elite cadete femenino ganador
var winFemCad = new Array();
winFemCad = [
  'Coco',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil',
  'No temas crecer lentamente; teme solo quedarte quieto'
];

//elite juvenil masculino ganador
var winMascJuv = new Array();
winMascJuv = [
  'Start',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil',
  'Sé fuerte a pesar de ello. Algún día serás fuerte gracias a ello'
];

//elite juvenil femenino ganador
var winFemJuv = new Array();
winFemJuv = [
  'Roso',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil',
  'Solos podemos hacer tan poco, juntos podemos hacer tanto'
];

//elite menos 30 masculino ganador
var winMascMenos30 = new Array();
winMascMenos30 = [
  'Kira',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil',
  'No esperes la oportunidad. Créala'
];

//elite menos 30 femenino ganador
var winFemMenos30 = new Array();
winFemMenos30 = [
  'Akira',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil',
  'El éxito no viene a ti, tú vas hacia él'
];

//elite mas 30 masculino ganador
var winMascMas30 = new Array();
winMascMas30 = [
  'MMM',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil',
  'La clave del éxito es centrarse en los objetivos, no en los obstáculos'
];

//elite mas 30 femenino ganador
var winFemMas30 = new Array();
winFemMas30 = [
  'TKD',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, assumenda? Laboriosam impedit molestias, quisquam laborum saepe vero quis?Eius impedit cumque nihil',
  'Mi único competidor es la persona que fui ayer'
];


arrayParrafos[0] = [winFemInfa];
arrayParrafos[1] = [winMascInfa];

arrayParrafos[2] = [winFemCad];
arrayParrafos[3] = [winMascCad];

arrayParrafos[4] = [winFemJuv];
arrayParrafos[5] = [winMascJuv];

arrayParrafos[6] = [winFemMenos30];
arrayParrafos[7] = [winMascMenos30];

arrayParrafos[8] = [winFemMas30];
arrayParrafos[9] = [winMascMas30];

function mostrarTexto(indice) {
  var card = document.getElementById("cardParrafoP").innerHTML;
  var array = arrayParrafos[indice];
  card = "";
  for (let i = 0; i < array.length; i++) {
      var texto = '<h5 class="card-title"> 1° Puesto: ' + array[i][0] + ' </h5>';
      texto += '<p class="card-text">';
      texto += array[i][1];
      texto += '</p>';
      texto += '<p> Frase Iconica: <strong>';
      texto += array[i][2];
      texto += '</strong></p>';
      card += texto;
  }
 
  return card

}

const carruselImagenes = document.querySelectorAll('#recipeCarousel .carousel-item .img-fluid');
carruselImagenes.forEach(function(imagen) {
  imagen.addEventListener('click', function() {

    // Obtener el índice de la imagen haciendo referencia al atributo de "data-index"
    const index = this.getAttribute('data-index');
    document.getElementById("tablaRkng").innerHTML = cambioTabla(index);
    document.getElementById("cardParrafoP").innerHTML = mostrarTexto(index);

  });
});