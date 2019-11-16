import { Router } from 'express';
import { login } from '../controllers/login.controllers';
const router = Router();

router.route('/')
    .post(login);

module.exports = router;