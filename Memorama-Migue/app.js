const cartas = [
  {
    elemntoboton: "div",
    clasesboton: ["botonfila"],
    fondo: "/assets/fondocartas/rune.png",
  },
  {
    elemntoboton: "div",
    clasesboton: ["botonfila"],
    fondo: "/assets/fondocartas/rune.png",
  },
];

cartas.map((carta) => {
  const fila = document.createElement(carta.elemntoboton);
  const imagenCarta = document.createElement("img");
  imagenCarta.classList.add(...carta.clasesboton);
  imagenCarta.src = carta.fondo;
  document.querySelector("#Primerafila").appendChild(fila);
  document.querySelector("#Primerafila").appendChild(imagenCarta);
});
