document.getElementById("cvForm").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche le rechargement de la page

    let nom = document.getElementById("nom").value;
    let telephone = document.getElementById("telephone").value;
    let adresse = document.getElementById("adresse").value;
    let competences = document.getElementById("competences").value;
    let experience = document.getElementById("experience").value;

    document.getElementById("resultat").innerHTML = `
        <div class="cv">
            <h2>${nom}</h2>
            <p><strong>Téléphone :</strong> ${telephone}</p>
            <p><strong>Adresse :</strong> ${adresse}</p>

            <h3>Compétences</h3>
            <p>${competences}</p>

            <h3>Expérience</h3>
            <p>${experience}</p>
        </div>
    `;
});
