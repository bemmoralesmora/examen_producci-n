import { agregarCheck, agregarCruz } from "../bloque/funcionesBloque.js";
import { datacheck, datacruz } from "../../data/data.js";

function cargarMenu (){
    let header = document.createElement('header');
    header.className = "header";

    let totalx = document.createElement('div')
    totalx.className = "totalx";
    totalx.textContent = "total x =";
    header.appendChild(totalx);

    let resultado = document.createElement('p');
    resultado.textContent = " 0";
    totalx.appendChild(resultado)

    let totalsigno = document.createElement('div');
    totalsigno.className = "totalsigno";
    totalsigno.textContent = "total / ="
    header.appendChild(totalsigno);

    let resultado2 = document.createElement('p');
    resultado2.textContent = " 0";
    totalsigno.appendChild(resultado2)

    return header;
}

export {cargarMenu};