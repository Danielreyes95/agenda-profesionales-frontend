// js/config.js
(function () {
  // 🔹 URL del backend en Render (cámbiala por la tuya real)
  const PROD_API = "https://agenda-profesionales-api.onrender.com";

  // 🔹 URL del backend en tu PC (para pruebas)
  const DEV_API = "http://localhost:3000";

  // Si estoy en GitHub Pages -> usar Render
  const isGithubPages = window.location.hostname === "danielreyes95.github.io";

  window.API_BASE_URL = isGithubPages ? PROD_API : DEV_API;
})();
