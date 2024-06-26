const listaInteresses = document.getElementById('lista-interesses')
const inputInteresses = document.getElementById('inputADC')
const buttonAdc = document.querySelector('.button-add')
const inputADC = document.getElementById('inputADC')
const buttonClear = document.querySelector('.button-clear')


function fixarLocalStore() {
    const declaraLocalStore = JSON.parse(localStorage.getItem('MinhaLista')) || [];
    declaraLocalStore.forEach(item => {
        const listaADC = document.createElement('li')
        listaADC.innerHTML = item
        listaInteresses.appendChild(listaADC)
    })
}
fixarLocalStore()



buttonAdc.addEventListener('click', () => {
    const valueInput = inputADC.value.trim()
    const criarLi = document.createElement('li')
    const declaraLocalStore = JSON.parse(localStorage.getItem('MinhaLista')) || [];
    declaraLocalStore.push(valueInput)
    localStorage.setItem('MinhaLista', JSON.stringify(declaraLocalStore))
    criarLi.innerHTML = valueInput
    listaInteresses.insertBefore(criarLi, listaInteresses.firstChild)
    inputADC.value = ''
})


buttonClear.addEventListener('click', () => {
    localStorage.clear('MinhaLista')
    const listaInteresses = document.getElementById('lista-interesses')
    listaInteresses.innerHTML = ''
})