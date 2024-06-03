import e from 'express';
import { signup, login } from '../controllers/auth.controller.js';

const router = e.Router();

router.post('/signup', signup);
router.get('/login', login);

export default router;
