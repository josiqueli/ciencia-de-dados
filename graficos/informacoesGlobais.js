const url = 'https://raw.githubusercontent.com/josiqueli/ciencia-de-dados/refs/heads/main/base-de-dados/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_com_acesso_a_educacao / 6.0e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 7.888e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_com_acesso_a_educacao} bilhões</span> tem acesso à alguma rede de educação e passam em média <span>${horas} horas</span> estudando.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
