console.group('ISOSCELES');
function trianguloIscoceles(lado1, lado2, base) {
	if (lado1 != lado2) {
		alert('Los lados A y B deben ser iguales');
		return;
	} else {
		return Math.sqrt(Math.pow(lado1 * lado2) - (base * base) / 4);
	}
}
console.groupEnd();

function alturaTrianguloIsosceles() {
	const a = Number(document.querySelector('#ladoA').value);
	const b = Number(document.querySelector('#ladoB').value);
	const c = Number(document.querySelector('#ladoBase').value);

	const altura = trianguloIscoceles(a, b, c);
	if (a + b <= c || a + c <= b || b + c <= a) {
		alert('No es isosceles');
		return;
	} else {
		alert(`La altura del triangulo es de: ${altura}`);
	}
}
