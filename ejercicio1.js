/*1:inicio.
2:declarar las variables(piedra, papel, y tijera.)
3:realizar el ciclo que permita realizar el juego 3 veces.
4:hacer las comparaciones.
5:mostrar quien gana en cada turno
6:fin
*/
var piedra = 'piedra';
var papel = 'papel';
var tijera = 'tijera';
for (var i=0; i<3; i++) {
	var usuario1 = prompt('ingrese: ' + piedra +  papel + tijera);
	var usuario2 = prompt('ingrese: ' + piedra +  papel + tijera);
	if (usuario1===usuario2){
		alert('es empate');
	}
	else if (usuario1===tijera && usuario2===papel) {
		alert('gana usuario1');
	}
	else if (usuario1===papel && usuario2===tijera) {
		alert('gana usuario2');
	}
	else if (usuario1===piedra && usuario2===tijera) {
		alert('gana usuario1');
	}
	else if (usuario1===tijera && usuario2===piedra) {
		alert('gana usuario2');
	}
	else if (usuario1===papel && usuario2===piedra) {
		alert('gana usuario1');
	}
	else if (usuario1===piedra && usuario2===papel) {
		alert('gana usuario2');
	}
}