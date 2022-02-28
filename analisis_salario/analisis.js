//* HELPERS
function esPar(numero) {
	return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
	const sumaLista = lista.reduce((valorAcumulado = 0, elemento) => {
		return valorAcumulado + elemento;
	});
	const promedioLista = sumaLista / lista.length;
	return promedioLista;
}
// ******************************************************************************

// Obteniendo la mediana para cualquier lista
function medianaSalario(lista) {
	const mitad = parseInt(lista.length / 2);

	if (esPar(lista.length)) {
		const personaMitad1 = lista[mitad - 1];
		const personaMitad2 = lista[mitad];

		const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
		return mediana;
	} else {
		const personaMitad = lista[mitad];
		return personaMitad;
	}
}

// Obteniendo salarios
const salariosCol = colombia.map((persona) => {
	const { name, salary } = persona;
	return persona.salary;
});

// ordenando los salarios
const salariosOrdenados = salariosCol.sort((a, b) => a - b);

// Obteniendo la mediana la lista
const medianaGeneral = medianaSalario(salariosOrdenados);

// Medianta top 10%
// formula
// (P * (100 - %aSacar))/100
const spliceStar = (salariosOrdenados.length * (100 - 10)) / 100;
const spliceCount = salariosOrdenados.length - spliceStar;

const salarioTop10 = salariosOrdenados.splice(spliceStar, spliceCount);
const medianaTop10 = medianaSalario(salarioTop10);

console.log(medianaGeneral, salarioTop10);
