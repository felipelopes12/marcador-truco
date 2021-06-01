var primeiraDupla = {
nome: "Jogador 1",
Truco: 0,
Pontinho: 0,
Pontuaçao:0
}
var segundaDupla = {
	nome: "Jogador 2",
	Truco: 0,
  Pontinho: 0,
	Pontuaçao:0
}

primeiraDupla.Pontuaçao = calculaPontos(primeiraDupla)
segundaDupla.Pontuaçao = calculaPontos(segundaDupla)

function calculaPontos(jogador){
var Pontuaçao = (jogador.Truco * 3) + jogador.Pontinho
return Pontuaçao
} 

var jogadores = [ primeiraDupla, segundaDupla]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
	var html = ""
	for(var i=0; i < jogadores.length; i++){
		html += "<tr><td>" + jogadores[i].nome + "</td>"
		html += "<td>" + jogadores[i].Truco + "</td>"
	  html += "<td>" + jogadores[i].Pontinho + "</td>"
		html += "<td>" + jogadores[i].Pontuaçao + "</td></tr>"
		html += "<td><button onClick='adicionarTruco(" + i + " )'>Truco</button></td>"
    html += "<td><button onClick='adicionarPontinho(" + i + ")'>Pontinho</button></td>"
  html += "<td><button onClick='limpar(" + i + ")'>Limpar</button></td></tr>"
}
 	var tabelaJogadores = document.getElementById("tabelaJogadores")
 	tabelaJogadores.innerHTML = html
}

function limpar(i){
    jogadores[i].Truco = 0
    jogadores[i].Pontinho = 0
    jogadores[i].Pontuaçao = 0
   exibirJogadoresNaTela(jogadores)
}

function adicionarTruco(i){
	var jogador = jogadores[i]
	jogador.Truco++
	jogador.Pontuaçao = calculaPontos(jogador)
	exibirJogadoresNaTela(jogadores)
}
function adicionarPontinho(i){
	var jogador = jogadores[i]
	jogador.Pontinho++
	jogador.Pontuaçao = calculaPontos(jogador)
	exibirJogadoresNaTela(jogadores)
}