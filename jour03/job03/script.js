
for (i = 1; i<10; i++)
{

  let div_vide = $("#div_"+i+" img").length;

  if (div_vide == 1)
    {
      let div = $("#div_"+i+"").attr("ondragover",'')
      console.log(div)
    }
  else
    {
      $("#div_"+i+"").attr("ondragover","allowDrop(event)")
    }

}





function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  for (i = 1; i<10; i++)
    {
      console.log('entre dans le for du drop')
      let div_vide = $("#div_"+i+" img").length;
    
      if (div_vide == 1)
        {
          let div = $("#div_"+i+"").attr("ondragover",'')
        }
      else
        {
          $("#div_"+i+"").attr("ondragover","allowDrop(event)")
        }
    }
  

    function isEmpty( el )
      {
        return !$.trim(el.html())
      }



    if (isEmpty($("#div_1")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_2 img").attr("draggable",'true')
              $("#div_4 img").attr("draggable",'true')
            }

      }

    if (isEmpty($("#div_2")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_1 img").attr("draggable",'true')
              $("#div_3 img").attr("draggable",'true')
              $("#div_5 img").attr("draggable",'true')
            }

      }

    if (isEmpty($("#div_3")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_2 img").attr("draggable",'true')
              $("#div_6 img").attr("draggable",'true')
            }

      }

    if (isEmpty($("#div_4")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_1 img").attr("draggable",'true')
              $("#div_5 img").attr("draggable",'true')
              $("#div_7 img").attr("draggable",'true')
            }

      }

    if (isEmpty($("#div_5")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_2 img").attr("draggable",'true')
              $("#div_4 img").attr("draggable",'true')
              $("#div_6 img").attr("draggable",'true')
              $("#div_8 img").attr("draggable",'true')
            }

      }

    if (isEmpty($("#div_6")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_3 img").attr("draggable",'true')
              $("#div_5 img").attr("draggable",'true')
              $("#div_9 img").attr("draggable",'true')
            }

      }

    if (isEmpty($("#div_7")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_4 img").attr("draggable",'true')
              $("#div_8 img").attr("draggable",'true')
            }

      }

    if (isEmpty($("#div_8")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_5 img").attr("draggable",'true')
              $("#div_7 img").attr("draggable",'true')
              $("#div_9 img").attr("draggable",'true')
            }

      }

    if (isEmpty($("#div_9")))
      {

          for(x=2; x<10; x++)
            {
              $("#"+x+"").attr("draggable",'false')
              $("#div_8 img").attr("draggable",'true')
              $("#div_6 img").attr("draggable",'true')
            }

      }

      var id_img2 = $("#div_2 img").attr("id");
      var id_img3 = $("#div_3 img").attr("id");
      var id_img4 = $("#div_4 img").attr("id");
      var id_img5 = $("#div_5 img").attr("id");
      var id_img6 = $("#div_6 img").attr("id");
      var id_img7 = $("#div_7 img").attr("id");
      var id_img8 = $("#div_8 img").attr("id");
      var id_img9 = $("#div_9 img").attr("id");

      if (isEmpty($("#div_1")) && id_img2 == 2 && id_img3 == 3 && id_img4 == 4 && id_img5 == 5 && id_img6 == 6 && id_img7 == 7 && id_img8 == 8 && id_img9 == 9                       )
      {
        console.log('victoiiiiiiiiiirrrrrrrrrrrreeeeeeeeeeeeeeee')
        $('#messsage_victoire').append('VOUS AVEZ GAGNE')
      }
        






}

