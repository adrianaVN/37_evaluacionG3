var palabra=prompt('introduce palabra')
function isPalindromo(palabra){
	var frase=palabra.replace(/\s\g,""/);
	for (var i =0; i<frase.length; i++) {
			var j = frase[i].toLowerCase();
			var k = [frase.length-(i+1)].toLowerCase();
		if (j!==k) {
			return false;
		}
		
	}return true;

}console.log(isPalindromo(palabra));