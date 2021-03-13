var type = 'type'
$.ajax({
  type: "POST",
  url: "pokemon.json",
  dataType: "json",
  // data: {type},

  success: function (data) {
    var type_pokemon = []
    for( i=0; i<data.length; i++)
    {

        for(x=0; x<data[i].type.length; x++)
        {


          type_pokemon.push(data[i].type[x])
        }
    }

    type_filtre = type_pokemon.filter(
                 function(a){if (!this[a]) {this[a] = 1; return a;}},
                 {}
                );
      for(z=0; z<type_filtre.length; z++)
      {
        $('#type').append("<option value="+type_filtre[z]+">"+type_filtre[z]+"</option>")
        

      }
    console.log(type_filtre)

    
  }
});



$("#filter").click(function(){
  console.log('bouton click')
$.ajax({
  url: "pokemon.json",

  data : {nom: $('#nom').val(),
          id:$('#id').val()} ,     

  type: "POST",
  dataType: "json",

  success : function(data){

  console.log('entre dans fonction')
    for( i=0; i<data.length; i++)
    {
      console.log('entre dans for')
      console.log(data[i].name)

        if (data[i].id == $('#id').val())
        {

          $('#resultat').append("<p>"+data[i].id+"</p></br>")
          $('#resultat').append( "<p>"+data[i].name.french+"</p></br>")
          $('#resultat').append( "<p>"+data[i].type+"</p></br>")
          break
        }

        if (data[i].name.french == $('#nom').val())
        {

          $('#resultat').append("<p>"+data[i].id+"</p></br>")
          $('#resultat').append( "<p>"+data[i].name.french+"</p></br>")
          $('#resultat').append( "<p>"+data[i].type+"</p></br>")
          break
        }





    }



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




