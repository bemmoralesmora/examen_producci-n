function agregarCruz(bloque) {
    const contadorX = document.querySelector('.totalx p');
    contadorX.textContent = parseInt(contadorX.textContent) + 1;
    
    const cruces = localStorage.getItem('cruces') ? parseInt(localStorage.getItem('cruces')) : 0;
    localStorage.setItem('cruces', cruces + 1);
    
    datacruz().push(bloque);
    
    bloque.remove();
}

function agregarCheck(bloque) {
    const contadorCheck = document.querySelector('.totalsigno p');
    contadorCheck.textContent = parseInt(contadorCheck.textContent) + 1;
    const checks = localStorage.getItem('checks') ? parseInt(localStorage.getItem('checks')) : 0;
    localStorage.setItem('checks', checks + 1);
    
    datacheck().push(bloque);
    
    bloque.remove();
}

export { agregarCruz, agregarCheck };