



function fizzbuzz(){

   for(var i =1; i<152; i++){


      if(Number.isInteger(i / 3))
      {
         console.log('Fizz')
      }
      if(Number.isInteger(i / 5))
      {
         console.log('Buzz')
      }
      if(Number.isInteger(i / 3) & Number.isInteger(i / 5))
      {
         console.log('FizzBuzz')
      }
      else{

         console.log(i)
      }

   }


}


fizzbuzz()

