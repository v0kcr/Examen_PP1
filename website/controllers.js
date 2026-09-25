// website/controllers.js
export function home(req, res) {
  return res.render('website/home', {
    title: 'Crear cuenta :)',
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function convocatorias(req, res) {
  return res.render('website/convocatorias', {
    title: 'Crear cuenta :)',
    currentPage: 'convocatorias',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function register(req, res) {
  return res.render('website/register', {
    title: 'Crear cuenta',
  });
}

export function about(req, res) {
  return res.render('website/about', {
    title: 'Acerca de',
    currentPage: 'about',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}


export function contact(req, res) {
  return res.render('website/contact', {
    title: 'Acerca de',
    currentPage: 'contact',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function players(req, res) {
  return res.render('website/players', {
    title: 'Acerca de',
    currentPage: 'players',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function signIn(req, res) {
  return res.render('website/sign-in', {
    title: 'Bienvenido',
  });
}

export function login(req, res) {
  let fondos = [
    "/assets/img/login-bg.png",
    "/assets/img/login-bg2.png",
    "/assets/img/login-bg3.jpg"
  ];
  return res.render('website/login', {
    title: 'Bienvenido',
    background: fondos[Math.floor(Math.random() * 3)]
  });
}

export function resetPassword(req, res) {
  let fondos = [
    "/assets/img/login-bg.png",
    "/assets/img/login-bg2.png",
    "/assets/img/login-bg3.jpg"
  ];
  return res.render('website/reset-password', {
    title: 'Recuperar Contraseña',
    background: fondos[Math.floor(Math.random() * 3)]
  });
}

export async function login2(req, res) {
  const { user, password } = req.body;
  const validUser = process.env.DEFAULT_USER || 'admin';
  const validPassword = process.env.DEFAULT_PASSWORD || '123';

  if (validUser == user && validPassword == password) {
    req.session.user = {id:1, username: user};

    req.flash('success', '¡Bienvenido! Has iniciado sesión correctamente.');
    
    return req.session.save(() => {
      res.redirect('/admin');
    });
  }

  // ❌ credenciales incorrectas
  req.flash('error', 'Credenciales incorrectas');
  
  // ✅ Extraer flash messages manualmente antes de renderizar
  const success_messages = req.flash('success');
  const error_messages = req.flash('error');
  const warning_messages = req.flash('warning');
  const info_messages = req.flash('info');
  
  const hasFlashMessages = 
    success_messages.length > 0 ||
    error_messages.length > 0 ||
    warning_messages.length > 0 ||
    info_messages.length > 0;

  console.log("1 +++++++++++++++++++++++++++++++++++++")

  res.render('website/sign-in', {
    title: 'Iniciar Sesión',
    user: user, // Mantener el usuario en el formulario
    
    // ✅ Pasar explícitamente los flash messages
    success_messages,
    error_messages,
    warning_messages,
    info_messages,
    hasFlashMessages
  });
}

export function logout(req, res) {
  req.session.destroy(err => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
      return res.redirect('/');
    }

    // Limpia la cookie de sesión (opcional pero recomendado)
    res.clearCookie('connect.sid');

    // Redirige al login
    res.redirect('/sign-in');
  });
}