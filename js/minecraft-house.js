/*
add code to repeat divs with classes fence1-front-brick1 and fence1-front-brick2
 */

let marginLeft = 2.3;

let translateObject = [
    {translateX: 0.9},
    {incrementX: 2.4}, 
    {translateY: -7}, 
    {incrementY: -7}
];

function addDivs (translateArray, primaryClass, secondClass, idContainer, divNext, addBefore, limit){
    while (limit >= 0){
        // Crear nodo de tipo Element
        let newDiv = document.createElement("div");
    
        //Agregar atributos
        newDiv.setAttribute("class", `${primaryClass} ${secondClass}`);
        
        //newDiv.style.marginLeft = marginLeft + "vw";
        newDiv.style.transform = `translateX(${translateArray[0].translateX}vw) translateY(${translateArray[2].translateY}vh)`;
        
        //marginLeft += 2.2;
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

let divNext = document.getElementsByClassName("fence1-front-brick2")[0];
addDivs(translateObject, "fence1-front-brick1", "fence1-front-brick1-js", "fence1-front-id", divNext, true, 17);

translateObject[0].translateX = 2.3;
addDivs(translateObject, "fence1-front-brick2", "fence1-front-brick2-js", "fence1-front-id", "", false, 18);


translateObject[0].translateX = 2.4;
divNext = document.getElementsByClassName("fence1-top-row-middle1")[0];
//addDivs(translateObject, "fence1-top-brick1", "fence1-top-brick1-js", "fence1-top-id-top", divNext, false, 18);

divNext = document.getElementsByClassName("fence1-top-brick3")[0];
//addDivs(translateObject, "fence1-top-brick4", "fence1-top-brick4-js", "fence1-top-id-bottom", "", false, 18);
