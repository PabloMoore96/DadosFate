// Programa Dados JS Pablo Moore

/* Funcion que declara cuantos dados se tiran y realiza el calculo entre 1 
y la cantidad de caras que se le hayan ingresado al dado */
function dados_tirar(nCaras, cant){
    
    for (let i = 0; i < cant; i++) {

        let numAleatorio = 1 + Math.floor(Math.random() * nCaras);
        if(numAleatorio === 1){
            alert (`Resultado dado ${i+1} es "+"`)
        }else if (numAleatorio === 2){
            alert (`Resultado dado ${i+1} es "+"`)
        }else if (numAleatorio === 3){
            alert (`Resultado dado ${i+1} es "-"`)
        }else if (numAleatorio === 4){
            alert (`Resultado dado ${i+1} es "-"`)
        }else if (numAleatorio === 5){
            alert (`Resultado dado ${i+1} es " "`)
        }else if (numAleatorio === 6){
            alert (`Resultado dado ${i+1} es " "`)
        }
        
    }
    

}

const formulario = document.querySelector("#form")

formulario.addEventListener( 'submit', validateForm)

function validateForm(e){
    e.preventDefault()
    let cantDados = document.getElementById("dado").value

    console.log(cantDados)
    dados_tirar(6, cantDados)

}


// const tirar = document.getElementById("btn")

    


// tirar.addEventListener('click', cantDados)


// console.log(cantDados)






// let op = prompt("¿Cuantas caras tendrá el dado? ")

// if (op>1){ /* Si la cantida de caras es mayor a 1 se ejecuta el juego de dados*/

//     alert (`Usted ha elegido un dado de ${op} caras`)
//     dados_tirar(op) //Se llama a la función anterior con la variable op como numero de caras


// }else{
//     alert ("Usted ha salido")
// }
    