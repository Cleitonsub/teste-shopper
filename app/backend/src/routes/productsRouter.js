import { Router } from 'express';

import productsController from '../controllers/productsController.js';

const route = Router();

route.get('/', productsController.getAllProducts);

export default route;