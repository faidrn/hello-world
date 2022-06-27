/*
add code to repeat divs with classes fence1-front-brick1 and fence1-front-brick2
 */

let translateObject = [
    {translateX: 0.7},
    {incrementX: 2.1}, 
    {translateY: 0.8}, 
    {incrementY: 0.8}
];

function addDivs (translateArray, primaryClass, secondClass, idContainer, divNext, addBefore, limit){
    while (limit >= 0){
        // Crear nodo de tipo Element
        let newDiv = document.createElement("div");
    
        //Agregar atributos
        if (secondClass != ""){
            newDiv.setAttribute("class", `${primaryClass} ${secondClass}`);
        } else{
            newDiv.setAttribute("class", `${primaryClass}`);
        }
        
        newDiv.style.transform = `translateX(${translateArray[0].translateX}vw) translateY(${translateArray[2].translateY}vh)`;
        
        translateArray[0].translateX += translateArray[1].incrementX;
        translateArray[2].translateY += translateArray[3].incrementY;
    
        //elegir ubicacion
        let containerElement = document.getElementById(idContainer);
        
        //agregar
        if (addBefore){
            containerElement.insertBefore(newDiv, divNext);
        } else{
            containerElement.appendChild(newDiv);
        }
        
        limit -= 1;
    }    
}

function getPositions (translateX, incrementX, translateY, incrementY){
    translateObject = [
        {translateX: translateX},
        {incrementX: incrementX}, 
        {translateY: translateY}, 
        {incrementY: incrementY}
    ];

    return translateObject;
}


let divNext = document.getElementsByClassName("fence1-front-brick2")[0];
addDivs(translateObject, "fence1-front-brick1", "", "fence1-front-id", divNext, true, 17);

translateObject = getPositions(2.3, translateObject[1].incrementX, translateObject[2].translateY, translateObject[3].incrementY);
addDivs(translateObject, "fence1-front-brick2", "", "fence1-front-id", "", false, 16);



translateObject = getPositions(2.4, translateObject[1].incrementX, 0, -3);
divNext = document.getElementsByClassName("fence1-top-row-middle")[0];
addDivs(translateObject, "fence1-top-brick1", "", "fence1-top-id-top", divNext, false, 14);


translateObject = getPositions(2.4, translateObject[1].incrementX, 0, -3);
addDivs(translateObject, "fence1-top-brick2", "", "fence1-top-id-middle", "", false, 14);


translateObject = getPositions(2.4, translateObject[1].incrementX, 0, -3);
addDivs(translateObject, "fence1-top-brick3", "", "fence1-top-id-bottom", "", false, 14);
