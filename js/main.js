import { SEDES } from "./sedes.js";

const grid = document.getElementById("sedes");
const template = document.getElementById("sede-template");

function crearTarjeta(sede) {
  const card = template.content.firstElementChild.cloneNode(true);
  card.href = sede.url;
  card.setAttribute("aria-label", `Dejar reseña en ${sede.nombre}`);
  card.querySelector(".card-title").textContent = sede.nombre;
  card.querySelector(".card-address").textContent = sede.direccion;
  return card;
}

grid.append(...SEDES.map(crearTarjeta));
document.getElementById("year").textContent = new Date().getFullYear();
