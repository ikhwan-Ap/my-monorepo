import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import routes from './routes/index.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
