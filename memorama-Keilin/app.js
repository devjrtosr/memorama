const imagenesDiv = [
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
  {
    elementoDiv: "div",
    claseDiv: "contenedor-tarjeta",
  },
];

imagenesDiv.map((etiquetaDiv) => {
  const elementoDiv = document.createElement(etiquetaDiv.elementoDiv);
  elementoDiv.classList.add(etiquetaDiv.claseDiv);
  document.querySelector("#contenedor").appendChild(elementoDiv);
});
