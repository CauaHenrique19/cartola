import { Router } from 'express'
const router = Router()

import { createUserController } from './useCases/CreateUser'
import { loginController } from './useCases/Login'

router.post('/signup', (req, res) => createUserController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

export { router }