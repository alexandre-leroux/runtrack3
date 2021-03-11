


// $('#button').click(function (){

// $.ajax({

//   url : "expression.txt",

//   success : function(result){

//     $('body').html(result);
//   }





// })








// }

  
//   )



    $("button").click(function(){

      $.ajax({

        url: 'expression.txt',
        type: 'GET',
        datatype: 'html',
        
      })
    .done(function(msg){

      var citation = "<p>"+msg+"</p>";
      $("body").append(citation);

    })

    })
  