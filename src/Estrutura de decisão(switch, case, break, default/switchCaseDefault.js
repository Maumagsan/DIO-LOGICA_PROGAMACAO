//estrutura de decisão
//switch/case/break/default
let fruta = "banana"

switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
        console.log("segunda mensagem")
        break

    case "banana":
    case "morango":
        console.log("vitamina" + fruta)
        break

    case "maçã":
        console.log("suco de maçã")
        break
    
    default:
        console.log("suco genérico")

}