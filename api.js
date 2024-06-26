
async function noticiasDay() {
    const retornoFetch = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
    const retornoApi = await retornoFetch.json()
    const adcNoticias = document.querySelector('.title-news-today')
    const titulo = retornoApi.items[0].titulo
    const data = retornoApi.items[0].data_publicacao
    adcNoticias.innerText = `${titulo} ${data}`
}

noticiasDay()