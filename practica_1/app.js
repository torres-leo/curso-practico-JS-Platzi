const tipoDeSuscripcion = 'Free';

// switch (tipoDeSuscripcion) {
// 	case 'Free':
// 		console.log('Solo puedes tomar los cursos gratis');
// 		break;
// 	case 'Basic':
// 		console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
// 		break;
// 	case 'Expert':
// 		console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
// 		break;
// 	case 'ExpertPlus':
// 		console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
// 		break;
// }

if (tipoDeSuscripcion === 'Free') {
	console.log('Solo puedes tomar los cursos gratis ' + `| Plan ${tipoDeSuscripcion}`);
} else if (tipoDeSuscripcion === 'Basic') {
	console.log(
		'Puedes tomar casi todos los cursos de Platzi durante un mes ' + `| Plan ${tipoDeSuscripcion}`
	);
} else if (tipoDeSuscripcion === 'Expert') {
	console.log(
		'Puedes tomar casi todos los cursos de Platzi durante un año ' + `| Plan ${tipoDeSuscripcion}`
	);
} else if (tipoDeSuscripcion === 'ExpertPlus') {
	console.log(
		'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año ' +
			`| Plan ${tipoDeSuscripcion}`
	);
}

console.log('======================================');

for (let i = 0; i < 5; i++) {
	console.log('El valor de i es: ' + i);
}

let a = 0;
while (a < 5) {
	console.log('El valor de a es: ', a);
	a++;
}

for (let i = 10; i >= 2; i--) {
	console.log('El valor de i es: ' + i);
}

let b = 10;
while (b > 0) {
	console.log('El valor de b es: ', b);
	b--;
}

console.log('======================================');

const respuesta = prompt('¿Cuál es el resultado de 2 + 2');

if (Number(respuesta) === 4) {
	const div = document.createElement('div');
	div.classList.add('bg-success', 'text-white', 'text-center', 'fw-lighter', 'mt-5', 'rounded');
	const container = document.querySelector('.container-fluid');

	div.innerHTML = `¡Correcto! <br /> La suma de 2 + 2 = ${respuesta} `;

	container.appendChild(div);
} else {
	location.reload();
}
