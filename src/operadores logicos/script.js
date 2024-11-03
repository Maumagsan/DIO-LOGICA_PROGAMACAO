// AND ( && )
let idade = 18
let vistoVerificado = true
console.log( (idade >= 18) && (vistoVerificado === true) )

// AND ( && ) - 100 moedas coletadas e 1 item estrela
let moedasColetadas = 100
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "Estrela")
console.log(resultado)

// OR ( || ) - nosso boneco so pode sair se tiver sem chuva OU com guarda chuva
let tempo = "sol"
let item2 = "guarda chuva"
let podeSair = (tempo !== "chuva") || ( item2 === "guarda chuva")
console.log("nosso personagem pode sair? " + podeSair)

// NOT ( ! ) - nega uma afirmação
let tempo2 = "chuva"
let horario = 8
let resultado2 = !(tempo2 !== "chuva") && (horario > 6)
console.log(resultado2)