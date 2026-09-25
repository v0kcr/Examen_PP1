// admin/controllers/district_controllers.js

export function home(req, res) {
  let districts = [
    { "id": 1, "name": "Miraflores" },
    { "id": 2, "name": "San Isidro" },
    { "id": 3, "name": "Barranco" },
    { "id": 4, "name": "Villa el Salvador" },
    { "id": 5, "name": "San Juan de Miraflores" },
  ];

  return res.render('admin/districts', {
    title: 'Admin Site',
    districts: districts,
    currentPage: 'home'
  });
}