// js/config.js

(function () {
  // URL del backend en Render
  const PROD_API = "https://agenda-profesionales-api.onrender.com";

  // Para desarrollo local:
  const DEV_API = "http://localhost:3000";

  // Si estoy en GitHub Pages uso PROD, si no, DEV
  if (window.location.hostname === "danielreyes95.github.io") {
    window.API_BASE_URL = PROD_API;
  } else {
    window.API_BASE_URL = DEV_API;
  }
})();
