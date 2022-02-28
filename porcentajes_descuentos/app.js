function calcularPrecioDescuento(precio, descuento) {
	// const porcentajePrecioDescuento = precio - descuento;
	const precioDescuento = (precio * (100 - descuento)) / 100;

	return precioDescuento;
}

// TODO: Forma #1
// const cupones = ['Descuento 15%', 'Descuento 20%', 'Descuento 25%'];
// function calcularDescuento() {
// 	const precio = Number(document.querySelector('#precio').value);
// 	const cupon = document.querySelector('#cupon').value;

// 	if (!cupones.includes(cupon)) {
// 		alert(`El cupon:  "${cupon}", no es valido`);
// 	} else {
// 		let descuento;

// 		switch (cupon) {
// 			case cupones[0]:
// 				descuento = 15;
// 				break;

// 			case cupones[1]:
// 				descuento = 10;
// 				break;

// 			case cupones[2]:
// 				descuento = 25;
// 				break;
// 			default:
// 				break;
// 		}

// 		const precioConDescuento = calcularPrecioDescuento(precio, descuento);

// 		const resultado = document.querySelector('.resultado');
// 		resultado.innerHTML = `El precio con descuento es de: $${precioConDescuento}`;
// 	}
// }

// TODO: Forma #2
const cupones = [
	{ nombre: 'Basic', descuento: 10 },
	{ nombre: 'Medium', descuento: 20 },
	{ nombre: 'Premium', descuento: 30 },
];

function calcularDescuento() {
	const precio = Number(document.querySelector('#precio').value);
	const cupon = document.querySelector('#cupon').value;

	const cuponValido = (coupon) => {
		return coupon.nombre === cupon;
	};

	const usercoupon = cupones.find(cuponValido);

	if (!usercoupon) {
		alert(`El cupón: "${cupon}", no es válido`);
	} else {
		const descuento = usercoupon.descuento;
		const precioConDescuento = calcularPrecioDescuento(precio, descuento);

		// Imprimiendo en el HTML
		const resultado = document.querySelector('.resultado');
		resultado.innerHTML = `Su cupón es "${cupon}"= - ${descuento}%, <br /> El Precio nuevo es: $${precioConDescuento}`;
	}
}
