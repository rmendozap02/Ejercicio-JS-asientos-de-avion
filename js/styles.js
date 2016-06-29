var avion = {
	piloto : {
		nombre : "erich Hartmann",
		codigo : "senior",
		edad : 28,
	},
	aeromoza : {
		nombre : "Aeudrey Hepburn", 
		idioma : ["Español", "Ingles", "Portugués"]
	},
	aerolinea : "LAN",
	marca : "Boeing 737",
	asientos : [
		{numero : "1A", ocupado : false},
		{numero : "1B", ocupado : false},
		{numero : "2A", ocupado : true},
		{numero : "2B", ocupado : false},
		{numero : "3A", ocupado : true},
		{numero : "3B", ocupado : true}
	],
	ano : 2014,
	primeraClase : true
};

var avionContainer = document.getElementById('avion-container');
avionContainer.innerHTML = "";
var asientos = avion.asientos;
var a, contador;
contador = 1;
var cajaPeq = document.createElement("div");
cajaPeq.setAttribute("class","col s4");

for (var i = 0; i < asientos.length; i++) {
	a = document.createElement("div");
	a.innerHTML = asientos[i].numero;

	if(asientos[i].ocupado){
		a.setAttribute("class","ocupado asiento");
	}else{
		a.setAttribute("class","desocupado asiento");
	}

	if (cajaPeq.children.length >= 2){
		avionContainer.appendChild(cajaPeq);
		cajaPeq = document.createElement("div");
		cajaPeq.setAttribute("class","col s4");
		cajaPeq.appendChild(a);
	}else{
		cajaPeq.appendChild(a);
	}
	if(i == asientos.length - 1){
		avionContainer.appendChild(cajaPeq);
	}
}