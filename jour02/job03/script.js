


var button = document.getElementById("button")
button.addEventListener('click', addOne)




function addOne()
   {  
      var numero = parseInt(document.getElementById("nombre").innerHTML)
      console.log(numero)

      numero++

      document.getElementById('nombre').innerHTML = numero;

   }
   


