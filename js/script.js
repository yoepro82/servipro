// Función para cambiar el idioma
function changeLanguage(lang, page) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][page][key];
  });
}

// Detectar botones de idioma
document.getElementById("btn-es").addEventListener("click", () => changeLanguage("es", "home"));
document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en", "home"));


