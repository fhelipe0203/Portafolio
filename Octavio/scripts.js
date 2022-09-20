
const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e) {

   e.preventDefault();
  
  const name = document.querySelector("#nome");
  
  const value = name.value;

  const email = document.querySelector("#email");
  
  const  value2 = email.value;

  const numero = document.querySelector("#numero");

  const nume = numero.value;

  const mensaje = document.querySelector("#mensaje")

  const mensa = mensaje.value;

 body = {
      "nome": value,
      "Correio": value2,
      "celular": nume,
      "mensajedetexto": mensa,
       }
   console.log(body)    
});

