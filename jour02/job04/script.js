




var textaera = document.getElementById('keylogger');

document.addEventListener('keydown', logKey);



function logKey(e)
   {

   console.log(e.key)


   // textaera.innerHTML += e.key
  var docfocus =  document.activeElement
  console.log(docfocus)
   if (docfocus !== textaera)
   {
         console.log('là dans if')
        


               textaera.innerHTML += e.key

         }
         else{
            
            console.log('là dans else')

         textaera.insertAdjacentHTML('beforeend', e.key += e.key+= e.key) 

      }
   // if(document.hasFocus())
   // {
   //    for(i=1; i<=1;i++)
   //    {
   //       console.log('là')
   //       textaera.innerHTML += e.key
   //    }
   // }
 


   }


