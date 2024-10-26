document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Veuillez remplir tous les champs obligatoires.");
        event.preventDefault();
    } else {
        alert("Formulaire soumis avec succès !");
    }
});