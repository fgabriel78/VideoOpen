var args = arguments[0] || {};

function cerrar(e) {
	$.detalle.close();
}

$.titulo = args.info.titulo.text;
$.poster = args.info.foto2.image;
$.ano = args.info.ano.text;
$.critica = args.info.valoracion.text;
