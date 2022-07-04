/*
[Video 22] Reto: simulación de estudio de salarios
*/

let incomesArray = [];
let expensesArray = [];


function printData(idContainer, selectId, inputId){
	const name = document.getElementById(selectId).value;
	const value = Number(document.getElementById(inputId).value);

	if (name != ""){
		if (value != ""){
			let newDiv = document.createElement("div");

			newDiv.setAttribute("class", "budget-list");

			//elegir ubicacion
			let containerElement = document.getElementById(idContainer);

			//Crear div
			containerElement.appendChild(newDiv);

			//Agregar html desde js
			newDiv.innerHTML = `<p>${name}</p><p>$${value}</p>`;
			
			document.getElementById(selectId).value = "";
			document.getElementById(inputId).value = "";

			getArrays(selectId, name, value);
		}
	}
}

function getArrays(selectId, name, value){

	if (selectId === "selectIncomeType"){
		incomesArray.push({
			name: name, 
			value: value
		});
		
	} else{
		expensesArray.push({
			name: name, 
			value: value
		});
		
	}
	
}

function summation(valuesList){
	//obtener un nuevo vector con SOLO numeros
	let numberArray = valuesList.map(function(newArray) {
		return newArray.value;		   
	});
	
	const total = numberArray.reduce(
		function(previousValue = 0, value){
			return previousValue + value;
		}
	);
	
	return total;
}


function calculateSavingCapacity(){
	const resultResidue = document.getElementById("resultResidue");
	
	//Sumar ingresos
	const totalIncomes = summation(incomesArray);
					
	//sumar egresos
	const totalExpenses = summation(expensesArray);

	const superavit = totalIncomes - totalExpenses;
		
	//Escribir html desde js
	resultResidue.innerText = `$ ${superavit}`;
	showElements(superavit, totalIncomes);
    
}

function showElements (superavit, totalIncomes){
	const divBudget = document.querySelectorAll('.budget');
	const blockAlert = document.querySelectorAll('.alert');
	const showAlertSuccess = document.querySelectorAll('.alert-success');
	const showAlertDanger = document.querySelectorAll('.alert-danger');
	const showAlertWarning = document.querySelectorAll('.alert-warning');
	const percentSavings = document.getElementById('percentSavings');
	const footer = document.querySelectorAll('.footer');
	

	divBudget[0].classList.add("margin-top-10");

	if (superavit > 0){	
		//Obtener el porcentaje a ahorrar
		const percent = getPercentToSaving (superavit, totalIncomes);
		percentSavings.innerText = percent;

		//quitar la clase hide-alert-success para q se muestre el div
		showAlertSuccess[0].classList.remove('hide-alert-success');

		showAlertDanger[0].classList.add('hide-alert-danger');
		showAlertWarning[0].classList.add('hide-alert-warning');
		footer[0].classList.remove('margin-bottom-footer');

		//ocultar el acordeon
		hideAccordion();

	} else if(superavit === 0){
		showAlertWarning[0].classList.remove('hide-alert-warning');
		showAlertWarning[0].classList.add('alert-warning-margin-top');
		blockAlert[2].classList.add('alert-warning-padding');

		showAlertSuccess[0].classList.add('hide-alert-success');
		showAlertDanger[0].classList.add('hide-alert-danger');
		footer[0].classList.remove('margin-bottom-footer');

		//ocultar el acordeon
		hideAccordion();
		
	} else{
		showAlertDanger[0].classList.remove('hide-alert-danger');
		showAlertDanger[0].classList.add('alert-danger-margin-top');

		showAlertSuccess[0].classList.add('hide-alert-success');
		showAlertWarning[0].classList.add('hide-alert-warning');
		footer[0].classList.add('margin-bottom-footer');

		//mostrar el acordeon
		showAccordion();

	}
	
}

function getPercentToSaving(result, total){
	const percent = (result * 100) / total;

	return Math.round(percent);
}