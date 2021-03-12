<?php session_start()?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <title>Ma page de test</title>
  
  </head>
  <body>




<?php if (@$_SESSION['prenom'])
{?>

<p>Bonjour <?=$_SESSION['prenom']?> </p>

<?php
}
else
{?>

<a href="inscription.php">S'INSCRIRE</a></br>
<a href="connexion.php">SE CONNECTER</a>


<?php
}
?>










  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src='script.js'></script>
  </body>
</html>