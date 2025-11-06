const canciones = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    img: "images/album3.png",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    img: "./images/album1.png",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    img: "./images/album2.png",
  }
];

const nombreCancion = document.querySelector("#nombre-cancion");
const portada = document.querySelector("#portada");
const play = document.querySelector("#play");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let indice = 0;
let reproduciendo = false;

function cargarCancion(indice) {
    const cancion = canciones[indice];
    nombreCancion.textContent = `${cancion.title} - ${cancion.artist}`;
    portada.src = cancion.img;
}

function reproducir() {
        play.textContent = "▶️";
        reproduciendo = true;
}

function pausar() {
        play.textContent = "⏸️";
        reproduciendo = false;
}

play.addEventListener("click", () => {
    if (reproduciendo) {
        pausar();
    } else {
        reproducir();
    }
});

prev.addEventListener("click", () => {
    indice = (indice - 1 + canciones.length) % canciones.length;
    cargarCancion(indice);
    reproducir();
});

next.addEventListener("click", () => {
    indice = (indice + 1) % canciones.length;
    cargarCancion(indice);
    reproducir();
});


cargarCancion(indice);

