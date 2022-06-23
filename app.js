var input = document.getElementById("inputEntrada");
var validar;

function validacion () {
	for (let i = 0; i < input.value.length; i++) {
		var valorUnicode = input.value.codePointAt(i)
		if (valorUnicode >= 97 && valorUnicode <= 122 || valorUnicode == 32) {
			validar = true;
		} else {
			validar = false;
		break;
		}
	}
}

function Encriptar () {
	validacion();
	if (validar == true) {
		document.getElementById("msjNO").style.color = "black";
		var textoENC = input.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
		document.getElementById("inputSalida").innerHTML = textoENC
		document.getElementById("BT3").style.visibility = "visible";
		document.getElementById("imgMuñeco").style.visibility = "hidden";
		document.getElementById("msj1").style.visibility = "hidden";
		document.getElementById("msj2").style.visibility = "hidden";
	} else {
		document.getElementById("msjNO").style.color = "red";
	} 
}

function Desencriptar () {
	validacion();
	if (validar == true) {
		document.getElementById("msjNO").style.color = "black";
		var textoDES = input.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
		document.getElementById("inputSalida").innerHTML = textoDES
		document.getElementById("BT3").style.visibility = "visible";
		document.getElementById("imgMuñeco").style.visibility = "hidden";
		document.getElementById("msj1").style.visibility = "hidden";
		document.getElementById("msj2").style.visibility = "hidden";
	} else {
		document.getElementById("msjNO").style.color = "red";
	}

		
}

function CopiarTexto () {
	var textoCOP = document.getElementById("inputSalida").innerHTML;
	navigator.clipboard.writeText(textoCOP); 	
}

document.getElementById("BT1").onclick = Encriptar;
document.getElementById("BT2").onclick = Desencriptar;
document.getElementById("BT3").onclick = CopiarTexto;	
