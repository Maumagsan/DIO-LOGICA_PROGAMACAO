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

let heroi = "Ichigo Kurosaki";
let xp = parseInt(prompt("Digite sua pontuação: "));
let rank;

switch (true) {
    case (xp < 1000):
        rank = "Ferro";
        break;
    case (xp < 2000):
        rank = "Bronze";
        break;
    case (xp < 5000):
        rank = "Prata";
        break;
    case (xp < 7000):
        rank = "Ouro";
        break;
    case (xp < 8000):
        rank = "Platina";
        break;
    case (xp < 9000):
        rank = "Ascendente";
        break;
    case (xp < 10000):
        rank = "Imortal";
        break;
    default:
        rank = "Radiante";
        break;
}

console.log(`O Herói de nome ${heroi} está com o XP de ${xp}, seu rank é ${rank}`);
