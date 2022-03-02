const num_max_cartas = 16; 

const cartas = [
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
    {
        elementoDiv: "div",
        claseCarta: ["carta"],
        classImagen: "assets/carta.jpg",
    },
];

cartas.map((carta) =>{
    const cartatemporal = document.createElement(carta.elementoDiv);
    // const imagen = document.createElement(carta.elementoDiv);
    // imagen.scr = carta.classImagen;
    cartatemporal.classList.add(...carta.claseCarta);
    document.querySelector("#contenedor").appendChild(cartatemporal);
    // cartatemporal.appendChild(imagen);
    
});

