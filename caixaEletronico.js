const readline =require('readline-sync')
var nota200 = 0
var nota100 = 0
var nota50 = 0
var nota20 = 0
var nota10 = 0
var nota5 = 0
var nota2 = 0

function caixaEletronico(){

    var montante = readline.questionInt("Insira o valor desejado:")
        while(montante >= 200){
            montante = montante - 200
            nota200 = nota200 + 1
        }
        while(montante >= 100){
            montante = montante - 100
            nota100 = nota100 + 1
        }
    
        while(montante >= 50){
            montante = montante - 50
            nota50 = nota50 + 1
        }
    
        while(montante >= 20){
            montante = montante - 20
            nota20 = nota20 + 1
        }
    
        while(montante >= 10){
            montante = montante - 10
            nota10 = nota10 + 1
        }
    
        while(montante >= 5){
            montante = montante - 5
            nota5 = nota5 + 1
        }
    
        while(montante >= 2){
            montante = montante -2
            nota2 = nota2 + 1
        }
    console.log("Cedulas:")
    if(nota200 !=0)
        console.log("%i Notas de 200reais", nota200)

    if(nota100 !=0)
        console.log("%i Notas de 100reais", nota100)
    
    if(nota50 !=0)
        console.log("%i Notas de 50reais", nota50)
    
    if(nota20 !=0)
        console.log("%i Notas de 20reais", nota20)
    
    if(nota10 !=0)
        console.log("%i Notas de 10reais", nota10)

    if(nota5 !=0)
        console.log("%i Notas de 5notas", nota5)

    if(nota2 !=0)
        console.log("%i Notas de 2reais", nota2)

}



caixaEletronico()
