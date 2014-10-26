var args = arguments[0] || {};

function buscar(e) {
	var datos = [];
	
	if ($.buscar.value !='') {
		$.lista_peliculas.data = [];
		require("servicios").getCine($.buscar.value, function (resp){
			if (resp != '-1') {
				Ti.API.info(resp.movies);
				for(i=0; i<resp.movies.length; i++) {
					
					datos[i] = {titulo: {text: resp.movies[i].title}, 
								ano: {text: resp.movies[i].year}, 
								foto: {image: resp.movies[i].posters.thumbnail}}
				}
				$.seccion_lista_peliculas.setItems(datos);
			}
		});
	} 
}
