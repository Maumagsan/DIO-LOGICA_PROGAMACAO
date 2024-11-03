'''
Para ler e escreve dados em Python, ultilizamos as seguntes funções:
- input: lê UMA linha com dado(s) de entrada do usuário;
- print: imprime um testo de saída (Output), pulando linha.
'''

#Função útil para o calculo do imposto (baseado nas alicotas).
def calcular_imposto(salario):
    aliquota = 0.00
    if (salario >= 0 and salario <= 1100):
        aliquota = 0.05
    elif (salario >= 1100.01 and salario <= 2500):
        aliquota = 0.10
    else:
        aliquota = 0.15
    #criar as demais condições para as alicotas de 10.00% e 15.00%.
    return aliquota * salario

#Lê os valores de entrada:
valor_salario = float(input())
valor_beneficios = float(input())

#calcula o imposto através da função "calcular_imposto":
valor_imposto = calcular_imposto(valor_salario)
#calcula e imprime a saída (com 2 casas decimais):
saida = valor_salario - valor_imposto + valor_beneficios
print(f'{saida:.2f}')