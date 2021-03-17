



var tab = []


$(document).keydown(function(e) {
   
    console.log(e.keyCode );
    console.log(e.key );

    if (tab.length == 10)
    {
            tab.splice(0,1, tab[1])
            tab.splice(1,1, tab[2])
            tab.splice(2,1, tab[3])
            tab.splice(3,1, tab[4])
            tab.splice(4,1, tab[5])
            tab.splice(5,1, tab[6])
            tab.splice(6,1, tab[7])
            tab.splice(7,1, tab[8])
            tab.splice(8,1, tab[9])
            tab.splice(9,1, e.key)
    }
    else
    {
        tab.push(e.key)
    }


    code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
    var point = 0

    for(i=0; i<10; i++)
    {
        if(tab[i] == code[i])
        {
            point++
        }
        else
        {
            point--
        }
        console.log(point)
    }

    if(point == 10)
    {
        console.log('victoire')
        $('#partie_gauche').addClass('partie_gauche');
        $('#partie_droite').addClass('partie_droite');
    }

});

