const number = '954433374';
const url = "http://www.videoopen.es";

function llamar() {
	Ti.Platform.openURL('tel:+' + number );
}

function internet() {
	Ti.Platform.openURL(url );
}

function correo() {
	var emailDialog = Titanium.UI.createEmailDialog();
 
	emailDialog.subject = "Contacta con VideoOpen";
	emailDialog.toRecipients = ['info@videoopen.es'];
	emailDialog.messageBody = "Solicitud de reserva";
 
	emailDialog.open();
}