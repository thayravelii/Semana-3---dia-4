
    const numeroSerie = document.getElementById('serie') 
    function minhaFunc () {
      if (numeroSerie.value.length==3) {
          numeroSerie.value+="."
      }
    }

let produtos = []

let nome = document.getElementById('nome')
let serie = document.getElementById('serie')
let tipo = document.getElementById('tipo')
let caracs = document.getElementById('caracteristica')

function add() {

  produtos.push({
       'Nome do produto': nome.value,
       'Número da série': serie.value,
       'Tipo': tipo.value,
       'Caracteristica': caracs.value
  })

  var produtos_json = JSON.stringify(produtos)
  localStorage.produtos = produtos_json
  console.log(produtos_json)
  localStorage.setItem("produtos", produtos_json);

  serie.value = ''
  nome.value = ''
  tipo.value = ''
  caracs.value = ''

}
