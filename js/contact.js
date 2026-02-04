document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

  const firstName = document.getElementById('FirstNameInput').value;
  const lastName = document.getElementById('LastNameInput').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (!email) {
    alert("L'adresse email est obligatoire !");
    return;
  }

  if(!firstName || !lastName){
    alert("Veuillez renseigner votre prénom et nom !");
    return;
  }

  if(!phone){
    alert("Veuillez renseigner votre numéro de téléphone !");
    return;
  }

   // Compose le corps du mail
  const body = encodeURIComponent(
    message + '\n\n' +
    'Prénom: ' + firstName + '\n' +
    'Nom: ' + lastName + '\n' +
    'Téléphone: ' + phone + '\n' +
    'Email: ' + email + '\n\n' 
  );

  // Destinataire et sujet
  const mailto = `mailto:antoine.baroin94@gmail.com?subject=${encodeURIComponent('Message de ' + firstName + ' ' + lastName)}&body=${body}`;

  // Ouvre le client mail
  window.location.href = mailto;
});
