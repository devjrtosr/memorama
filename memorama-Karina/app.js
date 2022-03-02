const memorama = [
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
  {
    elementoMemorama: "div",
    clasesMemorama: ["divMemorama"],
  },
];

memorama.map((elemento) => {
  const elementoTemporal = document.createElement(elemento.elementoTemporal);
  elementoTemporal.classList.add(elemento.clasesMemorama);
  document.querySelector("#contenedor").appendChild(elementoTemporal);
});
