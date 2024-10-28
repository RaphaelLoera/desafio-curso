const nick = "Snow";
const xp = 10.100;
let nivel;

switch (true){
  case (xp < 1.000):
    nivel = "Ferro";
    break;
  case (xp >= 1.001 && xp <= 2.000):
    nivel = "Bronze"
    break;
  case (xp >= 2.001 && xp <= 5.000):
    nivel = "Prata"
    break;
  case ( xp >= 5.001 && xp <= 7.000):
    nivel = "Ouro"
    break;
  case ( xp >= 7.001 && xp <= 8.000):
    nivel = "Platina"
    break;
  case (xp >= 8.001 && xp <= 9.000):
    nivel = "Ascendente"
    break;
  case (xp >= 9.001 && xp <= 10.000):
    nivel = "Imortal"
    break;
  case (xp >= 10.001):
    nivel = "Radiante";
    break;
  default:
    nivel = "Tente Novamente"
}

console.log(`O Herói de nome ${nick} está no nível: ${nivel}`);