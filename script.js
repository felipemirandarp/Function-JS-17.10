let n1 = Number(prompt("Digite a primeira nota: "))
let n2 = Number(prompt("Digite a segunda nota: "))
let n3 = Number(prompt("Digite a terceira nota: "))

function medianotas(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3 
    return media   
}
console.log(medianotas(n1,n2,n3))   