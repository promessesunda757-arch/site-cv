document.getElementById("cvForm").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche le rechargement de la page

    let nom = document.getElementById("nom").value;
    let telephone = document.getElementById("telephone").value;
    let adresse = document.getElementById("adresse").value;
    let competences = document.getElementById("competences").value;
    let experience = document.getElementById("experience").value;

    document.getElementById("resultat")let photoInput = document.getElementById("photo");
let photoHTML = "";
if(photoInput.files.length > 0){
    let reader = new FileReader();
    reader.onload = function(e){
        photoHTML = `<img src="${e.target.result}" style="max-width:100px; max-height:100px; display:block; margin-bottom:10px;">`;
        document.querySelector(".cv").innerHTML = photoHTML + document.querySelector(".cv").innerHTML;
    }
    reader.readAsDataURL(photoInput.files[0]);
}
.innerHTML = `
let langues = document.getElementById("langues").value;
let education = document.getElementById("education").value;
let experiencesup = document.getElementById("experiencesup").value;

document.getElementById("resultat").innerHTML = `
<div class="cv">
    ${photoHTML}
    <h2>${nom}</h2>
    <p><strong>Téléphone :</strong> ${telephone}</p>
    <p><strong>Adresse :</strong> ${adresse}</p>

    <h3>Compétences</h3>
    <p>${competences}</p>

    <h3>Expérience</h3>
    <p>${experience}</p>

    ${experiencesup ? `<h3>Expériences supplémentaires</h3><p>${experiencesup}</p>` : ""}

    ${education ? `<h3>Éducation</h3><p>${education}</p>` : ""}

    ${langues ? `<h3>Langues</h3><p>${langues}</p>` : ""}
</div>
`;

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
document.getElementById("cvForm").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche le rechargement

    let nom = document.getElementById("nom").value;
    let telephone = document.getElementById("telephone").value;
    let adresse = document.getElementById("adresse").value;
    let competences = document.getElementById("competences").value;
    let experience = document.getElementById("experience").value;
    let experiencesup = document.getElementById("experiencesup").value;
    let education = document.getElementById("education").value;
    let langues = document.getElementById("langues").value;
    let modele = document.getElementById("modele").value;

    let photoInput = document.getElementById("photo");
    let photoHTML = "";

    if(photoInput.files.length > 0){
        let reader = new FileReader();
        reader.onload = function(e){
            photoHTML = `<img src="${e.target.result}" alt="Photo">`;
            afficherCV();
        }
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        afficherCV();
    }

    function afficherCV(){
        document.getElementById("resultat").innerHTML = `
        <div class="cv">
            ${photoHTML}
            <h2>${nom}</h2>
            <p><strong>Téléphone :</strong> ${telephone}</p>
            <p><strong>Adresse :</strong> ${adresse}</p>

            <h3>Compétences</h3>
            <p>${competences}</p>

            <h3>Expérience</h3>
            <p>${experience}</p>

            ${experiencesup ? `<h3>Expériences supplémentaires</h3><p>${experiencesup}</p>` : ""}
            ${education ? `<h3>Éducation</h3><p>${education}</p>` : ""}
            ${langues ? `<h3>Langues</h3><p>${langues}</p>` : ""}
        </div>
        `;

        // appliquer le modèle
        let cvElement = document.querySelector(".cv");
        cvElement.classList.remove("classique","moderne","colore");
        if(modele === "classique") cvElement.classList.add("classique");
        if(modele === "moderne") cvElement.classList.add("moderne");
        if(modele === "colore") cvElement.classList.add("colore");
    }
});

// Fonction télécharger PDF
function telechargerPDF() {
    let element = document.querySelector(".cv");
    if(!element){
        alert("Veuillez d'abord créer le CV");
        return;
    }
    let options = {
        margin: 0.5,
        filename: 'mon_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
}
