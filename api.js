fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release', { method: 'GET' })
    .then((retornoFetch) => {
        return retornoFetch.json();
    }).then((retornoApi) => {

        const adcNoticias = document.querySelector('.title-news-today')
        const titulo = retornoApi.items[0].titulo
        const data = retornoApi.items[0].data_publicacao
        adcNoticias.innerText = `${titulo} ${data}`
    })
