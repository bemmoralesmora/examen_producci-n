
function bloque (){

    let itembloque = document.createElement('div');
    itembloque.className = "itembloque";

    let contenido = document.createElement('div');
    contenido.className = "contenido";
    itembloque.appendChild(contenido);

    let contenedor_b = document.createElement('div');
    contenedor_b.className = "contenedor-b"
    itembloque.appendChild(contenedor_b)

    let botonx_c = document.createElement('button');
    botonx_c.className = "botonx-c";
    botonx_c.textContent = "x"

    botonx_c.addEventListener('click', () => {
        alert("hola")
    });
    contenedor_b.appendChild(botonx_c);
    

    let botonc_c = document.createElement('button');
    botonc_c.className = "botonc-c";
    botonc_c.textContent = "/"
    botonc_c.addEventListener('click', () => {
        
    });

    contenedor_b.appendChild(botonc_c);

    return itembloque;

    

}

export {bloque};