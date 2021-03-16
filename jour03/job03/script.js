


// --------------------------------------------------------------melange
$('#button').click(function () {

  var melangees = $('#melangees img').length

  if( melangees < 6)
    {
      $('p').empty();
        $('#rangees img').appendTo($('#melangees'))
        // location.reload();
        var parent = $("#melangees");
        var divs = parent.children();
        
        while (divs.length) {
          let plop = divs.splice(Math.floor(Math.random() * divs.length), 1)[0];
            parent.append(   plop  );
        }
    }

  else
    {

      $('p').empty();
      var parent = $("#melangees");
      var divs = parent.children();
      
      while (divs.length) {
        let plop = divs.splice(Math.floor(Math.random() * divs.length), 1)[0];
          parent.append(   plop  );
      }



    }
}) 




// -------------------------------------------------------------deplace
$('#melangees img').click( function ()
{

  var id = $(this).attr("id");


  $('#'+id).appendTo($('#rangees'))


  var choix_fini = $('#rangees img').length 

  if (choix_fini == 6)
    {
      var victoire = ["img1", "img2", "img3", "img4", "img5", "img6"]

      var tableau_joueur= 0
      var tableau_joueur =[]

      for ( i = 1; i<=6; i++)
       {
         var ordre = $("#rangees img:nth-child("+i+")").attr("id");
         tableau_joueur.push(ordre) 
         console.log(ordre)
         console.log(i)
         console.log('recupere les id images' +tableau_joueur)
       }
          

      var point = 0

      for ( r=0 ; r<=5; r++)
      {
        console.log(tableau_joueur[r])
        console.log(victoire[r] )
          console.log('boucle for')

          if (tableau_joueur[r] == victoire[r]  )
          {
            point++
            console.log('if')
          }
          else
          {
            console.log('else')
            point--
          }
          console.log('point' +point)

      }

            console.log(point)

            if(point == 6)
            {
              $('<p style="color: green">vous avez gagné<p>').appendTo($('#rangees'));

                 console.log('victoire')
            }
            else
            {

              $('<p style="color: red">vous avez perdu<p>').appendTo($('#rangees'));

            }

    }


})









// var victoire = ["img1", "img2", "img3", "img4", "img5", "img6"]
// console.log(victoire)

// var tableau_joueur =[]
// for ( i = 1; i<=6; i++)
//   {


//     var ordre = $('#rangees #img'+i).attr("id");
//     console.log(ordre)
//     tableau_joueur.push(ordre) 
//     // console.log(tableau)

//   }




