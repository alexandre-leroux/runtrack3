
// var time_delai = 1500
function autoType(elementClass, typingSpeed, time_delai){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
//   thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
//   thhis.text("|");
  setTimeout(function()
  {
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");

    for(var i = 0; i < amntOfChars; i++)
    {
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }

  },time_delai);
}

$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js",40,500);
});
$(document).ready(function(){
    // Now to start autoTyping just call the autoType function with the 
    // class of outer div
    // The second paramter is the speed between each letter is typed.   
    autoType(".type-js2",30,1150);
  });
  $(document).ready(function(){
    // Now to start autoTyping just call the autoType function with the 
    // class of outer div
    // The second paramter is the speed between each letter is typed.   
    autoType(".type-js3",20,2000);
  });





 function hoverTextAccueil(id)
    {
        setTimeout(function(){
        var letters = $(id).text();
        console.log(letters)
        var nHTML = '';
        for(var letter of letters) {
        nHTML+="<span class='effet_lettres'>"+letter+"</span>";
        console.log(nHTML)
        }

        $(id).html(nHTML);
    }, 3000);
    }

hoverTextAccueil("#text_hover1")
hoverTextAccueil("#text_hover2")
hoverTextAccueil("#text_hover3")