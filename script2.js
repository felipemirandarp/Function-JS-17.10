function soma (num, num2){
     return num + num2 
}

function sub (num, num2){
    return num - num2 
}

function multi (num, num2){
    return num * num2 
}

function div (num , num2){
    if(num !=0 && num != 0 ){
        return num / num2
    }
}

let op 
let numero1, numero2 



while(op != 100){
    op ("Digite sua opção: 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão")
    numero1 = Number(prompt("Digite o primeiro numero: "))
    numero2 = Number(prompt("Digite o segundo numero:  "))

    switch(op){

        case 1: 
        console.log(soma(num, num2))
    }

}