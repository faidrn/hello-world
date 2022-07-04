/***ACORDEON***/
const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');

//cuando haga Click en h2, 
	// Quitar la clase activo de Todos los bloques
	// añadir la clase activo al Bloque con la Posicion del h2

//recorrer TODOS los h2
h2.forEach((cadaH2, i) => {
	//asignando un CLICK a cada h2
	h2[i].addEventListener('click', () => {
		//recorremos todos los bloques para quitar la clase activo
		bloque.forEach((cadaBloque, j) => {
			//quitar la clase activo de TODOS los bloques
			bloque[j].classList.remove('activo')
		})
		//añadimos la clase activo al bloque cuya posicion sea igual al del h2 (linea 42)
		bloque[i].classList.add('activo')
	})
});
/***ACORDEON***/

function showAccordion(){
	const accordion = document.querySelectorAll('.hide-alert-info');
	const showElements = document.querySelectorAll('.hide-elements');


	accordion[0].classList.remove('hide-alert-info');

	showElements.forEach((everyElement, i) => {
		showElements[i].classList.remove('hide-elements');
	});
	
}

function hideAccordion(){
	const accordion = document.querySelectorAll('.savings-capacity-tips');
	const titleTips = document.querySelectorAll('.title-tips');
	const bloque = document.querySelectorAll('.bloque');
	const paragraphTips = document.querySelectorAll('.paragraph-tips');
	const acordeon = document.querySelectorAll('.acordeon');
	const h2 = document.querySelectorAll('.h2');
	const contenido = document.querySelectorAll('.contenido');
	const contentTextAccordion = document.querySelectorAll('.content-text-accordion');


	accordion[0].classList.add('hide-alert-info');
	titleTips[0].classList.add('hide-elements');
	paragraphTips[0].classList.add('hide-elements');
	acordeon[0].classList.add('hide-elements');


	bloque.forEach((everyElement, i) => {
		bloque[i].classList.add('hide-elements');
		h2[i].classList.add('hide-elements');
		contenido[i].classList.add('hide-elements');
		contentTextAccordion[i].classList.add('hide-elements');
	});
	
}