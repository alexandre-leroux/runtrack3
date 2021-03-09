
var button = document.getElementById("button")

button.addEventListener("click", showhide);



var article = document.createElement("article")
article.style="display : none"
article.id = "art"
var texte = document.createTextNode('L\'important n\'est pas la chute, mais l\'atterrissage."')
article.appendChild(texte)
document.body.insertBefore(article, button);

function showhide()
   {  


      var article = document.getElementById('art')

         if(article.style.display === 'none')
         {
            console.log('entre en none ')
            article.style.display = 'block'
         }
         else
         {console.log('entre en block ')
            article.style.display = 'none'
         }

      
   }
   


