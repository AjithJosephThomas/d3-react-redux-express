import { Router } from 'express';
import * as controller from '../controllers/controller';
const router = new Router();

// Get all Posts
router.route('/init').get(controller.init);
router.route('/chart/:type/:source').get(controller.chart);

export default router;
