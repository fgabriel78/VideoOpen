var args = arguments[0] || {};

function cerrar(e) {
	$.detalle.close();
}

$.titulo.text = args.info.titulo.text;
$.poster.image = args.info.foto2.image;
$.ano.text = args.info.ano.text;
$.critica.text = args.info.valoracion.text;
