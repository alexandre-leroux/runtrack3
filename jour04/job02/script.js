



var json = '{"result":true, "count":42}';




function jsonValueKey(json,clef){

        var donnees = JSON.parse(json)

        alert(donnees[clef])
        console.log(donnees[clef])

      }

      



    
jsonValueKey(json,"count")