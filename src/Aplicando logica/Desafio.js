//Desafio JavaScript nao Dio têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

//Lê os valores de entradas:
const valorSalario = parseFloat(get());
const valorBeneficio = parseFloat(get());

//calcula o imposto através da função "calcualrImposto":
const valorImposto = calcularImposto(valorSalario);
//calcula e imprime a Saída (com 2casa decimais):
const saida = valorImposto - valorImposto + valorBeneficio;
print(saida.toFixed(2));

//função útil para o calculo do imposto (baseado nas aliquotas).
function calcualrImposto(salario){
    let aliquota;
    if ( salario >= 0 && salario <= 1100){
        aliquota = 0.05;
    }else if(salario >= 1100.01 && salario <= 2500){
        aliquota = 0.10;
            }else{
                aliquota = 0.15
            }
           
        
    
    //TODO criar as demais condições para as aliquotas de 10.00% e 15.00%.
    return aliquota * salario;
}