const contenedor = document.querySelector("#contenedor");

const iniciarJuego = () => {
  window.addEventListener("DOMContentLoaded", () => {
    cargarCartas();
  });
};

document.addEventListener("click", () => {});

const cargarCartas = async () => {
  const respuesta = await fetch("cartas.json");
  const datos = await respuesta.json();
  datos.sort(() => 0.5 - Math.random());
  let carta = "";
  datos.map((etiqueta) => {
    carta += `<div class=${etiqueta.claseDiv}>
                <img class=${etiqueta.claseImg} src=${etiqueta.src} alt="Imagen de lenguajes aleatorios" />
              </div>`;
    contenedor.innerHTML = carta;
  });
};

iniciarJuego();
