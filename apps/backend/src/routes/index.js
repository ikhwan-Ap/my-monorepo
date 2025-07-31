import { Router } from 'express'
import userRoutes from './user.routes.js'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'API root' })
})

router.use('/users', userRoutes)

export default router
