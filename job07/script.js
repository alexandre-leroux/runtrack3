
var date = new Date('2020-4-16')

var jour = date.getDay()
var jour_nom = { weekday: 'long'};
var jour_final = new Intl.DateTimeFormat('fr', jour_nom).format(date);
// console.log(jour_final)

var jour_date = date.getDate()
// console.log(jour_date)

var mois = date.getMonth()
mois = { month : 'long'}
var mois_final = new Intl.DateTimeFormat('fr', mois ).format(date);
// console.log(mois_final)

var annee = date.getFullYear()
// console.log(annee)

var date_complete_formatee = jour_final.concat(' ', jour_date, ' ',mois_final,' ',annee )

var jours_ferie = [  new Date('2020-4-14'),
                     new Date('2020-4-13'),
                     new Date('2020-5-01'),
                     new Date('2020-5-08'),
                     new Date('2020-5-21'),
                     new Date('2020-6-01'),
                     new Date('2020-7-14'),
                     new Date('2020-8-15'),
                     new Date('2020-11-01'),
                     new Date('2020-11-11'),
                     new Date('2020-12-25'),
]

console.log(date)
console.log(jours_ferie)

for(i = 0; i<jours_ferie.length; i++)
{
   var tab_jour = jours_ferie[i].getDay()
   var tab_jour_nom = { weekday: 'long'};
   var tab_jour_final = new Intl.DateTimeFormat('fr', tab_jour_nom).format(jours_ferie[i]);
   
   var tab_jour_date = jours_ferie[i].getDate()
   
   var tab_mois = jours_ferie[i].getMonth()
   tab_mois = { month : 'long'}
   var tab_mois_final = new Intl.DateTimeFormat('fr', tab_mois ).format(jours_ferie[i]);
   
   var tab_annee = jours_ferie[i].getFullYear()

   var date_complete_calendrier_formatee = tab_jour_final.concat(' ', tab_jour_date, ' ',tab_mois_final,' ',tab_annee )

   if(date_complete_calendrier_formatee == date_complete_formatee)
   {
      var le = 'Le'
      var date_complete_formatee = le.concat(' ',jour_final,' ', jour_date, ' ',mois_final,' ',annee )
      alert(date_complete_formatee.concat(' est un jour ferié'))
   }
   
}





if(jour_final === 'samedi' || jour_final == 'dimanche')
{
   var le = 'Le'
   var date_complete_formatee = le.concat(' ',jour_final,' ', jour_date, ' ',mois_final,' ',annee )
    alert('Non '+ date_complete_formatee.concat(' est un week-end'))
}

else if(jour_final != 'samedi' || jour_final != 'dimanche')
{
            
      
}

else
{
   var le = 'Le'
   var date_complete_formatee = le.concat(' ',jour_final,' ', jour_date, ' ',mois_final,' ',annee )
    alert('Oui '+ date_complete_formatee.concat(' est un jour travaillé'))
}




var le = 'Le'
var date_complete_formatee = le.concat(' ',jour_final,' ', jour_date, ' ',mois_final,' ',annee )
console.log(date_complete_formatee)

