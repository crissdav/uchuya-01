import { SEDES } from "./sedes.js";

const grid = document.getElementById("sedes");
const plantilla = document.getElementById("sede-template");
const plantillaPendiente = document.getElementById("sede-pendiente-template");

// Una sede sin enlace se muestra como "pendiente", sin link roto
function crearTarjeta(sede) {
  const pendiente = !sede.url;
  const card = (pendiente ? plantillaPendiente : plantilla).content.firstElementChild.cloneNode(true);
  if (!pendiente) {
    card.href = sede.url;
    card.setAttribute("aria-label", `Dejar reseña en ${sede.nombre}`);
  }
  card.querySelector(".card-title").textContent = sede.nombre;
  card.querySelector(".card-address").textContent = sede.direccion;
  return card;
}

grid.append(...SEDES.map(crearTarjeta));
document.getElementById("year").textContent = new Date().getFullYear();
