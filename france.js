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
    var test = document.getElementById("test");
    for(let item of jsonData ) {
      console.log(item);
      var html = `
      <div class="content">
      <h2>${item.nom}</h2>
      <p>${item.poids}</p>
      <p>${item.vitesse_max}</p>
      <p>${item.armement_principal}</p>
      <p>${item.description}</p>
    </div>
      `;
      test.innerHTML += html;
  }
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

