// admin/controllers/carrer_controllers.js

export function home(req, res) {
let carrers = [
  {
    "id": 1,
    "name": "Ingeniería de Sistemas",
    "creditos": 200,
    "semestres": 10
  },
  {
    "id": 2,
    "name": "Ingeniería Civil",
    "creditos": 210,
    "semestres": 10
  },
  {
    "id": 3,
    "name": "Ingeniería Industrial",
    "creditos": 200,
    "semestres": 10
  },
  {
    "id": 4,
    "name": "Ingeniería Mecánica",
    "creditos": 205,
    "semestres": 10
  },
  {
    "id": 5,
    "name": "Ingeniería Electrónica",
    "creditos": 205,
    "semestres": 10
  },
  {
    "id": 6,
    "name": "Arquitectura",
    "creditos": 215,
    "semestres": 10
  },
  {
    "id": 7,
    "name": "Medicina Humana",
    "creditos": 290,
    "semestres": 14
  },
  {
    "id": 8,
    "name": "Enfermería",
    "creditos": 180,
    "semestres": 10
  },
  {
    "id": 9,
    "name": "Psicología",
    "creditos": 190,
    "semestres": 10
  },
  {
    "id": 10,
    "name": "Derecho",
    "creditos": 240,
    "semestres": 12
  },
  {
    "id": 11,
    "name": "Administración",
    "creditos": 180,
    "semestres": 10
  },
  {
    "id": 12,
    "name": "Contabilidad",
    "creditos": 180,
    "semestres": 10
  },
  {
    "id": 13,
    "name": "Economía",
    "creditos": 185,
    "semestres": 10
  },
  {
    "id": 14,
    "name": "Marketing",
    "creditos": 175,
    "semestres": 10
  },
  {
    "id": 15,
    "name": "Comunicación",
    "creditos": 180,
    "semestres": 10
  },
  {
    "id": 16,
    "name": "Educación Inicial",
    "creditos": 170,
    "semestres": 10
  },
  {
    "id": 17,
    "name": "Educación Primaria",
    "creditos": 170,
    "semestres": 10
  },
  {
    "id": 18,
    "name": "Biología",
    "creditos": 195,
    "semestres": 10
  },
  {
    "id": 19,
    "name": "Química",
    "creditos": 195,
    "semestres": 10
  },
  {
    "id": 20,
    "name": "Diseño Gráfico",
    "creditos": 165,
    "semestres": 10
  }
];


  return res.render('admin/carrers', {
    title: 'Admin Site)',
    carrers: carrers,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}