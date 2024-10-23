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
    if(num2 !=0 ){
        return num / num2
    }
}

let op 
let numero1, numero2 



while(op != 0){
    op  =  Number (prompt("Digite sua opção: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 0 - Para sair"))
    numero1 = Number(prompt("Digite o primeiro numero: "))
    numero2 = Number(prompt("Digite o segundo numero:  "))

    switch(op){

        case 1: 
            alert(soma(numero1, numero2))
            break

        case 2: 
            alert(sub(numero1, numero2))
            break
        case 3: 
            alert(multi(numero1, numero2))
            break
        case 4: 
            alert(div (numero1, numero2 ))
            break
    }


}