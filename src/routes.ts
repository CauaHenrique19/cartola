import { Router } from 'express'
import multer from 'multer'
import { createTeamController } from './useCases/CreateTeam'

const router = Router()
const upload = multer()

import { createUserController } from './useCases/CreateUser'
import { loginController } from './useCases/Login'

router.post('/signup', (req, res) => createUserController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

router.post('/team', upload.single('file'), (req, res) => createTeamController.handle(req, res))

export { router }