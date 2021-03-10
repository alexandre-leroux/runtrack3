


$('#button').click(function () {

  var parent = $("#melangees");
  var divs = parent.children();
  
  while (divs.length) {
    let plop = divs.splice(Math.floor(Math.random() * divs.length), 1)[0];
    console.log(divs)
      parent.append(   plop  );
  }
}) 





// $('#img4').click( function ()
// {

//   console.log("test")

//   $('#img4').appendTo($('#rangees'))





// })

// $('#melangees img').click( function ()
// {

//   console.log("test")

//   $('#melangees img').appendTo($('#rangees'))





// })
$('#melangees img').click( function ()
{

  console.log($('#melangees img'))

  var id = $(this).attr("id");



  $('#'+id).appendTo($('#rangees'))


})