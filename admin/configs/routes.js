// admin/configs/routes.js
import { Router } from 'express';
import * as admins from '../controllers/admin_controllers.js';
import * as carrers from '../controllers/carrer_controllers.js';
import * as districts from '../controllers/district_controllers.js';
import * as students from '../controllers/alumnos_controllers.js';
import * as nationApis from '../apis/nations_apis.js';
import { redirectIfAuthenticated, requireAuth } from '../../configs/middlewares.js'; 

const router = Router();

// react views
router.get('/admin', requireAuth, admins.home);
router.get('/admin/players', requireAuth, admins.home);
router.get('/admin/teams', requireAuth, admins.home);
router.get('/admin/leagues', requireAuth, admins.home);
router.get('/admin/nations', requireAuth, admins.home);
router.get('/admin/catalogs', requireAuth, admins.home);
// api nations
router.get('/api/v1/nations', nationApis.listNations);
router.get('/api/v1/nations/:id', nationApis.getNationById);
router.post('/api/v1/nations', nationApis.createNation);
router.put('/api/v1/nations/:id', nationApis.updateNation);
router.delete('/api/v1/nations/:id', nationApis.deleteNation);
// carrers
router.get('/admin/carrers', carrers.home);
router.get('/admin/districts', districts.home);
router.get('/admin/students', students.home);

export default router;