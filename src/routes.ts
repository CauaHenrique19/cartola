import { Router } from 'express'
import multer from 'multer'

const router = Router()
const upload = multer()

import { createUserController } from './useCases/CreateUser'
import { loginController } from './useCases/Login'
import { createTeamController } from './useCases/CreateTeam'
import { createTeamUserController } from './useCases/CreateTeamUser'
import { createPositionController } from './useCases/CreatePosition'

router.post('/signup', (req, res) => createUserController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

router.post('/team', upload.single('file'), (req, res) => createTeamController.handle(req, res))

router.post('/team-user', (req, res) => createTeamUserController.handle(req, res))

router.post('/position', (req, res) => createPositionController.handle(req, res))

export { router }