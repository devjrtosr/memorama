const Cartas = [
    {
        PrimerasOchoCartas: 'div',
        clasesPrimerasOchoCartas: ['boton','primerasOchoCartas']
    },
    {
        PrimerasOchoCartas: 'div',
        clasesPrimerasOchoCartas: ['boton','primerasOchoCartas']
    },
    {
        PrimerasOchoCartas: 'div',
        clasesPrimerasOchoCartas: ['boton','primerasOchoCartas']
    },
];

Cartas.map((carta) =>{

    const fila = document.createElement(carta.PrimerasOchoCartas);
    fila.classList.add(...carta.clasesPrimerasOchoCartas);
    document.querySelector('#PrimerContenedor').appendChild(fila);
});