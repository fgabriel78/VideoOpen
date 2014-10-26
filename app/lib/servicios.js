function getCine(busqueda, callback){
 
	 var request = Titanium.Network.createHTTPClient();
	 
	 var lista;
	 
	 // Si el servicio web no responde en 10 segundos nos dará error de Timeout.
	 request.setTimeout(10000);
	 
	 var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=5gmrty4zjjuesnmnwjb78rzu&q=" + busqueda + "&page_limit=10";
	 
	 // Hacemos el GET al servicio web.
	 request.open("GET",url);
	 
	 // Se gestiona la recepción del JSON.
	 request.onload = function(){
	 
		 var json = this.responseText;
		 
		  // Parseamos el JSON de respuesta
		 lista = JSON.parse(json);
		 
		 callback(lista); 
	 };
	 
	 // Se gestiona en caso de error.
	 request.onerror = function(e) {
		 var a = Ti.UI.createAlertDialog();
		 a.message='Error en conexión';
		 a.title='Atencion';
		 a.show();
		 callback('-1');
	 };
	 
	 // Se envía.
	 request.send();
	 
}

exports.getCine=getCine;