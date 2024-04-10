const tank=[
    {
        name: "ELC bis",
        poid: "8.5",
        canon: "90mm",
        chevaux: "180"
    },{
        name: "AMX-13",
        poid: "14.8",
        canon: "75mm",
        chevaux: "250"
    },{
        name: "LORRAINE 40T",
        poid: "39.7",
        canon: "100mm",
        chevaux: "850"
    }
]

function filtrerListe(liste, key, value) {
    var result = [];
    for (var i = 0; i < liste.length; i++) {
      if (liste[i][key] === value) {
        resultat.push(liste[i]);
      }
    }
    return result;
  }

  function orderListe(liste, key, value) {
    var result = [];
    var non = [];
    for (var i = 0; i < liste.length; i++) {
      if (liste[i][key] === value) {
        result.push(liste[i]);
      }else{
        non.push(liste[i]);
      }
    }
    for (var i = 0; i < non.length; i++) {
        result.push(non[i]);
      }
    return result;
  }