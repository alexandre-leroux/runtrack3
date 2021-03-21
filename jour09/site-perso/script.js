// ---------------------------------------------------ecriture auto accueil
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
autoType(".type-js",40,500);
autoType(".type-js2",30,1150);
autoType(".type-js3",20,2000);




// -------------------------------------effet hover sur lettres
 function hoverTextAccueil(id)
    {
        setTimeout(function(){
        var letters = $(id).text();
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




// -------------------------------------------parralax

var timeout;
$('#container').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e),0);
  
});

function callParallax(e){
  parallaxIt(e, '#para_1', -50);
  parallaxIt(e, '#para_2', -30);
  parallaxIt(e, '#para_3', -70);
  parallaxIt(e, '#para_4', -130);
  parallaxIt(e, '.text-js', -20);
  // parallaxIt(e, '#img_para_2', -20);

}

function parallaxIt(e, target, movement){
  var $this = $('#container');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  
  TweenMax.to(target, 1, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power2.easeOut
  })
}



// ----------------------delai apparition div parralax
$(setTimeout(function() {
  $("#para_1").addClass("load");
  $("#para_2").addClass("load");
  $("#para_3").addClass("load");
  $("#para_4").addClass("load")
},3100));


 // -----------------------------------------------redirection avec delai
function redirect(url){
  $.ajax({
    url: "pages/"+url+"",
    type: "POST",
    dataType: "html",
  
    success : function(data){
      var delayTime = 800 

      setTimeout(function() {
      $('#section_centrale').empty();
      $('#section_centrale').append(data)
      },delayTime)
    
    }})
}


// ----------------------------redirection depuis vignette parallax

function classPourredirection(){
  $("#para_1").addClass("animate__animated animate__backOutUp");
  $("#para_2").addClass("animate__animated animate__backOutUp");
  $("#para_3").addClass("animate__animated animate__backOutDown");
  $("#para_4").addClass("animate__animated animate__backOutDown");
  $(".text-js ").addClass("animate__animated animate__backOutLeft");
  $("#details_dev ").removeClass("animate__animated animate__fadeInUp");
  $("#details_dev ").addClass("animate__animated animate__backOutLeft");

  $("#a_propos ").addClass("animate__animated  animate__fadeOut" );
  $("#conteneur_competences ").addClass("animate__animated  animate__fadeOut" );
}

$('#para_1, #premier_boutton'  ).click(function(){
  classPourredirection();
  redirect("a-propos.html")
})
$('#para_2,#deuxieme_boutton' ).click(function(){
  classPourredirection();
  redirect("competences.html")
})
$('#para_3, #troisieme_boutton' ).click(function(){
  classPourredirection();
  redirect("portfolio.html")
})
$('#para_4, #dernier_boutton' ).click(function(){
  classPourredirection();
  redirect("contact.html")
})






// -----------------------------------------actions sur vignette rojet voyage
 $("#projets_image-3").click(function(){

  window.open('http://stackoverflow.com/', '_blank')
  
})

 $("#projets_image-3 img, p").mouseenter(function(){

  $("#projets_image-3 img").css({
    "filter": "blur(8px)",
    "transform": "scale(1.1)",
    "transition": "0.6s" });
              
              
   $("#projets_image-3 p").css({
    "z-index": "10",
    "opacity": "1",
    "transform": "scale(1.1)",
    "transition": "0.6s"});      
              
})


$("#projets_image-3 img, p").mouseleave(function(){

  $("#projets_image-3 img").css({
    "filter": "blur(0px)",
    "transform": "scale(1)",
    "transition": "0.6s" });
              
  $("#projets_image-3 p").css({  
    "opacity": "0",
    "transform": "scale(1)",
    "transition": "0.6s",
    "z-index": "10" }); 
              
})














