const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e) {

   e.preventDefault();
  
  const name = document.querySelector("#nome");
  
  
  const value = name.value;

  console.log(value);
});

