const link="https://api.worldoftanks.eu/wot/encyclopedia/tanks/"

function filtrerListe(liste, key, value) {
    var result = [];
    for (var i = 0; i < liste.length; i++) {
      if (liste[i][key] === value) {
        result.push(liste[i]);
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

  searchName