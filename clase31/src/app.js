import express from 'express'
import usersRouter from './routes/user.route.js'

const app = express()


app.use('/api/users', usersRouter)

app.listen(3000, console.log("Server on port 3000"))