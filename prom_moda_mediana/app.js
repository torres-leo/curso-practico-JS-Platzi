console.group('PROMEDIO');

const lista1 = [90, 80, 100, 200, 300];
let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
	sumaLista1 = sumaLista1 + lista1[i];
}
const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
	// let sumaLista = 0;
	// for (let i = 0; i < lista.length; i++) {
	// 	sumaLista = sumaLista + lista[i];
	// }

	const sumaLista = lista.reduce((valorAcumulado = 0, elemento) => {
		return valorAcumulado + elemento;
	});

	const promedioLista = sumaLista / lista.length;

	return promedioLista;
}
console.groupEnd();

console.group('MEDIANA');
// const lista2 = [300, 400, 450, 5000, 10000, 340, 560, 440, 370, 350];
// const mitadLista2 = parseInt(lista2.length / 2);

// function esPar(numero) {
// 	if (numero % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// let mediana;

// if (esPar(lista2.length)) {
// 	const elemento1 = lista2[mitadLista2 - 1];
// 	const elemento2 = lista2[mitadLista2];

// 	const promedio = calcularMediaAritmetica2([elemento1, elemento2]);

// 	mediana = promedio;
// } else {
// 	mediana = lista2[mitadLista2];
// }

function calcularMediana(lista) {
	const listaOrdenada = lista.sort((a, b) => a - b);

	const mitadLista = parseInt(listaOrdenada.length / 2);
	let mediana;

	function esPar(numero) {
		if (numero % 2 === 0) {
			return true;
		} else {
			return false;
		}
	}

	if (esPar(listaOrdenada.length)) {
		const elemento1 = listaOrdenada[mitadLista - 1];
		const elemento2 = listaOrdenada[mitadLista];

		const promedio = calcularMediaAritmetica([elemento1, elemento2]);

		mediana = promedio;
		return mediana;
	} else {
		mediana = listaOrdenada[mitadLista];
		return mediana;
	}
}

console.groupEnd();

console.group('MODA');
// const lista3 = [9, 0, 4, 3, 4, 0, 9, 8, 3, 0, 3, 9, 4, 8, 3, 2, 1, 0, 4, 8, 0, 9, 3, 1, 2, 1, 2, 6, 5, 5];
// lista3.sort((a, b) => a - b);
// const lista3Count = {};

// lista3.map((elemento) => {
// 	if (lista3Count[elemento]) {
// 		lista3Count[elemento] += 1;
// 	} else {
// 		lista3Count[elemento] = 1;
// 	}
// });

// // convirtiendo el objeto lista3Count a una lista(array)
// lista3Array = Object.entries(lista3Count).sort((elementoA, elementoB) => {
// 	return elementoA[1] - elementoB[1];
// });
// const moda = lista3Array[lista3Array.length - 1];

function calcularModa(lista) {
	lista.sort((a, b) => a - b);

	const listaObj = {};

	lista.map((elemento) => {
		if (listaObj[elemento]) {
			listaObj[elemento] += 1;
		} else {
			listaObj[elemento] = 1;
		}
	});

	listaArray = Object.entries(listaObj).sort((elementoA, elementoB) => {
		return elementoA[1] - elementoB[1];
	});
	const moda = listaArray[listaArray.length - 1];
	return moda;
}

console.groupEnd();

console.group('PROMEDIO PONDERADO');
const notes = [
	{
		course: 'Educación Física',
		note: 10,
		credit: 2,
	},
	{
		course: 'Programación',
		note: 8,
		credit: 5,
	},
	{
		course: 'Finanzas personales',
		note: 7,
		credit: 5,
	},
];

const notesWithCredit = notes.map(function (noteObject) {
	const { note, credit } = noteObject;
	return note * credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(function (sum = 0, newVal) {
	return sum + newVal;
});
// console.log(sumOfNotesWithCredit);

const credits = notes.map(function (noteObject) {
	const { credit } = noteObject;
	return credit;
});
// console.log(credits);

const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
	return sum + newVal;
});
// console.log(sumOfCredits);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
console.log(promedioPonderadoNotasConCreditos);
console.groupEnd();
