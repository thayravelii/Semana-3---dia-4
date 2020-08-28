var produtos = JSON.parse(localStorage.getItem('produtos'))

console.log(produtos)

var table = document.getElementById('tabela')

for ( i = 0; i < produtos.length ; i++) {


    var produto = produtos[i]
    var nome = produto['Nome do produto']
    var serie = produto['Número da série']
    var tipo = produto['Tipo']
    var caracs = produto['Caracteristica']

    var tr = table.insertRow(1)
    var td = [tr.insertCell(0), tr.insertCell(1), tr.insertCell(2), tr.insertCell(3)]
    td[0].innerText = serie
    td[1].innerText = nome
    td[2].innerText = tipo
    td[3].innerText = caracs
}

