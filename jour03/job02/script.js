


// --------------------------------------------------------------melange
$('#button').click(function () {

  var oo = $('#melangees img').length
  console.log(oo)

  if( oo < 6)
    {

        $('#rangees img').appendTo($('#melangees'))

        var parent = $("#melangees");
        var divs = parent.children();
        
        while (divs.length) {
          let plop = divs.splice(Math.floor(Math.random() * divs.length), 1)[0];
            parent.append(   plop  );
        }
    }

  else
    {


      var parent = $("#melangees");
      var divs = parent.children();
      
      while (divs.length) {
        let plop = divs.splice(Math.floor(Math.random() * divs.length), 1)[0];
        console.log(divs)
          parent.append(   plop  );
      }



    }
}) 




// -------------------------------------------------------------deplace
$('#melangees img').click( function ()
{

  var id = $(this).attr("id");


  $('#'+id).appendTo($('#rangees'))


})

