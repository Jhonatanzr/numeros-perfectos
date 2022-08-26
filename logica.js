// Funcion que se ejecuta con el evento click del boton consultar y realiza el ciclo del rango

function consultaNumeros(){
    let contador = 1;
    let numMenor = parseInt(document.getElementById('primero').value);
    let numMayor = parseInt(document.getElementById('segundo').value);
    let p = document.getElementById("error");

    if( !numMenor || !numMayor){
        p.classList.remove("d-none");
        p.innerText = 'Los campos primer y segundo numero no pueden estar vacios ni ser 0';
    } else if (numMayor < numMenor){
        p.classList.remove("d-none");
        p.innerText = 'El segundo número no puede ser menor que el primero';
    } else {
        document.getElementById("tbody").innerHTML = ``;
        p.classList.add("d-none");
    
        for ( i = numMenor; i <= numMayor; i++) {
            if( numeroPerfecto(i) ){
                document.getElementById("tbody").innerHTML += `
                <tr>
                    <th scope="row">${contador++}</td>
                    <td>${new Intl.NumberFormat('es-co').format(parseInt(i))}</td>
                </tr>
                `;
            }
        }
    }
}

//Función para validar si un numero es perfecto usando el teorema de euclides-euler

function numeroPerfecto( numero ){
    let perfecto;
    let sd = 1;
    let i = 0;
    let ni = numero;

    while ((ni % 2) == 0) {
        i++;
        sd = (sd + Math.pow(2,i ) + (numero/(Math.pow(2,i))));
        ni = ni/2;
    }

    if(numero == sd && validarPrimo(ni)){
        perfecto = true;
    } else {
        perfecto = false;
    }

    return perfecto;
}

// Función para validar si un numero es primo

function validarPrimo(numero){
    let primo = true;
    if((numero==1) || ((numero % 2) == 0 && numero > 2) || (Math.sqrt(numero) == Math.trunc(Math.sqrt(numero))) ){
        primo = false;
    } else {
        for (let i = 3; i <= Math.sqrt(numero); i+=2) {
            if ((numero % i) == 0) {
                primo = false;
                break;
            } 
        }
    }
    return primo;
}