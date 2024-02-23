
let userMail = prompt("immettere e-mail valida")
const authorized = ["gezoxedoge-7452@yopmail.com", "zidommecrattu-6895@yopmail.com", "weuffappoifeira-5930@yopmail.com"]

let validMail = false

for(let i = 0; i < authorized.length; i++){
  if(authorized[i] === userMail){

    validMail = true;
    break;

  }
}



if(validMail){
  console.log("benvenuto, email autorizzata.")
  document.querySelector("h1").innerHTML = "benvenuto, email autorizzata."
}else{
 console.log("spiacenti, email non autorizzata.");
 document.querySelector("h1").innerHTML = "spiacenti, email non autorizzata."
}

console.log(userMail,authorized );