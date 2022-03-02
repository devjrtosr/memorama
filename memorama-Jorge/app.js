const div_card = [
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
  {
    elementodiv: "div",
    clasesdiv: ["style_div"],
  },
];

div_card.map((caja) => {
  const cajatemporal = document.createElement(caja.elementodiv);
  cajatemporal.classList.add(...caja.clasesdiv);
  document.querySelector("#card").appendChild(cajatemporal);
});

/*
const box = document.createElement("div");
box.classList.add("box");
document.querySelector("#container").appendChild(box);

const box_2 = document.createElement("div");
box_2.classList.add("box");
document.querySelector("#container").appendChild(box_2);

const box_3 = document.createElement("div");
box_3.classList.add("box");
document.querySelector("#container").appendChild(box_3);

const box_4 = document.createElement("div");
box_4.classList.add("box");
document.querySelector("#container").appendChild(box_4);

const carta = document.createElement("div");
carta.classList.add("box");
document.querySelector("#container_dos").appendChild(carta);
*/
