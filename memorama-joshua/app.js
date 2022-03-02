const cantidadCartas = 16;

const carta = {
  contenedor: "img",
  clase: "carta",
  imagen: "assets/carta.jpg",
};

const obtenerCartas = (cantidad) => {
  const cartas = [];

  for (let i = 0; i < cantidad; i++) {
    cartas[i] = carta;
  }

  return cartas;
};

const cartas = obtenerCartas(cantidadCartas);
const contenedor = document.querySelector("#contenedor");
const contenedorCartas = document.createElement("div");
contenedorCartas.classList.add("contenedor-cartas");

cartas.map((carta) => {
  const imagenCarta = document.createElement(carta.contenedor);
  imagenCarta.src = carta.imagen;
  imagenCarta.classList.add(carta.clase);

  contenedorCartas.appendChild(imagenCarta);
});

contenedor.appendChild(contenedorCartas);
