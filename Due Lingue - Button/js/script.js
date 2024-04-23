document.addEventListener("DOMContentLoaded", init);

function init(){
	console.log("Document Loaded");
	
	btn_inglese.addEventListener("click", inglese);
	btn_italiano.addEventListener("click", italiano);
}

function italiano(){
	h2_titolo.innerHTML = "Cliccare sul pulsante per cambiare la lingua";
	h2_titolo.Style.color = "green";
	p_testo.InnerHTML = "Javascript è un linguaggio di programmazione comunemente utlizzzato nello sviluppo delle pagine web.<br> é stato originalmente sviluppato da netscape come mezzo per aggiungere elementi dinamici e interativi ai siti web";

}

function inglese(){
	h2_titolo.innerHTML = "Click the button to change the language";
	p_testo.InnerHTML = "JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.";
}