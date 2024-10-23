let conversao
function converteMoeda (reais, cotacao, nomeMoeda){

    conversao = reais * cotacao
    console.log(`R$ ${reais} vale ${conversao} em ${nomeMoeda} `)

}

function valor  (reais, cotacao, nomeMoeda){

     converteMoeda(reais, cotacao, nomeMoeda)
}

let reais, cotacao, nomeMoeda 

    reais = parseFloat(prompt("Digite o valor em reais: "))
    cotacao = parseFloat (prompt("Digite o valor da cotação: "))
    nomeMoeda = prompt("Digite o nome da moeda: ")

    valor (reais, cotacao, nomeMoeda)