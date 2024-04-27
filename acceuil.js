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

  var i = 0;
                var images = [];
                var tmp = 5000;
    
                //liste d'images
                images[0] = '/img/amx30_carou.jpg';
                images[1] = '/img/auf1_carou.jpg';
                images[2] = '/img/t80_carou.png';
                images[3] = '/img/crusader_carou.png';
    
                function imgchange() {
                    document.getElementById('carou').src = images[i];
    
                    if (i < images.length - 1) {
                        i++;
                    } else {
                        i = 0;
                    }
    
                    setTimeout(imgchange, tmp);
                }
    
                window.onload = imgchange;
    
                //Bouton
                document.addEventListener('DOMContentLoaded', function() {
                    document.getElementById('left_arrow').addEventListener('click', function() {
                        if (i > 0) {
                            i--;
                        } else {
                            i = images.length - 1;
                        }
                        document.getElementById('carou').src = images[i];
                    });
    
                    document.getElementById('right_arrow').addEventListener('click', function() {
                        if (i < images.length - 1) {
                            i++;
                        } else {
                            i = 0;
                        }
                        document.getElementById('carou').src = images[i];
                    });
                });


// https://api-console.worldoftanks.com/wotx/encyclopedia/vehicles/?language=fr&nation=france
// https://api-console.worldoftanks.com/wotx/encyclopedia/vehicles/?language=fr&nation=deutschland
// https://api-console.worldoftanks.com/wotx/encyclopedia/vehicles/?language=fr&nation=america
// https://api-console.worldoftanks.com/wotx/encyclopedia/vehicles/?language=fr&nation=russia
