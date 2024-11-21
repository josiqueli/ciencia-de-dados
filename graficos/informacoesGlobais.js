const url = 'https://raw.githubusercontent.com/josiqueli/ciencia-de-dados/refs/heads/main/base-de-dados/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasEducacao = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const pessoasEnsinoS = (dados.total_pessoas_com_educacao_superior / 1e9)
    //const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemEstudando = ((pessoasEducacao/ pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_com_acesso_a_educacao} bilhões</span> tem acesso à alguma rede de educação e passam em média <span>${horas} horas</span> estudando.<br>Desse total, apenas <span>${pessoasEnsinoS}%</span> de pessoas tem ensino superior. Portanto, cerca de <span>${porcentagemEstudando}%</span> pessoasestã estudando.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
