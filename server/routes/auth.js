import express from 'express'
import { login, verify} from '../controller/authController'
import authMiddleware from '../middleware/authMiddleware'


const router = express.Router()

router.post('/login', login )
router.post('/verify', authMiddleware, verify )



export default router