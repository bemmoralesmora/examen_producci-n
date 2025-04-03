import { cargarMenu } from "./componentes/header/header.js";
import { cargarBloques } from "./componentes/bloque/bloques.js";

function cargarDOM (){
    let dom = document.querySelector("#root");
    dom.className = "dom";

    dom.appendChild(cargarMenu());
    dom.appendChild(cargarBloques());

    return dom;
}

cargarDOM();