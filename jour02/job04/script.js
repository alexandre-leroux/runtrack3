




var textaera = document.getElementById('keylogger');

document.addEventListener('keydown', logKey);



function logKey(e)
   {

   console.log(e.key)


   textaera.innerHTML += e.key


   // if(document.hasFocus())
   // {
   //    for(i=1; i<=1;i++)
   //    {
   //       console.log('là')
   //       textaera.innerHTML += e.key
   //    }
   // }
 


   }


