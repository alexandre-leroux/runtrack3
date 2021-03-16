
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

      for(x=1; x<10; x++)
        {

          if (isEmpty($("#div_"+x+""))) {
            console.log("#div_"+x+" est vide")
          }
          if (isEmpty($("#div_1"))) {
            console.log("#div_1 vide !!!!!!!!!!!!!!!")

            $("#div_2 img").attr("draggable",'true')

          }

        }






}

