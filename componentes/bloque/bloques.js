import { bloque } from "./itemBloque.js";
function cargarBloques(){
    let bloques = document.createElement('section');
    bloques.className = "bloques";

    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())
    bloques.appendChild(bloque())



    return bloques;
}

export {cargarBloques};