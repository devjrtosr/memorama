let cartas;

const contenedor = document.querySelector("#contenedor");
const contenedorCartas = document.querySelector("#contenedor-cartas");

const iniciarJuego = () => {
  window.addEventListener("DOMContentLoaded", () => {
    //console.log("Este evento esta cargado");
    cargarCartas();
  });
};

document.addEventListener("click", () => {});

const cargarCartas = async () => {
  const respuesta = await fetch("cartas.json");
  const data = await respuesta.json();
  data.sort(() => Math.random() - 0.5);
  let cartahtml = "";
  data.map((item) => {
    cartahtml += ` <div>
                        <img class="card" src=${item.src}>
                      </div>
    `;
    contenedorCartas.innerHTML = cartahtml;
  });
};

iniciarJuego();
