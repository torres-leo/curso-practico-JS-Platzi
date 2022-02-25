const ladosCuadrados = 5;
// const perimetroCuadrado = ladosCuadrados * 4;
// const areaCuadrado = ladosCuadrados * ladosCuadrados;
console.group('CUADRADO');
// console.log(
// 	'Los lados del cuadrado miden: ',
// 	ladosCuadrados + 'cm',
// 	' - Su perímetro es de: ',
// 	perimetroCuadrado + 'cm',
// 	'Y su área es de: ',
// 	areaCuadrado + 'cm^2'
// );

function perimetroCuadrado(lados) {
	return lados * 4;
}

function areaCuadrado(lados) {
	return lados * lados;
}
console.groupEnd();

console.group('TRIANGULO');
// TRIANGULO
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 8;
// const alturaTriangulo = 7;

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// console.log(
// 	'Los lados del triangulo miden: ',
// 	ladoTriangulo1 + 'cm',
// 	ladoTriangulo2 + 'cm',
// 	baseTriangulo + 'cm',
// 	'Y su altura es de: ',
// 	alturaTriangulo + 'cm'
// );
// console.log('El perimetro del triangulo es de: ', perimetroTriangulo + 'cm');
// console.log('El area del triangulo es de: ', areaTriangulo + 'cm^2');

// function operacionTriangulo(lado1, lado2, base, altura) {
// 	console.log(
// 		`Sus lados equivalen a: ${lado1} y ${lado2} cm. Su base es: ${base}cm. Y su altura: ${altura}cm`
// 	);
// 	console.log(`Perímetro: ${lado1 + lado2 + base}cm`);
// 	console.log('Área: ', (base * altura) / 2, 'cm^2');
// }
// operacionTriangulo(4, 5, 6, 7);

function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}

console.groupEnd();

console.group('CIRCULO');
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const perimetroCirculo = diametroCirculo * PI;
// const areaCirculo = PI * (radioCirculo * radioCirculo);
// console.log('PI:', PI);
// console.log(
// 	`El radio del circulo es: ${radioCirculo}, su diametro: ${diametroCirculo}, su perímetro: ${perimetroCirculo}, y su área es de: ${areaCirculo}`
// );

// function operacionCirculo(radio) {
// 	const diametro = radio * 2;
// 	const perimetro = diametro * PI;
// 	const area = PI * (radio * radio);
// 	console.log(`El radio es: ${radio}cm`);
// 	console.log('Diametro: ', diametro);
// 	console.log('Perímetro: ', perimetro);
// 	console.log('Área: ', area);
// }

const PI = Math.PI;
function diametroCirculo(radio) {
	return radio * 2;
}
function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}
function areaCirculo(radio) {
	return PI * (radio * radio);
}
console.groupEnd();

// Interactuando con el HTML
function calcularPerimetroCuadrado() {
	const lados = document.querySelector('#lados');
	const valor = lados.value;

	const perimetro = perimetroCuadrado(valor);
	alert(perimetro);
}

function calcularAreaCuadrado() {
	const lados = document.querySelector('#lados');
	const valor = lados.value;

	const area = areaCuadrado(valor);
	alert(area);
}

function calcularPerimetroTriangulo() {
	const lado1 = Number(document.querySelector('#lado1').value);
	const lado2 = Number(document.querySelector('#lado2').value);
	const base = Number(document.querySelector('#base').value);

	const perimetro = perimetroTriangulo(lado1, lado2, base);
	alert(perimetro);
}

function calcularAreaTriangulo() {
	const base = Number(document.querySelector('#base').value);
	const altura = Number(document.querySelector('#altura').value);

	const area = areaTriangulo(base, altura);
	alert(area);
}

function calcularPerimetroCirculo() {
	const radio = Number(document.querySelector('#radio').value);

	const perimetro = perimetroCirculo(radio);
	alert(perimetro);
}

function calcularAreaCirculo() {
	const radio = Number(document.querySelector('#radio').value);

	const area = areaCirculo(radio);
	alert(area);
}
