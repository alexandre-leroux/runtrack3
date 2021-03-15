<?php session_start()?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <title>Ma page de test</title>
  
  </head>
  <body>

<main>


<?php if (@$_SESSION['prenom'])
{?>

<p>Bonjour <?=$_SESSION['prenom']?> </p>

<?php
}
else
{?>



<button id='s_inscrire'>S'INSCRIRE</button>
<button id='se_connecter'>SE CONNECTER</button>

<?php
}
?>






</main>



  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src='script.js'></script>
  </body>
</html>