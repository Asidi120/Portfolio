// Inicjalizacja EmailJS
(function() {
  emailjs.init('fZgij898FVHmdvN5A');
})();

const projects = {
  statki: {
    title: "Statki C++",
    image1: "screeny/statki1.png",
    image2: "screeny/statki2.png",
    image3: "screeny/statki3.png",
    image4: "screeny/statki4.png",
    text: `
    Gra w statki napisana w C++.
    `
  },
  duckjump: {
    title: "Duck Jump SFML",
    image1: "screeny/duckjump1.png",
    image2: "screeny/duckjump2.png",
    image3: "screeny/duckjump3.png",  
    image4: "screeny/duckjump4.png",
    image5: "screeny/duckjump5.png",
    text: `
    Prosta gra o skaczącej kaczuszce. Zrobiona przy użyciu języka C++ i SFML.
    `
  },
  rozpoznawanie_twarzy: {
    title: "Rozpoznawanie twarzy z wykorzystaniem KNN",
    image1: "screeny/knn1.png",
    image2: "screeny/knn2.png",
    text: `
    Projekt z analizy danych. Rozpoznawanie twarzy z wykorzystaniem algorytmu KNN w Pythonie.
    `
  },
  formularz:
  {
    title: "Formularz pracowniczy WPF",
    image1: "screeny/formularz1.png",
    image2: "screeny/formularz2.png",
    text: `
    Formularz do zarządzania pracownikami stworzony z użyciem technologii WPF.
    `
  },
  pogodynka:
  {
    title: "Pogodynka",
    image1: "screeny/pogodynka1.png",
    image2: "screeny/pogodynka2.png",
    text: `
    Aplikacja pogodowa stworzona przy użyciu HTML, CSS i JavaScript, korzystająca z API do pobierania aktualnych danych pogodowych.
    `
  },
  quiz:
  {
    title: "Aplikacja quiz",
    image1: "screeny/quiz1.png",
    image2: "screeny/quiz2.png",
    image3: "screeny/quiz3.png",
    text: `
     Aplikacja do rozwiazywania i tworzenia quizów stworzona przy użyciu technologii WPF i C#.
    `
  },
  minitc:
  {
    title: "MiniTC",
    image1: "screeny/minitc1.png",
    text: `
    Aplikacja MiniTC stworzona przy użyciu technologii WPF i C#, będąca uproszczoną wersją popularnego menedżera plików Total Commander.
    `
  },
  litlib:
  {
    title: "LitLib",
    image1: "screeny/litlib1.png",
    image2: "screeny/litlib2.png",
    image3: "screeny/litlib3.png",
    image4: "screeny/litlib4.png",
    image5: "screeny/litlib5.png",
    image6: "screeny/litlib6.png",
    image7: "screeny/litlib7.png",
    text: `
    Aplikacja do organizacji przeczytanych/szukania nowych książek. Osobne panele dla administracji i zwykłego użytkownika. Korzystano z MySQL. Zrobiona z wykorzystaniem WPF w modelu MVP.
    `
  },
  chinskinowyrok:
  {
    title: "Chiński Nowy Rok",
    image1: "screeny/chinskinowyrok1.png",
    image2: "screeny/chinskinowyrok2.png",
    image3: "screeny/chinskinowyrok3.png",
    image4: "screeny/chinskinowyrok4.png",
    image5: "screeny/chinskinowyrok5.jpg",
    text: `
    Strona internetowa poświęcona Chińskiemu Nowemu Rokowi, stworzona przy użyciu HTML, CSS i JavaScript dostosowana do audytu stron.
    `
  },
  analiza_danych_python:
  {
    title: "Analiza danych w Pythonie z użyciem Seaborn",
    image1: "screeny/analiza1.png",
    image2: "screeny/analiza2.png",
    image3: "screeny/analiza3.png",
    image4: "screeny/analiza4.png",
    image5: "screeny/analiza5.png",
    image6: "screeny/analiza6.png",
    image7: "screeny/analiza7.png",
    title2: "Analiza danych w Pythonie z użyciem Matplotlib",
    image8: "screeny/analiza8.png",
    image9: "screeny/analiza9.png",
    image10: "screeny/analiza10.png",
    image11: "screeny/analiza11.png",
    image12: "screeny/analiza12.png",
    image13: "screeny/analiza13.png",
    text: `
    Projekty analizy danych z wykorzystaniem Pythona i bibliotek takich jak Pandas, Matplotlib i Seaborn.
    `
  },
  analiza_danych_r:
  {
    title: "Analiza danych w R",
    image1: "screeny/analiza_r1.png",
    image2: "screeny/analiza_r2.png",
    image3: "screeny/analiza_r3.png",
    image4: "screeny/analiza_r4.png",
    image5: "screeny/analiza_r5.png",
    image6: "screeny/analiza_r6.png",
    image7: "screeny/analiza_r7.png",
    text: `
    Projekt analizy danych z wykorzystaniem języka R i jego bibliotek do wizualizacji danych.
    `
  },
  analiza_z_wykorzystaniem_zaawansowanych_technik:
  {
    title: "Analiza danych z wykorzystaniem zaawansowanych technik",
    image1: "screeny/analiza_zaawansowana1.png",
    image2: "screeny/analiza_zaawansowana2.png",
    image3: "screeny/analiza_zaawansowana3.png",
    image4: "screeny/analiza_zaawansowana4.png",
    image5: "screeny/analiza_zaawansowana5.png",
    image6: "screeny/analiza_zaawansowana6.png",
    image7: "screeny/analiza_zaawansowana7.png",
    text: `
    Projekt z analizy danych w pythonie. Analiza danych z wykorzystaniem technik typu: standaryzacja, PCA, linia regresji, klasteryzacja i asocjacja.
    `
  },
  projekt_wykrywanie_i_rozpoznawanie_broni:
  {
    title: "Projekt wykrywanie i rozpoznawanie broni",
    image1: "screeny/bron1.png",
    image2: "screeny/bron2.png",  
    image3: "screeny/bron3.png",
    text: `
    Wykrywanie i rozpoznawanie broni z wykorzystaniem biblioteki Yolov8 oraz własny kod rozponawania z wykorzystaniem KNN i HOG w Pythonie.
    `
  }
};

function openModal(key) {
  document.getElementById("modal-title").innerHTML = projects[key].title;
  document.getElementById("modal-text").innerHTML = projects[key].text;
  document.getElementById("modal-image1").src = projects[key].image1 || '';
  document.getElementById("modal-image2").src = projects[key].image2 || '';
  document.getElementById("modal-image3").src = projects[key].image3 || '';
  document.getElementById("modal-image4").src = projects[key].image4 || '';
  document.getElementById("modal-image5").src = projects[key].image5 || '';
  document.getElementById("modal-image6").src = projects[key].image6 || '';
  document.getElementById("modal-image7").src = projects[key].image7 || '';
  document.getElementById("modal-image8").src = projects[key].image8 || '';
  document.getElementById("modal-image9").src = projects[key].image9 || '';
  document.getElementById("modal-image10").src = projects[key].image10 || '';
  document.getElementById("modal-image11").src = projects[key].image11 || '';
  document.getElementById("modal-image12").src = projects[key].image12 || '';
  document.getElementById("modal-image13").src = projects[key].image13 || '';
  document.getElementById("modal-title2").innerHTML=projects[key].title2 || '';
  document.getElementById("modal").classList.add("show");
  // BLOKADA SCROLLA STRONY
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
  // ODBLOKOWANIE SCROLLA STRONY
  document.body.classList.remove("modal-open");
}
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeOnBackground(e) {
  if (e.target.id === "modal") {
    closeModal();
  }
}

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


