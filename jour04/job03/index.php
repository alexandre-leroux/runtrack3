<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <title>Ma page de test</title>
  
  </head>
  <body>



<form action="index.php" method="POST">


    <input type="text" name="id" id="id" placeholder="id">
    <input type="text" name="nom" id="nom" placeholder="nom">

    <select name="type" id="type">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
    </select>

    <input type="button" name="filter" id="filter" value="filtrer">


</form>

<div id="resultat"></div>



  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src='script.js'></script>
  </body>
</html>