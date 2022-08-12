// For full API documentation, including code examples, visit http://wix.to/94BuAAs

$w.onReady(function () {

});

const a = 229; //constante del valor del paño de City Car
var DATOS = 0; //variable de datos
var PG = 0; //variable de pintado general
var cuaGe = 0; //variable de cuadrados generales
var TC = 0; //variable del precio de tratamiento cerámico
var PRECIOT = 0; //variable del precio total
var GDC = 0; //variable del precio de guardafango delantero copiloto
var PDC = 0; //variable del precio de puerta delantera copiloto
var PTC = 0; //variable del precio de puerta trasera copiloto
var GTC = 0; //variable del precio de guardafango trasero copiloto
var PT = 0; //variable del precio de parachoque trasero
var GTP = 0; //variable del precio de guardafango trasero polito
var PTP = 0; //variable del precio de puerta trasera piloto
var PDP = 0; //variable del precio de puerta delantera piloto
var GDP = 0; //variable del precio de guardafango delantero piloto
var PD = 0; //variable del precio de parachoque delantero
var C = 0; //variable del precio de capot
var T = 0; //variable del precio de techo
var M = 0; //variable del precio de maletera

export function invParaDela_mouseIn(event) {
	$w('#rojoParaDela').show();
}
export function invParaDela_mouseOut(event) {
	$w('#rojoParaDela').hide();
}
export function invGuaDelaCopi_mouseIn(event) {
	$w('#rojoGuaDelaCopi').show();
}
export function invGuaDelaCopi_mouseOut(event) {
	$w('#rojoGuaDelaCopi').hide();
}
export function invPuerDelaCopi_mouseIn(event) {
	$w('#rojoPuerDelaCopi').show();
}
export function invPuerDelaCopi_mouseOut(event) {
	$w('#rojoPuerDelaCopi').hide();
}
export function invPuerTrasCopi_mouseIn(event) {
	$w('#rojoPuerTrasCopi').show();
}
export function invPuerTrasCopi_mouseOut(event) {
	$w('#rojoPuerTrasCopi').hide();
}
export function invGuaTrasCopi_mouseIn(event) {
	$w('#rojoGuaTrasCopi').show();
}
export function invGuaTrasCopi_mouseOut(event) {
	$w('#rojoGuaTrasCopi').hide();
}
export function invParaTras_mouseIn(event) {
	$w('#rojoParaTras').show();
}
export function invParaTras_mouseOut(event) {
	$w('#rojoParaTras').hide();
}
export function invGuaTrasPilo_mouseIn(event) {
	$w('#rojoGuaTrasPilo').show();
}
export function invGuaTrasPilo_mouseOut(event) {
	$w('#rojoGuaTrasPilo').hide();
}
export function invPuerTrasPilo_mouseIn(event) {
	$w('#rojoPuerTrasPilo').show();
}
export function invPuerTrasPilo_mouseOut(event) {
	$w('#rojoPuerTrasPilo').hide();
}
export function invPuerDelaPilo_mouseIn(event) {
	$w('#rojoPuerDelaPilo').show();
}
export function invPuerDelaPilo_mouseOut(event) {
	$w('#rojoPuerDelaPilo').hide();
}
export function invGuarDelaPilo_mouseIn(event) {
	$w('#rojoGuaDelaPilo').show();
}
export function invGuarDelaPilo_mouseOut(event) {
	$w('#rojoGuaDelaPilo').hide();
}
export function invCapot_mouseIn(event) {
	$w('#rojoCapot').show();
}
export function invCapot_mouseOut(event) {
	$w('#rojoCapot').hide();
}
export function invTecho_mouseIn(event) {
	$w('#rojoTecho').show();
}
export function invTecho_mouseOut(event) {
	$w('#rojoTecho').hide();
}
export function invMaletera_mouseIn(event) {
	$w('#rojoMaletera').show();
}
export function invMaletera_mouseOut(event) {
	$w('#rojoMaletera').hide();
}

////////////////////////////////////OPCIONES/////////////////////////////////////////////////////////////////////////////////////

/////////////////Opciones de Guardafango Delantero Copiloto/////////////////////////

export function invGuaDelaCopi_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesGuaDelaCopi').hide();
		$w('#texNeGuaDelaCopi').show();
		$w('#xtranGuaDelaCopi').show();
		$w('#ploLeGDC').hide(), $w('#ploMoGDC').hide(), $w('#ploGraGDC').hide();
		$w('#cuaLeGDC').show(), $w('#cuaMoGDC').show(), $w('#cuaGraGDC').show();
		$w('#boxInvLeGDC').show(), $w('#boxInvMoGDC').show(), $w('#boxInvGraGDC').show();
	}
	if (PG === 1) {
		$w('#ploLeGDC').hide(), $w('#ploMoGDC').hide(), $w('#ploGraGDC').hide();
		$w('#cuaLeGDC').show(), $w('#cuaMoGDC').show(), $w('#cuaGraGDC').show();
		$w('#boxInvLeGDC').show(), $w('#boxInvMoGDC').show(), $w('#boxInvGraGDC').show();
	}
}

export function xtranGuaDelaCopi_mouseIn(event) {
	$w('#xrojaGuaDelaCopi').show();
}

export function xtranGuaDelaCopi_mouseOut(event) {
	$w('#xrojaGuaDelaCopi').hide();
}

export function xtranGuaDelaCopi_click(event) {
	GDC = 0;
	$w('#texDesGuaDelaCopi').show();
	$w('#texNeGuaDelaCopi').hide();
	$w('#xtranGuaDelaCopi').hide();
	$w('#xrojaGuaDelaCopi').hide();
	$w('#checkLeGDC').hide(), $w('#checkMoGDC').hide(), $w('#checkGraGDC').hide();
	$w('#cuaLeGDC').hide(), $w('#cuaMoGDC').hide(), $w('#cuaGraGDC').hide();
	$w('#boxInvLeGDC').hide(), $w('#boxInvMoGDC').hide(), $w('#boxInvGraGDC').hide();
	$w('#ploLeGDC').show(), $w('#ploMoGDC').show(), $w('#ploGraGDC').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLeGDC_click(event) {
	GDC = a;
	if (PG === 0) {
		$w('#checkLeGDC').show(), $w('#checkMoGDC').hide(), $w('#checkGraGDC').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeGDC').hide(), $w('#boxInvMoGDC').hide(), $w('#boxInvGraGDC').hide();
		$w('#checkLeGDC').show(), $w('#checkMoGDC').hide(), $w('#checkGraGDC').hide();
		$w('#cuaMoGDC').hide(), $w('#cuaGraGDC').hide(), $w('#ploLeGDC').show(), $w('#ploMoGDC').show(), $w('#ploGraGDC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoGDC_click(event) {
	GDC = a + 50;
	if (PG === 0) {
		$w('#checkLeGDC').hide(), $w('#checkMoGDC').show(), $w('#checkGraGDC').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeGDC').hide(), $w('#boxInvMoGDC').hide(), $w('#boxInvGraGDC').hide();
		$w('#checkLeGDC').hide(), $w('#checkMoGDC').show(), $w('#checkGraGDC').hide();
		$w('#cuaLeGDC').hide(), $w('#cuaGraGDC').hide(), $w('#ploLeGDC').show(), $w('#ploMoGDC').show(), $w('#ploGraGDC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraGDC_click(event) {
	GDC = a + 100;
	if (PG === 0) {
		$w('#checkLeGDC').hide(), $w('#checkMoGDC').hide(), $w('#checkGraGDC').show();
	}
	if (PG === 1) {
		$w('#boxInvLeGDC').hide(), $w('#boxInvMoGDC').hide(), $w('#boxInvGraGDC').hide();
		$w('#checkLeGDC').hide(), $w('#checkMoGDC').hide(), $w('#checkGraGDC').show();
		$w('#cuaLeGDC').hide(), $w('#cuaMoGDC').hide(), $w('#ploLeGDC').show(), $w('#ploMoGDC').show(), $w('#ploGraGDC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Puerta Delantera Copiloto//////////////////////

export function invPuerDelaCopi_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#textDesPueDelaCopi').hide();
		$w('#texNePueDelaCopi').show();
		$w('#xtranPueDelaCopi').show();
		$w('#ploLePDC').hide(), $w('#ploMoPDC').hide(), $w('#ploGraPDC').hide();
		$w('#cuaLePDC').show(), $w('#cuaMoPDC').show(), $w('#cuaGraPDC').show();
		$w('#boxInvLePDC').show(), $w('#boxInvMoPDC').show(), $w('#boxInvGraPDC').show();
	}
	if (PG === 1) {
		$w('#ploLePDC').hide(), $w('#ploMoPDC').hide(), $w('#ploGraPDC').hide();
		$w('#cuaLePDC').show(), $w('#cuaMoPDC').show(), $w('#cuaGraPDC').show();
		$w('#boxInvLePDC').show(), $w('#boxInvMoPDC').show(), $w('#boxInvGraPDC').show();
	}
}

export function xtranPueDelaCopi_mouseIn(event) {
	$w('#xrojoPueDelaCopi').show();
}

export function xtranPueDelaCopi_mouseOut(event) {
	$w('#xrojoPueDelaCopi').hide();
}

export function xtranPueDelaCopi_click(event) {
	PDC = 0;
	$w('#textDesPueDelaCopi').show();
	$w('#texNePueDelaCopi').hide();
	$w('#xtranPueDelaCopi').hide();
	$w('#xrojoPueDelaCopi').hide();
	$w('#checkLePDC').hide(), $w('#checkMoPDC').hide(), $w('#checkGraPDC').hide();
	$w('#cuaLePDC').hide(), $w('#cuaMoPDC').hide(), $w('#cuaGraPDC').hide();
	$w('#boxInvLePDC').hide(), $w('#boxInvMoPDC').hide(), $w('#boxInvGraPDC').hide();
	$w('#ploLePDC').show(), $w('#ploMoPDC').show(), $w('#ploGraPDC').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLePDC_click(event) {
	PDC = a;
	if (PG === 0) {
		$w('#checkLePDC').show(), $w('#checkMoPDC').hide(), $w('#checkGraPDC').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePDC').hide(), $w('#boxInvMoPDC').hide(), $w('#boxInvGraPDC').hide();
		$w('#checkLePDC').show(), $w('#checkMoPDC').hide(), $w('#checkGraPDC').hide();
		$w('#cuaMoPDC').hide(), $w('#cuaGraPDC').hide(), $w('#ploLePDC').show(), $w('#ploMoPDC').show(), $w('#ploGraPDC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoPDC_click(event) {
	PDC = a + 50;
	if (PG === 0) {
		$w('#checkLePDC').hide(), $w('#checkMoPDC').show(), $w('#checkGraPDC').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePDC').hide(), $w('#boxInvMoPDC').hide(), $w('#boxInvGraPDC').hide();
		$w('#checkLePDC').hide(), $w('#checkMoPDC').show(), $w('#checkGraPDC').hide();
		$w('#cuaLePDC').hide(), $w('#cuaGraPDC').hide(), $w('#ploLePDC').show(), $w('#ploMoPDC').show(), $w('#ploGraPDC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraPDC_click(event) {
	PDC = a + 100;
	if (PG === 0) {
		$w('#checkLePDC').hide(), $w('#checkMoPDC').hide(), $w('#checkGraPDC').show();
	}
	if (PG === 1) {
		$w('#boxInvLePDC').hide(), $w('#boxInvMoPDC').hide(), $w('#boxInvGraPDC').hide();
		$w('#checkLePDC').hide(), $w('#checkMoPDC').hide(), $w('#checkGraPDC').show();
		$w('#cuaLePDC').hide(), $w('#cuaMoPDC').hide(), $w('#ploLePDC').show(), $w('#ploMoPDC').show(), $w('#ploGraPDC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Puerta Trasera Copiloto//////////////////////

export function invPuerTrasCopi_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesPueTraCopi').hide();
		$w('#texNePueTrasCopi').show();
		$w('#xtranPueTraCopi').show();
		$w('#ploLePTC').hide(), $w('#ploMoPTC').hide(), $w('#ploGraPTC').hide();
		$w('#cuaLePTC').show(), $w('#cuaMoPTC').show(), $w('#cuaGraPTC').show();
		$w('#boxInvLePTC').show(), $w('#boxInvMoPTC').show(), $w('#boxInvGraPTC').show();
	}
	if (PG === 1) {
		$w('#ploLePTC').hide(), $w('#ploMoPTC').hide(), $w('#ploGraPTC').hide();
		$w('#cuaLePTC').show(), $w('#cuaMoPTC').show(), $w('#cuaGraPTC').show();
		$w('#boxInvLePTC').show(), $w('#boxInvMoPTC').show(), $w('#boxInvGraPTC').show();
	}
}

export function xtranPueTraCopi_mouseIn(event) {
	$w('#xrojoPueTraCopi').show();
}

export function xtranPueTraCopi_mouseOut(event) {
	$w('#xrojoPueTraCopi').hide();
}

export function xtranPueTraCopi_click(event) {
	PTC = 0;
	$w('#texDesPueTraCopi').show();
	$w('#texNePueTrasCopi').hide();
	$w('#xtranPueTraCopi').hide();
	$w('#xrojoPueTraCopi').hide();
	$w('#checkLePTC').hide(), $w('#checkMoPTC').hide(), $w('#checkGraPTC').hide();
	$w('#cuaLePTC').hide(), $w('#cuaMoPTC').hide(), $w('#cuaGraPTC').hide();
	$w('#boxInvLePTC').hide(), $w('#boxInvMoPTC').hide(), $w('#boxInvGraPTC').hide();
	$w('#ploLePTC').show(), $w('#ploMoPTC').show(), $w('#ploGraPTC').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLePTC_click(event) {
	PTC = a;
	if (PG === 0) {
		$w('#checkLePTC').show(), $w('#checkMoPTC').hide(), $w('#checkGraPTC').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePTC').hide(), $w('#boxInvMoPTC').hide(), $w('#boxInvGraPTC').hide();
		$w('#checkLePTC').show(), $w('#checkMoPTC').hide(), $w('#checkGraPTC').hide();
		$w('#cuaMoPTC').hide(), $w('#cuaGraPTC').hide(), $w('#ploLePTC').show(), $w('#ploMoPTC').show(), $w('#ploGraPTC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}
export function boxInvMoPTC_click(event) {
	PTC = a + 50;
	if (PG === 0) {
		$w('#checkLePTC').hide(), $w('#checkMoPTC').show(), $w('#checkGraPTC').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePTC').hide(), $w('#boxInvMoPTC').hide(), $w('#boxInvGraPTC').hide();
		$w('#checkLePTC').hide(), $w('#checkMoPTC').show(), $w('#checkGraPTC').hide();
		$w('#cuaLePTC').hide(), $w('#cuaGraPTC').hide(), $w('#ploLePTC').show(), $w('#ploMoPTC').show(), $w('#ploGraPTC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraPTC_click(event) {
	PTC = a + 100;
	if (PG === 0) {
		$w('#checkLePTC').hide(), $w('#checkMoPTC').hide(), $w('#checkGraPTC').show();
	}
	if (PG === 1) {
		$w('#boxInvLePTC').hide(), $w('#boxInvMoPTC').hide(), $w('#boxInvGraPTC').hide();
		$w('#checkLePTC').hide(), $w('#checkMoPTC').hide(), $w('#checkGraPTC').show();
		$w('#cuaLePTC').hide(), $w('#cuaMoPTC').hide(), $w('#ploLePTC').show(), $w('#ploMoPTC').show(), $w('#ploGraPTC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Guardafando Trasero Copiloto//////////////////////

export function invGuaTrasCopi_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesGuaTraCopi').hide();
		$w('#texNeGuaTraCopi').show();
		$w('#xtranGuaTraCopi').show();
		$w('#ploLeGTC').hide(), $w('#ploMoGTC').hide(), $w('#ploGraGTC').hide();
		$w('#cuaLeGTC').show(), $w('#cuaMoGTC').show(), $w('#cuaGraGTC').show();
		$w('#boxInvLeGTC').show(), $w('#boxInvMoGTC').show(), $w('#boxInvGraGTC').show();
	}
	if (PG === 1) {
		$w('#ploLeGTC').hide(), $w('#ploMoGTC').hide(), $w('#ploGraGTC').hide();
		$w('#cuaLeGTC').show(), $w('#cuaMoGTC').show(), $w('#cuaGraGTC').show();
		$w('#boxInvLeGTC').show(), $w('#boxInvMoGTC').show(), $w('#boxInvGraGTC').show();
	}
}

export function xtranGuaTraCopi_mouseIn(event) {
	$w('#xrojoGuaTraCopi').show();
}

export function xtranGuaTraCopi_mouseOut(event) {
	$w('#xrojoGuaTraCopi').hide();
}

export function xtranGuaTraCopi_click(event) {
	GTC = 0;
	$w('#texDesGuaTraCopi').show();
	$w('#texNeGuaTraCopi').hide();
	$w('#xtranGuaTraCopi').hide();
	$w('#xrojoGuaTraCopi').hide();
	$w('#checkLeGTC').hide(), $w('#checkMoGTC').hide(), $w('#checkGraGTC').hide();
	$w('#cuaLeGTC').hide(), $w('#cuaMoGTC').hide(), $w('#cuaGraGTC').hide();
	$w('#boxInvLeGTC').hide(), $w('#boxInvMoGTC').hide(), $w('#boxInvGraGTC').hide();
	$w('#ploLeGTC').show(), $w('#ploMoGTC').show(), $w('#ploGraGTC').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLeGTC_click(event) {
	GTC = a;
	if (PG === 0) {
		$w('#checkLeGTC').show(), $w('#checkMoGTC').hide(), $w('#checkGraGTC').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeGTC').hide(), $w('#boxInvMoGTC').hide(), $w('#boxInvGraGTC').hide();
		$w('#checkLeGTC').show(), $w('#checkMoGTC').hide(), $w('#checkGraGTC').hide();
		$w('#cuaMoGTC').hide(), $w('#cuaGraGTC').hide(), $w('#ploLeGTC').show(), $w('#ploMoGTC').show(), $w('#ploGraGTC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoGTC_click(event) {
	GTC = a + 50;
	if (PG === 0) {
		$w('#checkLeGTC').hide(), $w('#checkMoGTC').show(), $w('#checkGraGTC').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeGTC').hide(), $w('#boxInvMoGTC').hide(), $w('#boxInvGraGTC').hide();
		$w('#checkLeGTC').hide(), $w('#checkMoGTC').show(), $w('#checkGraGTC').hide();
		$w('#cuaLeGTC').hide(), $w('#cuaGraGTC').hide(), $w('#ploLeGTC').show(), $w('#ploMoGTC').show(), $w('#ploGraGTC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraGTC_click(event) {
	GTC = a + 100;
	if (PG === 0) {
		$w('#checkLeGTC').hide(), $w('#checkMoGTC').hide(), $w('#checkGraGTC').show();
	}
	if (PG === 1) {
		$w('#boxInvLeGTC').hide(), $w('#boxInvMoGTC').hide(), $w('#boxInvGraGTC').hide();
		$w('#checkLeGTC').hide(), $w('#checkMoGTC').hide(), $w('#checkGraGTC').show();
		$w('#cuaLeGTC').hide(), $w('#cuaMoGTC').hide(), $w('#ploLeGTC').show(), $w('#ploMoGTC').show(), $w('#ploGraGTC').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Parachoque Trasero//////////////////////

export function invParaTras_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesParaTra').hide();
		$w('#texNeParaTras').show();
		$w('#xtranParaTra').show();
		$w('#ploLePT').hide(), $w('#ploMoPT').hide(), $w('#ploGraPT').hide();
		$w('#cuaLePT').show(), $w('#cuaMoPT').show(), $w('#cuaGraPT').show();
		$w('#boxInvLePT').show(), $w('#boxInvMoPT').show(), $w('#boxInvGraPT').show();
	}
	if (PG === 1) {
		$w('#ploLePT').hide(), $w('#ploMoPT').hide(), $w('#ploGraPT').hide();
		$w('#cuaLePT').show(), $w('#cuaMoPT').show(), $w('#cuaGraPT').show();
		$w('#boxInvLePT').show(), $w('#boxInvMoPT').show(), $w('#boxInvGraPT').show();
	}
}

export function xtranParaTra_mouseIn(event) {
	$w('#xrojoParaTra').show();
}

export function xtranParaTra_mouseOut(event) {
	$w('#xrojoParaTra').hide();
}

export function xtranParaTra_click(event) {
	PT = 0;
	$w('#texDesParaTra').show();
	$w('#texNeParaTras').hide();
	$w('#xtranParaTra').hide();
	$w('#xrojoParaTra').hide();
	$w('#checkLePT').hide(), $w('#checkMoPT').hide(), $w('#checkGraPT').hide();
	$w('#cuaLePT').hide(), $w('#cuaMoPT').hide(), $w('#cuaGraPT').hide();
	$w('#boxInvLePT').hide(), $w('#boxInvMoPT').hide(), $w('#boxInvGraPT').hide();
	$w('#ploLePT').show(), $w('#ploMoPT').show(), $w('#ploGraPT').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLePT_click(event) {
	PT = a;
	if (PG === 0) {
		$w('#checkLePT').show(), $w('#checkMoPT').hide(), $w('#checkGraPT').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePT').hide(), $w('#boxInvMoPT').hide(), $w('#boxInvGraPT').hide();
		$w('#checkLePT').show(), $w('#checkMoPT').hide(), $w('#checkGraPT').hide();
		$w('#cuaMoPT').hide(), $w('#cuaGraPT').hide(), $w('#ploLePT').show(), $w('#ploMoPT').show(), $w('#ploGraPT').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoPT_click(event) {
	PT = a + 50;
	if (PG === 0) {
		$w('#checkLePT').hide(), $w('#checkMoPT').show(), $w('#checkGraPT').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePT').hide(), $w('#boxInvMoPT').hide(), $w('#boxInvGraPT').hide();
		$w('#checkLePT').hide(), $w('#checkMoPT').show(), $w('#checkGraPT').hide();
		$w('#cuaLePT').hide(), $w('#cuaGraPT').hide(), $w('#ploLePT').show(), $w('#ploMoPT').show(), $w('#ploGraPT').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraPT_click(event) {
	PT = a + 100;
	if (PG === 0) {
		$w('#checkLePT').hide(), $w('#checkMoPT').hide(), $w('#checkGraPT').show();
	}
	if (PG === 1) {
		$w('#boxInvLePT').hide(), $w('#boxInvMoPT').hide(), $w('#boxInvGraPT').hide();
		$w('#checkLePT').hide(), $w('#checkMoPT').hide(), $w('#checkGraPT').show();
		$w('#cuaLePT').hide(), $w('#cuaMoPT').hide(), $w('#ploLePT').show(), $w('#ploMoPT').show(), $w('#ploGraPT').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Guardafango Trasero Piloto//////////////////////

export function invGuaTrasPilo_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesGuaTraPilo').hide();
		$w('#texNeGuaTraPilo').show();
		$w('#xtranGuaTraPilo').show();
		$w('#ploLeGTP').hide(), $w('#ploMoGTP').hide(), $w('#ploGraGTP').hide();
		$w('#cuaLeGTP').show(), $w('#cuaMoGTP').show(), $w('#cuaGraGTP').show();
		$w('#boxInvLeGTP').show(), $w('#boxInvMoGTP').show(), $w('#boxInvGraGTP').show();
	}
	if (PG === 1) {
		$w('#ploLeGTP').hide(), $w('#ploMoGTP').hide(), $w('#ploGraGTP').hide();
		$w('#cuaLeGTP').show(), $w('#cuaMoGTP').show(), $w('#cuaGraGTP').show();
		$w('#boxInvLeGTP').show(), $w('#boxInvMoGTP').show(), $w('#boxInvGraGTP').show();
	}
}

export function xtranGuaTraPilo_mouseIn(event) {
	$w('#xrojoGuaTraPilo').show();
}

export function xtranGuaTraPilo_mouseOut(event) {
	$w('#xrojoGuaTraPilo').hide();
}

export function xtranGuaTraPilo_click(event) {
	GTP = 0;
	$w('#texDesGuaTraPilo').show();
	$w('#texNeGuaTraPilo').hide();
	$w('#xtranGuaTraPilo').hide();
	$w('#xrojoGuaTraPilo').hide();
	$w('#checkLeGTP').hide(), $w('#checkMoGTP').hide(), $w('#checkGraGTP').hide();
	$w('#cuaLeGTP').hide(), $w('#cuaMoGTP').hide(), $w('#cuaGraGTP').hide();
	$w('#boxInvLeGTP').hide(), $w('#boxInvMoGTP').hide(), $w('#boxInvGraGTP').hide();
	$w('#ploLeGTP').show(), $w('#ploMoGTP').show(), $w('#ploGraGTP').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLeGTP_click(event) {
	GTP = a;
	if (PG === 0) {
		$w('#checkLeGTP').show(), $w('#checkMoGTP').hide(), $w('#checkGraGTP').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeGTP').hide(), $w('#boxInvMoGTP').hide(), $w('#boxInvGraGTP').hide();
		$w('#checkLeGTP').show(), $w('#checkMoGTP').hide(), $w('#checkGraGTP').hide();
		$w('#cuaMoGTP').hide(), $w('#cuaGraGTP').hide(), $w('#ploLeGTP').show(), $w('#ploMoGTP').show(), $w('#ploGraGTP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoGTP_click(event) {
	GTP = a + 50;
	if (PG === 0) {
		$w('#checkLeGTP').hide(), $w('#checkMoGTP').show(), $w('#checkGraGTP').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeGTP').hide(), $w('#boxInvMoGTP').hide(), $w('#boxInvGraGTP').hide();
		$w('#checkLeGTP').hide(), $w('#checkMoGTP').show(), $w('#checkGraGTP').hide();
		$w('#cuaLeGTP').hide(), $w('#cuaGraGTP').hide(), $w('#ploLeGTP').show(), $w('#ploMoGTP').show(), $w('#ploGraGTP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraGTP_click(event) {
	GTP = a + 100;
	if (PG === 0) {
		$w('#checkLeGTP').hide(), $w('#checkMoGTP').hide(), $w('#checkGraGTP').show();
	}
	if (PG === 1) {
		$w('#boxInvLeGTP').hide(), $w('#boxInvMoGTP').hide(), $w('#boxInvGraGTP').hide();
		$w('#checkLeGTP').hide(), $w('#checkMoGTP').hide(), $w('#checkGraGTP').show();
		$w('#cuaLeGTP').hide(), $w('#cuaMoGTP').hide(), $w('#ploLeGTP').show(), $w('#ploMoGTP').show(), $w('#ploGraGTP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Puerta Trasera Piloto//////////////////////

export function invPuerTrasPilo_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesPueTraPilo').hide();
		$w('#texNePueTraPilo').show();
		$w('#xtranPueTraPilo').show();
		$w('#ploLePTP').hide(), $w('#ploMoPTP').hide(), $w('#ploGraPTP').hide();
		$w('#cuaLePTP').show(), $w('#cuaMoPTP').show(), $w('#cuaGraPTP').show();
		$w('#boxInvLePTP').show(), $w('#boxInvMoPTP').show(), $w('#boxInvGraPTP').show();
	}
	if (PG === 1) {
		$w('#ploLePTP').hide(), $w('#ploMoPTP').hide(), $w('#ploGraPTP').hide();
		$w('#cuaLePTP').show(), $w('#cuaMoPTP').show(), $w('#cuaGraPTP').show();
		$w('#boxInvLePTP').show(), $w('#boxInvMoPTP').show(), $w('#boxInvGraPTP').show();
	}
}

export function xtranPueTraPilo_mouseIn(event) {
	$w('#xrojoPueTraPilo').show();
}

export function xtranPueTraPilo_mouseOut(event) {
	$w('#xrojoPueTraPilo').hide();
}

export function xtranPueTraPilo_click(event) {
	PTP = 0;
	$w('#texDesPueTraPilo').show();
	$w('#texNePueTraPilo').hide();
	$w('#xtranPueTraPilo').hide();
	$w('#xrojoPueTraPilo').hide();
	$w('#checkLePTP').hide(), $w('#checkMoPTP').hide(), $w('#checkGraPTP').hide();
	$w('#cuaLePTP').hide(), $w('#cuaMoPTP').hide(), $w('#cuaGraPTP').hide();
	$w('#boxInvLePTP').hide(), $w('#boxInvMoPTP').hide(), $w('#boxInvGraPTP').hide();
	$w('#ploLePTP').show(), $w('#ploMoPTP').show(), $w('#ploGraPTP').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLePTP_click(event) {
	PTP = a;
	if (PG === 0) {
		$w('#checkLePTP').show(), $w('#checkMoPTP').hide(), $w('#checkGraPTP').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePTP').hide(), $w('#boxInvMoPTP').hide(), $w('#boxInvGraPTP').hide();
		$w('#checkLePTP').show(), $w('#checkMoPTP').hide(), $w('#checkGraPTP').hide();
		$w('#cuaMoPTP').hide(), $w('#cuaGraPTP').hide(), $w('#ploLePTP').show(), $w('#ploMoPTP').show(), $w('#ploGraPTP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoPTP_click(event) {
	PTP = a + 50;
	if (PG === 0) {
		$w('#checkLePTP').hide(), $w('#checkMoPTP').show(), $w('#checkGraPTP').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePTP').hide(), $w('#boxInvMoPTP').hide(), $w('#boxInvGraPTP').hide();
		$w('#checkLePTP').hide(), $w('#checkMoPTP').show(), $w('#checkGraPTP').hide();
		$w('#cuaLePTP').hide(), $w('#cuaGraPTP').hide(), $w('#ploLePTP').show(), $w('#ploMoPTP').show(), $w('#ploGraPTP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraPTP_click(event) {
	PTP = a + 100;
	if (PG === 0) {
		$w('#checkLePTP').hide(), $w('#checkMoPTP').hide(), $w('#checkGraPTP').show();
	}
	if (PG === 1) {
		$w('#boxInvLePTP').hide(), $w('#boxInvMoPTP').hide(), $w('#boxInvGraPTP').hide();
		$w('#checkLePTP').hide(), $w('#checkMoPTP').hide(), $w('#checkGraPTP').show();
		$w('#cuaLePTP').hide(), $w('#cuaMoPTP').hide(), $w('#ploLePTP').show(), $w('#ploMoPTP').show(), $w('#ploGraPTP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Puerta Delantera Piloto//////////////////////

export function invPuerDelaPilo_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesPueDelaPilo').hide();
		$w('#texNePueDelaPilo').show();
		$w('#xtranPueDelaPilo').show();
		$w('#ploLePDP').hide(), $w('#ploMoPDP').hide(), $w('#ploGraPDP').hide();
		$w('#cuaLePDP').show(), $w('#cuaMoPDP').show(), $w('#cuaGraPDP').show();
		$w('#boxInvLePDP').show(), $w('#boxInvMoPDP').show(), $w('#boxInvGraPDP').show();
	}
	if (PG === 1) {
		$w('#ploLePDP').hide(), $w('#ploMoPDP').hide(), $w('#ploGraPDP').hide();
		$w('#cuaLePDP').show(), $w('#cuaMoPDP').show(), $w('#cuaGraPDP').show();
		$w('#boxInvLePDP').show(), $w('#boxInvMoPDP').show(), $w('#boxInvGraPDP').show();
	}
}

export function xtranPueDelaPilo_mouseIn(event) {
	$w('#xrojoPueDelaPilo').show();
}

export function xtranPueDelaPilo_mouseOut(event) {
	$w('#xrojoPueDelaPilo').hide();
}

export function xtranPueDelaPilo_click(event) {
	PDP = 0;
	$w('#texDesPueDelaPilo').show();
	$w('#texNePueDelaPilo').hide();
	$w('#xtranPueDelaPilo').hide();
	$w('#xrojoPueDelaPilo').hide();
	$w('#checkLePDP').hide(), $w('#checkMoPDP').hide(), $w('#checkGraPDP').hide();
	$w('#cuaLePDP').hide(), $w('#cuaMoPDP').hide(), $w('#cuaGraPDP').hide();
	$w('#boxInvLePDP').hide(), $w('#boxInvMoPDP').hide(), $w('#boxInvGraPDP').hide();
	$w('#ploLePDP').show(), $w('#ploMoPDP').show(), $w('#ploGraPDP').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLePDP_click(event) {
	PDP = a;
	if (PG === 0) {
		$w('#checkLePDP').show(), $w('#checkMoPDP').hide(), $w('#checkGraPDP').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePDP').hide(), $w('#boxInvMoPDP').hide(), $w('#boxInvGraPDP').hide();
		$w('#checkLePDP').show(), $w('#checkMoPDP').hide(), $w('#checkGraPDP').hide();
		$w('#cuaMoPDP').hide(), $w('#cuaGraPDP').hide(), $w('#ploLePDP').show(), $w('#ploMoPDP').show(), $w('#ploGraPDP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoPDP_click(event) {
	PDP = a + 50;
	if (PG === 0) {
		$w('#checkLePDP').hide(), $w('#checkMoPDP').show(), $w('#checkGraPDP').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePDP').hide(), $w('#boxInvMoPDP').hide(), $w('#boxInvGraPDP').hide();
		$w('#checkLePDP').hide(), $w('#checkMoPDP').show(), $w('#checkGraPDP').hide();
		$w('#cuaLePDP').hide(), $w('#cuaGraPDP').hide(), $w('#ploLePDP').show(), $w('#ploMoPDP').show(), $w('#ploGraPDP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraPDP_click(event) {
	PDP = a + 100;
	if (PG === 0) {
		$w('#checkLePDP').hide(), $w('#checkMoPDP').hide(), $w('#checkGraPDP').show();
	}
	if (PG === 1) {
		$w('#boxInvLePDP').hide(), $w('#boxInvMoPDP').hide(), $w('#boxInvGraPDP').hide();
		$w('#checkLePDP').hide(), $w('#checkMoPDP').hide(), $w('#checkGraPDP').show();
		$w('#cuaLePDP').hide(), $w('#cuaMoPDP').hide(), $w('#ploLePDP').show(), $w('#ploMoPDP').show(), $w('#ploGraPDP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Guardafango Delantero Piloto/////////////////////////

export function invGuarDelaPilo_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesGuaDelaPilo').hide();
		$w('#texNeGuaDelaPilo').show();
		$w('#xtranGuaDelaPilo').show();
		$w('#ploLeGDP').hide(), $w('#ploMoGDP').hide(), $w('#ploGraGDP').hide();
		$w('#cuaLeGDP').show(), $w('#cuaMoGDP').show(), $w('#cuaGraGDP').show();
		$w('#boxInvLeGDP').show(), $w('#boxInvMoGDP').show(), $w('#boxInvGraGDP').show();
	}
	if (PG === 1) {
		$w('#ploLeGDP').hide(), $w('#ploMoGDP').hide(), $w('#ploGraGDP').hide();
		$w('#cuaLeGDP').show(), $w('#cuaMoGDP').show(), $w('#cuaGraGDP').show();
		$w('#boxInvLeGDP').show(), $w('#boxInvMoGDP').show(), $w('#boxInvGraGDP').show();
	}
}

export function xtranGuaDelaPilo_mouseIn(event) {
	$w('#xrojoGuaDelaPilo').show();
}

export function xtranGuaDelaPilo_mouseOut(event) {
	$w('#xrojoGuaDelaPilo').hide();
}

export function xtranGuaDelaPilo_click(event) {
	GDP = 0;
	$w('#texDesGuaDelaPilo').show();
	$w('#texNeGuaDelaPilo').hide();
	$w('#xtranGuaDelaPilo').hide();
	$w('#xrojoGuaDelaPilo').hide();
	$w('#checkLeGDP').hide(), $w('#checkMoGDP').hide(), $w('#checkGraGDP').hide();
	$w('#cuaLeGDP').hide(), $w('#cuaMoGDP').hide(), $w('#cuaGraGDP').hide();
	$w('#boxInvLeGDP').hide(), $w('#boxInvMoGDP').hide(), $w('#boxInvGraGDP').hide();
	$w('#ploLeGDP').show(), $w('#ploMoGDP').show(), $w('#ploGraGDP').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLeGDP_click(event) {
	GDP = a;
	if (PG === 0) {
		$w('#checkLeGDP').show(), $w('#checkMoGDP').hide(), $w('#checkGraGDP').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeGDP').hide(), $w('#boxInvMoGDP').hide(), $w('#boxInvGraGDP').hide();
		$w('#checkLeGDP').show(), $w('#checkMoGDP').hide(), $w('#checkGraGDP').hide();
		$w('#cuaMoGDP').hide(), $w('#cuaGraGDP').hide(), $w('#ploLeGDP').show(), $w('#ploMoGDP').show(), $w('#ploGraGDP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoGDP_click(event) {
	GDP = a + 50;
	if (PG === 0) {
		$w('#checkLeGDP').hide(), $w('#checkMoGDP').show(), $w('#checkGraGDP').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeGDP').hide(), $w('#boxInvMoGDP').hide(), $w('#boxInvGraGDP').hide();
		$w('#checkLeGDP').hide(), $w('#checkMoGDP').show(), $w('#checkGraGDP').hide();
		$w('#cuaLeGDP').hide(), $w('#cuaGraGDP').hide(), $w('#ploLeGDP').show(), $w('#ploMoGDP').show(), $w('#ploGraGDP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraGDP_click(event) {
	GDP = a + 100;
	if (PG === 0) {
		$w('#checkLeGDP').hide(), $w('#checkMoGDP').hide(), $w('#checkGraGDP').show();
	}
	if (PG === 1) {
		$w('#boxInvLeGDP').hide(), $w('#boxInvMoGDP').hide(), $w('#boxInvGraGDP').hide();
		$w('#checkLeGDP').hide(), $w('#checkMoGDP').hide(), $w('#checkGraGDP').show();
		$w('#cuaLeGDP').hide(), $w('#cuaMoGDP').hide(), $w('#ploLeGDP').show(), $w('#ploMoGDP').show(), $w('#ploGraGDP').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

////////////////////////Opciones de Parachoque Delantero/////////////////////////////////

export function invParaDela_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesParaDela').hide();
		$w('#texNeParaDela').show();
		$w('#xtranParaDela').show();
		$w('#ploLePD').hide(), $w('#ploMoPD').hide(), $w('#ploGraPD').hide();
		$w('#cuaLePD').show(), $w('#cuaMoPD').show(), $w('#cuaGraPD').show();
		$w('#boxInvLePD').show(), $w('#boxInvMoPD').show(), $w('#boxInvGraPD').show();
	}
	if (PG === 1) {
		$w('#ploLePD').hide(), $w('#ploMoPD').hide(), $w('#ploGraPD').hide();
		$w('#cuaLePD').show(), $w('#cuaMoPD').show(), $w('#cuaGraPD').show();
		$w('#boxInvLePD').show(), $w('#boxInvMoPD').show(), $w('#boxInvGraPD').show();
	}
}

export function xtranParaDela_mouseIn(event) {
	$w('#xrojaParaDela').show();
}

export function xtranParaDela_mouseOut(event) {
	$w('#xrojaParaDela').hide();
}

export function xtranParaDela_click(event) {
	PD = 0;
	$w('#texDesParaDela').show();
	$w('#texNeParaDela').hide();
	$w('#xtranParaDela').hide();
	$w('#xrojaParaDela').hide();
	$w('#checkLePD').hide(), $w('#checkMoPD').hide(), $w('#checkGraPD').hide();
	$w('#cuaLePD').hide(), $w('#cuaMoPD').hide(), $w('#cuaGraPD').hide();
	$w('#boxInvLePD').hide(), $w('#boxInvMoPD').hide(), $w('#boxInvGraPD').hide();
	$w('#ploLePD').show(), $w('#ploMoPD').show(), $w('#ploGraPD').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLePD_click(event) {
	PD = a * 1.5; //1.5 pannios
	if (PG === 0) {
		$w('#checkLePD').show(), $w('#checkMoPD').hide(), $w('#checkGraPD').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePD').hide(), $w('#boxInvMoPD').hide(), $w('#boxInvGraPD').hide();
		$w('#checkLePD').show(), $w('#checkMoPD').hide(), $w('#checkGraPD').hide();
		$w('#cuaMoPD').hide(), $w('#cuaGraPD').hide(), $w('#ploLePD').show(), $w('#ploMoPD').show(), $w('#ploGraPD').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoPD_click(event) {
	PD = (a + 50) * 2; // 1.5 pannios
	if (PG === 0) {
		$w('#checkLePD').hide(), $w('#checkMoPD').show(), $w('#checkGraPD').hide();
	}
	if (PG === 1) {
		$w('#boxInvLePD').hide(), $w('#boxInvMoPD').hide(), $w('#boxInvGraPD').hide();
		$w('#checkLePD').hide(), $w('#checkMoPD').show(), $w('#checkGraPD').hide();
		$w('#cuaLePD').hide(), $w('#cuaGraPD').hide(), $w('#ploLePD').show(), $w('#ploMoPD').show(), $w('#ploGraPD').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraPD_click(event) {
	PD = (a + 100) * 1.5; //1.5 pannios
	if (PG === 0) {
		$w('#checkLePD').hide(), $w('#checkMoPD').hide(), $w('#checkGraPD').show();
	}
	if (PG === 1) {
		$w('#boxInvLePD').hide(), $w('#boxInvMoPD').hide(), $w('#boxInvGraPD').hide();
		$w('#checkLePD').hide(), $w('#checkMoPD').hide(), $w('#checkGraPD').show();
		$w('#cuaLePD').hide(), $w('#cuaMoPD').hide(), $w('#ploLePD').show(), $w('#ploMoPD').show(), $w('#ploGraPD').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Capot//////////////////////

export function invCapot_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesCapot').hide();
		$w('#texNeCapot').show();
		$w('#xtranCapot').show();
		$w('#ploLeCapot').hide(), $w('#ploMoCapot').hide(), $w('#ploGraCapot').hide();
		$w('#cuaLeCapot').show(), $w('#cuaMoCapot').show(), $w('#cuaGraCapot').show();
		$w('#boxInvLeCapot').show(), $w('#boxInvMoCapot').show(), $w('#boxInvGraCapot').show();
	}
	if (PG === 1) {
		$w('#ploLeCapot').hide(), $w('#ploMoCapot').hide(), $w('#ploGraCapot').hide();
		$w('#cuaLeCapot').show(), $w('#cuaMoCapot').show(), $w('#cuaGraCapot').show();
		$w('#boxInvLeCapot').show(), $w('#boxInvMoCapot').show(), $w('#boxInvGraCapot').show();
	}
}

export function xtranCapot_mouseIn(event) {
	$w('#xrojoCapot').show();
}

export function xtranCapot_mouseOut(event) {
	$w('#xrojoCapot').hide();
}

export function xtranCapot_click(event) {
	C = 0;
	$w('#texDesCapot').show();
	$w('#texNeCapot').hide();
	$w('#xtranCapot').hide();
	$w('#xrojoCapot').hide();
	$w('#checkLeCapot').hide(), $w('#checkMoCapot').hide(), $w('#checkGraCapot').hide();
	$w('#cuaLeCapot').hide(), $w('#cuaMoCapot').hide(), $w('#cuaGraCapot').hide();
	$w('#boxInvLeCapot').hide(), $w('#boxInvMoCapot').hide(), $w('#boxInvGraCapot').hide();
	$w('#ploLeCapot').show(), $w('#ploMoCapot').show(), $w('#ploGraCapot').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLeCapot_click(event) {
	C = a * 2; //dos paños
	if (PG === 0) {
		$w('#checkLeCapot').show(), $w('#checkMoCapot').hide(), $w('#checkGraCapot').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeCapot').hide(), $w('#boxInvMoCapot').hide(), $w('#boxInvGraCapot').hide();
		$w('#checkLeCapot').show(), $w('#checkMoCapot').hide(), $w('#checkGraCapot').hide();
		$w('#cuaMoCapot').hide(), $w('#cuaGraCapot').hide(), $w('#ploLeCapot').show(), $w('#ploMoCapot').show(), $w('#ploGraCapot').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoCapot_click(event) {
	C = (a + 50) * 2; //dos paños
	if (PG === 0) {
		$w('#checkLeCapot').hide(), $w('#checkMoCapot').show(), $w('#checkGraCapot').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeCapot').hide(), $w('#boxInvMoCapot').hide(), $w('#boxInvGraCapot').hide();
		$w('#checkLeCapot').hide(), $w('#checkMoCapot').show(), $w('#checkGraCapot').hide();
		$w('#cuaLeCapot').hide(), $w('#cuaGraCapot').hide(), $w('#ploLeCapot').show(), $w('#ploMoCapot').show(), $w('#ploGraCapot').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraCapot_click(event) {
	C = (a + 100) * 2; //dos paños
	if (PG === 0) {
		$w('#checkLeCapot').hide(), $w('#checkMoCapot').hide(), $w('#checkGraCapot').show();
	}
	if (PG === 1) {
		$w('#boxInvLeCapot').hide(), $w('#boxInvMoCapot').hide(), $w('#boxInvGraCapot').hide();
		$w('#checkLeCapot').hide(), $w('#checkMoCapot').hide(), $w('#checkGraCapot').show();
		$w('#cuaLeCapot').hide(), $w('#cuaMoCapot').hide(), $w('#ploLeCapot').show(), $w('#ploMoCapot').show(), $w('#ploGraCapot').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Techo//////////////////////

export function invTecho_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesTecho').hide();
		$w('#texNeTecho').show();
		$w('#xtranTecho').show();
		$w('#ploLeTecho').hide(), $w('#ploMoTecho').hide(), $w('#ploGraTecho').hide();
		$w('#cuaLeTecho').show(), $w('#cuaMoTecho').show(), $w('#cuaGraTecho').show();
		$w('#boxInvLeTecho').show(), $w('#boxInvMoTecho').show(), $w('#boxInvGraTecho').show();
	}
	if (PG === 1) {
		$w('#ploLeTecho').hide(), $w('#ploMoTecho').hide(), $w('#ploGraTecho').hide();
		$w('#cuaLeTecho').show(), $w('#cuaMoTecho').show(), $w('#cuaGraTecho').show();
		$w('#boxInvLeTecho').show(), $w('#boxInvMoTecho').show(), $w('#boxInvGraTecho').show();
	}
}

export function xtranTecho_mouseIn(event) {
	$w('#xrojoTecho').show();
}

export function xtranTecho_mouseOut(event) {
	$w('#xrojoTecho').hide();
}

export function xtranTecho_click(event) {
	T = 0;
	$w('#texDesTecho').show();
	$w('#texNeTecho').hide();
	$w('#xtranTecho').hide();
	$w('#xrojoTecho').hide();
	$w('#checkLeTecho').hide(), $w('#checkMoTecho').hide(), $w('#checkGraTecho').hide();
	$w('#cuaLeTecho').hide(), $w('#cuaMoTecho').hide(), $w('#cuaGraTecho').hide();
	$w('#boxInvLeTecho').hide(), $w('#boxInvMoTecho').hide(), $w('#boxInvGraTecho').hide();
	$w('#ploLeTecho').show(), $w('#ploMoTecho').show(), $w('#ploGraTecho').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLeTecho_click(event) {
	T = a * 2; //dos paños
	if (PG === 0) {
		$w('#checkLeTecho').show(), $w('#checkMoTecho').hide(), $w('#checkGraTecho').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeTecho').hide(), $w('#boxInvMoTecho').hide(), $w('#boxInvGraTecho').hide();
		$w('#checkLeTecho').show(), $w('#checkMoTecho').hide(), $w('#checkGraTecho').hide();
		$w('#cuaMoTecho').hide(), $w('#cuaGraTecho').hide(), $w('#ploLeTecho').show(), $w('#ploMoTecho').show(), $w('#ploGraTecho').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoTecho_click(event) {
	T = (a + 50) * 2; //dos paños
	if (PG === 0) {
		$w('#checkLeTecho').hide(), $w('#checkMoTecho').show(), $w('#checkGraTecho').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeTecho').hide(), $w('#boxInvMoTecho').hide(), $w('#boxInvGraTecho').hide();
		$w('#checkLeTecho').hide(), $w('#checkMoTecho').show(), $w('#checkGraTecho').hide();
		$w('#cuaLeTecho').hide(), $w('#cuaGraTecho').hide(), $w('#ploLeTecho').show(), $w('#ploMoTecho').show(), $w('#ploGraTecho').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraTecho_click(event) {
	T = (a + 100) * 2; //dos paños
	if (PG === 0) {
		$w('#checkLeTecho').hide(), $w('#checkMoTecho').hide(), $w('#checkGraTecho').show();
	}
	if (PG === 1) {
		$w('#boxInvLeTecho').hide(), $w('#boxInvMoTecho').hide(), $w('#boxInvGraTecho').hide();
		$w('#checkLeTecho').hide(), $w('#checkMoTecho').hide(), $w('#checkGraTecho').show();
		$w('#cuaLeTecho').hide(), $w('#cuaMoTecho').hide(), $w('#ploLeTecho').show(), $w('#ploMoTecho').show(), $w('#ploGraTecho').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

///////////////////Opciones de Maletera//////////////////////

export function invMaletera_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	$w("#text12").text = "Elija si el daño es leve, moderado o grave"; //se indica que poner cuando se elige un paño
	if (PG === 0) {
		$w('#texDesMaletera').hide();
		$w('#texNeMaletera').show();
		$w('#xtranMaletera').show();
		$w('#ploLeMaletera').hide(), $w('#ploMoMaletera').hide(), $w('#ploGraMaletera').hide();
		$w('#cuaLeMaletera').show(), $w('#cuaMoMaletera').show(), $w('#cuaGraMaletera').show();
		$w('#boxInvLeMaletera').show(), $w('#boxInvMoMaletera').show(), $w('#boxInvGraMaletera').show();
	}
	if (PG === 1) {
		$w('#ploLeMaletera').hide(), $w('#ploMoMaletera').hide(), $w('#ploGraMaletera').hide();
		$w('#cuaLeMaletera').show(), $w('#cuaMoMaletera').show(), $w('#cuaGraMaletera').show();
		$w('#boxInvLeMaletera').show(), $w('#boxInvMoMaletera').show(), $w('#boxInvGraMaletera').show();
	}
}

export function xtranMaletera_mouseIn(event) {
	$w('#xrojoMaletera').show();
}

export function xtranMaletera_mouseOut(event) {
	$w('#xrojoMaletera').hide();
}

export function xtranMaletera_click(event) {
	M = 0;
	$w('#texDesMaletera').show();
	$w('#texNeMaletera').hide();
	$w('#xtranMaletera').hide();
	$w('#xrojoMaletera').hide();
	$w('#checkLeMaletera').hide(), $w('#checkMoMaletera').hide(), $w('#checkGraMaletera').hide();
	$w('#cuaLeMaletera').hide(), $w('#cuaMoMaletera').hide(), $w('#cuaGraMaletera').hide();
	$w('#boxInvLeMaletera').hide(), $w('#boxInvMoMaletera').hide(), $w('#boxInvGraMaletera').hide();
	$w('#ploLeMaletera').show(), $w('#ploMoMaletera').show(), $w('#ploGraMaletera').show();
	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvLeMaletera_click(event) {
	M = a;
	if (PG === 0) {
		$w('#checkLeMaletera').show(), $w('#checkMoMaletera').hide(), $w('#checkGraMaletera').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeMaletera').hide(), $w('#boxInvMoMaletera').hide(), $w('#boxInvGraMaletera').hide();
		$w('#checkLeMaletera').show(), $w('#checkMoMaletera').hide(), $w('#checkGraMaletera').hide();
		$w('#cuaMoMaletera').hide(), $w('#cuaGraMaletera').hide(), $w('#ploLeMaletera').show(), $w('#ploMoMaletera').show(), $w('#ploGraMaletera').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvMoMaletera_click(event) {
	M = a + 50;
	if (PG === 0) {
		$w('#checkLeMaletera').hide(), $w('#checkMoMaletera').show(), $w('#checkGraMaletera').hide();
	}
	if (PG === 1) {
		$w('#boxInvLeMaletera').hide(), $w('#boxInvMoMaletera').hide(), $w('#boxInvGraMaletera').hide();
		$w('#checkLeMaletera').hide(), $w('#checkMoMaletera').show(), $w('#checkGraMaletera').hide();
		$w('#cuaLeMaletera').hide(), $w('#cuaGraMaletera').hide(), $w('#ploLeMaletera').show(), $w('#ploMoMaletera').show(), $w('#ploGraMaletera').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica que se debe de volver a presionar Calcular precio
}

export function boxInvGraMaletera_click(event) {
	M = a + 100;
	if (PG === 0) {
		$w('#checkLeMaletera').hide(), $w('#checkMoMaletera').hide(), $w('#checkGraMaletera').show();
	}
	if (PG === 1) {
		$w('#boxInvLeMaletera').hide(), $w('#boxInvMoMaletera').hide(), $w('#boxInvGraMaletera').hide();
		$w('#checkLeMaletera').hide(), $w('#checkMoMaletera').hide(), $w('#checkGraMaletera').show();
		$w('#cuaLeMaletera').hide(), $w('#cuaMoMaletera').hide(), $w('#ploLeMaletera').show(), $w('#ploMoMaletera').show(), $w('#ploGraMaletera').show();
	}
	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica
}

////////////////Tratamiento Cerámico///////////////////////

export function invTCparaCheck_click(event) {
	TC = 790;
	$w('#checkTC').show(), $w('#invTCdesapCheck').show(), $w('#invTCparaCheck').hide();
	if ((PG === 0) && (cuaGe === 0)) {
		$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica
	}
	if ((PG === 1) && (cuaGe === 0)) {
		$w("#text12").text = "Seleccione entre Leve, Moderado o Grave"; //se indica
	}
	if ((PG === 1) && (cuaGe === 1)) {
		$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica
	}
}

export function invTCdesapCheck_click(event) {
	TC = 0;
	$w('#checkTC').hide(), $w('#invTCparaCheck').show(), $w('#invTCdesapCheck').hide();
	if ((PG === 0) && (cuaGe === 0)) {
		$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica
	}
	if ((PG === 1) && (cuaGe === 0)) {
		$w("#text12").text = "Seleccione entre Leve, Moderado o Grave"; //se indica
	}
	if ((PG === 1) && (cuaGe === 1)) {
		$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica
	}
}

/////////////////////Pintado General//////////////////////

export function pintadoGeneral_click(event) {
	$w('#nube').hide(), $w('#textoprimero').hide(), $w('#textnube').hide(), $w('#flecha').hide(); //desaparece nube
	GDC = 0, PDC = 0, PTC = 0, GTC = 0, PT = 0, GTP = 0, PTP = 0, PDP = 0, GDP = 0, PD = 0, C = 0, T = 0, M = 0; //valor de los paños todo en cero
	$w('#invGuaDelaCopi').hide(), $w('#invPuerDelaCopi').hide(), $w('#invPuerTrasCopi').hide(), $w('#invGuaTrasCopi').hide(), $w('#invParaTras').hide();
	$w('#invGuaTrasPilo').hide(), $w('#invPuerTrasPilo').hide(), $w('#invPuerDelaPilo').hide(), $w('#invGuarDelaPilo').hide(), $w('#invParaDela').hide();
	$w('#invCapot').hide(), $w('#invTecho').hide(), $w('#invMaletera').hide(); //desaparecen todos los invisibles de imagen

	$w('#pintadoGeneral').disable(); //deshabilito el botón de pintado general
	PG = 1;
	$w('#texDesGuaDelaCopi').hide(), $w('#textDesPueDelaCopi').hide(), $w('#texDesPueTraCopi').hide(), $w('#texDesGuaTraCopi').hide();
	$w('#texDesParaTra').hide(), $w('#texDesGuaTraPilo').hide(), $w('#texDesPueTraPilo').hide(), $w('#texDesPueDelaPilo').hide();
	$w('#texDesGuaDelaPilo').hide(), $w('#texDesParaDela').hide(), $w('#texDesCapot').hide(), $w('#texDesTecho').hide();
	$w('#texDesMaletera').hide(); //texto deshabilitado desaparece
	$w('#texNeGuaDelaCopi').show(), $w('#texNePueDelaCopi').show(), $w('#texNePueTrasCopi').show(), $w('#texNeGuaTraCopi').show();
	$w('#texNeParaTras').show(), $w('#texNeGuaTraPilo').show(), $w('#texNePueTraPilo').show(), $w('#texNePueDelaPilo').show();
	$w('#texNeGuaDelaPilo').show(), $w('#texNeParaDela').show(), $w('#texNeCapot').show(), $w('#texNeTecho').show();
	$w('#texNeMaletera').show(); //texto negro aparece
	$w('#xtraPintadoGeneral').show(); //el x general transparente aparece
	$w('#cuaLePG').show(), $w('#cuaMoPG').show(), $w('#cuaGraPG').show(); //cuadrados de pintado general
	$w('#invLePG').show(), $w('#invMoPG').show(), $w('#invGraPG').show(); //invisibles de pintado general
	$w('#xtranGuaDelaCopi').hide(), $w('#xtranPueDelaCopi').hide(), $w('#xtranPueTraCopi').hide(), $w('#xtranGuaTraCopi').hide();
	$w('#xtranParaTra').hide(), $w('#xtranGuaTraPilo').hide(), $w('#xtranPueTraPilo').hide(), $w('#xtranPueDelaPilo').hide();
	$w('#xtranGuaDelaPilo').hide(), $w('#xtranParaDela').hide(), $w('#xtranCapot').hide(), $w('#xtranTecho').hide();
	$w('#xtranMaletera').hide(); //desaparecen todas las x de los paños

	$w('#boxInvLeGDC').hide(), $w('#boxInvLePDC').hide(), $w('#boxInvLePTC').hide(), $w('#boxInvLeGTC').hide(), $w('#boxInvLePT').hide();
	$w('#boxInvLeGTP').hide(), $w('#boxInvLePTP').hide(), $w('#boxInvLePDP').hide(), $w('#boxInvLeGDP').hide(), $w('#boxInvLePD').hide();
	$w('#boxInvLeCapot').hide(), $w('#boxInvLeTecho').hide(), $w('#boxInvLeMaletera').hide(); //desaparece todos los invisibles leves de paños
	$w('#boxInvMoGDC').hide(), $w('#boxInvMoPDC').hide(), $w('#boxInvMoPTC').hide(), $w('#boxInvMoGTC').hide(), $w('#boxInvMoPT').hide();
	$w('#boxInvMoGTP').hide(), $w('#boxInvMoPTP').hide(), $w('#boxInvMoPDP').hide(), $w('#boxInvMoGDP').hide(), $w('#boxInvMoPD').hide();
	$w('#boxInvMoCapot').hide(), $w('#boxInvMoTecho').hide(), $w('#boxInvMoMaletera').hide(); //desaparece todos los invisibles moderados de paños
	$w('#boxInvGraGDC').hide(), $w('#boxInvGraPDC').hide(), $w('#boxInvGraPTC').hide(), $w('#boxInvGraGTC').hide(), $w('#boxInvGraPT').hide();
	$w('#boxInvGraGTP').hide(), $w('#boxInvGraPTP').hide(), $w('#boxInvGraPDP').hide(), $w('#boxInvGraGDP').hide(), $w('#boxInvGraPD').hide();
	$w('#boxInvGraCapot').hide(), $w('#boxInvGraTecho').hide(), $w('#boxInvGraMaletera').hide(); //desaparece todos los invisibles graves de paños

	$w('#checkLeGDC').hide(), $w('#checkLePDC').hide(), $w('#checkLePTC').hide(), $w('#checkLeGTC').hide(), $w('#checkLePT').hide();
	$w('#checkLeGTP').hide(), $w('#checkLePTP').hide(), $w('#checkLePDP').hide(), $w('#checkLeGDP').hide(), $w('#checkLePD').hide();
	$w('#checkLeCapot').hide(), $w('#checkLeTecho').hide(), $w('#checkLeMaletera').hide(); //desaparece todos los checks leves de paños
	$w('#checkMoGDC').hide(), $w('#checkMoPDC').hide(), $w('#checkMoPTC').hide(), $w('#checkMoGTC').hide(), $w('#checkMoPT').hide();
	$w('#checkMoGTP').hide(), $w('#checkMoPTP').hide(), $w('#checkMoPDP').hide(), $w('#checkMoGDP').hide(), $w('#checkMoPD').hide();
	$w('#checkMoCapot').hide(), $w('#checkMoTecho').hide(), $w('#checkMoMaletera').hide(); //desaparece todos los checks moderados de paños
	$w('#checkGraGDC').hide(), $w('#checkGraPDC').hide(), $w('#checkGraPTC').hide(), $w('#checkGraGTC').hide(), $w('#checkGraPT').hide();
	$w('#checkGraGTP').hide(), $w('#checkGraPTP').hide(), $w('#checkGraPDP').hide(), $w('#checkGraGDP').hide(), $w('#checkGraPD').hide();
	$w('#checkGraCapot').hide(), $w('#checkGraTecho').hide(), $w('#checkGraMaletera').hide(); //desaparece todos los checks graves de paños

	$w('#ploLeGDC').show(), $w('#ploLePDC').show(), $w('#ploLePTC').show(), $w('#ploLeGTC').show(), $w('#ploLePT').show();
	$w('#ploLeGTP').show(), $w('#ploLePTP').show(), $w('#ploLePDP').show(), $w('#ploLeGDP').show(), $w('#ploLePD').show();
	$w('#ploLeCapot').show(), $w('#ploLeTecho').show(), $w('#ploLeMaletera').show(); //aparece todos los plomos leves de paños
	$w('#ploMoGDC').show(), $w('#ploMoPDC').show(), $w('#ploMoPTC').show(), $w('#ploMoGTC').show(), $w('#ploMoPT').show();
	$w('#ploMoGTP').show(), $w('#ploMoPTP').show(), $w('#ploMoPDP').show(), $w('#ploMoGDP').show(), $w('#ploMoPD').show();
	$w('#ploMoCapot').show(), $w('#ploMoTecho').show(), $w('#ploMoMaletera').show(); //aparece todos los plomos moderados de paños
	$w('#ploGraGDC').show(), $w('#ploGraPDC').show(), $w('#ploGraPTC').show(), $w('#ploGraGTC').show(), $w('#ploGraPT').show();
	$w('#ploGraGTP').show(), $w('#ploGraPTP').show(), $w('#ploGraPDP').show(), $w('#ploGraGDP').show(), $w('#ploGraPD').show();
	$w('#ploGraCapot').show(), $w('#ploGraTecho').show(), $w('#ploGraMaletera').show(); //aparece todos los plomos graves de paños

	$w('#cuaLeGDC').hide(), $w('#cuaLePDC').hide(), $w('#cuaLePTC').hide(), $w('#cuaLeGTC').hide(), $w('#cuaLePT').hide();
	$w('#cuaLeGTP').hide(), $w('#cuaLePTP').hide(), $w('#cuaLePDP').hide(), $w('#cuaLeGDP').hide(), $w('#cuaLePD').hide();
	$w('#cuaLeCapot').hide(), $w('#cuaLeTecho').hide(), $w('#cuaLeMaletera').hide(); //desaparece todos los cuadrados leves de paños
	$w('#cuaMoGDC').hide(), $w('#cuaMoPDC').hide(), $w('#cuaMoPTC').hide(), $w('#cuaMoGTC').hide(), $w('#cuaMoPT').hide();
	$w('#cuaMoGTP').hide(), $w('#cuaMoPTP').hide(), $w('#cuaMoPDP').hide(), $w('#cuaMoGDP').hide(), $w('#cuaMoPD').hide();
	$w('#cuaMoCapot').hide(), $w('#cuaMoTecho').hide(), $w('#cuaMoMaletera').hide(); //desaparece todos los cuadrados moderados de paños
	$w('#cuaGraGDC').hide(), $w('#cuaGraPDC').hide(), $w('#cuaGraPTC').hide(), $w('#cuaGraGTC').hide(), $w('#cuaGraPT').hide();
	$w('#cuaGraGTP').hide(), $w('#cuaGraPTP').hide(), $w('#cuaGraPDP').hide(), $w('#cuaGraGDP').hide(), $w('#cuaGraPD').hide();
	$w('#cuaGraCapot').hide(), $w('#cuaGraTecho').hide(), $w('#cuaGraMaletera').hide(); //desaparece todos los cuadrados graves de paños

	$w("#text12").text = "Seleccione si el daño es Leve, Moderado o Grave"; //se indica que se debe presionar

}

export function xtraPintadoGeneral_mouseIn(event) {
	$w('#xrojoPintadoGeneral').show();
}

export function xtraPintadoGeneral_mouseOut(event) {
	$w('#xrojoPintadoGeneral').hide();
}

export function invLePG_click(event) {
	GDC = a, PDC = a, PTC = a, GTC = a, PT = a, GTP = a, PTP = a, PDP = a, GDP = a, PD = a * 1.5, C = a * 2, T = a * 2, M = a; //valor de los paños todo en leve
	$w('#checkLePG').show(), $w('#checkMoPG').hide(), $w('#checkGraPG').hide();
	$w('#checkLeGDC').show(), $w('#checkLePDC').show(), $w('#checkLePTC').show(), $w('#checkLeGTC').show(), $w('#checkLePT').show();
	$w('#checkLeGTP').show(), $w('#checkLePTP').show(), $w('#checkLePDP').show(), $w('#checkLeGDP').show(), $w('#checkLePD').show();
	$w('#checkLeCapot').show(), $w('#checkLeTecho').show(), $w('#checkLeMaletera').show(); //aparece todos los checks leves de paños
	$w('#checkMoGDC').hide(), $w('#checkMoPDC').hide(), $w('#checkMoPTC').hide(), $w('#checkMoGTC').hide(), $w('#checkMoPT').hide();
	$w('#checkMoGTP').hide(), $w('#checkMoPTP').hide(), $w('#checkMoPDP').hide(), $w('#checkMoGDP').hide(), $w('#checkMoPD').hide();
	$w('#checkMoCapot').hide(), $w('#checkMoTecho').hide(), $w('#checkMoMaletera').hide(); //desaparece todos los checks moderados de paños
	$w('#checkGraGDC').hide(), $w('#checkGraPDC').hide(), $w('#checkGraPTC').hide(), $w('#checkGraGTC').hide(), $w('#checkGraPT').hide();
	$w('#checkGraGTP').hide(), $w('#checkGraPTP').hide(), $w('#checkGraPDP').hide(), $w('#checkGraGDP').hide(), $w('#checkGraPD').hide();
	$w('#checkGraCapot').hide(), $w('#checkGraTecho').hide(), $w('#checkGraMaletera').hide(); //desaparece todos los checks graves de paños

	$w('#cuaLeGDC').show(), $w('#cuaLePDC').show(), $w('#cuaLePTC').show(), $w('#cuaLeGTC').show(), $w('#cuaLePT').show();
	$w('#cuaLeGTP').show(), $w('#cuaLePTP').show(), $w('#cuaLePDP').show(), $w('#cuaLeGDP').show(), $w('#cuaLePD').show();
	$w('#cuaLeCapot').show(), $w('#cuaLeTecho').show(), $w('#cuaLeMaletera').show(); //aparece todos los cuadrados leves de paños
	$w('#cuaMoGDC').hide(), $w('#cuaMoPDC').hide(), $w('#cuaMoPTC').hide(), $w('#cuaMoGTC').hide(), $w('#cuaMoPT').hide();
	$w('#cuaMoGTP').hide(), $w('#cuaMoPTP').hide(), $w('#cuaMoPDP').hide(), $w('#cuaMoGDP').hide(), $w('#cuaMoPD').hide();
	$w('#cuaMoCapot').hide(), $w('#cuaMoTecho').hide(), $w('#cuaMoMaletera').hide(); //desaparece todos los cuadrados moderados de paños
	$w('#cuaGraGDC').hide(), $w('#cuaGraPDC').hide(), $w('#cuaGraPTC').hide(), $w('#cuaGraGTC').hide(), $w('#cuaGraPT').hide();
	$w('#cuaGraGTP').hide(), $w('#cuaGraPTP').hide(), $w('#cuaGraPDP').hide(), $w('#cuaGraGDP').hide(), $w('#cuaGraPD').hide();
	$w('#cuaGraCapot').hide(), $w('#cuaGraTecho').hide(), $w('#cuaGraMaletera').hide(); //desaparece todos los cuadrados graves de paños

	$w('#invGuaDelaCopi').show(), $w('#invPuerDelaCopi').show(), $w('#invPuerTrasCopi').show(), $w('#invGuaTrasCopi').show(), $w('#invParaTras').show();
	$w('#invGuaTrasPilo').show(), $w('#invPuerTrasPilo').show(), $w('#invPuerDelaPilo').show(), $w('#invGuarDelaPilo').show(), $w('#invParaDela').show();
	$w('#invCapot').show(), $w('#invTecho').show(), $w('#invMaletera').show(); //aparecen todos los invisibles de imagen

	cuaGe = 1; //la variable de cuadrados generales se sensa

	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica
}

export function invMoPG_click(event) {
	GDC = a + 50, PDC = a + 50, PTC = a + 50, GTC = a + 50, PT = a + 50, GTP = a + 50, PTP = a + 50, PDP = a + 50, GDP = a + 50;
	PD = (a + 50) * 1.5, C = (a + 50) * 2, T = (a + 50) * 2, M = a + 50; //valor de los paños todos en moderado
	$w('#checkLePG').hide(), $w('#checkMoPG').show(), $w('#checkGraPG').hide();
	$w('#checkLeGDC').hide(), $w('#checkLePDC').hide(), $w('#checkLePTC').hide(), $w('#checkLeGTC').hide(), $w('#checkLePT').hide();
	$w('#checkLeGTP').hide(), $w('#checkLePTP').hide(), $w('#checkLePDP').hide(), $w('#checkLeGDP').hide(), $w('#checkLePD').hide();
	$w('#checkLeCapot').hide(), $w('#checkLeTecho').hide(), $w('#checkLeMaletera').hide(); //desaparece todos los checks leves de paños
	$w('#checkMoGDC').show(), $w('#checkMoPDC').show(), $w('#checkMoPTC').show(), $w('#checkMoGTC').show(), $w('#checkMoPT').show();
	$w('#checkMoGTP').show(), $w('#checkMoPTP').show(), $w('#checkMoPDP').show(), $w('#checkMoGDP').show(), $w('#checkMoPD').show();
	$w('#checkMoCapot').show(), $w('#checkMoTecho').show(), $w('#checkMoMaletera').show(); //aparece todos los checks moderados de paños
	$w('#checkGraGDC').hide(), $w('#checkGraPDC').hide(), $w('#checkGraPTC').hide(), $w('#checkGraGTC').hide(), $w('#checkGraPT').hide();
	$w('#checkGraGTP').hide(), $w('#checkGraPTP').hide(), $w('#checkGraPDP').hide(), $w('#checkGraGDP').hide(), $w('#checkGraPD').hide();
	$w('#checkGraCapot').hide(), $w('#checkGraTecho').hide(), $w('#checkGraMaletera').hide(); //desaparece todos los checks graves de paños

	$w('#cuaLeGDC').hide(), $w('#cuaLePDC').hide(), $w('#cuaLePTC').hide(), $w('#cuaLeGTC').hide(), $w('#cuaLePT').hide();
	$w('#cuaLeGTP').hide(), $w('#cuaLePTP').hide(), $w('#cuaLePDP').hide(), $w('#cuaLeGDP').hide(), $w('#cuaLePD').hide();
	$w('#cuaLeCapot').hide(), $w('#cuaLeTecho').hide(), $w('#cuaLeMaletera').hide(); //desaparece todos los cuadrados leves de paños
	$w('#cuaMoGDC').show(), $w('#cuaMoPDC').show(), $w('#cuaMoPTC').show(), $w('#cuaMoGTC').show(), $w('#cuaMoPT').show();
	$w('#cuaMoGTP').show(), $w('#cuaMoPTP').show(), $w('#cuaMoPDP').show(), $w('#cuaMoGDP').show(), $w('#cuaMoPD').show();
	$w('#cuaMoCapot').show(), $w('#cuaMoTecho').show(), $w('#cuaMoMaletera').show(); //aparece todos los cuadrados moderados de paños
	$w('#cuaGraGDC').hide(), $w('#cuaGraPDC').hide(), $w('#cuaGraPTC').hide(), $w('#cuaGraGTC').hide(), $w('#cuaGraPT').hide();
	$w('#cuaGraGTP').hide(), $w('#cuaGraPTP').hide(), $w('#cuaGraPDP').hide(), $w('#cuaGraGDP').hide(), $w('#cuaGraPD').hide();
	$w('#cuaGraCapot').hide(), $w('#cuaGraTecho').hide(), $w('#cuaGraMaletera').hide(); //desaparece todos los cuadrados graves de paños

	$w('#invGuaDelaCopi').show(), $w('#invPuerDelaCopi').show(), $w('#invPuerTrasCopi').show(), $w('#invGuaTrasCopi').show(), $w('#invParaTras').show();
	$w('#invGuaTrasPilo').show(), $w('#invPuerTrasPilo').show(), $w('#invPuerDelaPilo').show(), $w('#invGuarDelaPilo').show(), $w('#invParaDela').show();
	$w('#invCapot').show(), $w('#invTecho').show(), $w('#invMaletera').show(); //aparecen todos los invisibles de imagen

	cuaGe = 1; //la variable de cuadrados generales se sensa

	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica
}

export function invGraPG_click(event) {
	GDC = a + 100, PDC = a + 100, PTC = a + 100, GTC = a + 100, PT = a + 100, GTP = a + 100, PTP = a + 100, PDP = a + 100, GDP = a + 100;
	PD = (a + 100) * 1.5, C = (a + 100) * 2, T = (a + 100) * 2, M = a + 100; //valor de los paños todo en grave
	$w('#checkLePG').hide(), $w('#checkMoPG').hide(), $w('#checkGraPG').show();
	$w('#checkLeGDC').hide(), $w('#checkLePDC').hide(), $w('#checkLePTC').hide(), $w('#checkLeGTC').hide(), $w('#checkLePT').hide();
	$w('#checkLeGTP').hide(), $w('#checkLePTP').hide(), $w('#checkLePDP').hide(), $w('#checkLeGDP').hide(), $w('#checkLePD').hide();
	$w('#checkLeCapot').hide(), $w('#checkLeTecho').hide(), $w('#checkLeMaletera').hide(); //desaparece todos los checks leves de paños
	$w('#checkMoGDC').hide(), $w('#checkMoPDC').hide(), $w('#checkMoPTC').hide(), $w('#checkMoGTC').hide(), $w('#checkMoPT').hide();
	$w('#checkMoGTP').hide(), $w('#checkMoPTP').hide(), $w('#checkMoPDP').hide(), $w('#checkMoGDP').hide(), $w('#checkMoPD').hide();
	$w('#checkMoCapot').hide(), $w('#checkMoTecho').hide(), $w('#checkMoMaletera').hide(); //desaparece todos los checks moderados de paños
	$w('#checkGraGDC').show(), $w('#checkGraPDC').show(), $w('#checkGraPTC').show(), $w('#checkGraGTC').show(), $w('#checkGraPT').show();
	$w('#checkGraGTP').show(), $w('#checkGraPTP').show(), $w('#checkGraPDP').show(), $w('#checkGraGDP').show(), $w('#checkGraPD').show();
	$w('#checkGraCapot').show(), $w('#checkGraTecho').show(), $w('#checkGraMaletera').show(); //aparece todos los checks graves de paños

	$w('#cuaLeGDC').hide(), $w('#cuaLePDC').hide(), $w('#cuaLePTC').hide(), $w('#cuaLeGTC').hide(), $w('#cuaLePT').hide();
	$w('#cuaLeGTP').hide(), $w('#cuaLePTP').hide(), $w('#cuaLePDP').hide(), $w('#cuaLeGDP').hide(), $w('#cuaLePD').hide();
	$w('#cuaLeCapot').hide(), $w('#cuaLeTecho').hide(), $w('#cuaLeMaletera').hide(); //desaparece todos los cuadrados leves de paños
	$w('#cuaMoGDC').hide(), $w('#cuaMoPDC').hide(), $w('#cuaMoPTC').hide(), $w('#cuaMoGTC').hide(), $w('#cuaMoPT').hide();
	$w('#cuaMoGTP').hide(), $w('#cuaMoPTP').hide(), $w('#cuaMoPDP').hide(), $w('#cuaMoGDP').hide(), $w('#cuaMoPD').hide();
	$w('#cuaMoCapot').hide(), $w('#cuaMoTecho').hide(), $w('#cuaMoMaletera').hide(); //desaparece todos los cuadrados moderados de paños
	$w('#cuaGraGDC').show(), $w('#cuaGraPDC').show(), $w('#cuaGraPTC').show(), $w('#cuaGraGTC').show(), $w('#cuaGraPT').show();
	$w('#cuaGraGTP').show(), $w('#cuaGraPTP').show(), $w('#cuaGraPDP').show(), $w('#cuaGraGDP').show(), $w('#cuaGraPD').show();
	$w('#cuaGraCapot').show(), $w('#cuaGraTecho').show(), $w('#cuaGraMaletera').show(); //aparece todos los cuadrados graves de paños

	$w('#invGuaDelaCopi').show(), $w('#invPuerDelaCopi').show(), $w('#invPuerTrasCopi').show(), $w('#invGuaTrasCopi').show(), $w('#invParaTras').show();
	$w('#invGuaTrasPilo').show(), $w('#invPuerTrasPilo').show(), $w('#invPuerDelaPilo').show(), $w('#invGuarDelaPilo').show(), $w('#invParaDela').show();
	$w('#invCapot').show(), $w('#invTecho').show(), $w('#invMaletera').show(); //aparecen todos los invisibles de imagen

	cuaGe = 1; //la variable de cuadrados generales se sensa

	$w("#text12").text = "Presione Calcular precio o siga seleccionando"; //se indica
}

export function xtraPintadoGeneral_click(event) {
	$w('#xtraPintadoGeneral').hide(); //el x transparente general desaparece
	GDC = 0, PDC = 0, PTC = 0, GTC = 0, PT = 0, GTP = 0, PTP = 0, PDP = 0, GDP = 0, PD = 0, C = 0, T = 0, M = 0; //valor de los paños todo en cero
	$w('#invLePG').hide(), $w('#invMoPG').hide(), $w('#invGraPG').hide(); //invisible de generales deshabilita
	PG = 0;
	$w('#checkLePG').hide(), $w('#checkMoPG').hide(), $w('#checkGraPG').hide(); //checks de generales desaparece
	$w('#cuaLePG').hide(), $w('#cuaMoPG').hide(), $w('#cuaGraPG').hide(); //cuadrados de generales desaparece

	$w('#checkLeGDC').hide(), $w('#checkLePDC').hide(), $w('#checkLePTC').hide(), $w('#checkLeGTC').hide(), $w('#checkLePT').hide();
	$w('#checkLeGTP').hide(), $w('#checkLePTP').hide(), $w('#checkLePDP').hide(), $w('#checkLeGDP').hide(), $w('#checkLePD').hide();
	$w('#checkLeCapot').hide(), $w('#checkLeTecho').hide(), $w('#checkLeMaletera').hide(); //desaparece todos los checks leves de paños
	$w('#checkMoGDC').hide(), $w('#checkMoPDC').hide(), $w('#checkMoPTC').hide(), $w('#checkMoGTC').hide(), $w('#checkMoPT').hide();
	$w('#checkMoGTP').hide(), $w('#checkMoPTP').hide(), $w('#checkMoPDP').hide(), $w('#checkMoGDP').hide(), $w('#checkMoPD').hide();
	$w('#checkMoCapot').hide(), $w('#checkMoTecho').hide(), $w('#checkMoMaletera').hide(); //desaparece todos los checks moderados de paños
	$w('#checkGraGDC').hide(), $w('#checkGraPDC').hide(), $w('#checkGraPTC').hide(), $w('#checkGraGTC').hide(), $w('#checkGraPT').hide();
	$w('#checkGraGTP').hide(), $w('#checkGraPTP').hide(), $w('#checkGraPDP').hide(), $w('#checkGraGDP').hide(), $w('#checkGraPD').hide();
	$w('#checkGraCapot').hide(), $w('#checkGraTecho').hide(), $w('#checkGraMaletera').hide(); //desaparece todos los checks graves de paños

	$w('#cuaLeGDC').hide(), $w('#cuaLePDC').hide(), $w('#cuaLePTC').hide(), $w('#cuaLeGTC').hide(), $w('#cuaLePT').hide();
	$w('#cuaLeGTP').hide(), $w('#cuaLePTP').hide(), $w('#cuaLePDP').hide(), $w('#cuaLeGDP').hide(), $w('#cuaLePD').hide();
	$w('#cuaLeCapot').hide(), $w('#cuaLeTecho').hide(), $w('#cuaLeMaletera').hide(); //desaparece todos los cuadrados leves de paños
	$w('#cuaMoGDC').hide(), $w('#cuaMoPDC').hide(), $w('#cuaMoPTC').hide(), $w('#cuaMoGTC').hide(), $w('#cuaMoPT').hide();
	$w('#cuaMoGTP').hide(), $w('#cuaMoPTP').hide(), $w('#cuaMoPDP').hide(), $w('#cuaMoGDP').hide(), $w('#cuaMoPD').hide();
	$w('#cuaMoCapot').hide(), $w('#cuaMoTecho').hide(), $w('#cuaMoMaletera').hide(); //desaparece todos los cuadrados moderados de paños
	$w('#cuaGraGDC').hide(), $w('#cuaGraPDC').hide(), $w('#cuaGraPTC').hide(), $w('#cuaGraGTC').hide(), $w('#cuaGraPT').hide();
	$w('#cuaGraGTP').hide(), $w('#cuaGraPTP').hide(), $w('#cuaGraPDP').hide(), $w('#cuaGraGDP').hide(), $w('#cuaGraPD').hide();
	$w('#cuaGraCapot').hide(), $w('#cuaGraTecho').hide(), $w('#cuaGraMaletera').hide(); //desaparece todos los cuadrados graves de paños

	$w('#ploLeGDC').show(), $w('#ploLePDC').show(), $w('#ploLePTC').show(), $w('#ploLeGTC').show(), $w('#ploLePT').show();
	$w('#ploLeGTP').show(), $w('#ploLePTP').show(), $w('#ploLePDP').show(), $w('#ploLeGDP').show(), $w('#ploLePD').show();
	$w('#ploLeCapot').show(), $w('#ploLeTecho').show(), $w('#ploLeMaletera').show(); //aparece todos los plomos leves de paños
	$w('#ploMoGDC').show(), $w('#ploMoPDC').show(), $w('#ploMoPTC').show(), $w('#ploMoGTC').show(), $w('#ploMoPT').show();
	$w('#ploMoGTP').show(), $w('#ploMoPTP').show(), $w('#ploMoPDP').show(), $w('#ploMoGDP').show(), $w('#ploMoPD').show();
	$w('#ploMoCapot').show(), $w('#ploMoTecho').show(), $w('#ploMoMaletera').show(); //aparece todos los plomos moderados de paños
	$w('#ploGraGDC').show(), $w('#ploGraPDC').show(), $w('#ploGraPTC').show(), $w('#ploGraGTC').show(), $w('#ploGraPT').show();
	$w('#ploGraGTP').show(), $w('#ploGraPTP').show(), $w('#ploGraPDP').show(), $w('#ploGraGDP').show(), $w('#ploGraPD').show();
	$w('#ploGraCapot').show(), $w('#ploGraTecho').show(), $w('#ploGraMaletera').show(); //aparece todos los plomos graves de paños

	$w('#texNeGuaDelaCopi').hide(), $w('#texNePueDelaCopi').hide(), $w('#texNePueTrasCopi').hide(), $w('#texNeGuaTraCopi').hide();
	$w('#texNeParaTras').hide(), $w('#texNeGuaTraPilo').hide(), $w('#texNePueTraPilo').hide(), $w('#texNePueDelaPilo').hide();
	$w('#texNeGuaDelaPilo').hide(), $w('#texNeParaDela').hide(), $w('#texNeCapot').hide(), $w('#texNeTecho').hide();
	$w('#texNeMaletera').hide(); //texto negro desaparece
	$w('#texDesGuaDelaCopi').show(), $w('#textDesPueDelaCopi').show(), $w('#texDesPueTraCopi').show(), $w('#texDesGuaTraCopi').show();
	$w('#texDesParaTra').show(), $w('#texDesGuaTraPilo').show(), $w('#texDesPueTraPilo').show(), $w('#texDesPueDelaPilo').show();
	$w('#texDesGuaDelaPilo').show(), $w('#texDesParaDela').show(), $w('#texDesCapot').show(), $w('#texDesTecho').show();
	$w('#texDesMaletera').show(); //texto deshabilitado aparece

	$w('#invGuaDelaCopi').show(), $w('#invPuerDelaCopi').show(), $w('#invPuerTrasCopi').show(), $w('#invGuaTrasCopi').show(), $w('#invParaTras').show();
	$w('#invGuaTrasPilo').show(), $w('#invPuerTrasPilo').show(), $w('#invPuerDelaPilo').show(), $w('#invGuarDelaPilo').show(), $w('#invParaDela').show();
	$w('#invCapot').show(), $w('#invTecho').show(), $w('#invMaletera').show(); //aparecen todos los invisibles de imagen

	$w('#xrojoPintadoGeneral').hide(); //el x general rojo desaparece
	$w('#pintadoGeneral').enable(); //habilito el botón de pintado general

	cuaGe = 0; //la variable de cuadrados generales se pone en cero

	$w("#text12").text = "Siga seleccionando o presione Calcular precio"; //se indica
}

export function button1_click(event) {
	if (DATOS === 0) { //si es primera vez que se da click en el botón calcular precio

		var tGDC = ""; //variable texto del precio de guardafango delantero copiloto
		var tPDC = ""; //variable texto del precio de puerta delantera copiloto
		var tPTC = ""; //variable texto del precio de puerta trasera copiloto
		var tGTC = ""; //variable texto del precio de guardafango trasero copiloto
		var tPT = ""; //variable texto del precio de parachoque trasero
		var tGTP = ""; //variable texto del precio de guardafango trasero polito
		var tPTP = ""; //variable texto del precio de puerta trasera piloto
		var tPDP = ""; //variable texto del precio de puerta delantera piloto
		var tGDP = ""; //variable texto del precio de guardafango delantero piloto
		var tPD = ""; //variable texto del precio de parachoque delantero
		var tC = ""; //variable texto del precio de capot
		var tT = ""; //variable texto del precio de techo
		var tM = ""; //variable texto del precio de maletera
		var daño = ""; //variable texto de daño
		var leeve = a; //pongo la variable leve con su valor de paño
		var mooderado = a + 50; //pongo la variable moderado con su valor de paño
		var graave = a + 100; //pongo la variable grave con su valor de paño

		if (GDC === 0) {} else { //se analiza gdc para recuperar datos
			switch (GDC) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tGDC = "Guardafango delantero copiloto = S/" + Math.round(GDC) + daño;
		}

		if (PDC === 0) {} else { //se analiza gdc para recuperar datos
			switch (PDC) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tPDC = "Puerta delantera copiloto = S/" + Math.round(PDC) + daño;
		}

		if (PTC === 0) {} else { //se analiza gdc para recuperar datos
			switch (PTC) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tPTC = "Puerta trasera copiloto = S/" + Math.round(PTC) + daño;
		}

		if (GTC === 0) {} else { //se analiza gdc para recuperar datos
			switch (GTC) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tGTC = "Guardafango trasero copiloto = S/" + Math.round(GTC) + daño;
		}

		if (PT === 0) {} else { //se analiza gdc para recuperar datos
			switch (PT) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tPT = "Parachoque trasero = S/" + Math.round(PT) + daño;
		}

		if (GTP === 0) {} else { //se analiza gtp para recuperar datos
			switch (GTP) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tGTP = "Guardafango trasero piloto = S/" + Math.round(GTP) + daño;
		}

		if (PTP === 0) {} else { //se analiza gdc para recuperar datos
			switch (PTP) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tPTP = "Puerta trasera piloto = S/" + Math.round(PTP) + daño;
		}

		if (PDP === 0) {} else { //se analiza gdc para recuperar datos
			switch (PDP) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tPDP = "Puerta delantera piloto = S/" + Math.round(PDP) + daño;
		}

		if (GDP === 0) {} else { //se analiza gdp para recuperar datos
			switch (GDP) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tGDP = "Guardafando delantero piloto = S/" + Math.round(GDP) + daño;
		}

		if (PD === 0) {} else { //se analiza pd para recuperar datos
			switch (PD) {
			case leeve * 1.5:
				daño = " daño leve. ";
				break;
			case mooderado * 1.5:
				daño = " daño moderado. ";
				break;
			case graave * 1.5:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tPD = "Parachoque delantero = S/" + Math.round(PD) + daño;
		}

		if (C === 0) {} else { //se analiza c para recuperar datos
			switch (C) {
			case leeve * 2:
				daño = " daño leve. ";
				break;
			case mooderado * 2:
				daño = " daño moderado. ";
				break;
			case graave * 2:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tC = "Capot = S/" + Math.round(C) + daño;
		}

		if (T === 0) {} else { //se analiza t para recuperar datos
			switch (T) {
			case leeve * 2:
				daño = " daño leve. ";
				break;
			case mooderado * 2:
				daño = " daño moderado. ";
				break;
			case graave * 2:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tT = "Techo = S/" + Math.round(T) + daño;
		}

		if (M === 0) {} else { //se analiza m para recuperar datos
			switch (M) {
			case leeve:
				daño = " daño leve. ";
				break;
			case mooderado:
				daño = " daño moderado. ";
				break;
			case graave:
				daño = " daño grave. ";
				break;
			default:
				daño = "";
				break;
			}

			tM = "Maletera = S/" + Math.round(M) + daño;
		}

		var tPrecioTotal = ""; //texto de la variable precio total
		PRECIOT = GDC + PDC + PTC + GTC + PT + GTP + PTP + PDP + GDP + PD + C + T + M + TC; //Se calcula el precio para base de datos
		if (PRECIOT === 0) {} else { //se analiza el precio total para poner un texto en la recolección de datos
			tPrecioTotal = "\nPRECIO TOTAL = S/" + Math.round(PRECIOT);
		}

		var tPG = ""; //texto de la variable pintado general
		if (PG === 0) {} else {
			tPG = "PINTADO GENERAL\n";
		}

		var tTC = ""; //texto de la variable tratamiento cerámico
		if (TC === 0) {} else {
			tTC = "\nTRATAMIENTO CERÁMICO = S/" + TC;
		}

		$w('#recolector').value = "City Car (S/" + a + " por paño)\n" + "El cliente solicita: " + tPG + tGDC + tPDC + tPTC + tGTC +
			tPT + tGTP + tPTP + tPDP + tGDP + tPD + tC + tT + tM + tTC + tPrecioTotal; //recolecta la cotización
		$w('#wixForms1').show(); //se muestra el cuadro para introducir los datos (nombre y celular)
	}

	if (DATOS === 1) {
		PRECIOT = GDC + PDC + PTC + GTC + PT + GTP + PTP + PDP + GDP + PD + C + T + M + TC; //Se calcula el precio en adelante
		$w("#text12").text = "S/ " + Math.round(PRECIOT) + " soles";
	}
}

export function continuar_click(event) { //boton para continuar para que se muestre el precio
	if (($w('#input4').value < 900000000) || ($w('#input4').value > 999999999)) {
		$w('#input4').placeholder = "Celular inválido";
		$w('#input4').value = false;
	}

	if (($w('#input1').valid) && ($w('#input4').valid)) { //Se valida si hay nombre y celular introducidos para poder mostrar el precio
		$w('#wixForms1').hide(); //se esconde el cuadro para introducir los datos (nombre y celular)
		PRECIOT = GDC + PDC + PTC + GTC + PT + GTP + PTP + PDP + GDP + PD + C + T + M + TC; //Se calculan acá los precios por única vez
		$w("#text12").text = "S/ " + Math.round(PRECIOT) + " soles";
		DATOS = 1; //Se pone la veriable de sensado de datos del cliente en 1 para que no vuelva a introducirlos
	}
}