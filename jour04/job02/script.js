

$.getJSON( "string.json", function( data ) {

  
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
  
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );


});







$.getJSON( "string.json", function( data ) {

  
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
  
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );


});












// var json = '{"result":true, "count":42}';

// function jsonValueKey(json,clef){

//         var donnees = JSON.parse(json)

//         alert(donnees[clef])
//         console.log(donnees[clef])

//       }

    
// jsonValueKey(json,"count")