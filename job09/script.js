



numbers = [1,5,8,6,7,3,2]

order = 'desc'
// resultat = []
// i = 2
// console.log(numbers.indexOf(i))
// var clef = numbers.indexOf(i)
// console.log(numbers[clef])

// resultat.push(numbers[clef]);
// console.log(resultat)

tri(numbers,order)

function tri(numbers,order)
   {
            var nombre_max = Math.max(...numbers)
            console.log(nombre_max);
         

            for (i=0; i<=nombre_max; i++)
            {

               if(clef = numbers.indexOf(i) != -1  )
               {
                  if(typeof(resultat) == 'undefined')
                  {
                     clef = numbers.indexOf(i)
                     console.log('dans if')
                     resultat = [numbers[clef]]
                     console.log(numbers[clef])
                     console.log(resultat)
                  }
                  else{
                     clef = numbers.indexOf(i)
                     console.log('dans else')
                     resultat.push(numbers[clef]);
                     console.log(resultat)
                  }
               }

            }
            alert(resultat)
            return resultat
   }