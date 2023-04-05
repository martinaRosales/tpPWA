function categoriaInfo (id, nombre, descripcion, imagen){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
}

var categorias = new Array();
categorias[0]=new categoriaInfo(1,'Adultos 1 individual', 'Hombres y mujeres de entre 18 y 30 años pueden participar en esta categoría', 'Assets/Img/Adultos-1-individual.png');
categorias[1]=new categoriaInfo(2,'Adultos 2 individual', 'Hombres y mujeres de entre 31 y 40 años pueden participar en esta categoría', 'Assets/Img/Adultos-2-individual.png');
categorias[2]=new categoriaInfo(3,'Juveniles individual', 'Jóvenes de enre 14 y 17 años pueden participar en esta categoría', 'Assets/Img/Juveniles-individual.png');
categorias[3]=new categoriaInfo(4,'Infantiles A individual', 'Niños y niñas de 10 y 11 años pueden participar en esta categoría', 'Assets/Img/Infantiles-A-individual.png');

function mostrarCategoria(id){
    infoCategoria = document.getElementById("infoCategoria");
        tarjeta1 = '<div class="card mx-2 mt-1 mb-2" style="width: 18rem; height: fit-content;" id="categoriaInfo">'+
        '<div class="card-body">'+
          '<h5 class="card-title" id="nombreProducto">'+categorias[id].nombre+'</h5>'+
          '<p class="card-text">'+
            '<b>Descripci&oacute;n: </b>'+categorias[id].descripcion+'<br>'+
          '<div class="card-footer">'+
          '<a href="#" class="btn text-light" data-bs-toggle="modal" data-bs-target="#ModalCompra" onclick="funcionModal()" id="botonModal">Comprar</a>'+
          '</div>'+
        '</div>'+
      '</div>';
      tarjeta2 = '<div class="card" style="width: 18rem;">'+
      '<img src="'+categorias[id].imagen+'" class="card-img-top" alt="...">'+
    '</div>'
    row = '<div class="col" id="InfoCategoria">'+
    tarjeta1+
    '</div>'+
    '<div class="col" id="imagenCategoria">'+
    tarjeta2+
    '</div>'
    infoCategoria.innerHTML = row;
}


/************************************ TABLA DINAMICA ************************************************/ 

function cambioTabla() {

  //arreglo para la categoria de cadete
  
  var cadete = new Array();
  cadete[0]=('9.45','Hiro', 'M');
  cadete[1]=('9','Sakura', 'F');
  cadete[2]=('7.40','Kira', 'M');
  
  
  
  
  
}
