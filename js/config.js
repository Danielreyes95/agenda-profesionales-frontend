// public/js/config.js

// 👇 Por ahora, API y front están en el mismo servidor (Nest sirve /public),
// así que usamos el mismo origen:
window.API_BASE_URL = window.location.origin;

// ⚠️ Cuando tengas la API en otro dominio (ej: Render) y el front separado,
// solo cambias esta línea:
//
// window.API_BASE_URL = 'https://agenda-profesionales-api.onrender.com';
