


$("#button").click(function(){


  var nom = $('#nom').val()
  var prenom = $('#prenom').val()
  var email = $('#email').val()
  var mdp = $('#mdp').val()
  var confirm_mdp = $('#confirm_mdp').val()
  


$.ajax({

  url: "controller.php",

  data : {nom,prenom,email,mdp,confirm_mdp },     

  type: "POST",
  dataType: "text",



  success : function(data){ 

    console.log(data);

    $("#champs_erreur, #email_erreur, #erreur_mdp").empty();

    if( data == 'tous les champs doivent être remplis')
    {  
          $("#champs_erreur").append(data);
          return;
      }
    if( data == 'email déjà utilisé' || data == 'format email no valide')
      {  
          $("#email_erreur").append(data);
          return;
      }
    if( data == 'les mots de passe doivent être identiques' || data == 'le mot de passe doit contenir au moins 8 caractères, un chiffre, une majuscule et un caractère spécial' )
      {  
          $("#erreur_mdp").append(data);
          return;
      }
     
      window.location.href = "connexion.php";


    
  }

})

})