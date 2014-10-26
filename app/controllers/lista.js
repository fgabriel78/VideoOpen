var args = arguments[0] || {};
var datos = [];

function buscar(e) {
	datos = [];
	
	if ($.buscar.value !='') {
		$.lista_peliculas.data = [];
		require("servicios").getCine($.buscar.value, function (resp){
			if (resp != '-1') {
				Ti.API.info(resp.movies);
				for(i=0; i<resp.movies.length; i++) {
					
					datos[i] = {titulo: {text: resp.movies[i].title}, 
								ano: {text: resp.movies[i].year}, 
								foto: {image: resp.movies[i].posters.thumbnail},
								valoracion: {text:resp.movies[i].ratings.critics_rating},
								foto2: {image: resp.movies[i].posters.original}}
				}
				$.seccion_lista_peliculas.setItems(datos);
			}
		});
	} 
}

function detallePelicula(e) {
	Alloy.createController("detalle", {info: datos[e.itemIndex]}).getView().open();
}
