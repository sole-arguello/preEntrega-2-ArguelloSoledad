//simulo una DB
export const mFetch = () => {
    return new Promise((res, rej) => {
      res(productos);
    });
  };

let productos = [
  {
    id: 1,
    precio: 1200,
    titulo: "Conjunto Encaje",
    categoria: "Conjunto",
    cantidad: 1,
    img: "/public/assets/conjunto1.jpg",
  },
  {
    id: 2,
    precio: 1500,
    titulo: "Conjunto Algodon",
    categoria: "Conjunto",
    cantidad: 1,
    img: "/public/assets/conjunto2.jpg",
  },
  {
    id: 3,
    precio: 2000,
    titulo: "Conjunto Combinado",
    categoria: "Conjunto",
    cantidad: 1,
    img: "/public/assets/conjunto3.jpg",
  },
  {
    id: 4,
    precio: 2000,
    titulo: "Conjunto Encaje",
    categoria: "Conjunto",
    cantidad: 1,
    img: "/public/assets/conjunto4.jpg",
  },
  {
    id: 5,
    precio: 1400,
    titulo: "Top Calado",
    categoria: "Top",
    cantidad: 1,
    img: "/public/assets/top1.jpg",
  },

  {
    id: 6,
    precio: 1600,
    titulo: "Top Encaje",
    categoria: "Top",
    cantidad: 1,
    img: "/public/assets/top2.jpg",
  },
  {
    id: 7,
    precio: 1600,
    titulo: "Top Combinado",
    categoria: "Top",
    cantidad: 1,
    img: "/public/assets/top3.jpg",
  },
  {
    id: 8,
    precio: 1600,
    titulo: "Top Calado",
    categoria: "Top",
    cantidad: 1,
    img: "/public/assets/top4.jpg",
  },

  {
    id: 9,
    precio: 900,
    titulo: "Bombis Maria",
    categoria: "Bombis",
    cantidad: 1,
    img: "/public/assets/bombis1.jpg",
  },

  {
    id: 10,
    precio: 800,
    titulo: "Bombis Victoria",
    categoria: "Bombis",
    cantidad: 1,
    img: "/public/assets/bombis2.jpg",
  },

  {
    id: 11,
    precio: 500,
    titulo: "Bombis Culote",
    categoria: "Bombis",
    cantidad: 1,
    img: "/public/assets/bombis3.jpg",
  },

  {
    id: 12,
    precio: 450,
    titulo: "Bombis Less regulables",
    categoria: "Bombis",
    cantidad: 1,
    img: "/public/assets/bombis4.jpg",
  },
];


