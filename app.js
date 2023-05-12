// Programa Dados JS Pablo Moore

/* Funcion que declara cuantos dados se tiran y realiza el calculo entre 1 
y la cantidad de caras que se le hayan ingresado al dado */
function dados_tirar(nCaras, cant){
    
    var arrayRespuesta = []
    let resultado = document.getElementById("answer");

    for (let i = 0; i < cant; i++) {

        let numAleatorio = 1 + Math.floor(Math.random() * nCaras);
        if(numAleatorio === 1){
            let resp =`Dado ${i+1}: "+" | `
            arrayRespuesta.push(resp)
        }else if (numAleatorio === 2){
            let resp =`Dado ${i+1}: "+" | `
            arrayRespuesta.push(resp)
        }else if (numAleatorio === 3){
            let resp =`Dado ${i+1}: "-" | `
            arrayRespuesta.push(resp)
        }else if (numAleatorio === 4){
            let resp =`Dado ${i+1}: "-" | `
            arrayRespuesta.push(resp)
        }else if (numAleatorio === 5){
            let resp =`Dado ${i+1}: "  " | `
            arrayRespuesta.push(resp)
        }else if (numAleatorio === 6){
            let resp =`Dado ${i+1}: "  " | `
            arrayRespuesta.push(resp)
        }

        
    }

    let respuesta = arrayRespuesta.join(" ")
    resultado.textContent = respuesta
    

}

const formulario = document.querySelector("#form")

formulario.addEventListener( 'submit', validateForm)

function validateForm(e){
    e.preventDefault()
    let cantDados = document.getElementById("dado").value

    if (cantDados > 25){
        let resultado = document.getElementById("answer");
        resultado.textContent = "Por favor, no vas a tirar más de 25 dados."
    }else if(cantDados<1){
        let resultado = document.getElementById("answer");
        resultado.textContent = "No podés tirar 0 dados o menos."
    }else{
        dados_tirar(6, cantDados)
    }
    

}

