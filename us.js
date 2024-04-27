// var url = 'https://api-console.worldoftanks.com/wotx/encyclopedia/vehicles/?language=fr&nation=france';
var url = 'jsons/amerique.json';

function display(jsonData) {
    var test = document.getElementById("test");
    test.innerHTML='';

    for (let item of jsonData){
        var html=`
            <div class="content">
                <h2>${item.nom}</h2>
                <p>${item.poids}</p>
                <p>${item.vitesse_max}</p>
                <p>${item.armement_principal}</p>
                <p>${item.description}</p>
            </div>
        `;
        test.innerHTML+=html;
    }
}

fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error('La requête a échoué');
        }
        return response.json();
    })
    .then(jsonData => {
        display(jsonData);
        var btnTrier = document.getElementById('btnTrier');
        btnTrier.addEventListener('click', function () {
            var sorted=jsonData.sort((a, b) => {
                const vitesseA = parseFloat(a.vitesse_max.split(" ")[0]);
                const vitesseB = parseFloat(b.vitesse_max.split(" ")[0]);
                return vitesseA - vitesseB;
            });

            display(sorted);
        });
        var btnTrierPoids = document.getElementById('btnTrierPoids');
        btnTrierPoids.addEventListener('click', function () {
            var sorted=jsonData.sort((a, b) => {
                const poidsA = parseFloat(a.poids.split(" ")[0]);
                const poidsB = parseFloat(b.poids.split(" ")[0]);
                return poidsA - poidsB;
            });

            display(sorted);
        });
    })
    .catch(error => {
        console.error('Erreur :', error);
    });
