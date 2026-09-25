// admin/controllers/admin_controllers.js

export function home(req, res) {
  return res.render('admin/home', {
    title: 'Admin Site)',
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}