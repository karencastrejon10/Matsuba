// 🔥 IMPORTAR FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { 
  getFirestore, 
  collection, 
  addDoc 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// CONFIGURACIÓN
const firebaseConfig = {
  apiKey: "AIzaSyAECNcgOENsLb0eZpKpl7z4G7EIM-lGveY",
  authDomain: "reservas-web-70b59.firebaseapp.com",
  projectId: "reservas-web-70b59",
  storageBucket: "reservas-web-70b59.firebasestorage.app",
  messagingSenderId: "219062044310",
  appId: "1:219062044310:web:d9683d3e295fb8a17464b7"
};

// INICIALIZAR
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM
const form = document.getElementById("formReserva");
const mensaje = document.getElementById("mensaje");

// EVENTO
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const personas = document.getElementById("personas").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  try {
    await addDoc(collection(db, "reservas"), {
      personas,
      fecha,
      hora,
      creada: new Date()
    });

    mensaje.textContent = "✅ Reserva guardada!";
    form.reset();

  } catch (error) {
    mensaje.textContent = "❌ Error al guardar";
    console.log(error);
  }
});
