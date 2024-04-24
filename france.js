// var url = 'https://api-console.worldoftanks.com/wotx/encyclopedia/vehicles/?language=fr&nation=france';
var url = 'france.json';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    return response.json();
  })
  .then(jsonData => {
    var data = Object.entries(jsonData);
    console.log(data);
    var test = document.getElementById("test");
    test.innerHTML = JSON.stringify(data);
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

