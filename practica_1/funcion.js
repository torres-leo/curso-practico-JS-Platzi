array(['Hola', 2, true, { nombre: 'Leo' }]);
function array(num) {
	for (let i = 0; i < num.length; i++) {
		console.log('El primer elemento es: ', num[0]);
	}
}

arreglo(['Computadora', 'Mouse', 'Auriculares', 'Celular', 'Impresora']);

function arreglo(arreglo) {
	for (let i = 0; i < arreglo.length; i++) {
		console.log(arreglo[i]);
	}
}

console.log('=============================');
console.log('OBJETOS');
console.log('=============================');

const informacion = {
	nombre: 'Leo',
	apeelido: 'Torres',
	edad: 24,
	rol: 'Estudiante',
};

miObjeto(informacion);

function miObjeto(obj) {
	for (info in obj) {
		console.log(`${info}: ${obj[info]}`);
	}
}
