// Inicjalizacja EmailJS
(function() {
  emailjs.init('tutaj jest twój klucz publiczny EmailJS');
})();

// Obsługa formularza kontaktowego
document.getElementById('kontakt-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_ddp6j9o', 'template_p51gtpe', this)
    .then(function() {
      document.getElementById('form-msg').style.display = 'block';
      alert('Wiadomość została wysłana! Dziękujemy za kontakt.');
      document.getElementById('kontakt-form').reset();
    }, function(error) {
      alert('Błąd podczas wysyłania wiadomości: ' + JSON.stringify(error));
    });

  this.reset();
});