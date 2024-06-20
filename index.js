const listaInteresses = document.getElementById('lista-interesses')
const inputInteresses = document.getElementById('inputADC')
const buttonAdc = document.querySelector('.button-add')
const inputADC = document.getElementById('inputADC')


buttonAdc.addEventListener('click', () => {
    const valueInput = inputADC.value
    const criarLi = document.createElement('li')
    criarLi.innerHTML = valueInput
    listaInteresses.appendChild(criarLi)
    inputADC.value = ''
})


