/*
add code to repeat divs
*/

let translateObject = [
		{translateY: 10.7}, 
		{incrementY: -2}
	];


function addDivs (translateArray, primaryClass, secondClass, idContainer, addBefore, limit){
    while (limit >= 0){
        // Crear nodo de tipo Element
        let newDiv = document.createElement("div");
    
        //Agregar atributos
        if (secondClass != ""){
            newDiv.setAttribute("class", `${primaryClass} ${secondClass}`);
        } else{
            newDiv.setAttribute("class", `${primaryClass}`);
        }
        
        newDiv.style.transform = `translateY(${translateArray[0].translateY}vw)`;
        
        translateArray[0].translateY += translateArray[1].incrementY;
    
        //elegir ubicacion
        let containerElement = document.getElementById(idContainer);
        
        //agregar
        containerElement.appendChild(newDiv);
        
        limit -= 1;
    }    
}

function getPositions (translateY, incrementY){
    translateObject = [
        {translateY: translateY}, 
        {incrementY: incrementY}
    ];

    return translateObject;
}


addDivs(translateObject, "absolute", "division-wall-1", "wall-1-id", false, 5);

translateObject = getPositions(18.7, -2);

addDivs(translateObject, "absolute", "division-wall-2", "wall-2-id", false, 9);