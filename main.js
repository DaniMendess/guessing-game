const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let rNumber = parseInt(Math.random() * 1)

let xAttempts = 0;


function handleTryClick(event){
    event.preventDefault()
    const inputnumber = document.querySelector("#inputNumber")

    if(Number(inputnumber.value) == rNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        document.querySelector(".screen2 h2").innerText = (`acertou em ${xAttempts} tentativas!`)
    }

    xAttempts++

    inputnumber.value = ""
   
}


// Eventos 

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', reset )

function reset(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 0
}