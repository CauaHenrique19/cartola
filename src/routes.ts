import { Router } from 'express'
import multer from 'multer'

const router = Router()
const upload = multer()

import { createUserController } from './useCases/CreateUser'
import { loginController } from './useCases/Login'
import { createTeamController } from './useCases/CreateTeam'
import { createTeamUserController } from './useCases/CreateTeamUser'
import { createPositionController } from './useCases/CreatePosition'
import { createPlayerController } from './useCases/CreatePlayer'
import { getAllPlayersController } from './useCases/GetAllPlayers'
import { createRoundController } from './useCases/CreateRound'
import { createLineupController } from './useCases/CreateLineup'

router.post('/signup', (req, res) => createUserController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

router.post('/team', upload.single('file'), (req, res) => createTeamController.handle(req, res))

router.post('/team-user', (req, res) => createTeamUserController.handle(req, res))

router.post('/position', (req, res) => createPositionController.handle(req, res))

router.post('/player', upload.single('file'), (req, res) => createPlayerController.handle(req, res))
router.get('/player', (req, res) => getAllPlayersController.handle(req, res))

router.post('/round', (req, res) => createRoundController.handle(req, res))

router.post('/lineup', (req, res) => createLineupController.handle(req, res))

export { router }