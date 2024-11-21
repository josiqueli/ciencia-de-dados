async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/josiqueli/ciencia-de-dados/refs/heads/main/base-de-dados/educacao-etapas-de-ensino.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeEstudantes = Object.values(dados)

const data = [
  {
    x: nomeDasRedes,
    y: quantidadeEstudantes,
    type: 'bar',
    marker: {
      color: 'grey'
    }
  }
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)

}

quantidadeUsuarios()
