
const randomUser = Math.floor(Math.random() * 6 + 1)
const randomPc = Math.floor(Math.random() * 6 + 1)

const display = document.getElementById("print")

if(randomPc > randomUser){
  console.log("ha vinto il pc");
  display.innerHTML = "ha vinto il pc"
}else if(randomPc < randomUser){
  console.log("ha vinto il giocatore")
  display.innerHTML = "ha vinto il giocatore"
}else{
  console.log("è un pareggio");
  display.innerHTML = "è un pareggio"
}

display.innerHTML +=" <br>  numero pc: " + randomPc + " | " + " numero giocatore:  " + randomUser

console.log(randomUser,randomPc)