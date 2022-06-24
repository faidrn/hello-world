/*
add code to repeat divs with classes fence1-front-brick1 and fence1-front-brick2
 */

let brick2 = document.getElementsByClassName("fence1-front-brick2")[0];

let marginLeft = 2.3;

for (let i = 0; i <= 20; i++){
    // Crear nodo de tipo Element
    let miDiv = document.createElement("div");

    //Agregar atributos
    miDiv.setAttribute("class", "fence1-front-brick1 fence1-front-brick1-js");
    
    //miDiv.setAttribute("margin-left", marginLeft + "vw");
    miDiv.style.marginLeft = marginLeft + "vw";
    marginLeft += 2.2;

    //elegir ubicacion
    let capa = document.getElementById("fence1-front-id");
    //agregar
    //capa.appendChild(miDiv);
    capa.insertBefore(miDiv, brick2);
}


marginLeft = 2.3;

for (let i = 0; i <= 20; i++){
    // Crear nodo de tipo Element
    let miDiv = document.createElement("div");

    //Agregar atributos
    miDiv.setAttribute("class", "fence1-front-brick2 fence1-front-brick2-js");
    
    miDiv.style.marginLeft = marginLeft + "vw";
    marginLeft += 2.2;

    //elegir ubicacion
    let capa = document.getElementById("fence1-front-id");
    //agregar
    capa.appendChild(miDiv);
    //capa.insertBefore(miDiv, brick2);
}