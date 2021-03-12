$.getJSON( "string.json", function( data ) {

  
  // for (var i = 0; i < data.length; i++) {

  //   console.log(data.name[0vf])

  // }



});














// $.getJSON( "pokemon.json", function( data ) {

//   console.log(data)

//   var items = [];

//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );

//   console.log(data[0].name.french)
// });



$("#filter").click(function(){
$.ajax({
  url: "test.php",

  data : {nom: $('#nom').val(),
          id:$('#id').val()} ,     

  type: "POST",
  dataType: "text",

  success : function(data){ console.log(data)
    $("#resultat").append(data)
  },

})

})


// -----------------------------------------------------------------------------------------------------------
// $("#filter").click(function(){
// $.post(
//   'test.php', // Le fichier cible côté serveur.
//   {
//       nom : $("#nom").val(), // Nous supposons que ce formulaire existe dans le DOM.
//       // contenu : $("#id").val()
//   },
//   nom_fonction_retour, // Nous renseignons uniquement le nom de la fonction de retour.
//   'text' // Format des données reçues.
// );

// function nom_fonction_retour(data){
//   console.log(data)
//   $("#resultat").append(data)
//   // Du code pour gérer le retour de l'appel AJAX.
// }
// })
// ---------------------------------------------------------------------------------------------------------------

// var json = '{"result":true, "count":42}';




// function jsonValueKey(json,clef){

//         var donnees = JSON.parse(json)

//         alert(donnees[clef])
//         console.log(donnees[clef])

//       }

      



    
// jsonValueKey(json,"count")




