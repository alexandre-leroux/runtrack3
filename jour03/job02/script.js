


$('#button').click(function () {

  var parent = $("#melangees");
  var divs = parent.children();
  
  while (divs.length) {
    let plop = divs.splice(Math.floor(Math.random() * divs.length), 1)[0];
    console.log(divs)
      parent.append(   plop  );
  }
}) 




$('#melangees img').click( function ()
{

  var id = $(this).attr("id");


  $('#'+id).appendTo($('#rangees'))


})