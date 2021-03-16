
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
        console.log(div)
      }
    else
      {
        $("#div_"+i+"").attr("ondragover","allowDrop(event)")
      }
}

}

